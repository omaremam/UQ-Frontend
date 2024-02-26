import {
  Button,
  DatepickerInput,
  Img,
  Input,
  MobileInput,
  Text,
} from "components";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { globalRequest } from "../../../utils/global/globalRequest";
import { USERS } from "../../../utils/helper/Enum";
import { useDispatch, useSelector } from "react-redux";
import { changeLoader } from "../../../redux/reducers/loader";
import { setSnackbar } from "../../../redux/reducers/snackbar";
import {
  getMobileNo,
  validateForm,
  strFormat,
  replaceKeyValue,
  refreshToken,
  loginData,
  getLoginDataByKey,
} from "../../../utils/helper/custom";
import { updateAuth, getAuth } from "../../../redux/reducers/loginData";
const ProfileEdit = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  let auth = useSelector(getAuth);
  const navigate = useNavigate();
  const [errors, setErrors] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [profileData, setProfileData] = React.useState(null);
  const [profileFieldData, setProfileFieldData] = React.useState(null);
  const [mobileStep, setMobileStep] = React.useState("old");
  const [changeNumber, setChangeNumber] = React.useState(false);
  const [timer, setTimer] = useState(0);
  /**
   * timer set for otp
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
  /**
   * timer set for otp
   */
  useEffect(() => {
    if (open == false) {
      setMobileStep("old");
      setErrors({});
    }
  }, [open]);
  /**
   * get profile data
   */
  const getProfile = async () => {
    try {
      dispatch(changeLoader(true));
      let response = await globalRequest(
        USERS?.GET_PROFILE,
        "get",
        {},
        {},
        true
      );
      response = response?.data;
      dispatch(changeLoader(false));
      setChangeNumber(false);
      if (response?.status == "SUCCESS") {
        setProfileData(response?.data);
        return true;
      }
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarMessage: response?.message,
          snackbarState: "error",
        })
      );
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
   * update profile field data
   */
  useEffect(() => {
    if (profileData !== null) {
      setProfileFieldData({
        first_name: profileData?.firstName,
        last_name: profileData?.lastName,
        mobile_no: getMobileNo(profileData?.mobileNo, "number"),
        country_code: getMobileNo(profileData?.mobileNo, "code"),
        dob:
          profileData?.userDetail !== null ? profileData?.userDetail?.dob : "",
        email: profileData?.email == null ? "" : profileData?.email,
        otp: "",
        type: "old",
      });
    }
  }, [profileData]);

  /**
   * get profile data
   */
  const updateProfile = async (e) => {
    e.preventDefault();
    let validationErrors = validateForm(profileFieldData, "profile", t);
    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      dispatch(changeLoader(true));
      let inputData = profileFieldData;
      let response = await globalRequest(
        USERS?.UPDATE_PROFILE,
        "PUT",
        inputData,
        {},
        true
      );
      response = response?.data;
      dispatch(changeLoader(false));
      if (response?.status == "SUCCESS") {
        setOpen(false);
        getProfile();
        await refreshToken();
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarMessage: response?.message,
            snackbarState: "success",
          })
        );
        return true;
      }
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarMessage: response?.message,
          snackbarState: "error",
        })
      );
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
   * send otp
   */
  const SendOtp = async (e) => {
    e.preventDefault();
    setChangeNumber(false);
    try {
      dispatch(changeLoader(true));
      let inputData = profileFieldData;
      let response = await globalRequest(
        USERS?.SEND_OTP,
        "post",
        inputData,
        {},
        true
      );
      response = response?.data;
      dispatch(changeLoader(false));
      if (response?.status == "SUCCESS") {
        setTimer(process.env.REACT_APP_OTP_TIMER);
        setChangeNumber(true);
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarMessage: response?.message,
            snackbarState: "success",
          })
        );
        return true;
      }
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarMessage: response?.message,
          snackbarState: "error",
        })
      );
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
   * verify otp
   */
  const verifyOtp = async () => {
    //e.preventDefault();
    //setChangeNumber(false);
    try {
      dispatch(changeLoader(true));
      let inputData = profileFieldData;
      let response = await globalRequest(
        USERS?.VERIFY_OTP,
        "post",
        inputData,
        {},
        true
      );
      response = response?.data;
      dispatch(changeLoader(false));
      if (response?.status == "SUCCESS") {
        setChangeNumber(false);
        setTimer(0);
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarMessage: response?.message,
            snackbarState: "success",
          })
        );
        setProfileFieldData({
          ...profileFieldData,
          mobile_no: "",
          otp: "",
          type: "new",
          email: profileFieldData?.email,
        });
        setMobileStep("new");
        return;
      }
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarMessage: response?.message,
          snackbarState: "error",
        })
      );
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
   * update mobile no
   */
  const updateMobileNo = async () => {
    //e.preventDefault();
    //setChangeNumber(false);
    try {
      dispatch(changeLoader(true));
      let inputData = profileFieldData;
      let response = await globalRequest(
        USERS?.UPDATE_MOBILE_NUMBER,
        "put",
        inputData,
        {},
        true
      );
      response = response?.data;
      dispatch(changeLoader(false));
      if (response?.status == "SUCCESS") {
        await refreshToken();
        setOpen(false);
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarMessage: response?.message,
            snackbarState: "success",
          })
        );
        setProfileFieldData({
          ...profileFieldData,
          type: "old",
          otp: "",
        });
        setMobileStep("old");
        setChangeNumber(false);
        toggleDrawer(false);
        return;
      }
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarMessage: response?.message,
          snackbarState: "error",
        })
      );
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
   * open profile data
   */
  const toggleDrawer = (newOpen) => () => {
    if (newOpen) {
      getProfile();
    } else {
      setErrors({});
    }
    setOpen(newOpen);
  };
  return (
    <>
      <div className="flex flex-row font-mohrroundedaltmedium md:gap-10 items-center justify-between max-w-[1142px] px-4 mt-7 mb-7 mx-auto w-full">
        <div className="flex flex-col gap-2 items-start justify-start">
          <Text
            className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
            size="txtMohrRoundedAltSemiBold24"
          >
            {getLoginDataByKey("fullname")}
          </Text>
          <Text
            className="text-black-900 text-sm"
            size="txtMohrRoundedAltRegular14Black900"
          >
            {replaceKeyValue(auth?.mobileNo, "-", "")}
          </Text>
        </div>
        <Button
          className="min-w-[125px]"
          size="md"
          variant="OutlineBlack"
          onClick={toggleDrawer(true)}
          hover={true}
          hoverclass="bg-black-900"
        >
          {t("editProfile")}
        </Button>
      </div>

      {profileData != null ? (
        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <div className="w-full max-w-[400px] px-[35px] sm:px-4 py-8 sm:py-4 before-pink-round">
            <div className="flex flex-row gap-3 items-center justify-start w-full mb-8 sm:mb-4">
              <Img
                className="h-6 w-6 cursor-pointer"
                src="/images/img_close_black_900.svg"
                alt="close"
                onClick={toggleDrawer(false)}
              />
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtMohrRoundedAltSemiBold24"
              >
                {t("editProfile")}
              </Text>
            </div>
            <form onSubmit={updateProfile}>
              <Input
                label={t("firstName")}
                required
                value={profileFieldData?.first_name}
                onChange={(e) => {
                  setErrors({ ...errors, first_name: "" });
                  setProfileFieldData({
                    ...profileFieldData,
                    first_name: strFormat(e.target.value, "max:50"),
                  });
                }}
                error={errors?.first_name}
              />
              <Input
                label={t("lastName")}
                required
                value={profileFieldData?.last_name}
                onChange={(e) => {
                  setErrors({ ...errors, last_name: "" });
                  setProfileFieldData({
                    ...profileFieldData,
                    last_name: strFormat(e.target.value, "max:50"),
                  });
                }}
                error={errors?.last_name}
              />
              <Input
                label={t("email")}
                readOnly={true}
                value={profileFieldData?.email}
                onChange={(e) => {
                  setErrors({ ...errors, email: "" });
                  setProfileFieldData({
                    ...profileFieldData,
                    email: strFormat(e.target.value, "max:50"),
                  });
                }}
                error={errors?.email}
              />
              {mobileStep == "old" ? (
                <>
                  <MobileInput
                    label={t("mobile")}
                    required
                    placeholder={"Enter Mobile"}
                    value={profileFieldData?.mobile_no}
                    readOnly="true"
                    endAdornment={
                      changeNumber == false &&
                      profileFieldData?.mobile_no.length == 9 ? (
                        <Text
                          className="text-center text-pink-800 text-sm w-auto cursor-pointer"
                          size="txtMohrRoundedAltMedium14"
                          onClick={SendOtp}
                        >
                          {t("change")}
                        </Text>
                      ) : null // If profileData.mobileNo is falsy, don't render the endAdornment
                    }
                  />
                  {changeNumber ? (
                    <>
                      <Input
                        label={t("verificationCode")}
                        placeholder={t("enterVerificationCode")}
                        required
                        value={profileFieldData?.otp}
                        onChange={(e) => {
                          setProfileFieldData({
                            ...profileFieldData,
                            otp: strFormat(e.target.value, "max:4|number"),
                          });
                        }}
                        endAdornment={
                          profileFieldData?.otp.length > 3 ? (
                            <Text
                              className="text-center text-pink-800 text-sm w-auto cursor-pointer"
                              size="txtMohrRoundedAltMedium14"
                              onClick={(e) => {
                                setProfileFieldData({
                                  ...profileFieldData,
                                  type: "old",
                                });
                                setMobileStep("old");
                                verifyOtp();
                              }}
                            >
                              {t("verify")}
                            </Text>
                          ) : null // If profileData.mobileNo is falsy, don't render the endAdornment
                        }
                      />
                      <Text
                        className="text-left mb-6 rtl:text-right"
                        size="txtMohrRoundedAltRegular16"
                      >
                        {t("didntGetACode")}
                        <Text
                          className={`text-pink-800 cursor-pointer p-1 ${
                            timer != 0 ? "opacity-down" : ""
                          }`}
                          size="txtMohrRoundedAltRegular14Black900"
                          as="span"
                          onClick={SendOtp}
                        >
                          {t("resendCode")}
                        </Text>
                        <Text as="span" className="text-right">
                          {timer > 0 ? timer + ":00" : ""}
                        </Text>
                      </Text>
                    </>
                  ) : null}
                </>
              ) : (
                <>
                  <MobileInput
                    label={t("mobile")}
                    placeholder={t("enterNewMobile")}
                    required
                    value={profileFieldData?.mobile_no}
                    onChange={(e) => {
                      setProfileFieldData({
                        ...profileFieldData,
                        mobile_no: strFormat(e.target.value, "number|max:9"),
                      });
                    }}
                    endAdornment={
                      changeNumber == false &&
                      profileFieldData?.mobile_no.length > 8 ? (
                        <Text
                          className="text-center text-pink-800 text-sm w-auto cursor-pointer"
                          size="txtMohrRoundedAltMedium14"
                          onClick={SendOtp}
                        >
                          {t("verify")}
                        </Text>
                      ) : null // If profileData.mobileNo is falsy, don't render the endAdornment
                    }
                  />
                  {changeNumber ? (
                    <>
                      <Input
                        label={t("verificationCode")}
                        placeholder={t("enterVerificationCode")}
                        required
                        value={profileFieldData?.otp}
                        onChange={(e) => {
                          setProfileFieldData({
                            ...profileFieldData,
                            otp: strFormat(e.target.value, "max:4|number"),
                          });
                        }}
                        endAdornment={
                          changeNumber == true &&
                          profileFieldData?.otp.length > 3 ? (
                            <Text
                              className="text-center text-pink-800 text-sm w-auto cursor-pointer"
                              size="txtMohrRoundedAltMedium14"
                              onClick={(e) => {
                                setProfileFieldData({
                                  ...profileFieldData,
                                  type: "new",
                                });
                                setMobileStep("new");
                                updateMobileNo();
                              }}
                            >
                              Verify
                            </Text>
                          ) : null // If profileData.mobileNo is falsy, don't render the endAdornment
                        }
                      />
                      <Text
                        className="text-left mb-6 rtl:text-right"
                        size="txtMohrRoundedAltRegular16"
                      >
                        {t("didntGetACode")}
                        <Text
                          className={`text-pink-800 cursor-pointer p-1 ${
                            timer != 0 ? "opacity-down" : ""
                          }`}
                          size="txtMohrRoundedAltRegular14Black900"
                          as="span"
                          onClick={SendOtp}
                        >
                          {t("resendCode")}
                        </Text>
                        <Text as="span" className="text-right">
                          {timer > 0 ? timer + ":00" : ""}
                        </Text>
                      </Text>
                    </>
                  ) : null}
                </>
              )}

              <DatepickerInput
                className="pointer-none"
                label={t("dateOfBirth")}
                format="DD/MM/YYYY"
                value={profileFieldData?.dob ? profileFieldData?.dob : ""}
                errorText={errors?.dob}
                disableFuture="true"
                endAdornment={
                  <Img
                    className="top-[0] my-auto"
                    src="/images/img_calendar_black_900.svg"
                    alt="Calendar"
                  />
                }
                onChange={(e) => {
                  setProfileFieldData({
                    ...profileFieldData,
                    dob: e == null || !e ? "" : e,
                  });
                  setErrors({ ...errors, dob: "" });
                }}
              />
              <div className="flex flex-row items-center justify-end w-full mt-3  ">
                <Button
                  size="md"
                  variant="FillBlack"
                  className="w-[140px]"
                  disabled={changeNumber || mobileStep == "new"}
                >
                  {t("save")}
                </Button>
              </div>
            </form>
          </div>
        </SwipeableDrawer>
      ) : null}
    </>
  );
};

export default ProfileEdit;