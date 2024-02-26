import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, CheckboxCustom, Img, Input, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import { useTranslation } from "react-i18next";
import {
  validateForm,
  strFormat,
  replaceKeyValue,
} from "../../../utils/helper/custom";
import { globalRequest } from "../../../utils/global/globalRequest";
import { ONBOARDING_APIS } from "../../../utils/helper/Enum";
import { updateUserData, getUserData } from "../../../redux/reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { changeLoader } from "../../../redux/reducers/loader";
import { setSnackbar } from "../../../redux/reducers/snackbar";
const LoginNamePage = () => {
  const dispatch = useDispatch();
  const userData = useSelector(getUserData);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [disableBtn, setDisableBtn] = useState(false);
  /**
   * @description  update user data
   */
  const update_user_values = (field, value) => {
    setErrors({});
    dispatch(updateUserData({ field, value }));
  };
  /**
   * Check validation
   */
  useEffect(() => {
    let validationErrors = validateForm(userData, "signup", t);
    let status = false;
    if (Object.keys(validationErrors).length !== 0) {
      status = true;
      //setErrors(validationErrors);
    }
    setDisableBtn(status);
  }, [userData]);
  /**
   * @description  user registration
   */
  const registration = async (e) => {
    e.preventDefault();
    let validationErrors = validateForm(userData, "signup", t);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(changeLoader(true));
      let input_data = {
        type: "email",
        mobile_no: userData?.mobile_no,
        email: userData?.email,
      };
      try {
        let response = await globalRequest(
          ONBOARDING_APIS?.SEND_OTP,
          "post",
          input_data
        );
        response = response?.data;
        dispatch(changeLoader(false));
        if (response?.status !== "SUCCESS") {
          //setErrors({ ...errors, mobile_no: response?.message });
          dispatch(
            setSnackbar({
              snackbarOpen: true,
              snackbarMessage: response?.message,
              snackbarState: "error",
            })
          );
          return;
        }
        update_user_values("is_varified", true);
        update_user_values("otp_email", response?.data?.otp_email);
        navigate("/verify-otp");
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
    }
  };
  /**
   * check mobile no exist or not
   */
  useEffect(() => {
    if (userData?.mobile_no == "") {
      navigate("/login");
    }
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
            <div className="flex flex-row items-center gap-3 xs:gap-0 mb-7 w-full max-w-[510px] mx-auto sm:px-4">
              <Img
                className="h-8 w-8 -ml-1 rtl:-ml-0 rtl:-mr-1 xs:ml-0 rtl:rotate-180 cursor-pointer"
                src="/images/img_arrowleft_gray_900_03.svg"
                alt="arrowright"
                loading="lazy"
                onClick={() => navigate(-1)}
              />
              <Text
                className="mx-auto sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-900"
                size="txtMohrRoundedAltBold40"
              >
                {t("whatSYourName")}
              </Text>
            </div>
            <div className="relative w-auto">
              <div className="relative bg-white-A700 flex flex-col h-max items-center justify-start my-auto p-[31px] sm:px-4 rounded shadow-bs2 w-full max-w-[510px] mx-auto mb-[100px]">
                <div className="flex flex-col items-center justify-start mb-2 max-w-[400px] w-full">
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtMohrRoundedAltRegular16"
                  >
                    {t(
                      "thisWillBeTheNameOfYourProfile_chooseSomethingThatYouWillRecognize"
                    )}
                  </Text>
                  <div className="flex flex-col font-mohrroundedaltregular items-center justify-start mt-[30px] w-full z-[1]">
                    <form id="register-form" onSubmit={registration}>
                      <div className="w-full xs:flex-col flex flex-row gap-x-5">
                        <Input
                          label={t("firstName")}
                          value={userData?.first_name}
                          error={errors.first_name}
                          name="first_name"
                          onChange={(e) => {
                            update_user_values(
                              "first_name",
                              strFormat(e.target.value, "text|max:50")
                            );
                          }}
                        />
                        <Input
                          label={t("lastName")}
                          value={userData?.last_name}
                          error={errors.last_name}
                          name="last_name"
                          onChange={(e) => {
                            update_user_values(
                              "last_name",
                              strFormat(e.target.value, "text|max:50")
                            );
                          }}
                        />
                      </div>
                      <Input
                        label={t("email")}
                        value={userData?.email}
                        error={errors.email}
                        name="email"
                        onChange={(e) => {
                          update_user_values(
                            "email",
                            strFormat(e.target.value, "email|max:50")
                          );
                        }}
                      />
                      <CheckboxCustom
                        name="terms"
                        className="text-black_900 text-sm w-full mt-[-10px] mb-[20px] text-left rtl:text-right"
                        label=""
                        html={replaceKeyValue(
                          t("iAcceptTheTerms_Conditions_PrivacyPolicy"),
                          "['TERM_LINK','PRIVACY_LINK']",
                          "['/terms-and-conditions','/privacy-policy']",
                          "array"
                        )} 
                        checked={userData?.terms_and_condition == true}
                        onChange={(e) => {
                          update_user_values(
                            "terms_and_condition",
                            e.target.checked
                          );
                        }}
                        error={errors.terms}
                      />
                      <Button
                        className="w-full"
                        size="lg"
                        variant="FillBlack"
                        disabled={disableBtn}
                      >
                        {t("continue")}
                      </Button>
                    </form>
                  </div>
                </div>
                <div className="absolute bottom-[0] h-[307px] right-[-230px] md:hidden left-auto w-auto">
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
        <Footer />
      </div>
    </>
  );
};

export default LoginNamePage;