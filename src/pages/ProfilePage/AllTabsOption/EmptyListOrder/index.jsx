import { useTranslation } from "react-i18next";
import { Button, Img, Text } from "components";

const EmptyListOrder = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-[57px] md:px-10 sm:px-5 rounded w-full">
        <div className="flex flex-col items-center justify-start w-80 md:w-full">
          <Img
            className="h-[175px]"
            src="/images/img_order-empty.svg"
            alt="order-empty"
          />
          <Text className="font-mohrroundedaltregular leading-[24.00px] mt-5 mb-7 text-base text-center text-gray-700 w-full">
            {t("productnotfound")}
          </Text>
          {/* <Button
            variant={"FillBlack"}
            size={"md"}
            className="w-[180px]"
            hover={true}
            hoverclass="bg-white-A700"
          >
            {t("shopNow")}
          </Button> */}
        </div>
      </div>
    </>
  );
};

export default EmptyListOrder;