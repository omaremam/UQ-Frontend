import { Button, Img, Text } from "components";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { globalRequest } from "../../../../utils/global/globalRequest";
import { USERS } from "../../../../utils/helper/Enum";
import { loginData, refreshToken } from "../../../../utils/helper/custom";
import { useDispatch, useSelector } from "react-redux";
import { changeLoader } from "../../../../redux/reducers/loader";
import { setSnackbar } from "../../../../redux/reducers/snackbar";
import { updateAuth, getAuth } from "../../../../redux/reducers/loginData";
const Preferredlanguage = () => {
  let auth = useSelector(getAuth);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [preferredLang, setPreferredLang] = useState(auth?.preferredLang);
  /**
   * change Language
   */
  const changeLanguage = async (language) => {
    dispatch(changeLoader(true));
    let input_data = { lang: language };
    try {
      let response = await globalRequest(
        USERS?.SET_PREFFERED_LANG,
        "put",
        input_data,
        {},
        true
      );
      response = response?.data;
      dispatch(changeLoader(false));
      if (response?.status == "SUCCESS") {
        setPreferredLang(language);
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarMessage: response?.message,
            snackbarState: "success",
          })
        );
        refreshToken();
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
  };

  return (
    <>
      <div className="flex flex-col w-full mb-7">
        <Text
          className="text-2xl md:text-[22px] text-black-900 sm:text-xl mb-5"
          size="txtMohrRoundedAltSemiBold24"
        >
          {t("preferredLanguage")}
        </Text>
        <Text className="mb-10" size="txtMohrRoundedAltRegular16Gray700">
          {t(
            "chooseInWhichLanguagePlatformShouldSendYouEmailAndPushNotifications"
          )}
        </Text>

        <div className="flex flex-row items-center justify-start gap-4 w-full mb-14">
          <ToggleButton
            buttonId="button1"
            active={preferredLang == "en"}
            onClick={(e) => {
              setPreferredLang("en");
            }}
            flagIcons="images/img_ellipse4.png"
            text="English"
          />
          <ToggleButton
            buttonId="button2"
            active={preferredLang == "ar"}
            onClick={(e) => {
              setPreferredLang("ar");
            }}
            flagIcons="images/img_ellipse4_32x32.png"
            text="عربي"
          />
        </div>
        <Button
          className="w-[140px]"
          size="lg"
          variant={"FillBlack"}
          hover={true}
          hoverclass="bg-white-A700"
          onClick={(e) => {
            changeLanguage(preferredLang);
          }}
        >
          {t("update")}
        </Button>
      </div>
    </>
  );
};

const ToggleButton = ({ buttonId, active, onClick, text, flagIcons }) => {
  const handleClick = () => {
    onClick(buttonId);
  };
  //   const activeHeightlight = active ? "border-red-900" : "";
  const activeHighlight = active
    ? "text-[16px] font-mohrroundedaltmedium flex flex-row items-center justify-start gap-4 w-full max-w-[250px] bg-white-A700 text-black-900 text-sm border border-solid border-pink-800"
    : "text-[16px] font-mohrroundedaltmedium flex flex-row items-center justify-start gap-4 w-full max-w-[250px] bg-white-A700 text-black-900 text-sm border border-solid border-gray-300";

  return (
    <Button className={activeHighlight} size="lg" onClick={handleClick}>
      <Img
        src={flagIcons}
        alt="flag-icon"
        className={"h-8 rounded-[50%] w-8 mr-4 rtl:mr-0 rtl:ml-4"}
      />{" "}
      {text}
    </Button>
  );
};

export default Preferredlanguage;
