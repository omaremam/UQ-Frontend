import { useEffect, useState } from "react";
import Footer from "components/Footer";
import Header from "components/Header";
import { Button, Img, Input, Text, Line } from "components";
import { useNavigate } from "react-router-dom";
import { ONBOARDING_APIS } from "../../../utils/helper/Enum";
import { InputAdornment } from "@mui/material";
import { useTranslation } from "react-i18next";
import { getUserData, updateUserData } from "../../../redux/reducers/user";
import { globalRequest } from "../../../utils/global/globalRequest";
import {
  addDeleteGetLocalStorage,
  storageKeys,
} from "../../../utils/global/localData";
import { changeLoader } from "../../../redux/reducers/loader";
import { setSnackbar } from "../../../redux/reducers/snackbar";
import {
  validateForm,
  mobileWithCountryCode,
  strFormat,
  getDeviceID,
} from "../../../utils/helper/custom";
import { useSelector, useDispatch } from "react-redux";
const VarificatonPage = () => {
  const { t } = useTranslation();
  const userData = useSelector(getUserData);
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(0);
  const [emailTimer, setEmailTimer] = useState(0);
  const [otp, SetOtp] = useState("");
  const [emailOtp, SetEmailOtp] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [disableBtn, setDisableBtn] = useState(false);
  /**
   * check user data verified
   */
  useEffect(() => {
    if (
      userData?.is_varified == false ||
      typeof userData?.is_varified === "undefined"
    ) {
      navigate("/login-name");
    }
  }, []);
  /**
   * timer for otp
   */
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
  useEffect(() => {
    let interval;
    const countdown = () => {
      if (emailTimer > 0) {
        setEmailTimer((prevTimer) => prevTimer - 1);
      }
    };
    interval = setInterval(countdown, 1000);
    return () => clearInterval(interval);
  }, [emailTimer]);
  /**
   * registration api
   */
  const registration = async () => {
    let validationErrors = validateForm({ otp: otp }, "otp", t);
    setErrors(validationErrors);
    if (userData?.otp_email != emailOtp && userData?.email) {
      setErrors({ ...errors, email_otp: t("invalidCode") });
      return;
    }
    if (Object.keys(validationErrors).length === 0) {
      let input_data = { ...userData, otp: otp, device_id: getDeviceID() };
      try {
        let response = await globalRequest(
          userData?.is_new_user
            ? ONBOARDING_APIS?.SIGNUP
            : ONBOARDING_APIS?.LOGIN_WITH_OTP,
          "post",
          input_data
        );
        response = response?.data;
        if (response?.status !== "SUCCESS") {
          setErrors({ ...errors, otp: response?.message });
          return;
        }
        addDeleteGetLocalStorage(
          storageKeys?.USER_TOKEN,
          response?.data?.token,
          "add",
          "single"
        );
        dispatch(changeLoader("loggedin"));
        navigate("/");
      } catch (e) {
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarMessage: e?.message,
            snackbarState: "error",
          })
        );
      }
    }
  };
  /**
   * resend otp
   */
  const sendOtp = async (type = "mobile") => {
    let input_data = {
      mobile_no: userData?.mobile_no,
      email: userData?.email,
      type: type,
    };
    try {
      if (timer != 0 && type == "mobile") {
        setErrors({ ...errors, otp: "" });
        return;
      }
      if (emailTimer != 0 && type == "email") {
        setErrors({ ...errors, email_otp: "" });
        return;
      }
      setErrors({});
      dispatch(changeLoader(true));
      let response = await globalRequest(
        ONBOARDING_APIS?.SEND_OTP,
        "post",
        input_data
      );
      response = response?.data;
      if (response?.status !== "SUCCESS") {
        setErrors({ ...errors, otp: response?.message });
        return;
      }
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarMessage: response?.message,
          snackbarState: "success",
        })
      );
      if (type == "email") {
        dispatch(updateUserData({ email_otp: response?.data?.otp_email }));
        setEmailTimer(process.env.REACT_APP_OTP_TIMER);
        SetEmailOtp("");
      } else {
        setTimer(process.env.REACT_APP_OTP_TIMER);
        SetOtp("");
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
  /**
   * Check validation
   */
  useEffect(() => {
    let validationErrors = validateForm({ otp: otp }, "otp", t);
    let status = false;
    if (Object.keys(validationErrors).length !== 0) {
      status = true;
    }
    if (userData?.email) {
      if (emailOtp) {
        if (emailOtp.length != 4) {
          status = true;
        }
      } else {
        status = true;
      }
    }
    setDisableBtn(status);
  }, [userData, otp, emailOtp]);
  /**
   * set timer
   */
  useEffect(() => {
    setTimer(process.env.REACT_APP_OTP_TIMER);
    setEmailTimer(process.env.REACT_APP_OTP_TIMER);
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mohrroundedaltregular items-center justify-start mx-auto w-full ">
        <Header />
        <div className="font-mohrroundedaltbold relative w-full height-full-header-footer flex items-center justify-center">
          <div
            className="bg-contain bg-no-repeat bg-center h-full left-[0] p-[26px] sm:px-5 top-[0] w-full xs:overflow-hidden"
            style={{ backgroundImage: "url('images/img_group202.png')" }}
          >
            <div className="flex flex-row items-start gap-3 xs:gap-0 pr-10 rtl:pr-0 rtl:pl-10 mb-7 w-full max-w-[510px] mx-auto sm:px-4">
              <Img
                className="h-8 w-8 -ml-1 rtl:-ml-0 rtl:-mr-1 xs:ml-0 rtl:rotate-180 cursor-pointer mt-5"
                src="/images/img_arrowleft_gray_900_03.svg"
                alt="arrowright"
                loading="lazy"
                onClick={() => navigate(-1)}
              />
              <Text
                className="mx-auto sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900 max-w-[372px] leading-[56px] w-full"
                size="txtMohrRoundedAltBold40"
              >
                {userData?.email? t("confirmYourMobile") : t("confirmYourMobileOnly")}
              </Text>
            </div>
            <div className="relative w-auto otp-verification-form">
              <div className="relative bg-white-A700 flex flex-col h-max items-center justify-start my-auto rounded shadow-bs2 w-full max-w-[510px] mx-auto mb-[100px]">
                {userData?.email ? (
                  <>
                    <div className="flex flex-col font-mohrroundedaltregular items-center justify-start max-w-[456px] w-full z-[1] p-7 sm:px-4">
                      <div className="inline text-center flex-col items-center justify-start mb-7 w-full">
                        <Text
                          className="inline text-base text-black-900 text-center"
                          size="txtMohrRoundedAltRegular16"
                        >
                          {t("weVeSentA4_digitCodeTo")}{" "}
                          <Text
                            className="inline text-center whitespace-nowrap"
                            size="txtMohrRoundedAltMedium16Black9007c"
                          >
                            {userData?.email}
                          </Text>
                        </Text>{" "}
                        <Text
                          className="inline text-center"
                          size="txtMohrRoundedAltRegular16"
                        >
                          {t("theCodeExpiresShortlySoPleaseEnterItSoon")}
                        </Text>
                      </div>
                      <Input
                        required
                        label={t("verificationCodeEmail")}
                        className={"mb-0"}
                        endAdornment={
                          <InputAdornment
                            position="end"
                            className="text-[12px]"
                          ></InputAdornment>
                        }
                        onChange={(e) => {
                          SetEmailOtp(
                            strFormat(e.target.value, "max:4|number")
                          );
                          setErrors({ ...errors, email_otp: "" });
                        }}
                        value={emailOtp}
                        error={errors?.email_otp}
                      />
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-center"
                          size="txtMohrRoundedAltRegular16"
                        >
                          {t("didntGetACode")}
                          <Text
                            className={`text-pink-800 cursor-pointer p-1 ${
                              emailTimer != 0 ? "opacity-down" : ""
                            }`}
                            size="txtMohrRoundedAltRegular14Black900"
                            as="span"
                            onClick={(e) => {
                              sendOtp("email");
                            }}
                          >
                            {t("resendCode")}
                          </Text>
                        </Text>
                        <Text as="span">
                          {emailTimer > 0 ? emailTimer + ":00" : ""}
                        </Text>
                      </div>
                    </div>
                  </>
                ) : null}

                <div className="flex flex-col font-mohrroundedaltregular items-center justify-start max-w-[456px] w-full z-[1] p-7 sm:px-4">
                  <div className="inline flex-col items-center justify-start mb-7 w-full text-center">
                    <Text
                      className="inline text-base text-black-900 text-center"
                      size="txtMohrRoundedAltRegular16"
                    >
                      {t("weVeSentA4_digitCodeTo")}{" "}
                      <Text
                        className="inline text-center whitespace-nowrap"
                        size="txtMohrRoundedAltMedium16Black9007c"
                      >
                        {mobileWithCountryCode(userData?.mobile_no)}
                      </Text>{" "}
                    </Text>
                    <Text
                      className="inline text-center"
                      size="txtMohrRoundedAltRegular16"
                    >
                      {t("theCodeExpiresShortlySoPleaseEnterItSoon")}
                    </Text>
                  </div>
                  <Input
                    required
                    label={t("verificationCodePhone")}
                    className={"mb-0"}
                    endAdornment={
                      <InputAdornment
                        position="end"
                        className="text-[12px]"
                      ></InputAdornment>
                    }
                    onChange={(e) => {
                      SetOtp(strFormat(e.target.value, "max:4|number"));
                      setErrors({ ...errors, otp: "" });
                    }}
                    value={otp}
                    error={errors?.otp}
                  />
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-center"
                      size="txtMohrRoundedAltRegular16"
                    >
                      {t("didntGetACode")}
                      <Text
                        className={`text-pink-800 cursor-pointer p-1 ${
                          timer != 0 ? "opacity-down" : ""
                        }`}
                        size="txtMohrRoundedAltRegular14Black900"
                        as="span"
                        onClick={(e) => {
                          sendOtp("mobile");
                        }}
                      >
                        {t("resendCode")}
                      </Text>
                    </Text>
                    <Text as="span">{timer > 0 ? timer + ":00" : ""}</Text>
                  </div>
                </div>
                <Line className="h-px w-full border-t border-solid border-gray-300" />
                <div className="flex flex-col font-mohrroundedaltregular items-center justify-start max-w-[456px] w-full z-[1] p-7 pb-8 sm:px-4">
                  <Button
                    className="w-full mx-auto mt-0"
                    size="lg"
                    variant="FillBlack"
                    onClick={registration}
                    disabled={disableBtn}
                  >
                    {t("confirm")}
                  </Button>
                </div>
                <div className="absolute bottom-[0] h-[307px] right-[-230px] sm:hidden left-auto w-auto">
                  <Img
                    className="h-[307px] m-auto object-contain w-auto"
                    src="/images/img_birthdaycake.png"
                    alt="birthdaycake"
                  />
                  <Img
                    className="absolute bottom-[2%] h-[51px] right-[9%]"
                    src="/images/img_checkmark.svg"
                    alt="checkmark"
                  />
                </div>
                <Img
                  className="absolute h-[22px] left-[-30px] top-[4%]"
                  src="/images/img_signal.svg"
                  alt="signal"
                />
              </div>
            </div>
            <Img
              className="absolute h-[17px] left-[8%] top-[20%] w-4"
              src="/images/img_close_blue.svg"
              alt="close"
            />
            <Img
              className="absolute bottom-[33%] h-[17px] left-[19%] w-4"
              src="/images/img_close_red_300.svg"
              alt="close_One"
            />
          </div>
          <Img
            className="absolute h-[17px] right-[11%] top-[47%] w-4"
            src="/images/img_close_blue.svg"
            alt="close_Two"
          />
        </div>
        <Footer className="absolute bottom-[0] flex font-mohrroundedaltregular inset-x-[0] items-center justify-center mx-auto w-full" />
      </div>
    </>
  );
};

export default VarificatonPage;
