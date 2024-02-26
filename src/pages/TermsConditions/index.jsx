import { Text } from "components";
import { useTranslation } from "react-i18next";
import Footer from "components/Footer";
import Header from "components/Header";
import { globalRequest } from "../../utils/global/globalRequest";
import { changeLoader } from "../../redux/reducers/loader";
import { PAGES } from "../../utils/helper/Enum";
import {
  getDefaultLanguage,
  getdataByLangKey,
} from "../../utils/helper/custom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
const TermsConditionsPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [pageData, setPageData] = useState();
  const getData = async () => {
    try {
      dispatch(changeLoader(true));
      let response = await globalRequest(
        PAGES.GET_CMS,
        "get",
        {},
        { params: { type: "terms-conditions" } },
        true
      );
      response = response?.data;
      if (response?.status == "SUCCESS") {
        setPageData(
          getdataByLangKey(
            response?.data?.cmsLocales,
            getDefaultLanguage(),
            "description"
          )
        );
      }
      dispatch(changeLoader(false));
    } catch (e) {}
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mohrroundedaltregular items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col flex-row font-mohrroundedaltmedium md:gap-5 items-center justify-center md:px-5 shadow-bs w-full" />
        <div
          className="flex flex-col items-center justify-start w-full h-[350px] bg-no-repeat min-h-[60px] sm:pt-[58px] pt-[108px] sm:!bg-cover"
          style={{
            backgroundImage: "url('images/termcondition-banner.png')",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="flex flex-col gap-9 items-start justify-start md:w-[80%] w-[1110px] mx-auto">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 rtl:text-right"
              size="txtMohrRoundedAltBold40"
            >
              {t("termsAndConditions")}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-start justify-start max-w-[1120px] mt-[73px] mx-auto md:px-5 w-full static-page">
          <Text
            className="leading-[24.00px] text-base text-gray-700 w-full rtl:text-right"
            size="txtMohrRoundedAltRegular16Gray70001"
          >
            <span
              className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right"
              dangerouslySetInnerHTML={{ __html: pageData }}
            ></span>
          </Text>
        </div>
        <Footer className="flex font-mohrroundedaltregular items-center justify-center mt-[91px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default TermsConditionsPage;