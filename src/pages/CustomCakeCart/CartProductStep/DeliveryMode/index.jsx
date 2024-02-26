import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text, Radio } from "components";
import { useTranslation } from "react-i18next";
import SavedAddressesList from "./SavedAddressesList";
import PickUpPointsList from "./PickUpPointsList";
import SendAsAGift from "./SendAsAGift";
import styled from "styled-components";
const DeliveryMode = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const Tab = styled.div`
    /* Add the selected styles when the component is selected */
    ${({ isSelected }) =>
      isSelected &&
      ` 
  border-color: #BD0043 !important;
`}
  `;
  const Panal = styled.div`
    /* Add the selected styles when the component is selected */
    ${({ isSelected }) =>
      isSelected &&
      ` 
  display: block;
`}
  `;
  const [activeTab, setActiveTab] = useState(null);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="relative flex flex-col w-full">
        {/* After fill Delivery Mode */}
        <div className="flex flex-col gap-4 items-center justify-start w-full mb-2">
          <div className="flex flex-row xs:flex-col md:gap-5 items-center xs:items-start justify-start w-full">
            <div className="flex flex-col gap-1 items-start justify-start flex-1">
              <Text className="text-base text-black-900 font-mohrroundedaltmedium">
                {t("deliveryMode")}: {t("homeOfficeOtherDelivery")}
              </Text>
              <div className="flex gap-1 flex-row items-center">
                <Text className="text-black-900 text-sm mohrroundedaltregular">
                  Musa Ibn Nusair St Al Olaya, Century Corner, Riyadh 12331
                  Saudi Arabia
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
        <div className="flex flex-col gap-4 items-center justify-start w-full mt-0.5 mb-2">
          <div className="flex flex-row md:gap-5 items-center justify-start w-full">
            <div className="flex flex-col gap-1 items-start justify-start flex-1">
              <Text className="text-base text-black-900 font-mohrroundedaltmedium">
                {t("deliveryMode")}
              </Text>
              <div className="flex gap-1 flex-row items-center">
                <Text className="text-black-900 text-sm font-mohrroundedaltregular">
                  {t("forYourItemsChooseTheDeliveryMode")}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row md:flex-col flex-wrap w-full gap-x-3 md:gap-y-3 mt-[22px] mb-[18px]">
          <Tab
            className="common-pointer bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 justify-start p-4 w-[32%] md:w-full md:order-1"
            isSelected={activeTab === 0}
            onClick={() => handleTabClick(0)}
          >
            <div className="flex gap-2">
              <Radio
                name="deliveryMode"
                checked={activeTab === 0}
                onChange={() => handleTabClick(0)}
              />
              <Text className="h-max leading-5 my-auto text-black-900 text-sm w-full font-mohrroundedaltmedium pr-10 rtl:pr-0 rtl:pl-10">
                {t("homeOfficeOtherDelivery")}
              </Text>
            </div>
            <Text className="leading-4 text-gray-700 text-xs w-full font-mohrroundedaltregular">
              {t("multipleAddressesInThisLocationOrAddANewOne")}
            </Text>
          </Tab>
          <Tab
            className="common-pointer relative bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 justify-start p-4 w-[32%] md:w-full md:order-3"
            isSelected={activeTab === 1}
            onClick={() => handleTabClick(1)}
          >
            <div className="absolute flex flex-col items-end justify-start -right-2 rtl:right-auto rtl:-left-2 top-[6%] w-[39%]">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-6 items-end justify-start p-1 w-auto pl-4"
                style={{
                  backgroundImage: "url('images/img_group425.svg')",
                }}
              >
                <Text className="mr-[7px] text-white-A700 text-xs font-mohrroundedaltregular whitespace-nowrap">
                  {t("bestOffer")}
                </Text>
              </div>
              <Img
                className="h-2 w-2"
                src="/images/img_signal_pink_900.svg"
                alt="signal"
              />
            </div>
            <div className="flex gap-2">
              <Radio
                name="deliveryMode"
                checked={activeTab === 1}
                onChange={() => handleTabClick(1)}
              />
              <Text className="h-max leading-5 my-auto text-black-900 text-sm w-full font-mohrroundedaltmedium pr-10 rtl:pr-0 rtl:pl-10">
                {t("pickUp")} <br className="md:hidden" />
                {t("point")}
              </Text>
            </div>
            <Text className="leading-4 text-gray-700 text-xs w-full font-mohrroundedaltregular">
              {t(
                "getDiscountOnYourOrderByPickingANearestDropZoneAsDeliveryLocation"
              )}
            </Text>
          </Tab>
          <Tab
            className="common-pointer bg-light_blue-50 flex flex-col gap-4 justify-start p-4 bg-no-repeat ltr:bg-right-top rtl:bg-left-top bg-auto w-[32%] border border-solid border-light_blue-50 md:w-full md:order-5"
            isSelected={activeTab === 2}
            onClick={() => handleTabClick(2)}
            style={{
              backgroundImage: "url('images/img_group710.svg')",
            }}
          >
            <div className="flex gap-2">
              <Radio
                name="deliveryMode"
                checked={activeTab === 2}
                onChange={() => handleTabClick(2)}
              />
              <Text className="h-max leading-5 my-auto text-black-900 text-sm w-full font-mohrroundedaltmedium pr-10 rtl:pr-0 rtl:pl-10">
                {t("buyingForALovedOne")}
              </Text>
            </div>
            <Text className="leading-4 text-gray-700 text-xs w-full font-mohrroundedaltregular">
              {t("sendAGiftAndPersonalizedMessageOrSong")}
            </Text>
          </Tab>
          <Panal
            isSelected={activeTab === 0}
            className="hidden md:order-2 md:w-full"
          >
            <SavedAddressesList />
          </Panal>
          <Panal
            isSelected={activeTab === 1}
            className="hidden md:order-4 md:w-full"
          >
            <PickUpPointsList />
          </Panal>
          <Panal
            isSelected={activeTab === 2}
            className="hidden md:order-6 md:w-full"
          >
            <SendAsAGift />
          </Panal>
        </div>
      </div>
    </>
  );
};

export default DeliveryMode;