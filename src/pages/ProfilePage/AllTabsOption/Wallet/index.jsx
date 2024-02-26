import { Button, Img, Line, Text } from "components";
import { useTranslation } from "react-i18next";
import AddMoney from "./AddMoney";
const Wallet = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col w-full ">
        <Text
          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
          size="txtMohrRoundedAltSemiBold24"
        >
          {t("wallet")}
        </Text>
        <div className="bg-gray-50_02 flex flex-col font-mohrroundedaltmedium items-center justify-start mt-[30px] p-5 rounded-lg w-full">
          <div className="flex xs:flex-col xs:gap-4 flex-row items-center justify-between w-full">
            <div className="flex flex-row gap-[20px] items-start justify-start">
              <Img
                className="h-10 md:mt-0 mt-[7px] w-10"
                src="/images/img_volume_black_900_28x28.svg"
                alt="volume_Two"
              />
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-2xl md:text-[22px] mb-1 text-black-900 sm:text-xl"
                  size="txtMohrRoundedAltSemiBold24"
                >
                  {t("sar")} 110.45
                </Text>
                <Text
                  className="text-black-900 text-xs"
                  size="txtMohrRoundedAltRegular12"
                >
                  {t("walletBalance")}
                </Text>
              </div>
            </div>
            <Button
              className="w-auto px-4 gap-2 flex items-center justify-center text-black-900"
              variant={"OutlineBlack"}
              size={"sm"}
              hover={true}
              hoverclass="bg-black-900"
              leftIcon={
                <Img
                  className="h-[18px] btn-icon"
                  src="/images/img_plus_black_900_20x20.svg"
                  alt="plus"
                />
              }
            >
              <div className=" text-center text-sm">{t("moneyToWallet")}</div>
            </Button>
          </div>
        </div>
        <Text
          className="mt-[34px] text-base text-black-900"
          size="txtMohrRoundedAltMedium16"
        >
          {t("transactionHistory")}
        </Text>
        <div className="relative w-full mb-8">
          <div className="bg-light_blue-50 mt-4 py-3 px-5 rounded w-full mb-4">
            <Text
              className="text-base text-black-900"
              size="txtMohrRoundedAltMedium16"
            >
              May 2023
            </Text>
          </div>
          <div className="flex flex-row items-start justify-between px-5">
            <div className="flex gap-[16px]">
              <Img
                className="h-10 w-10 mt-1"
                src="/images/money-added.svg"
                alt="moneyadded_Four"
              />
              <div className="flex flex-col relative w-full gap-1">
                <Text
                  className="text-base text-black-900"
                  size="txtMohrRoundedAltMedium16"
                >
                  {t("moneyAddedToWalletFrom")} xxxx 7658
                </Text>
                <Text
                  className="text-gray-700 text-xs"
                  size="txtMohrRoundedAltRegular12Gray700"
                >
                  05/06/2023 - 11:30 AM | {t("txnID")}: 547924398645
                </Text>
              </div>
            </div>
            <div className="flex flex-col relative gap-1">
              <Text
                className="text-base text-black-900 text-right"
                size="txtMohrRoundedAltMedium16"
              >
                {t("sar")} 50.00
              </Text>
              <Text
                className="text-gray-700 text-right text-xs"
                size="txtMohrRoundedAltRegular12Gray700"
              >
                {t("closingBal")}: {t("sar")} 110.45
              </Text>
            </div>
          </div>
          <Line className="bg-gray-300 h-px my-[13px] w-full" />
          <div className="flex flex-row items-start justify-between px-5">
            <div className="flex gap-[16px]">
              <Img
                className="h-10 w-10 mt-1"
                src="/images/money-added.svg"
                alt="moneyadded_Four"
              />
              <div className="flex flex-col relative w-full gap-1">
                <Text
                  className="text-base text-black-900"
                  size="txtMohrRoundedAltMedium16"
                >
                  {t("refundedBackOnOrderID")} - 12345678
                </Text>
                <Text
                  className="text-gray-700 text-xs"
                  size="txtMohrRoundedAltRegular12Gray700"
                >
                  05/06/2023 - 11:15 AM | {t("txnID")}: 547924398645
                </Text>
              </div>
            </div>
            <div className="flex flex-col relative gap-1">
              <Text
                className="text-base text-black-900 text-right"
                size="txtMohrRoundedAltMedium16"
              >
                {t("sar")} 50.00
              </Text>
              <Text
                className="text-gray-700 text-right text-xs"
                size="txtMohrRoundedAltRegular12Gray700"
              >
                {t("closingBal")}: {t("sar")} 110.45
              </Text>
            </div>
          </div>
          <Line className="bg-gray-300 h-px my-[13px] w-full" />
          <div className="flex flex-row items-start justify-between px-5">
            <div className="flex gap-[16px]">
              <Img
                className="h-10 w-10 mt-1"
                src="/images/money-paid.svg"
                alt="moneyadded_Four"
              />
              <div className="flex flex-col relative w-full gap-1">
                <Text
                  className="text-base text-black-900"
                  size="txtMohrRoundedAltMedium16"
                >
                  {t("paidOnPurchaseOfOrderID")} - 12345678
                </Text>
                <Text
                  className="text-gray-700 text-xs"
                  size="txtMohrRoundedAltRegular12Gray700"
                >
                  03/06/2023 - 09:24 PM | {t("txnID")}: 547924398645
                </Text>
              </div>
            </div>
            <div className="flex flex-col relative gap-1">
              <Text
                className="text-base text-black-900 text-right"
                size="txtMohrRoundedAltMedium16"
              >
                -{t("sar")} 50.00
              </Text>
              <Text
                className="text-gray-700 text-right text-xs"
                size="txtMohrRoundedAltRegular12Gray700"
              >
                {t("closingBal")}: {t("sar")} 110.45
              </Text>
            </div>
          </div>
          <Line className="bg-gray-300 h-px my-[13px] w-full" />
          <div className="flex flex-row items-start justify-between px-5">
            <div className="flex gap-[16px]">
              <Img
                className="h-10 w-10 mt-1"
                src="/images/money-added.svg"
                alt="moneyadded_Four"
              />
              <div className="flex flex-col relative w-full gap-1">
                <Text
                  className="text-base text-black-900"
                  size="txtMohrRoundedAltMedium16"
                >
                  {t("moneyAddedToWalletFrom")} admin
                </Text>
                <Text
                  className="text-gray-700 text-xs"
                  size="txtMohrRoundedAltRegular12Gray700"
                >
                  02/06/2023 - 07:00 PM | {t("txnID")}: 547924398645
                </Text>
                <Text
                  className="mt-0 text-gray-700 text-xs"
                  size="txtMohrRoundedAltRegular12Gray700"
                >
                  <b>{t("note")}:</b> Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </Text>
              </div>
            </div>
            <div className="flex flex-col relative gap-1">
              <Text
                className="text-base text-black-900 text-right"
                size="txtMohrRoundedAltMedium16"
              >
                {t("sar")} 50.00
              </Text>
              <div className="flex flex-row items-start justify-end">
                <Img
                  className="h-5 w-5 mx-1"
                  src="/images/img_warning.svg"
                  alt="warning"
                />
                <Text
                  className="text-red-A700 text-right text-xs"
                  size="txtMohrRoundedAltRegular12RedA700"
                >
                  {t("pending")}
                </Text>
              </div>
            </div>
          </div>
          <Line className="bg-gray-300 h-px my-[13px] w-full" />
          <div className="flex flex-row items-start justify-between px-5">
            <div className="flex gap-[16px]">
              <Img
                className="h-10 w-10 mt-1"
                src="/images/money-added.svg"
                alt="moneyadded_Four"
              />
              <div className="flex flex-col relative w-full gap-1">
                <Text
                  className="text-base text-black-900"
                  size="txtMohrRoundedAltMedium16"
                >
                  {t("refundedBackOnOrderID")} - 12345678
                </Text>
                <Text
                  className="text-gray-700 text-xs"
                  size="txtMohrRoundedAltRegular12Gray700"
                >
                  02/06/2023 - 10:12 AM | {t("txnID")}: 547924398645
                </Text>
              </div>
            </div>
            <div className="flex flex-col relative gap-1">
              <Text
                className="text-base text-black-900 text-right"
                size="txtMohrRoundedAltMedium16"
              >
                {t("sar")} 50.00
              </Text>
              <Text
                className="text-gray-700 text-right text-xs"
                size="txtMohrRoundedAltRegular12Gray700"
              >
                {t("closingBal")}: {t("sar")} 110.45
              </Text>
            </div>
          </div>
          <Line className="bg-gray-300 h-px my-[13px] w-full" />
          <div className="flex flex-row items-start justify-between px-5">
            <div className="flex gap-[16px]">
              <Img
                className="h-10 w-10 mt-1"
                src="/images/money-paid.svg"
                alt="moneyadded_Four"
              />
              <div className="flex flex-col relative w-full gap-1">
                <Text
                  className="text-base text-black-900"
                  size="txtMohrRoundedAltMedium16"
                >
                  {t("paidOnPurchaseOfOrderID")} - 12345678
                </Text>
                <Text
                  className="text-gray-700 text-xs"
                  size="txtMohrRoundedAltRegular12Gray700"
                >
                  01/06/2023 - 11:15 AM | {t("txnID")}: 547924398645
                </Text>
              </div>
            </div>
            <div className="flex flex-col relative gap-1">
              <Text
                className="text-base text-black-900 text-right"
                size="txtMohrRoundedAltMedium16"
              >
                -{t("sar")} 50.00
              </Text>
              <Text
                className="text-gray-700 text-right text-xs"
                size="txtMohrRoundedAltRegular12Gray700"
              >
                {t("closingBal")}: {t("sar")} 110.45
              </Text>
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <div className="bg-light_blue-50 mt-4 py-3 px-5 rounded w-full mb-4">
            <Text
              className="text-base text-black-900"
              size="txtMohrRoundedAltMedium16"
            >
              May 2023
            </Text>
          </div>
          <div className="flex flex-row items-start justify-between px-5">
            <div className="flex gap-[16px]">
              <Img
                className="h-10 w-10 mt-1"
                src="/images/money-added.svg"
                alt="moneyadded_Four"
              />
              <div className="flex flex-col relative w-full gap-1">
                <Text
                  className="text-base text-black-900"
                  size="txtMohrRoundedAltMedium16"
                >
                  {t("moneyAddedToWalletFrom")} xxxx 7658
                </Text>
                <Text
                  className="text-gray-700 text-xs"
                  size="txtMohrRoundedAltRegular12Gray700"
                >
                  05/06/2023 - 11:30 AM | {t("txnID")}: 547924398645
                </Text>
              </div>
            </div>
            <div className="flex flex-col relative gap-1">
              <Text
                className="text-base text-black-900 text-right"
                size="txtMohrRoundedAltMedium16"
              >
                {t("sar")} 50.00
              </Text>
              <Text
                className="text-gray-700 text-right text-xs"
                size="txtMohrRoundedAltRegular12Gray700"
              >
                {t("closingBal")}: {t("sar")} 110.45
              </Text>
            </div>
          </div>
          <Line className="bg-gray-300 h-px my-[13px] w-full" />
          <div className="flex flex-row items-start justify-between px-5">
            <div className="flex gap-[16px]">
              <Img
                className="h-10 w-10 mt-1"
                src="/images/money-added.svg"
                alt="moneyadded_Four"
              />
              <div className="flex flex-col relative w-full gap-1">
                <Text
                  className="text-base text-black-900"
                  size="txtMohrRoundedAltMedium16"
                >
                  {t("moneyAddedToWalletFrom")} admin
                </Text>
                <Text
                  className="text-gray-700 text-xs"
                  size="txtMohrRoundedAltRegular12Gray700"
                >
                  02/06/2023 - 07:00 PM | {t("txnID")}: 547924398645
                </Text>
              </div>
            </div>
            <div className="flex flex-col relative gap-1">
              <Text
                className="text-base text-black-900 text-right"
                size="txtMohrRoundedAltMedium16"
              >
                {t("sar")} 50.00
              </Text>
              <div className="flex flex-row items-start justify-end">
                <Img
                  className="h-5 w-5 mx-1"
                  src="/images/img_warning.svg"
                  alt="warning"
                />
                <Text
                  className="text-red-A700 text-right text-xs"
                  size="txtMohrRoundedAltRegular12RedA700"
                >
                  {t("failed")}
                </Text>
              </div>
            </div>
          </div>
          <Line className="bg-gray-300 h-px my-[13px] w-full" />
          <div className="flex flex-row items-start justify-between px-5">
            <div className="flex gap-[16px]">
              <Img
                className="h-10 w-10 mt-1"
                src="/images/money-paid.svg"
                alt="moneyadded_Four"
              />
              <div className="flex flex-col relative w-full gap-1">
                <Text
                  className="text-base text-black-900"
                  size="txtMohrRoundedAltMedium16"
                >
                  {t("refundedBackOnOrderID")} - 12345678
                </Text>
                <Text
                  className="text-gray-700 text-xs"
                  size="txtMohrRoundedAltRegular12Gray700"
                >
                  02/06/2023 - 10:12 AM | {t("txnID")}: 547924398645
                </Text>
                <Text
                  className="mt-0 text-gray-700 text-xs"
                  size="txtMohrRoundedAltRegular12Gray700"
                >
                  <b>{t("note")}:</b> Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </Text>
              </div>
            </div>
            <div className="flex flex-col relative gap-1">
              <Text
                className="text-base text-black-900 text-right"
                size="txtMohrRoundedAltMedium16"
              >
                -{t("sar")} 50.00
              </Text>
              <Text
                className="text-gray-700 text-right text-xs"
                size="txtMohrRoundedAltRegular12Gray700"
              >
                {t("closingBal")}: {t("sar")} 110.45
              </Text>
            </div>
          </div>
          <Line className="bg-gray-300 h-px my-[13px] w-full" />
        </div>
      </div>
      {/* after click // money to wallet button // show below content  */}
      <AddMoney />
    </>
  );
};

export default Wallet;
