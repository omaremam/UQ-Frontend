import { Img, Text } from "components";
import { useTranslation } from "react-i18next";
const TotalBillSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-row xs:flex-col gap-4 items-start justify-start w-full">
        <div className="flex flex-col gap-1 items-start justify-start w-full">
          <Text className="font-mohrroundedaltregular text-sm text-gray-700 mb-2">
            {t("paidviaBankAndWallet")}
          </Text>
          <div className="p-2 bg-gray-50_02 flex items-center gap-4 p-3 min-w-[320px] xs:min-w-full xs:flex-wrap">
            <Img
              className="h-10 object-contain w-12 bg-white rounded px-2 py-3"
              src="/images/img_logosvisa.png"
              alt="img_logosvisa"
            />
            <div className="relative flex flex-col gap-1">
              <Text className="font-mohrroundedaltregular text-sm text-black-900">
                {t("paidByCardEndingIn")} xxxx 1301
              </Text>
              <Text className="font-mohrroundedaltregular text-[12px] text-gray-700">
                {t("transactionID")} : #547924398645
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-end justify-start w-full">
          <div className="flex flex-row relative justify-end w-full gap-1 mb-3">
            <Text className="text-base text-black-900 font-mohrroundedaltregular font-normal">
              {t("billTotal")} :
            </Text>
            <Text className="text-black-900 text-base font-mohrroundedaltmedium font-normal min-w-[130px] text-right">
              {t("sar")} 398.25
            </Text>
          </div>
          <div className="flex flex-row relative justify-end w-full gap-1 mb-2">
            <Text className="text-sm text-gray-700 font-mohrroundedaltregular font-normal">
              {t("wallet")} :
            </Text>
            <Text className="text-gray-700 text-sm font-mohrroundedaltregular font-normal min-w-[130px] text-right">
              {t("sar")} 212.15
            </Text>
          </div>
          <div className="flex flex-row relative justify-end w-full gap-1 mb-2">
            <Text className="text-sm text-gray-700 font-mohrroundedaltregular font-normal">
              {t("netPaid")} :
            </Text>
            <Text className="text-gray-700 text-sm font-mohrroundedaltregular font-normal min-w-[130px] text-right">
              {t("sar")} 186.10
            </Text>
          </div>
        </div>
      </div>
      {/* Show this Order Details - Custom Cake */}
      <div className="flex flex-row xs:flex-col gap-4 items-start justify-start w-full">
        <div className="flex bg-red-50_01 flex-row gap-2 items-start justify-start w-auto rounded px-3 py-1.5">
          <Img
            className="h-[18px] object-contain w-[18px]"
            src="/images/pending.svg"
            alt="img_logosvisa"
          />
          <Text className="font-mohrroundedaltmedium text-sm text-gray-900_01 whitespace-nowrap	">
            {t("paymentIncomplete")}
          </Text>
        </div>
        <div className="flex flex-col gap-1 items-end justify-start w-full flex-1">
          <div className="flex flex-row relative justify-end w-full gap-1">
            <Text className="text-base text-black-900 font-mohrroundedaltregular font-normal">
              {t("billTotal")} :
            </Text>
            <Text className="text-black-900 text-base font-mohrroundedaltmedium font-normal min-w-[130px] text-right">
              {t("sar")} 398.25
            </Text>
          </div>
        </div>
      </div>
      {/* Show this Order Details - Custom Cake */}
    </>
  );
};

export default TotalBillSection;