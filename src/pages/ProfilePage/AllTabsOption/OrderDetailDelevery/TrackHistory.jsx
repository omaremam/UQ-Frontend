import { Button, Img, Line, Text } from "components";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const TrackHistory = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };
  return (
    <>
      {/* this is unabled to process Track History */}
      <div>
        <Line className="bg-gray-300 h-px w-[95%] xs:w-full ltr:ml-auto rtl:mr-auto mt-10" />
        <div
          className="flex flex-col gap-[0px] items-center justify-start w-full"
          onClick={toggleVisibility}
        >
          <div className="flex xs:flex-col xs:flex-wrap flex-row py-3 items-center justify-between xs:items-start w-full">
            <div className="flex flex-row gap-4 items-center justify-start w-auto cursor-pointer w-full">
              <Img
                className="h-8 w-8"
                src="/images/img_info-red.svg"
                alt="warning"
              />
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                {t("unableToProcessOn")} 16/06/2023 - 11:20 AM
              </Text>
            </div>
            <Button
              className="px-3 flex items-end justify-end text-red-700 font-mohrroundedaltmedium xs:ml-auto"
              size="md"
              rightIcon={
                <Img
                  className="h-5 w-5"
                  src="/images/dow-red-icon.svg"
                  alt="arrow_down"
                />
              }
            >
              {t("trackHistory")}
            </Button>
          </div>
        </div>
        <Line className="bg-gray-300 h-px w-full w-[95%] xs:w-full ltr:ml-auto rtl:mr-auto" />
        <div className={`toggle-content pl-1 ${isVisible ? "show" : ""}`}>
          <div className="flex flex-row gap-4 items-start justify-start w-full mt-5 mb-5 relative xs:flex-wrap">
            <div className="progress-line success"></div>
            <Img
              className="h-6 w-6 relative z-[10]"
              src="/images/img_check_circle.svg"
              alt="check"
            />
            <div className="flex flex-col items-start justify-start w-full title  ">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                {t("Placed")}
              </Text>
              <Text className="text-gray-700 text-[12px] w-auto font-mohrroundedaltregular">
                {t("waitingForStoreToAcceptTheOrder")}
              </Text>
            </div>
            <div className="flex flex-col items-end justify-start w-auto xs:ml-10">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltregular whitespace-nowrap">
                16/06/2023 - 11:15 AM
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-full mt-5 mb-5 relative xs:flex-wrap">
            <div className="progress-line error"></div>
            <Img
              className="h-6 w-6 relative z-[10]"
              src="/images/img_info-red.svg"
              alt="check"
            />
            <div className="flex flex-col items-start justify-start w-full title  ">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                {t("unableToProcess")}
              </Text>
              <Text className="text-gray-700 text-[12px] w-auto font-mohrroundedaltregular">
                {t("theStoreIsNotAbleToProcessYourOrder")}
              </Text>
            </div>
            <div className="flex flex-col items-end justify-start w-auto xs:ml-10">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltregular whitespace-nowrap">
                16/06/2023 - 11:20 AM
              </Text>
            </div>
          </div>
          <Line className="bg-gray-300 h-px w-[95%] xs:w-full ltr:ml-auto rtl:mr-auto" />
          <div className="flex flex-row gap-4 items-start justify-start w-[95%] xs:w-full ltr:ml-auto rtl:mr-auto mt-5 mb-5 relative">
            <div className="flex flex-col items-start justify-start w-full title  ">
              <Text className="text-gray-700 text-[12px] w-auto font-mohrroundedaltregular mb-1">
                {t("reason")}
              </Text>
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                {t(
                  "dueToLessAvailabilityOfProductWeWillBeUnableToProcessYourOrder"
                )}
              </Text>
            </div>
          </div>
        </div>
      </div>
      {/* end */}
      {/* this is Cancelled on Track History */}
      <div>
        <Line className="bg-gray-300 h-px w-[95%] xs:w-full ltr:ml-auto rtl:mr-auto mt-10" />
        <div
          className="flex flex-col gap-[0px] items-center justify-start w-full"
          onClick={toggleVisibility}
        >
          <div className="flex xs:flex-col xs:flex-wrap flex-row py-3 items-center justify-between xs:items-end w-full">
            <div className="flex flex-row gap-4 items-center justify-start w-auto cursor-pointer w-full">
              <Img
                className="h-8 w-8"
                src="/images/img_info-red.svg"
                alt="warning"
              />
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                {t("cancelledOn")} 21/06/2023 - 12:30 PM{" "}
                <br className="xs:hidden" />
                {t("asPerYourRequest")}
              </Text>
            </div>
            <Button
              className="px-3 flex items-end justify-end text-red-700 font-mohrroundedaltmedium"
              size="md"
              rightIcon={
                <Img
                  className="h-5 w-5"
                  src="/images/dow-red-icon.svg"
                  alt="arrow_down"
                />
              }
            >
              {t("trackHistory")}
            </Button>
          </div>
        </div>
        <Line className="bg-gray-300 h-px w-full w-full ltr:ml-auto rtl:mr-auto" />
        <div className={`toggle-content pl-1 ${isVisible ? "show" : ""}`}>
          <div className="flex flex-row gap-4 items-start justify-start w-full mt-5 mb-5 relative xs:flex-wrap">
            <div className="progress-line success"></div>
            <Img
              className="h-6 w-6 relative z-[10]"
              src="/images/img_check_circle.svg"
              alt="check"
            />
            <div className="flex flex-col items-start justify-start w-full title  ">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                {t("placed")}
              </Text>
              <Text className="text-gray-700 text-[12px] w-auto font-mohrroundedaltregular">
                {t("waitingForStoreToAcceptTheOrder")}
              </Text>
            </div>
            <div className="flex flex-col items-end justify-start w-auto xs:ml-10">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltregular whitespace-nowrap">
                16/06/2023 - 11:15 AM
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-full mt-5 mb-5 relative xs:flex-wrap">
            <div className="progress-line success"></div>
            <Img
              className="h-6 w-6 relative z-[10]"
              src="/images/img_check_circle.svg"
              alt="check"
            />
            <div className="flex flex-col items-start justify-start w-full title  ">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                {t("confirmed")}
              </Text>
              <Text className="text-gray-700 text-[12px] w-auto font-mohrroundedaltregular">
                {t("orderHasBeenAcceptedByTheAdminPanel")}
              </Text>
            </div>
            <div className="flex flex-col items-end justify-start w-auto xs:ml-10">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltregular whitespace-nowrap">
                16/06/2023 - 11:25 AM
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-full mt-5 mb-5 relative xs:flex-wrap">
            <div className="progress-line error"></div>
            <Img
              className="h-6 w-6 relative z-[10]"
              src="/images/img_info-red.svg"
              alt="check"
            />
            <div className="flex flex-col items-start justify-start w-full title  ">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                {t("cancelled")}
              </Text>
              <Text className="text-gray-700 text-[12px] w-auto font-mohrroundedaltregular">
                {t("yourOrderHasBeenCancelledAsPerYourRequest")}
              </Text>
            </div>
            <div className="flex flex-col items-end justify-start w-auto xs:ml-10">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltregular whitespace-nowrap">
                21/06/2023 - 12:30 PM
              </Text>
            </div>
          </div>
          <Line className="bg-gray-300 h-px w-[95%] xs:w-full ltr:ml-auto rtl:mr-auto" />
          <div className="flex flex-row gap-4 items-start justify-start w-[95%] xs:w-full ltr:ml-auto rtl:mr-auto mt-5 mb-5 relative">
            <div className="flex flex-col items-start justify-start w-full title  ">
              <Text className="text-gray-700 text-[12px] w-auto font-mohrroundedaltregular mb-1">
                {t("reason")}
              </Text>
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                {t("dueToLessAvailabilityOfProductWeHaveToCancelYourOrder")}
              </Text>
            </div>
          </div>
        </div>
      </div>
      {/* end */}
      {/* this is No Show on Track History */}
      <div>
        <Line className="bg-gray-300 h-px w-[95%] xs:w-full ltr:ml-auto rtl:mr-auto mt-10" />
        <div
          className="flex flex-col gap-[0px] items-center justify-start w-full"
          onClick={toggleVisibility}
        >
          <div className="flex xs:flex-col xs:flex-wrap flex-row py-3 items-center justify-between xs:items-end w-full">
            <div className="flex flex-row gap-4 items-center justify-start w-auto cursor-pointer w-full">
              <Img
                className="h-8 w-8"
                src="/images/img_close-red.svg"
                alt="warning"
              />
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                {t("noShowOn")} 24/06/2023 - 03:00 PM{" "}
                <br className="xs:hidden" />
                {t("by")} Allex Carry
              </Text>
            </div>
            <Button
              className="px-3 flex items-end justify-end text-red-700 font-mohrroundedaltmedium"
              size="md"
              rightIcon={
                <Img
                  className="h-5 w-5"
                  src="/images/dow-red-icon.svg"
                  alt="arrow_down"
                />
              }
            >
              {t("trackHistory")}
            </Button>
          </div>
        </div>
        <Line className="bg-gray-300 h-px w-full w-full ltr:ml-auto rtl:mr-auto" />
        <div className={`toggle-content pl-1 ${isVisible ? "show" : ""}`}>
          <div className="flex flex-row gap-4 items-start justify-start w-full mt-5 mb-5 relative xs:flex-wrap">
            <div className="progress-line success"></div>
            <Img
              className="h-6 w-6 relative z-[10]"
              src="/images/img_check_circle.svg"
              alt="check"
            />
            <div className="flex flex-col items-start justify-start w-full title  ">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                {t("placed")}
              </Text>
              <Text className="text-gray-700 text-[12px] w-auto font-mohrroundedaltregular">
                {t("waitingForStoreToAcceptTheOrder")}
              </Text>
            </div>
            <div className="flex flex-col items-end justify-start w-auto xs:ml-10">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltregular whitespace-nowrap">
                16/06/2023 - 11:15 AM
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-full mt-5 mb-5 relative xs:flex-wrap">
            <div className="progress-line success"></div>
            <Img
              className="h-6 w-6 relative z-[10]"
              src="/images/img_check_circle.svg"
              alt="check"
            />
            <div className="flex flex-col items-start justify-start w-full title  ">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                {t("confirmed")}
              </Text>
              <Text className="text-gray-700 text-[12px] w-auto font-mohrroundedaltregular">
                {t("orderHasBeenAcceptedByTheAdminPanel")}
              </Text>
            </div>
            <div className="flex flex-col items-end justify-start w-auto xs:ml-10">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltregular whitespace-nowrap">
                16/06/2023 - 11:25 AM
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-full mt-5 mb-5 relative xs:flex-wrap">
            <div className="progress-line success"></div>
            <Img
              className="h-6 w-6 relative z-[10]"
              src="/images/img_check_circle.svg"
              alt="check"
            />
            <div className="flex flex-col items-start justify-start w-full title  ">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                {t("processing")}
              </Text>
              <Text className="text-gray-700 text-[12px] w-auto font-mohrroundedaltregular">
                {t("orderHasBeenSentForThePreparation")}
              </Text>
            </div>
            <div className="flex flex-col items-end justify-start w-auto xs:ml-10">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltregular whitespace-nowrap">
                21/06/2023 - 12:30 PM
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-full mt-5 mb-5 relative xs:flex-wrap">
            <div className="progress-line success"></div>
            <Img
              className="h-6 w-6 relative z-[10]"
              src="/images/img_check_circle.svg"
              alt="check"
            />
            <div className="flex flex-col items-start justify-start w-full title  ">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                {t("outForDelivery")}
              </Text>
              <Text className="text-gray-700 text-[12px] w-auto font-mohrroundedaltregular">
                {t("yourOrderWillBeDeliveredToYouShortly")}
              </Text>
            </div>
            <div className="flex flex-col items-end justify-start w-auto xs:ml-10">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltregular whitespace-nowrap">
                24/06/2023 - 02:45 PM
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-full mt-5 mb-5 relative xs:flex-wrap">
            <div className="progress-line error"></div>
            <Img
              className="h-6 w-6 relative z-[10]"
              src="/images/img_close-red.svg"
              alt="check"
            />
            <div className="flex flex-col items-start justify-start w-full title  ">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                {t("noShow")}
              </Text>
              <Text className="text-gray-700 text-[12px] w-auto font-mohrroundedaltregular">
                {t("driverWasUnableToContactYou")}
              </Text>
            </div>
            <div className="flex flex-col items-end justify-start w-auto xs:ml-10">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltregular whitespace-nowrap">
                24/06/2023 - 03:00 PM
              </Text>
            </div>
          </div>
        </div>
      </div>
      {/* end */}
      {/* this is Out for Delivery on Track History */}
      <div>
        <Line className="bg-gray-300 h-px w-[95%] xs:w-full ltr:ml-auto rtl:mr-auto mt-10" />
        <div
          className="flex flex-col gap-[0px] items-center justify-start w-full"
          onClick={toggleVisibility}
        >
          <div className="flex sm:flex-wrap flex-row py-3 items-center justify-between sm:justify-end w-full">
            <div className="flex flex-row gap-4 items-center justify-start w-auto cursor-pointer w-full">
              <Img
                className="h-8 w-8"
                src="/images/img_check_circle.svg"
                alt="warning"
              />
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                {t("outForDeliveryOn")} 24/06/2023 - 02:45 PM{" "}
                <br className="xs:hidden" />
                {t("by")} Allex Carry
              </Text>
            </div>
            <Button className="flex items-center justify-center bg-red-50 cursor-pointer font-mohrroundedaltregular ltr:ml-auto rtl:mr-auto xs:ml-4 py-1 px-2 rounded text-center text-gray-900_01 text-xs w-auto">
              {t("arrivingSoon")}
            </Button>
            <Button className="flex items-center justify-center bg-red-50 cursor-pointer font-mohrroundedaltregular ltr:ml-auto rtl:mr-auto xs:ml-4 py-1 px-2 rounded text-center text-gray-900_01 text-xs w-auto">
              {t("expectedDeliveryTime")}{" "}
              <Text className="font-mohrroundedaltmedium"> 02 hrs</Text>
            </Button>
            <Button
              className="px-3 flex items-end justify-end text-red-700 font-mohrroundedaltmedium"
              size="md"
              rightIcon={
                <Img
                  className="h-5 w-5"
                  src="/images/dow-red-icon.svg"
                  alt="arrow_down"
                />
              }
            >
              {t("trackHistory")}
            </Button>
          </div>
        </div>
        <Line className="bg-gray-300 h-px w-full w-full ltr:ml-auto rtl:mr-auto" />
        <div className={`toggle-content pl-1 ${isVisible ? "show" : ""}`}>
          <div className="flex flex-row gap-4 items-start justify-start w-full mt-5 mb-5 relative xs:flex-wrap">
            <div className="progress-line success"></div>
            <Img
              className="h-6 w-6 relative z-[10]"
              src="/images/img_check_circle.svg"
              alt="check"
            />
            <div className="flex flex-col items-start justify-start w-full title  ">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                {t("placed")}
              </Text>
              <Text className="text-gray-700 text-[12px] w-auto font-mohrroundedaltregular">
                {t("waitingForStoreToAcceptTheOrder")}
              </Text>
            </div>
            <div className="flex flex-col items-end justify-start w-auto xs:ml-10">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltregular whitespace-nowrap">
                16/06/2023 - 11:15 AM
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-full mt-5 mb-5 relative xs:flex-wrap">
            <div className="progress-line success"></div>
            <Img
              className="h-6 w-6 relative z-[10]"
              src="/images/img_check_circle.svg"
              alt="check"
            />
            <div className="flex flex-col items-start justify-start w-full title  ">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                {t("confirmed")}
              </Text>
              <Text className="text-gray-700 text-[12px] w-auto font-mohrroundedaltregular">
                {t("orderHasBeenAcceptedByTheAdminPanel")}
              </Text>
            </div>
            <div className="flex flex-col items-end justify-start w-auto xs:ml-10">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltregular whitespace-nowrap">
                16/06/2023 - 11:25 AM
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-full mt-5 mb-5 relative xs:flex-wrap">
            <div className="progress-line success"></div>
            <Img
              className="h-6 w-6 relative z-[10]"
              src="/images/img_check_circle.svg"
              alt="check"
            />
            <div className="flex flex-col items-start justify-start w-full title  ">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                {t("processing")}
              </Text>
              <Text className="text-gray-700 text-[12px] w-auto font-mohrroundedaltregular">
                {t("orderHasBeenSentForThePreparation")}
              </Text>
            </div>
            <div className="flex flex-col items-end justify-start w-auto xs:ml-10">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltregular whitespace-nowrap">
                21/06/2023 - 12:30 PM
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-full mt-5 mb-5 relative xs:flex-wrap">
            <div className="progress-line success"></div>
            <Img
              className="h-6 w-6 relative z-[10]"
              src="/images/img_check_circle.svg"
              alt="check"
            />
            <div className="flex flex-col items-start justify-start w-full title  ">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                {t("outForDelivery")}
              </Text>
              <Text className="text-gray-700 text-[12px] w-auto font-mohrroundedaltregular">
                {t("yourOrderWillBeDeliveredToYouShortly")}
              </Text>
            </div>
            <div className="flex flex-col items-end justify-start w-auto xs:ml-10">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltregular whitespace-nowrap">
                24/06/2023 - 02:45 PM
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-full mt-5 mb-5 relative xs:flex-wrap">
            <div className="progress-line gray"></div>
            <Img
              className="h-6 w-6 relative z-[10]"
              src="/images/gray-dot.svg"
              alt="check"
            />
            <div className="flex flex-col items-start justify-start w-full title  ">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                {t("delivered")}
              </Text>
              <Text className="text-gray-700 text-[12px] w-auto font-mohrroundedaltregular">
                {t("thisWillComeWhenTheTruckDriverWarksTheOrderAsDelivered")}
              </Text>
            </div>
            <div className="flex flex-col items-end justify-start w-auto xs:ml-10">
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltregular whitespace-nowrap"></Text>
            </div>
          </div>
        </div>
      </div>
      {/* end */}
    </>
  );
};

export default TrackHistory;