import { Img, Text } from "components";
import { useTranslation } from "react-i18next";

const PickUpPointAddress = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-light_blue-50 flex flex-col justify-start mt-6 p-5 rounded w-full">
        <div className="flex flex-row gap-3 justify-start">
          <Img src="/images/img_info-black.svg" className="w-6 h-6" alt="info" />
          <div className="relative">
            <Text className="font-mohrroundedaltregular text-sm flex text-black-900 leading-[24px]">
              {t("theDeliveryBoyTriedToContactYouButGotNoResponseDot")}
            </Text>
            <Text className="font-mohrroundedaltregular text-sm inline items-center text-black-900 leading-[24px] mb-3">
              {t("youWillHaveToPickYourOrder")}{" "}
              <Text className="font-mohrroundedaltsemibold text-sm text-black-900 inline">
                {t("todayUppercase")}
              </Text>{" "}
              {t("fromTheBelowPickupPointOrElseYourOrderWillGetCancelledDot")}
            </Text>
            <Text className="font-mohrroundedaltsemibold text-base flex text-black-900 leading-[24px] mb-1">
              King Abdulaziz Road, Riyadh
            </Text>
            <Text className="font-mohrroundedaltregular text-[12px] flex text-gray-700 leading-[24px]">
              {t("pickUpPointAddress")}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default PickUpPointAddress;