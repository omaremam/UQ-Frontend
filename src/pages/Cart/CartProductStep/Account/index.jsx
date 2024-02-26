import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, MobileInput, Input, Text } from "components";
import { useTranslation } from "react-i18next";
import { InputAdornment } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { YourDetails } from "popups/YourDetails";
import { getAuth } from "../../../../redux/reducers/loginData";
import {
  updateOrderData,
  getOrderData,
} from "../../../../redux/reducers/orderData";
import {
  addDeleteGetLocalStorage,
  storageKeys,
} from "../../../../utils/global/localData";
import globalRequest from "../../../../utils/global/globalRequest";
import * as CUSTOM from "../../../../utils/helper/custom";
import * as APIS from "../../../../utils/helper/Enum";
import { changeLoader } from "../../../../redux/reducers/loader";
import { setSnackbar } from "../../../../redux/reducers/snackbar";
import { use } from "i18next";

let defaultGuestId = CUSTOM.getDeviceID();

let defaultLoginData = {
  mobile_no: "",
  otp: "",
  otp_sent: 0,
  disbale_verify_button: true,
  device_id: defaultGuestId,
};

let defaultGuestData = {
  account_name: "Guest",
  first_name: "",
  last_name: "",
  mobile_no: "",
  email: "",
  guest_id: defaultGuestId,
};
let defaultSignupData = {
  first_name: "",
  last_name: "",
  mobile_no: "",
  email: "",
  otp: "",
  email_otp: "",
  device_id: defaultGuestId,
  otp_sent: false,
};

