import { Button, Img, Input, Line, Radio, Text } from "components";
// Importing localization strings
import { useTranslation } from "react-i18next";
const RegisterAsVendor = ({ closepopup }) => {
  const { t } = useTranslation();
  const closepopupout = () => {
    closepopup(false)
    document.body.classList.remove("overflow-hidden");
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-auto w-fit h-fit xs:w-full xs:px-4">
        <div className="relative w-auto my-6 mx-auto max-w-[680px] min-w-[680px] xs:w-full xs:min-w-full xs:max-w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white-A700 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-row items-start justify-end w-auto pt-4 pr-4 rtl:pr-0 rtl:pl-4 absolute right-0 rtl:right-auto rtl:left-0">
                  <Img
                    src="/images/img_close_gray_700.svg"
                    className="common-pointer h-3 w-3"
                    alt="close"
                    onClick={() => closepopupout()}
                  />
                </div>
              </div>
            </div>
            {/*body*/}
            <div className="bg-white-A700 flex flex-col items-center justify-start pt-5 rounded-lg w-[100%] md:w-full">
              <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                <div className="flex xs:flex-col flex-row xs:gap-3 items-start justify-start w-full px-7 xs:px-4">
                  <div className="flex flex-col gap-1 items-start justify-start">
                    <Text
                      className="text-black-900 text-2xl font-mohrroundedaltsemibold"
                    >
                      {t("becomeAVendor")}
                    </Text>
                    <Text
                      className="text-gray-700 text-sm font-mohrroundedaltregular"
                    >
                      {t("enterBelowDetailsToRegisterWithUsAndExploreOurFeatures")}
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-100_01 h-1 w-full" />
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start gap-6 relative w-full h-[315px] xs:h-[245px] overflow-y-auto">
                    <div className="flex flex-col items-center justify-start w-full px-7 xs:px-4">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="text-start w-full">
                          <Text
                            className="text-black-900 text-[16px] font-semibold mb-5"
                            size="txtMohrRoundedAltRegular12"
                          >
                            {t("yourDetails")}
                          </Text>
                        </div>
                        <div className="flex flex-row xs:flex-col items-start justify-start gap-x-5 w-full">
                          <Input required label={t("name")} className="mb-0 mt-5" />
                          <Input required label={t("mobile")} className="mb-0 mt-5" />
                        </div>
                        <div className="flex flex-row xs:flex-col items-start justify-start gap-x-5 w-full">
                          <Input required label={t("email")} className="mb-0 mt-5" />
                          <Input required label={t("tradeMark")} className="mb-0 mt-5" />
                        </div>
                      </div>
                    </div>
                    <Line className="flex flex-col bg-gray-300 min-h-[1px] w-full -mt-6" />
                    <div className="flex flex-col items-center justify-start w-full px-7 xs:px-4">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="text-start w-full">
                          <Text
                            className="text-black-900 text-[16px] font-semibold"
                            size="txtMohrRoundedAltRegular12"
                          >
                            {t("yourJobRole")}
                          </Text>
                        </div>
                        <div className="flex flex-row flex-wrap items-start justify-start gap-x-5 gap-y-4 mt-4 w-full">
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t("owner")}
                            </Text>
                          </div>
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t("generalDirector")}
                            </Text>
                          </div>
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t("operationalManager")}
                            </Text>
                          </div>
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t("directorOfDevelopment")}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="flex flex-col bg-gray-300 min-h-[1px] w-full" />
                    <div className="flex flex-col items-center justify-start w-full px-7 xs:px-4">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="text-start w-full">
                          <Text
                            className="text-black-900 text-[16px] font-semibold"
                            size="txtMohrRoundedAltRegular12"
                          >
                            {t("numberOfBranches")}
                          </Text>
                        </div>
                        <div className="flex flex-row flex-wrap items-start justify-start gap-x-5 gap-y-4 mt-4 w-full">
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t("iWorkFromHome")}
                            </Text>
                          </div>
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t("oneBranch")}
                            </Text>
                          </div>
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t("twoBranches")}
                            </Text>
                          </div>
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              3 {t("branches")}
                            </Text>
                          </div>
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t("moreThan")} 3 {t("branches")}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="flex flex-col bg-gray-300 min-h-[1px] w-full" />
                    <div className="flex flex-col items-center justify-start w-full px-7 xs:px-4">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="text-start w-full">
                          <Text
                            className="text-black-900 text-[16px] font-semibold"
                            size="txtMohrRoundedAltRegular12"
                          >
                            {t("isTheBrandLocalOrAFranchise")}
                          </Text>
                        </div>
                        <div className="flex flex-row flex-wrap items-start justify-start gap-x-5 gap-y-4 mt-4 w-full">
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t("local")}
                            </Text>
                          </div>
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t("franchise")}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="flex flex-col bg-gray-300 min-h-[1px] w-full" />
                    <div className="flex flex-col items-center justify-start w-full px-7 xs:px-4">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="text-start w-full mb-4">
                          <Text
                            className="text-black-900 text-[16px] font-semibold"
                            size="txtMohrRoundedAltRegular12"
                          >
                            {t("whatProductsAreYouSelling")}
                          </Text>
                        </div>
                        <div className="flex flex-row xs:flex-col items-start justify-start gap-x-5 w-full">
                          <Input required label={t("yourAnswer")} className="mb-0 mt-5" />
                        </div>
                      </div>
                    </div>
                    <Line className="flex flex-col bg-gray-300 min-h-[1px] w-full -mt-6" />
                    <div className="flex flex-col items-center justify-start w-full px-7 xs:px-4">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="text-start w-full mb-4">
                          <Text
                            className="text-black-900 text-[16px] font-semibold"
                            size="txtMohrRoundedAltRegular12"
                          >
                            {t("socialMediaPageLinks")}
                          </Text>
                        </div>
                        <div className="flex flex-row xs:flex-col items-start justify-start gap-x-5 w-full">
                          <Input required label={t("yourAnswer")} className="mb-0 mt-5" />
                        </div>
                      </div>
                    </div>
                    <Line className="flex flex-col bg-gray-300 min-h-[1px] w-full -mt-6" />
                    <div className="flex flex-col items-center justify-start w-full px-7 xs:px-4">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="text-start w-full mb-4">
                          <Text
                            className="text-black-900 text-[16px] font-semibold"
                            size="txtMohrRoundedAltRegular12"
                          >
                            {t("websiteLink")}
                          </Text>
                        </div>
                        <div className="flex flex-row xs:flex-col items-start justify-start gap-x-5 w-full">
                          <Input required label={t("yourAnswer")} className="mb-0 mt-5" />
                        </div>
                      </div>
                    </div>
                    <Line className="flex flex-col bg-gray-300 min-h-[1px] w-full -mt-6" />
                    <div className="flex flex-col items-center justify-start w-full px-7 xs:px-4">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="text-start w-full">
                          <Text
                            className="text-black-900 text-[16px] font-semibold"
                            size="txtMohrRoundedAltRegular12"
                          >
                            {t("whatProblemsDoYouFaceRegardingYourCustomersOrder")}
                          </Text>
                        </div>
                        <div className="flex flex-row flex-wrap items-start justify-start gap-x-5 gap-y-4 mt-4 w-full">
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t('iReceivedTheMeltedCake')}
                            </Text>
                          </div>
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t('deliveryDelayed')}
                            </Text>
                          </div>
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t('theWritingIsWrong')}
                            </Text>
                          </div>
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t('theRequestIsIncomplete')}
                            </Text>
                          </div>
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t('iLikedTheTaste')}
                            </Text>
                          </div>
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t('other')}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="flex flex-col bg-gray-300 min-h-[1px] w-full" />
                    <div className="flex flex-col items-center justify-start w-full px-7 xs:px-4">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="text-start w-full">
                          <Text
                            className="text-black-900 text-[16px] font-semibold"
                            size="txtMohrRoundedAltRegular12"
                          >
                            {t("doesYourCustomerPreferToRequestDeliveryOrCollectionFromTheBranch")}
                          </Text>
                        </div>
                        <div className="flex flex-row flex-wrap items-start justify-start gap-x-5 gap-y-4 mt-4 w-full">
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t('delivery')}
                            </Text>
                          </div>
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t('toReceive')}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="flex flex-col bg-gray-300 min-h-[1px] w-full" />
                    <div className="flex flex-col items-center justify-start w-full px-7 xs:px-4">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="text-start w-full">
                          <Text
                            className="text-black-900 text-[16px] font-semibold"
                            size="txtMohrRoundedAltRegular12"
                          >
                            {t("whatIsYourAverageMonthlySales")}
                          </Text>
                        </div>
                        <div className="flex flex-row flex-wrap items-start justify-start gap-x-5 gap-y-4 mt-4 w-full">
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t('lessThan')} 10,000 {t("riyals")}
                            </Text>
                          </div>
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t('between')} 10,000 and 50,000 {t("riyals")}
                            </Text>
                          </div>
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t('from')} 50 to 100,000 {t("riyals")}
                            </Text>
                          </div>
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t('from')} 100,000 to 200,000 {t("riyals")}
                            </Text>
                          </div>
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t('moreThan')} 200,000 {t("riyals")}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="flex flex-col bg-gray-300 min-h-[1px] w-full" />
                    <div className="flex flex-col items-center justify-start w-full px-7 xs:px-4">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="text-start w-full">
                          <Text
                            className="text-black-900 text-[16px] font-semibold"
                            size="txtMohrRoundedAltRegular12"
                          >
                            {t("doYouMakeYourProductOrBuyItReady")}
                          </Text>
                        </div>
                        <div className="flex flex-row flex-wrap items-start justify-start gap-x-5 gap-y-4 mt-4 w-full">
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t('iManufactureMyOwnProduct')}
                            </Text>
                          </div>
                          <div className="flex items-center">
                            <Radio />
                            <Text
                              className="ml-[8px] text-[14px] text-basetext-black-900 rtl:ml-0 rtl:mr-[8px]"
                              size="txtMohrRoundedAltRegular16"
                            >
                              {t('iBuyItReady')}
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="flex flex-col bg-gray-300 min-h-[1px] w-full" />
                    <div className="flex flex-col items-center justify-start w-full px-7 xs:px-4">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="text-start w-full mb-4">
                          <Text
                            className="text-black-900 text-[16px] font-semibold"
                            size="txtMohrRoundedAltRegular12"
                          >
                            {t("doYouPreferToManufactureYourProductYourselfMarketAndDeliverItToUsOrDoWeManufactureMarketAndSellYourProduct")}
                          </Text>
                        </div>
                        <div className="flex flex-row xs:flex-col items-start justify-start gap-x-5 w-full">
                          <Input required label={t("yourAnswer")} className="mb-0 mt-5" />
                        </div>
                      </div>
                    </div>
                    <Line className="flex flex-col bg-gray-300 min-h-[1px] w-full -mt-6" />
                    <div className="flex flex-col items-center justify-start w-full px-7 xs:px-4">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="text-start w-full mb-4">
                          <Text
                            className="text-black-900 text-[16px] font-semibold"
                            size="txtMohrRoundedAltRegular12"
                          >
                            {t("whatAreTheMostProminentFeaturesThatYouHopeToHaveInYourProductDeliveryApp")}
                          </Text>
                        </div>
                        <div className="flex flex-row xs:flex-col items-start justify-start gap-x-5 w-full">
                          <Input required label={t("yourAnswer")} className="mb-0 mt-5" />
                        </div>
                      </div>
                    </div>
                    <Line className="flex flex-col bg-gray-300 min-h-[1px] w-full -mt-6" />
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-start mt-5 pb-5 rounded-bl-lg rounded-br-lg w-full">
                    <div className="flex flex-col gap-5 items-center justify-start w-full">
                      <Line className="bg-gray-100_01 h-1 w-full" />
                      <div className="flex flex-row items-center justify-center w-full px-7 xs:px-4">
                        <Button className="common-pointer bg-black-900 border border-black-900 cursor-pointer h-auto py-3 xs:px-3.5 rounded text-base text-center text-white-A700 w-[300px] xs:w-auto"
                          hover={true} hoverclass="bg-white-A700">
                          {t("register")}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-75 fixed inset-0 z-40 bg-black-900" onClick={() => closepopupout()}></div>
    </>
  );
};
export { RegisterAsVendor };