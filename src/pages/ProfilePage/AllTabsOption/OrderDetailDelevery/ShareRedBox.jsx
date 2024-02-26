import { Button, Img, Text, Line } from "components";
import React from "react";
import { useTranslation } from "react-i18next";
import { Share } from "popups/Share";
import { ViewImage } from "popups/ViewImage";
const ShareRedBox = () => {
  const { t } = useTranslation();
  const [ShareModalOpen, setShareModalOpen] = React.useState(false);
  const handelsetShareModalOpen = () => {
    setShareModalOpen(true);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };
  const [ViewImageModalOpen, setViewImageModalOpen] = React.useState(false);
  const handelsetViewImageModalOpen = () => {
    setViewImageModalOpen(true);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };
  return (
    <>
      <div className="bg-red-50 flex flex-col items-center justify-start mt-5 w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[216px] sm:h-auto items-center justify-start px-6 py-4 w-full"
          style={{ backgroundImage: "url('images/bg-detail-banner.png')" }}
        >
          <div className="flex flex-row items-center justify-between w-full mb-2">
            <Text className="font-mohrroundedaltmedium text-base ">
              {t("yourCakeHasPassedOurQualityCheck")}
            </Text>
            <Button
              className="min-w-[125px] flex items-center justify-center"
              size="sm"
              leftIcon={
                <Img
                  className="h-5 w-5 mt-px"
                  src="/images/img_share-red.svg"
                  alt="share icon"
                />
              }
              onClick={() => handelsetShareModalOpen()}
            >
              <Text
                className="mx-2 font-mohrroundedaltmedium text-red-900"
                as="span"
              >
                {t("share")}
              </Text>
            </Button>
          </div>
          <Text className="font-mohrroundedaltregular text-sm text-black-900 leading-[24px] mb-6">
            {t(
              "ifYouHaveAnyQualityIssuesYouCanReachOutCustomerSupportYouCanAlsoShareTheRealCakeImagesWithFriendsOnSocialMedia"
            )}
          </Text>
          <div className="flex sm:flex-wrap flex-row gap-4 items-start justify-start w-full">
            <Img
              className="cursor-pointer h-[64px] w-[64px] object-cover rounded-lg"
              src="/images/img_rectangle17564_11.png"
              alt="rectangle19120"
              loading="lazy"
              onClick={() => handelsetViewImageModalOpen()}
            />
            <Img
              className="cursor-pointer h-[64px] w-[64px] object-cover rounded-lg"
              src="/images/img_rectangle17564_7.png"
              alt="rectangle19121"
              loading="lazy"
              onClick={() => handelsetViewImageModalOpen()}
            />
            <Img
              className="cursor-pointer h-[64px] w-[64px] object-cover rounded-lg"
              src="/images/img_rectangle17564_3.png"
              alt="rectangle19122"
              loading="lazy"
              onClick={() => handelsetViewImageModalOpen()}
            />
            <Img
              className="cursor-pointer h-[64px] w-[64px] object-cover rounded-lg"
              src="/images/img_rectangle17564_5.png"
              alt="rectangle19122"
              loading="lazy"
              onClick={() => handelsetViewImageModalOpen()}
            />
          </div>
        </div>
      </div>
      <div className="bg-red-50 flex flex-col items-center justify-start mt-5 w-full">
        <div
          className="bg-cover bg-right-top-center bg-no-repeat flex flex-col items-start justify-start p-6 w-full"
          style={{
            backgroundImage:
              "url('/images/bg-detail-banner-2.svg'), url(/images/bg-detail-banner-2-2.svg)",
          }}
        >
          <div className="innerflip w-full">
            <div className="relative w-full flex flex-col gap-5">
              <div className="relative flex flex-row gap-4 items-start justify-start w-fulll z-[2]">
                <Button className="bg-red-100 flex h-8 items-center justify-center p-1 w-8 mt-2 relative z-50">
                  <Img
                    className="h-5 w-5"
                    src="/images/person.svg"
                    alt="location_Two"
                  />
                </Button>
                <div className="flex flex-col gap-1 items-start justify-start w-full flex-1">
                  <Text className="font-mohrroundedaltmedium text-base text-black-900">
                    David Williamson
                  </Text>
                  <Text className="font-mohrroundedaltregular text-black-900 text-sm break-all">
                    +966 9876543210 | david_williamson@gmail.com | Birthday
                  </Text>
                  <Text className="text-gray-700 text-xs font-mohrroundedaltregular">
                    Recipient Details
                  </Text>
                </div>
              </div>
              <div className="relative flex flex-row gap-4 items-start justify-start w-fulll z-[1]">
                <Line className="absolute -top-full h-[70px] xs:h-[100px] left-[15px] rtl:left-auto rtl:right-[15px] w-px ltr:border-l rtl:border-r border-dashed border-gray-900 z-10" />
                <Button className="bg-red-100 flex h-8 items-center justify-center p-1 w-8 mt-2 relative z-50">
                  <Img
                    className="h-5 w-5"
                    src="/images/location_on.svg"
                    alt="location_Two"
                  />
                </Button>
                <div className="flex flex-col gap-1 items-start justify-start w-full flex-1">
                  <Text className="font-mohrroundedaltmedium text-base text-black-900 w-full md:max-w-[415px]">
                    Musa Ibn Nusair St Al Olaya, Century Corner, Riyadh, 12331
                    Saudi Arabia
                  </Text>
                  <Text className="text-gray-700 text-xs font-mohrroundedaltregular">
                    Delivery Address
                  </Text>
                </div>
              </div>
              <div className="relative flex flex-row gap-4 items-start justify-start w-full z-[0]">
                <Line className="absolute -top-full xs:top-[-160%] xxs:top-[-150%] h-[70px] xs:h-[100px] left-[15px] rtl:left-auto rtl:right-[15px] w-px ltr:border-l rtl:border-r border-dashed border-gray-900 z-10" />
                <Button className="bg-red-100 flex h-8 items-center justify-center p-1 w-8 relative z-50">
                  <Img
                    className="h-5 w-5"
                    src="/images/event_note.svg"
                    alt="calendar"
                  />
                </Button>
                <div className="flex flex-col gap-1 items-start justify-start flex-1">
                  <Text className="font-mohrroundedaltmedium text-base text-black-900">
                    28/06/2023, 01:00 PM - 04:00 PM
                  </Text>
                  <Text className="font-mohrroundedaltregular text-gray-700 text-xs">
                    Scheduled Date & Time
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-4 justify-start xs:items-start">
              <div className="relative">
                <Button
                  hover={true}
                  hoverclass="bg-black-900"
                  className="mt-5 ml-11 common-pointer border border-black-900 border-solid cursor-pointer py-[5px] rounded text-sm text-black-900 text-center w-[138px] font-mohrroundedaltmedium"
                >
                  {t("previewCard")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-50 flex flex-col items-center justify-start mt-5 w-full rounded relative">
        <div
          className="bg-left-top bg-no-repeat flex flex-col items-center justify-start px-5 pt-5 pb-8 w-full"
          style={{ backgroundImage: "url('images/custom-cake-summary.svg')" }}
        >
          <div className="flex flex-row xs:flex-col xs:items-start gap-3 items-center justify-between w-full mb-3">
            <Text className="font-mohrroundedaltmedium text-base ">
              {t("customCakeSummary")}
            </Text>
            <Button
              className="flex items-center bg-red-50_01 justify-center  px-2 py-[7px] rounded"
              leftIcon={
                <Img
                  className="h-[18px] mr-2 rtl:mr-0 rtl:ml-2"
                  src="/images/img_clock.svg"
                  alt="clock"
                />
              }
            >
              <div className="text-left text-gray-900_01 font-mohrroundedaltmedium text-sm rtl:text-right">
                {t("estimatedPrepTime")} 01.75hrs
              </div>
            </Button>
          </div>
          <div className="flex flex-col items-start justify-between w-full mb-6">
            <Text className="font-mohrroundedaltmedium text-base mb-1">
              {t("Choice of Flavor :")}
            </Text>
            <Text className="font-mohrroundedaltregular text-sm text-black-900 leading-[24px]">
              Truffle Cake
            </Text>
          </div>
          <div className="flex flex-col items-start justify-between w-full mb-6">
            <Text className="font-mohrroundedaltmedium text-base mb-1">
              {t("Weight of Cake :")}
            </Text>
            <Text className="font-mohrroundedaltregular text-sm text-black-900 leading-[24px]">
              1 kg
            </Text>
          </div>
          <div className="flex flex-col items-start justify-between w-full mb-6">
            <Text className="font-mohrroundedaltmedium text-base mb-1">
              {t("Choice of Ingredients :")}
            </Text>
            <Text className="font-mohrroundedaltregular text-sm text-black-900 leading-[24px]">
              Confectionery, Fondant/ Sugar Paste, Gels & Glazes
            </Text>
          </div>
          <div className="flex flex-col items-start justify-between w-full mb-6">
            <Text className="font-mohrroundedaltmedium text-base mb-1">
              {t("Choice of Chocolates :")}
            </Text>
            <Text className="font-mohrroundedaltregular text-sm text-black-900 leading-[24px]">
              Choco Chips, Chocolate Additives, Cocoa Powder, Couverture
            </Text>
          </div>
          <div className="flex flex-col items-start justify-between w-full">
            <Text className="font-mohrroundedaltmedium text-base mb-3">
              {t("Reference Image / Link")}
            </Text>
            <div className="flex flex-wrap flex-row gap-3 items-start justify-start w-full">
              <Img
                className="cursor-pointer h-[64px] w-[64px] object-cover rounded-lg"
                src="/images/img_rectangle17564_11.png"
                alt="rectangle19120"
                loading="lazy"
                onClick={() => handelsetViewImageModalOpen()}
              />
              <Img
                className="cursor-pointer h-[64px] w-[64px] object-cover rounded-lg"
                src="/images/img_rectangle17564_7.png"
                alt="rectangle19121"
                loading="lazy"
                onClick={() => handelsetViewImageModalOpen()}
              />
              <Img
                className="cursor-pointer h-[64px] w-[64px] object-cover rounded-lg"
                src="/images/img_rectangle17564_3.png"
                alt="rectangle19122"
                loading="lazy"
                onClick={() => handelsetViewImageModalOpen()}
              />
              <Img
                className="cursor-pointer h-[64px] w-[64px] object-cover rounded-lg"
                src="/images/img_rectangle17564_5.png"
                alt="rectangle19122"
                loading="lazy"
                onClick={() => handelsetViewImageModalOpen()}
              />
            </div>
            <Text className="font-mohrroundedaltregular text-sm text-black-900 leading-[24px] underline mt-5">
              https://in.pinterest.com/search/pins/?q=birthday%20cake&rs=typed
            </Text>
          </div>
        </div>
        <Img
          className="h-[356px] mr-2 rtl:mr-0 rtl:ml-2 absolute bottom-8 ltr:-right-6 rtl:-left-6 xs:hidden"
          src="/images/customCakeSummaryImg.svg"
          alt="cake"
        />
      </div>
      {ShareModalOpen === true ? (
        <Share closepopup={setShareModalOpen} />
      ) : null}
      {ViewImageModalOpen === true ? (
        <ViewImage closepopup={setViewImageModalOpen} />
      ) : null}
    </>
  );
};

export default ShareRedBox;