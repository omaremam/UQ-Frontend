import { Button, Img, Text, Input } from "components";
import { useTranslation } from "react-i18next";
const StepsDeliveryAddress = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="relative flex flex-col w-full">
        {/* After fill Delivery Mode */}
        <div className="flex flex-col gap-4 items-center justify-start w-full mb-2">
          <div className="flex flex-row xs:flex-col md:gap-5 items-center xs:items-start justify-start w-full">
            <div className="flex flex-col gap-1 items-start justify-start flex-1">
              <Text className="text-base text-black-900 font-mohrroundedaltmedium">
                {t("deliveryAddress")}
              </Text>
              <div className="flex flex-col items-start justify-start">
                <Text className="text-gray-700 text-sm font-mohrroundedaltregular w-[80%] xs:w-full">
                  {t("forYourGiftAddDeliveryAddress")}
                </Text>
                <Text className="text-gray-700 text-sm font-mohrroundedaltregular w-[80%] xs:w-full">
                  1st Floor, Building A, King Abdulaziz Road, Riyadh 12331 Saudi
                  Arabia
                </Text>
              </div>
            </div>
            <Button
              className="w-auto mx-auto px-3 py-1.5 text-sm sm:mx-0"
              size="sm"
              variant="OutlineBlack"
            >
              {t("change")}
            </Button>
          </div>
        </div>
        {/* After fill Delivery Mode */}
        <div className="flex flex-row md:flex-col flex-wrap w-full gap-x-3 md:gap-y-3 mt-[22px] mb-[18px]">
          <div className="mt-2.5 w-full">
            <div className="w-full max-w-[448px]">
              <div className="w-full flex flex-row gap-x-5 mt-3 xs:flex-col">
                <Input
                  required
                  startAdornment={
                    <Img
                      className="mr-3 rtl:mr-0 rtl:ml-3 mt-1"
                      src="/images/location_on.png"
                      alt=""
                    />
                  }
                  label={t("streetNumber")}
                />
              </div>
              <div className="w-full flex flex-row gap-x-5">
                <div className="w-full flex flex-row gap-x-5 xs:flex-col">
                  <Input required label={t("buildingNumber")} />
                </div>
                <div className="w-full flex flex-row gap-x-5 xs:flex-col">
                  <Input required label={t("floorSlashApartment")} />
                </div>
              </div>
              <div className="w-full max-w-[350px] mt-3 flex flex-row gap-4 mb-[18px]">
                <Button
                  className="flex-1 mx-auto bg-gray-300 border-gray-300"
                  size="lg"
                  variant="FillBlack"
                  style={{ color: "rgba(0,0,0,0.38)" }}
                >
                  {t("continue")}
                </Button>
                <Button
                  className="flex-1 mx-auto"
                  size="lg"
                  variant="FillBlack"
                >
                  {t("continue")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepsDeliveryAddress;
