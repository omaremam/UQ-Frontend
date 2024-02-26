import { useNavigate } from "react-router-dom";
import { Button } from "components";
// Importing localization strings
import { useTranslation } from "react-i18next";
const Footer1 = (props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-row md:gap-10 items-center justify-between mx-auto my-[11px] max-w-[1110px] w-full">
          <Button
            className="common-pointer cursor-pointer font-mohrroundedaltmedium h-12 min-w-[87px] py-2.5 rounded text-base text-black-900 text-center border border-black-900"
            onClick={() => navigate(-1)}
          >
            {t("back")}
          </Button>
          <Button
            className="common-pointer bg-black-900 cursor-pointer font-mohrroundedaltmedium h-12 py-2.5 px-3.5 rounded text-base text-center text-white-A700 w-auto"
            onClick={() => navigate(+1)}
          >
            {t("continue")} (SAR 40.00)
          </Button>
          {/* <Button
            className="common-pointer bg-black-900 cursor-pointer font-mohrroundedaltmedium h-12 py-2.5 px-3.5 rounded text-base text-center text-white-A700 w-auto"
          >
            {t("getEstimate")}
          </Button> */}
        </div>
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;