const Account = (props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const orderData = useSelector(getOrderData);
  const auth = useSelector(getAuth);
  const [timer, setTimer] = useState(0);
  const [guestDetail, setGuestDetail] = useState(defaultGuestData);
  const [guestButtonDisable, setGuestButtonDisable] = useState(false);
  const [signupDetails, setSignupDetails] = useState(defaultSignupData);
  const [YourDetailsOpen, setYourDetailsOpen] = useState(false);
  const [signupError, setSignupError] = useState({});
  const [userDetails, setUserDetails] = useState(defaultGuestData);
  const [signupButtonDisable, setSignupButtonDisable] = useState(true);
  const [accountDetails, setAccountDetails] = useState({
    account_form_type: "",
    loginData: defaultLoginData,
  });
  const [loginError, setLoginError] = useState({ mobile_no: "", otp: "" });

  {
    /**change form type in redux */
  }

  const changeformType = async (type) => {
    await setAccountDetails({ ...accountDetails, account_form_type: type });
    if (type == "complete") {
      await dispatch(updateOrderData({ ...orderData, pageStep: 2,userDetails:userDetails }));
    }else{
      await dispatch(updateOrderData({ ...orderData, pageStep: 1 }));
    }
  };

  {
    /*** cancel form */
  }

  const cancelForm = (type) => {
    let accountDetailsData = { ...accountDetails };
    if (type == "login") {
      accountDetailsData.account_form_type = "";
      accountDetailsData.loginData=defaultLoginData;
    }
    if (type == "guest") {
      setGuestDetail(defaultGuestData);
      accountDetailsData.account_form_type = "";
    }
    if (type == "signup") {
      setSignupDetails(defaultSignupData);
      accountDetailsData.account_form_type = "";
    }
    setAccountDetails(accountDetailsData);
  };

  {
    /** send login otp */
  }

  const checkUser = async () => {
    try {
      let response = await globalRequest(
        APIS?.ONBOARDING_APIS?.CHECK_USER_BY_MOBILE,
        "post",
        accountDetails?.loginData
      );
      response = response?.data;
      if (response?.status !== "SUCCESS") {
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarMessage: response?.message,
            snackbarState: "error",
          })
        );
      }
      if (response?.data?.is_new_user == 1) {
        setLoginError({ mobile_no: t("mobile_no_not_registered") });
      } else {
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarMessage: response?.message,
            snackbarState: "success",
          })
        );
        loginChangeValue(1, "otp_sent");
      }
    } catch (e) {
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarMessage: e?.message,
          snackbarState: "error",
        })
      );
    }
  };

  {
    /**login form change valye */
  }

  const loginChangeValue = (value, type) => {
    let loginData = { ...accountDetails.loginData };
    let updateError = { ...loginError };
    if (type == "mobile") {
      loginData.mobile_no = CUSTOM.strFormat(value, "max:9|number");
      updateError.mobile_no = "";
    }
    if (type == "otp_sent") {
      loginData.otp_sent = value;
      setTimer(process.env.REACT_APP_OTP_TIMER);
      loginData.otp = "";
    }
    if (type == "otp") {
      loginData.otp = CUSTOM.strFormat(value, "max:4|number");
      updateError.otp = "";
    }
    setTimer(process.env.REACT_APP_OTP_TIMER);
    setAccountDetails({
      ...accountDetails,
      loginData: loginData,
    });
    setLoginError(updateError);
  };

  {
    /**login by mobile no */
  }
  const login = async () => {
    try {
      let response = await globalRequest(
        APIS?.ONBOARDING_APIS?.LOGIN_WITH_OTP,
        "post",
        accountDetails?.loginData
      );
      response = response?.data;
      if (response?.status !== "SUCCESS") {
        setLoginError({ ...loginError, otp: response?.message });
        return;
      }
      await dispatch(updateOrderData({}));
      addDeleteGetLocalStorage(
        storageKeys?.USER_TOKEN,
        response?.data?.token,
        "add",
        "single"
      );
      dispatch(changeLoader("loggedin"));
      changeformType("complete");
    } catch (e) {
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarMessage: e?.message,
          snackbarState: "error",
        })
      );
    }
  };

  {
    /**save guest details */
  }

  const saveGuest = async () => {
    try {
      let response = await globalRequest(
        APIS?.GUEST?.ADD_GUEST,
        "post",
        guestDetail
      );
      response = response?.data;
      dispatch(changeLoader(false));
      if (response?.status == "SUCCESS") {
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarMessage: response?.message,
            snackbarState: "success",
          })
        );
        setUserDetails(guestDetail);
        changeformType("complete");
      } else {
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarMessage: response?.message,
            snackbarState: "error",
          })
        );
      }
    } catch (e) {
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarMessage: e?.message,
          snackbarState: "error",
        })
      );
    }
  };

  {
    /**send signup otp */
  }

  const registration = async () => {
    try {
      let response = await globalRequest(
        APIS?.ONBOARDING_APIS?.SIGNUP,
        "post",
        signupDetails
      );
      response = response?.data;
      if (response?.status !== "SUCCESS") {
        setSignupError({ ...signupError, otp: response?.message });
        return;
      }
      await dispatch(updateOrderData({}));
      addDeleteGetLocalStorage(
        storageKeys?.USER_TOKEN,
        response?.data?.token,
        "add",
        "single"
      );
      cancelForm("signup");
      dispatch(changeLoader("loggedin"));
    } catch (e) {
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarMessage: e?.message,
          snackbarState: "error",
        })
      );
    }
  };

  /**send otp */
  const sendSignupOtp = async () => {
    try {
      dispatch(changeLoader(true));
      let response = await globalRequest(
        APIS?.CART?.CART_SIGNUP_SEND_OTP,
        "post",
        signupDetails
      );
      response = response?.data;
      if (response.status != "SUCCESS") {
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarMessage: response?.message,
            snackbarState: "error",
          })
        );
      } else {
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarMessage: response?.message,
            snackbarState: "success",
          })
        );
        setSignupDetails({
          ...signupDetails,
          otp_sent: true,
          otp: "",
        });
        setTimer(process.env.REACT_APP_OTP_TIMER);
      }
    } catch (e) {
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarMessage: e?.message,
          snackbarState: "error",
        })
      );
    }
    dispatch(changeLoader(false));
  };

  {
    /** form validation */
  }
  const validateForm = (data, type = "login") => {
    let errors = {};
    switch (type) {
      case "login":
        if (data?.mobile_no) {
          if (data?.mobile_no.length != 9) {
            errors.mobile_no = t("mobile_no_length_error");
          }
        } else {
          errors.mobile_no = t("mobile_no_required");
        }
        break;

      case "guest":
        if (data?.mobile_no) {
          if (data?.mobile_no.length != 9) {
            errors.mobile_no = t("mobile_no_length_error");
          }
        } else {
          errors.mobile_no = t("mobile_no_required");
        }
        if (!data?.first_name) {
          errors.first_name = t("first_name_required");
        }
        if (data?.email) {
          const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          if (!emailRegex.test(data?.email)) {
            errors.email = t("email_name_required");
          }
        } else {
          errors.email = t("email_name_required");
        }
        if (!data?.last_name) {
          errors.last_name = t("last_name_required");
        }
        break;

      case "signup":
        if (data?.mobile_no) {
          if (data?.mobile_no.length != 9) {
            errors.mobile_no = t("mobile_no_length_error");
          }
        } else {
          errors.mobile_no = t("mobile_no_required");
        }
        if (!data?.first_name) {
          errors.first_name = t("first_name_required");
        }
        if (data?.email) {
          const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          if (!emailRegex.test(data?.email)) {
            errors.email = t("email_name_required");
          }
        } else {
          errors.email = t("email_name_required");
        }
        if (!data?.last_name) {
          errors.last_name = t("last_name_required");
        }
        break;

      default:
        break;
    }

    return errors;
  };

  useEffect(() => {
    let status = true;
    if (accountDetails?.loginData?.otp_sent != 1) {
      if (CUSTOM.isValidField(accountDetails?.loginData?.mobile_no, "mobile")) {
        status = false;
      }
    } else {
      if (accountDetails?.loginData?.otp) {
        if (accountDetails?.loginData?.length == 4) {
          status = false;
        }
      }
    }
    setAccountDetails({
      ...accountDetails,
      loginData: {
        ...accountDetails.loginData,
        disbale_verify_button: status,
      },
    });
  }, [
    accountDetails?.loginData?.mobile_no,
    accountDetails?.loginData?.otp,
    accountDetails?.loginData?.otp_sent,
  ]);

  {
    /**otp timer */
  }

  useEffect(() => {
    let interval;
    const countdown = () => {
      if (timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      }
    };
    interval = setInterval(countdown, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  {
    /**Guest button disable */
  }

  useEffect(() => {
    let statusDisable = true;
    if (Object.keys(validateForm(guestDetail, "guest")).length == 0) {
      statusDisable = false;
    }
    setGuestButtonDisable(statusDisable);
  }, [guestDetail]);

  {
    /**
     * update guest loggedin user data
     */
  }

  useEffect(() => {
    if (auth?.id) {
      setGuestDetail(defaultGuestData);
      setUserDetails({
        ...userDetails,
        account_name: CUSTOM.replaceKeyValue(auth?.mobileNo, "-", " "),
        first_name: auth?.firstName,
        last_name: auth?.lastName,
        mobile_no: CUSTOM.getMobileNo(auth?.mobileNo, "number"),
        email: auth?.email,
      });
      changeformType("complete");
    }
  }, [auth]);

  useEffect(() => {
    let statusDisable = true;
    if (Object.keys(validateForm(signupDetails, "signup")).length == 0) {
      statusDisable = false;
    }
    setSignupButtonDisable(statusDisable);
  }, [signupDetails]);

 

  return (
    <>
      {accountDetails?.account_form_type !== "complete" ? (
        <>
          <div className="relative flex flex-col w-full">
            {/* section first start */}
            <div className="absolute bottom-[0] md:h-[110px] h-[115px] right-[0] rtl:right-[auto] rtl:left-[0] top-0 w-[17%] xs:hidden">
              <div className="absolute bg-light_blue-50 bottom-[0] h-[104px] left-[0] rounded-[50%] w-[104px]"></div>
              <Img
                className="absolute h-[110px] inset-y-[0] my-auto object-cover right-[0] rtl:right-[auto] rtl:left-[0] w-[78%]"
                src="/images/img_birthdaycake.png"
                alt="birthdaycake"
              />
            </div>
            <div className="flex flex-col gap-1 items-start justify-start">
              <Text className="text-base text-black-900 font-mohrroundedaltmedium">
                {t("account")}
              </Text>
              <Text className="text-gray-700 text-sm font-mohrroundedaltregular w-[80%] xs:w-full">
                {t(
                  "toTrackYourOrderStatusWeRecommendYouToLoginOrCreateANewAccount"
                )}
              </Text>
            </div>
            {/* section first start */}

            {/*login and signup button start */}
            {accountDetails?.account_form_type == "" ? (
              <>
                <div className="w-full max-w-[430px] xs:flex-col pt-[30px] flex flex-row gap-4 mb-[22px]">
                  <Button
                    className="flex-1 w-auto hover:border hover:border-black-900 mx-auto px-6 xs:px-3 text-base xs:w-full"
                    size="lg"
                    variant="OutlineBlack"
                    hover={true}
                    hoverclass="bg-black-900"
                    onClick={(e) => {
                      changeformType("login");
                    }}
                  >
                    {t("haveAnAccountLogIn")}
                  </Button>
                  <Button
                    className="flex-1 mx-auto px-3 xs:px-3 text-base xs:w-full "
                    size="lg"
                    variant="FillBlack"
                    hover={true}
                    hoverclass="bg-white-A700"
                    onClick={(e) => {
                      changeformType("signup");
                    }}
                  >
                    {t("newToRabbitHoleSignUp")}
                  </Button>
                </div>

                <div className="flex flex-row gap-2">
                  {guestDetail?.first_name ? (
                    <div className="w-auto">
                      <Button
                        className="w-auto min-w-[92px] mx-auto"
                        size="lg"
                        variant="OutlineBlack"
                        hover={true}
                        hoverclass="bg-black-900"
                        onClick={(e) => {
                          changeformType("complete");
                        }}
                      >
                        {t("cancel")}
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="w-auto">
                        <Text className="text-gray-700 whitespace-nowrap font-medium font-mohrroundedaltregular text-sm leading-6">
                          {t("or")}
                        </Text>
                      </div>
                      <div className="w-auto">
                        <Text
                          className="text-pink-800 whitespace-nowrap font-medium font-mohrroundedaltmedium text-sm leading-6 cursor-pointer"
                          onClick={(e) => {
                            changeformType("guest");
                          }}
                        >
                          {t("continueAsGuest")}
                        </Text>
                      </div>
                    </>
                  )}
                </div>
              </>
            ) : null}

            {accountDetails?.account_form_type == "signup" ? (
              <>
                <div
                  className={`w-full xs:flex-col max-w-[350px] flex flex-row gap-x-5 pt-[30px]`}
                >
                  <Input
                    required
                    className={`${
                      signupDetails?.otp_sent ? "opacity-down" : ""
                    }`}
                    label={t("firstName")}
                    value={signupDetails?.first_name}
                    onChange={(e) => {
                      setSignupDetails({
                        ...signupDetails,
                        first_name: CUSTOM.strFormat(
                          e.target.value,
                          "max:50|text"
                        ),
                      });
                    }}
                  />
                  <Input
                    required
                    className={`${
                      signupDetails?.otp_sent ? "opacity-down" : ""
                    }`}
                    label={t("lastName")}
                    value={signupDetails?.last_name}
                    onChange={(e) => {
                      setSignupDetails({
                        ...signupDetails,
                        last_name: CUSTOM.strFormat(
                          e.target.value,
                          "max:50|text"
                        ),
                      });
                    }}
                  />
                </div>
                <div className={`w-full max-w-[350px]`}>
                  <MobileInput
                    required
                    label={t("mobile")}
                    className={`w-full ${
                      signupDetails?.otp_sent ? "opacity-down" : ""
                    }`}
                    value={signupDetails?.mobile_no}
                    onChange={(e) => {
                      setSignupDetails({
                        ...signupDetails,
                        mobile_no: CUSTOM.strFormat(
                          e.target.value,
                          "max:9|number"
                        ),
                      });
                    }}
                  />
                </div>

                {signupDetails?.otp_sent ? (
                  <>
                    <div className="flex flex-row gap-3">
                      <div className="w-full max-w-[350px]">
                        <Input
                          required
                          className="w-full mb-0"
                          label={t("verificationCode")}
                          value={signupDetails?.otp}
                          error={signupError?.otp}
                          onChange={(e) => {
                            setSignupDetails({
                              ...signupDetails,
                              otp: CUSTOM.strFormat(e.target.value, "max:4"),
                            });
                            setSignupError({ ...signupError, otp: "" });
                          }}
                          endAdornment={
                            <InputAdornment
                              position="end"
                              className="text-[12px]"
                            >
                              0000
                            </InputAdornment>
                          }
                        />
                      </div>
                      <div className="w-auto">
                        <Text
                          className={`text-pink-800 whitespace-nowrap font-medium font-mohrroundedaltmedium text-sm leading-6 mt-3.5 cursor-pointer  ${
                            timer != 0 ? "opacity-down" : ""
                          }`}
                          onClick={(e) => {
                            sendSignupOtp();
                          }}
                        >
                          {t("resendOTP")}
                        </Text>
                      </div>
                      {timer != 0 ? (
                        <div className="w-auto">
                          <Text className="text-pink-800 whitespace-nowrap font-medium font-mohrroundedaltmedium text-sm leading-6 mt-3.5">
                            {timer}:00
                          </Text>
                        </div>
                      ) : null}
                    </div>
                  </>
                ) : null}

                <div className="w-full max-w-[350px]">
                  <Input
                    required
                    label={t("email")}
                    className={`w-full ${
                      signupDetails?.otp_sent ? "opacity-down" : ""
                    }`}
                    value={signupDetails?.email}
                    onChange={(e) => {
                      setSignupDetails({
                        ...signupDetails,
                        email: CUSTOM.strFormat(
                          e.target.value,
                          "max:50|text|email"
                        ),
                      });
                    }}
                  />
                </div>
                {/* <div className="w-full max-w-[350px] pt-[30px]">
              <MobileInput required label={t("mobile")} className="w-full" />
            </div> */}
                <div className="w-full max-w-[350px] pt-[10px] flex flex-row gap-4 mb-[18px]">
                  {signupDetails?.otp_sent ? (
                    <Button
                      className="flex-1 mx-auto"
                      size="lg"
                      variant="FillBlack"
                      hover={true}
                      hoverclass="bg-white-A700"
                      disabled={signupDetails?.otp?.length != 4}
                      onClick={(e) => {
                        registration();
                      }}
                    >
                      {t("confirm")}
                    </Button>
                  ) : (
                    <Button
                      className="flex-1 mx-auto"
                      size="lg"
                      variant="FillBlack"
                      hover={true}
                      hoverclass="bg-white-A700"
                      disabled={signupButtonDisable}
                      onClick={(e) => {
                        sendSignupOtp();
                      }}
                    >
                      {t("verify")}
                    </Button>
                  )}

                  <Button
                    className="w-auto min-w-[92px] mx-auto"
                    size="lg"
                    variant="OutlineBlack"
                    hover={true}
                    hoverclass="bg-black-900"
                    onClick={(e) => {
                      cancelForm("signup");
                    }}
                  >
                    {t("cancel")}
                  </Button>
                </div>
              </>
            ) : null}

            {/*login and signup button end */}
            {accountDetails?.account_form_type == "login" ? (
              <>
                <div
                  className={`w-full max-w-[350px] pt-[30px] ${
                    accountDetails?.loginData?.otp_sent == 1
                      ? "opacity-down"
                      : ""
                  }`}
                >
                  <MobileInput
                    required
                    label={t("mobile")}
                    className="w-full"
                    value={accountDetails?.loginData?.mobile_no}
                    error={loginError?.mobile_no}
                    onChange={(e) => {
                      loginChangeValue(e.target.value, "mobile");
                    }}
                  />
                </div>

                {accountDetails?.loginData?.otp_sent == 1 ? (
                  <>
                    <div className="flex flex-row gap-3">
                      <div className="w-full max-w-[350px]">
                        <Input
                          required
                          className="w-full mb-0"
                          label={t("verificationCode")}
                          value={accountDetails?.loginData?.otp}
                          error={loginError?.otp}
                          onChange={(e) => {
                            loginChangeValue(e.target.value, "otp");
                          }}
                          endAdornment={
                            <InputAdornment
                              position="end"
                              className="text-[12px]"
                            >
                              0000
                            </InputAdornment>
                          }
                        />
                      </div>
                      <div className="w-auto">
                        <Text
                          className={`text-pink-800 whitespace-nowrap font-medium font-mohrroundedaltmedium text-sm leading-6 mt-3.5 cursor-pointer  ${
                            timer != 0 ? "opacity-down" : ""
                          }`}
                          onClick={(e) => {
                            checkUser();
                          }}
                        >
                          {t("resendOTP")}
                        </Text>
                      </div>
                      {timer != 0 ? (
                        <div className="w-auto">
                          <Text className="text-pink-800 whitespace-nowrap font-medium font-mohrroundedaltmedium text-sm leading-6 mt-3.5">
                            {timer}:00
                          </Text>
                        </div>
                      ) : null}
                    </div>
                  </>
                ) : null}

                <div className="w-full max-w-[350px] pt-[10px] flex flex-row gap-4 mb-[18px]">
                  {accountDetails?.loginData?.otp_sent != 1 ? (
                    <Button
                      className="flex-1 mx-auto"
                      size="lg"
                      variant="FillBlack"
                      hover={true}
                      disabled={
                        accountDetails?.loginData?.disbale_verify_button
                      }
                      hoverclass="bg-white-A700"
                      onClick={(e) => {
                        checkUser();
                      }}
                    >
                      {t("verify")}
                    </Button>
                  ) : (
                    <Button
                      className="flex-1 mx-auto"
                      size="lg"
                      variant="FillBlack"
                      hover={true}
                      disabled={accountDetails?.loginData?.otp?.length != 4}
                      hoverclass="bg-white-A700"
                      onClick={(e) => {
                        login();
                      }}
                    >
                      {t("confirm")}
                    </Button>
                  )}
                  <Button
                    className="w-auto min-w-[92px] mx-auto"
                    size="lg"
                    variant="OutlineBlack"
                    hover={true}
                    hoverclass="bg-black-900"
                    onClick={(e) => {
                      cancelForm("login");
                    }}
                  >
                    {t("cancel")}
                  </Button>
                </div>
              </>
            ) : null}

            {accountDetails?.account_form_type == "guest" ? (
              <>
                <div className="w-full xs:flex-col max-w-[350px] flex flex-row gap-x-5 pt-[30px]">
                  <Input
                    required
                    label={t("firstName")}
                    value={guestDetail?.first_name}
                    onChange={(e) => {
                      setGuestDetail({
                        ...guestDetail,
                        first_name: CUSTOM.strFormat(
                          e.target.value,
                          "max:50|text"
                        ),
                      });
                    }}
                  />
                  <Input
                    required
                    label={t("lastName")}
                    value={guestDetail?.last_name}
                    onChange={(e) => {
                      setGuestDetail({
                        ...guestDetail,
                        last_name: CUSTOM.strFormat(
                          e.target.value,
                          "max:50|text"
                        ),
                      });
                    }}
                  />
                </div>
                <div className="w-full max-w-[350px]">
                  <MobileInput
                    required
                    label={t("mobile")}
                    className="w-full"
                    value={guestDetail?.mobile_no}
                    onChange={(e) => {
                      setGuestDetail({
                        ...guestDetail,
                        mobile_no: CUSTOM.strFormat(
                          e.target.value,
                          "max:9|number"
                        ),
                      });
                    }}
                  />
                </div>
                <div className="w-full max-w-[350px]">
                  <Input
                    required
                    label={t("email")}
                    className="w-full"
                    value={guestDetail?.email}
                    onChange={(e) => {
                      setGuestDetail({
                        ...guestDetail,
                        email: CUSTOM.strFormat(e.target.value, "max:50|email"),
                      });
                    }}
                  />
                </div>
                {/* <div className="w-full max-w-[350px] pt-[30px]">
              <MobileInput required label={t("mobile")} className="w-full" />
            </div> */}
                <div className="w-full max-w-[350px] pt-[10px] flex flex-row gap-4 mb-[18px]">
                  <Button
                    className="flex-1 mx-auto"
                    size="lg"
                    variant="FillBlack"
                    hover={true}
                    hoverclass="bg-white-A700"
                    disabled={guestButtonDisable}
                    onClick={(e) => {
                      saveGuest();
                    }}
                  >
                    {t("confirm")}
                  </Button>
                  <Button
                    className="w-auto min-w-[92px] mx-auto"
                    size="lg"
                    variant="OutlineBlack"
                    hover={true}
                    hoverclass="bg-black-900"
                    onClick={(e) => {
                      cancelForm("guest");
                    }}
                  >
                    {t("cancel")}
                  </Button>
                </div>
              </>
            ) : null}
          </div>
        </>
      ) : null}

      {accountDetails?.account_form_type == "complete" ? (
        <>
          <div className="flex flex-col gap-4 items-center justify-start w-full mb-[18px]">
            <div className="flex flex-row md:gap-5 items-center justify-start w-full">
              <div className="flex flex-col gap-1 items-start justify-start flex-1">
                <Text className="text-base text-black-900 font-mohrroundedaltmedium">
                  {t("account")}
                </Text>
                <div className="flex gap-1 flex-row items-center">
                  <Text className="text-black-900 text-sm mohrroundedaltregular">
                    {userDetails?.account_name}
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="/images/img_checkmark_teal_400.svg"
                    alt="checkmark"
                  />
                </div>
              </div>
              {auth?.id == 0 ? (
                <Button
                  className="w-auto mx-auto px-3 py-1.5 text-sm"
                  size="sm"
                  variant="OutlineBlack"
                  hover={true}
                  hoverclass="bg-black-900"
                  onClick={(e) => {
                    changeformType("");
                  }}
                >
                  {t("change")}
                </Button>
              ) : null}
            </div>
          </div>
          <div className="common-pointer bg-light_blue-50 flex flex-col items-center justify-start py-3 px-6 xs:px-3 w-full">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-col gap-1 items-start justify-start">
                <Text
                  className="text-base text-black-900 font-mohrroundedaltmedium"
                  size="txtMohrRoundedAltMedium16"
                >
                  {t("yourDetails")}
                </Text>
                <Text className="text-black-900 text-sm mohrroundedaltregular">
                  {userDetails?.first_name} {userDetails?.last_name} |{" "}
                  {CUSTOM.replaceKeyValue(userDetails?.mobile_no, "-", " ")} |{" "}
                  {userDetails?.email}
                </Text>
              </div>
              <Img
                className="h-6 w-6 rtl:rotate-180"
                src="/images/img_arrowright.svg"
                alt="arrowright"
                onClick={(e) => {
                  document.body.classList.add("overflow-hidden");
                  document
                    .getElementById("header-box")
                    .classList.add("relative");
                  setYourDetailsOpen(true);
                }}
              />
            </div>
          </div>
        </>
      ) : null}

      {YourDetailsOpen === true ? (
        <YourDetails
          closepopup={setYourDetailsOpen}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />
      ) : null}
    </>
  );
};

export default Account;
