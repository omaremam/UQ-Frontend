import { Text } from "components";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { globalRequest } from "../../utils/global/globalRequest";
import { changeLoader } from "../../redux/reducers/loader";
import { PAGES } from "../../utils/helper/Enum";
import {
  getDefaultLanguage,
  getdataByLangKey,
} from "../../utils/helper/custom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
const MobilePrivacyPolicy = () => {
  const { type, lang } = useParams();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [pageData, setPageData] = useState();
  const [title, setTitle] = useState();
  const getData = async () => {
    try {
      dispatch(changeLoader(true));
      let response = await globalRequest(
        PAGES.GET_CMS,
        "get",
        {},
        { params: { type: type } },
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
    if (lang) {
      if (lang == "en") {
        localStorage.setItem("jsahdjkanbn", "sd542s3ad2sa1d3iu748923DSF");
      } else {
        localStorage.setItem("jsahdjkanbn", "sd5s42s3ad2sa1d3iu748923DSF");
      }
      if (type == "privacy-policy") {
        setTitle(t("privacyPolicy"));
      }
      if (type == "terms-conditions") {
        setTitle(t("termsCondition"));
      }
      if (type == "return-policy") {
        setTitle(t("returnPolicy"));
      }
      getData();
    }
  }, [lang]);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mohrroundedaltregular items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-5 items-start justify-start max-w-[1120px] mt-10 mx-auto md:px-5 w-full static-page">
          <Text
            className="text-2xl md:text-[22px] text-black-900 sm:text-xl text-center w-full"
            size="txtMohrRoundedAltBold34"
          >
            {title}
          </Text>
          <Text
            className="leading-[24.00px] text-base text-gray-700 w-fulltext-right text-center"
            size="txtMohrRoundedAltRegular16Gray70001"
          >
            <span
              className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right"
              dangerouslySetInnerHTML={{ __html: pageData }}
            ></span>
          </Text>
        </div>
      </div>
    </>
  );
};

export default MobilePrivacyPolicy;