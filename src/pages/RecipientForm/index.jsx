import { Img, Text } from "components";
import DesignMyOwnCakeQuestionOneHeader from "components/DesignMyOwnCakeQuestionOneHeader";
import Footer3 from "components/Footer3";
import RecipientFormSteps from "./RecipientFormSteps";
import { useTranslation } from "react-i18next";
const RecipientFormPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mohrroundedaltsemibold items-center justify-start mx-auto w-full">
        <DesignMyOwnCakeQuestionOneHeader className="bg-white-A700 flex flex-col items-center justify-start p-1.5 shadow-bs w-full" />
        <div
          className="absolute bg-cover bg-no-repeat h-[91vh] inset-y-[0] mt-[70px] mb-[24px] p-0 w-full"
          style={{ backgroundImage: "url('images/group48098501.png')" }}
        ></div>
        <div className="relative w-full min-h-[91vh]">
          <Img
            className="h-[17px] m-0 w-4 absolute left-[99px] top-[116px]"
            src="/images/img_close_blue.svg"
            alt="close"
          />
          <Img
            className="h-[17px] m-0 w-4 opacity-[.4] absolute left-[208px] top-[411px]"
            src="/images/img_close_red_300.svg"
            alt="close_One"
          />
          <div className="flex flex-row md:gap-5 items-end sm:items-start justify-start w-[730px] sm:w-[100%] mx-auto mb-8 mt-8">
            <Img
              className="h-20 md:h-auto mb-4 md:mt-0 mt-[7px] object-cover w-20 sm:hidden"
              src="/images/img_image43.png"
              alt="imageFortyThree"
            />
            <div className="flex flex-col gap-2 items-center justify-start ml-3 rtl:ml-0 rtl:mr-3 md:ml-[0] relative z-[1]">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtMohrRoundedAltBold40Black900"
              >
                <span className="text-black-900 font-mohrroundedaltbold font-normal">
                  {t("youGotA")}{" "}
                </span>
                <span className="text-pink-800 font-mohrroundedaltbold font-normal">
                  {t("giftExclamationMark")}
                </span>
              </Text>
              <Text
                className="leading-[20.00px] text-center text-gray-700 text-sm w-full"
                size="txtMohrRoundedAltRegular14"
              >
                <span className="text-gray-700 font-mohrroundedaltregular font-normal">
                  {t("youHaveAGiftRequestFromAAnonymousUserDot")}
                </span>
                <span className="text-gray-700 font-mohrroundedaltregular font-normal">
                  {t("provideThe")}
                </span>
                <span className="text-black-900 font-mohrroundedaltmedium font-normal">
                  {t("deliveryLocation")}
                </span>
                <span className="text-gray-700 font-mohrroundedaltregular font-normal">
                  {t("andYourComfortable")}
                </span>
                <span className="text-black-900 font-mohrroundedaltmedium font-normal">
                  {t("dateAndTime")}
                </span>
                <span className="text-gray-700 font-mohrroundedaltregular font-normal">
                  {t("slotToGetYourGiftDot")}
                </span>
              </Text>
            </div>
            <Img
              className="h-20 md:h-auto mb-4 ml-3 rtl:ml-0 rtl:mr-3 md:ml-[0] md:mt-0 mt-[7px] object-cover w-20 sm:hidden"
              src="/images/img_image44.png"
              alt="imageFortyFour"
            />
          </div>
          <div className="bg-light_blue-50 flex flex-row gap-4 items-center sm:items-start justify-center p-2 rounded  w-[730px] sm:w-[90%] m-auto">
            <Img
              className="h-6 ml-3 rtl:ml-0 rtl:mr-3 md:ml-[0] w-6"
              src="/images/img_antdesigninfo_black_900.svg"
              alt="antdesigninfo"
            />
            <Text
              className="leading-[20.00px] mr-[60px] sm:mr-[0px] text-black-900 text-sm w-[84%] sm:w-full"
              size="txtMohrRoundedAltRegular14Black900"
            >
              {t(
                "theLinkWillBeValidFor24HrsToEnterTheBelowDetailsAfterThatItWillGetExpiredAndYouNeedToContactCustomerServiceDot"
              )}
            </Text>
          </div>
          <div className="flex flex-col font-mohrroundedaltregular items-center justify-start mx-auto w-full ">
            {/* for empty cart */}
            <div className="pt-7 pb-36 flex flex-row gap-7 sm:flex-col max-w-[730px] w-full mx-auto md:px-4 items-start">
              <RecipientFormSteps />
            </div>
          </div>
          <div className="w-[860px] sm:w-[90%] relative m-auto top-[-80px]">
            <Img
              className="absolute bottom-[0] sm:bottom-[-75px] h-[171px] right-[0] rtl:right-[auto] rtl:left-[0] w-auto"
              src="/images/img_pinkgiftbox.png"
              alt="pinkgiftbox"
            />
            <Img
              className="absolute bottom-[-24px] sm:bottom-[-104px] h-[43px] right-[-3%]"
              src="/images/img_checkmark_light_blue_a100_43x52.svg"
              alt="checkmark_One"
            />
          </div>
          <Img
            className="h-[16px] m-0 absolute right-[112px] top-[404px] w-4"
            src="/images/img_close_blue.svg"
            alt="close_Two"
          />
          <Footer3 className="bottom-[0] flex font-mohrroundedaltregular inset-x-[0] items-center justify-center mx-auto w-full" />
        </div>
      </div>
    </>
  );
};

export default RecipientFormPage;
