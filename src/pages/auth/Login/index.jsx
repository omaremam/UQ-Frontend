import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, MobileInput, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { validateForm, strFormat } from "../../../utils/helper/custom";
import { globalRequest } from "../../../utils/global/globalRequest";
import { ONBOARDING_APIS } from "../../../utils/helper/Enum";
import { updateUserData, getUserData } from "../../../redux/reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { changeLoader } from "../../../redux/reducers/loader";
import { setSnackbar } from "../../../redux/reducers/snackbar";
const LoginPage = () => {
  const dispatch = useDispatch();
  const userData = useSelector(getUserData);
  const [errors, setErrors] = useState({});
  const [disableBtn, setDisableBtn] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  /**
   * Update user data
   */
  const update_user_values = (field, value) => {
    setErrors({});
    dispatch(updateUserData({ field, value }));
  };
  /**
   * Check validation
   */
  useEffect(() => {
    let validationErrors = validateForm(userData, "login", t);
    let status = false;
    if (Object.keys(validationErrors).length !== 0) {
      status = true;
    }
    setDisableBtn(status);
  }, [userData]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX / 70, y: clientY / 70 });
  };
  /**
   * Check user exist or nor
   */
  const checkUser = async () => {
    let validationErrors = validateForm(userData, "login", t);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(changeLoader(true));
      update_user_values("is_new_user", false);
      let input_data = { mobile_no: userData?.mobile_no.trim() };
      try {
        let response = await globalRequest(
          ONBOARDING_APIS?.CHECK_USER_BY_MOBILE,
          "post",
          input_data
        );
        response = response?.data;
        dispatch(changeLoader(false));
        if (response?.status !== "SUCCESS") {
          setErrors({ ...errors, mobile_no: response?.message });
          return;
        }
        if (response?.data?.is_new_user == 1) {
          update_user_values("is_new_user", true);
          navigate("/login-name");
          return;
        }
        update_user_values("is_varified", true);
        update_user_values("email", '');
        update_user_values("otp_email", '');
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

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mohrroundedaltregular items-center justify-start mx-auto w-full ">
        <Header />
        <div className="font-mohrroundedaltbold relative w-full height-full-header-footer flex items-center justify-center overflow-hidden" onMouseMove={handleMouseMove}>
          <div
            className="bg-contain bg-no-repeat bg-center h-full left-[0] p-[26px] sm:px-5 top-[0] w-full xs:overflow-hidden"
            // style={{ backgroundImage: "url('images/img_group202.png')" }}

          >
            <Img
              className="absolute h-auto left-0 top-0 right-0 bottom-0 m-auto w-full max-w-[1100px] pulse"
              src="/images/img_group202.png"
              alt="close"
              style={{
                transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)`,
              }}
            />
            <Text
              className="mx-auto sm:text-4xl md:text-[38px] text-[40px] mb-7 text-center text-gray-900"
              size="txtMohrRoundedAltBold40"
            >
              {t("Signup_Login")}
            </Text>
            <div className="relative w-auto">
              <div className="relative bg-white-A700 flex flex-col h-max items-center justify-start my-auto p-[31px] sm:px-4 rounded shadow-bs2 w-full max-w-[510px] mx-auto mb-[100px]">
                <div className="flex flex-col items-center justify-start mb-2 w-[90%] md:w-full">
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtMohrRoundedAltRegular16"
                  >
                    {t("enterBelowDetailsToExploreOurFeatures")}
                  </Text>
                  <div className="flex flex-col font-mohrroundedaltregular items-center justify-start mt-[30px] w-full z-[1]">
                    <MobileInput
                      required
                      label={t("mobile")}
                      onChange={(e) =>
                        update_user_values(
                          "mobile_no",
                          strFormat(e.target.value, "number|max:9")
                        )
                      }
                      value={userData?.mobile_no}
                      error={errors?.mobile_no}
                    />
                    <Button
                      className="w-full"
                      size="lg"
                      variant="FillBlack"
                      onClick={() => checkUser()}
                      disabled={disableBtn}
                    >
                      {t("continue")}
                    </Button>
                    <Text
                      className="leading-[16.00px] mt-5 text-black-900 text-center text-xs w-full"
                      size="txtMohrRoundedAltRegular12"
                    >
                      <span className="text-black-900 font-mohrroundedaltregular font-normal">
                        {t(
                          "yourPersonalDataWillBeUsedToAssistYouDuringYourVisitToTheWebsiteManageAccessToYourAccountAndForOtherReasonsDescribedInOur"
                        )}{" "}
                      </span>
                      <Link
                        to="/privacy-policy"
                        target="_blank"
                        className="text-black-900 font-mohrroundedaltregular font-normal underline"
                      >
                        {t("privacyPolicy")}
                      </Link>
                      .
                    </Text>
                  </div>
                </div>
                <div className="absolute bottom-[0] h-[307px] right-[-230px] md:hidden left-auto w-auto">
                  <Img
                    className="h-[307px] m-auto object-contain w-auto"
                    src="/images/img_birthdaycake.png"
                    alt="birthdaycake"
                    style={{
                      transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)`,
                    }}
                  />
                  <Img
                    className="absolute bottom-[2%] h-[51px] right-[9%]"
                    src="/images/img_checkmark.svg"
                    alt="checkmark"
                    style={{
                      transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)`,
                    }}
                  />
                </div>
                <Img
                  className="absolute h-[22px] left-[-30px] top-[4%]"
                  src="/images/img_signal.svg"
                  alt="signal"
                  style={{
                    transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)`,
                  }}
                />
              </div>
            </div>
            <Img
              className="absolute h-[17px] left-[8%] top-[20%] w-4"
              src="/images/img_close_blue.svg"
              alt="close"
              style={{
                transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)`,
              }}
            />
            <Img
              className="absolute bottom-[33%] h-[17px] left-[19%] w-4 "
              src="/images/img_close_red_300.svg"
              alt="close_One"
              style={{
                transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)`,
              }}
            />
          </div>
          <Img
            className="absolute h-[17px] right-[11%] top-[47%] w-4"
            src="/images/img_close_blue.svg"
            alt="close_Two"
            style={{
              transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)`,
            }}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LoginPage;