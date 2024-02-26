import { Text } from "components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const Breadcrumb = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-row font-mohrroundedaltregular gap-1 items-start justify-start mt-[30px] md:px-5 w-full flex-wrap">
        <Text
          className="text-gray-700 text-sm w-auto cursor-pointer"
          size="txtMohrRoundedAltRegular14"
          onClick={(e) => {
            navigate(`/`);
          }}
        >
          {t("home")}
        </Text>
        {props?.data?.maincategoryname ? (
          <>
            <Text
              className="text-gray-700 text-sm w-auto"
              size="txtMohrRoundedAltRegular14"
            >
              /
            </Text>
            <Text
              className="text-gray-700 text-sm w-auto cursor-pointer"
              size="txtMohrRoundedAltRegular14"
              onClick={(e)=>{
                 let slug=props?.data?.maincategoryslug || "no";
                 if(slug){
                    navigate(`/productlist/${slug}`);
                 }
              }}
            >
              {props?.data?.maincategoryname || ""}
            </Text>
          </>
        ) : null}
        {props?.data?.subcatname ? (
          <>
            <Text
              className="text-gray-700 text-sm w-auto"
              size="txtMohrRoundedAltRegular14"
            >
              /
            </Text>
            <Text
              className="text-gray-700 text-sm w-auto"
              size="txtMohrRoundedAltRegular14"
            >
              {props?.data?.subcatname || ""}
            </Text>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Breadcrumb;
