import { Img, Line, Text } from "components";
import { useTranslation } from "react-i18next";

const ItemsBox = () => {
  const { t } = useTranslation();
  return (
    <>
      <Text className="font-mohrroundedaltregular text-[12px] text-gray-700 mt-8 mb-4">
        2 {t("items")}
      </Text>
      <div className="flex flex-row items-center justify-between mb-4 xs:flex-col xs:gap-4 xs:items-start">
        <div className="flex gap-[16px] items-center">
          <Img
            className="h-10 w-10 min-w-[40px] mt-1 rounded object-cover"
            src="/images/img_rectangle17564_21.png"
            alt="moneyadded_Four"
          />
          <div className="flex flex-col relative w-full gap-1">
            <Text className="text-left text-base text-black-900 font-mohrroundedaltmedium font-normal rtl:text-right">
              Fruit Vanilla Cake x 2
            </Text>
            <Text className="text-left text-gray-700 text-xs font-mohrroundedaltregular font-normal rtl:text-right">
              Vanilla cake, 1 kg, Confectionery, Fondant/ Sugar Paste
            </Text>
          </div>
        </div>
        <div className="flex flex-col relative gap-1 self-end">
          <Text className="text-sm text-gray-700 font-mohrroundedaltregular font-normal">
            {t("sar")} 310.00
          </Text>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between mb-4 xs:flex-col xs:gap-4 xs:items-start">
        <div className="flex gap-[16px] items-center">
          <Img
            className="h-10 w-10 min-w-[40px] mt-1 rounded object-cover"
            src="/images/img_rectangle17564_16.png"
            alt="moneyadded_Four"
          />
          <div className="flex flex-col relative w-full gap-1">
            <Text className="text-left text-base text-black-900 font-mohrroundedaltmedium font-normal rtl:text-right">
              Red Party Deflated Balloons x 2
            </Text>
          </div>
        </div>
        <div className="flex flex-col relative gap-1 self-end">
          <Text className="text-sm text-gray-700 font-mohrroundedaltregular font-normal">
            {t("sar")} 310.00
          </Text>
        </div>
      </div>
      <div className="relative mt-8 mb-8">
        <div className="p-2 bg-gray-50_02 flex items-center gap-4">
          <Img
            className="h-6 object-contain w-6"
            src="/images/img_thumbsup.svg"
            alt="thumbsup"
          />
          <input
            type="text"
            placeholder={t("Want this cake asap & delivery on the door")}
            className="border-[0] p-0 bg-transparent flex-1"
          />
        </div>
      </div>
      <Line className="bg-gray-300 h-px w-full" />
      <div className="flex flex-row items-center justify-between mt-4">
        <Text className="font-mohrroundedaltregular text-sm text-black-900">
          {t("itemTotal")}
        </Text>
        <Text className="font-mohrroundedaltregular text-sm text-gray-700">
          {t("sar")} 355.00
        </Text>
      </div>
      <div className="flex flex-row items-center justify-between mt-4">
        <Text className="font-mohrroundedaltregular text-sm text-gray-700">
          {t("deliveryFee")}
        </Text>
        <Text className="font-mohrroundedaltregular text-sm text-gray-700">
          {t("sar")} 355.00
        </Text>
      </div>
      <div className="flex flex-row items-center justify-between mt-4">
        <Text className="font-mohrroundedaltregular text-sm text-gray-700">
          {t("taxVAT")}
        </Text>
        <Text className="font-mohrroundedaltregular text-sm text-gray-700">
          {t("sar")} 53.25
        </Text>
      </div>
      <div className="flex flex-row items-center justify-between mt-4">
        <Text className="font-mohrroundedaltregular text-sm text-gray-700">
          {t("couponDiscount")}
        </Text>
        <Text className="font-mohrroundedaltregular text-sm text-teal-400">
          - {t("sar")} 25.00
        </Text>
      </div>
    </>
  );
};

export default ItemsBox;