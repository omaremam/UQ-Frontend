import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Text, Img, Button, Line } from "components";
// import EmptyList from "../EmptyList";
import PickUpPointAddress from "./PickUpPointAddress";
import ShareRedBox from "./ShareRedBox";
import TrackHistory from "./TrackHistory";
import ItemsBox from "./ItemsBox";
import TotalBillSection from "./TotalBillSection";
import { AdjustOrder } from "popups/AdjustOrder";
import { CancelOrder } from "popups/CancelOrder";
const OrderDetailDelevery = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    setOpen(open);
  };
  const [AdjustOrderOpen, setAdjustOrderOpen] = React.useState(false);
  const handelsetAdjustOrderOpen = () => {
    setAdjustOrderOpen(!AdjustOrderOpen);
    setOpen(!open);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };
  const [CancelOrderOpen, setCancelOrderOpenOpen] = React.useState(false);
  const handelsetCancelOrderOpen = () => {
    setCancelOrderOpenOpen(!CancelOrderOpen);
    setOpen(!open);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };
  return (
    <>
      <div className="flex flex-row items-center justify-start w-full mb-9">
        <Img
          className="h-auto w-full cursor-pointer m-auto"
          src="/images/map.png"
          alt="image"
        />
      </div>
      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
        <Text className="font-mohrroundedaltsemibold text-2xl md:text-[22px] text-black-900 sm:text-xl">
          {t("order")} #161764427978
        </Text>
        <Button
          className="min-w-[125px] flex items-center justify-center"
          size="sm"
          variant="OutlineBlack"
          hover={true}
          hoverclass="bg-black-900"
          leftIcon={
            <Img
              className="h-5 mt-px btn-icon"
              src="/images/download-icon.svg"
              alt="download"
            />
          }
        >
          <Text className="mx-2 font-mohrroundedaltmedium" as="span">
            {t("downloadInvoice")}
          </Text>
        </Button>
      </div>
      <PickUpPointAddress />
      <ShareRedBox />
      <div className="mt-[34px] relative w-full">
        <Line className="absolute top-[20px] h-[100px] left-[15px] rtl:left-auto rtl:right-[15px] w-px ltr:border-l rtl:border-r border-dashed border-gray-900" />
        <div className="relative flex flex-row gap-4 items-start justify-start w-fulll mb-5">
          <Button className="bg-red-100 flex h-8 items-center justify-center p-1 w-8 mt-2">
            <Img
              className="h-5 w-5"
              src="/images/location_on.svg"
              alt="location_Two"
            />
          </Button>
          <div className="flex flex-col gap-1 items-start justify-start w-full">
            <Text className="font-mohrroundedaltmedium text-base text-black-900">
              Jacob James | +966 9876543210
            </Text>
            <Text className="font-mohrroundedaltregular text-black-900 text-sm">
              Musa Ibn Nusair St Al Olaya, Century Corner, Riyadh 12331 Saudi
              Arabia
            </Text>
            <Text className="text-gray-700 text-xs font-mohrroundedaltregular">
              {t("deliveryAddress")}
            </Text>
          </div>
        </div>
        <div className="relative flex flex-row gap-4 items-start justify-start w-full">
          <Button className="bg-red-100 flex h-8 items-center justify-center p-1 w-8">
            <Img
              className="h-5 w-5"
              src="/images/event_note.svg"
              alt="calendar"
            />
          </Button>
          <div className="flex flex-col gap-1 items-start justify-start">
            <Text className="font-mohrroundedaltmedium text-base text-black-900">
              28/06/2023, 01:00 PM - 04:00 PM
            </Text>
            <Text className="font-mohrroundedaltregular text-gray-700 text-xs">
              {t("scheduledDateAndTime")}
            </Text>
          </div>
        </div>
      </div>
      <TrackHistory />
      <Line className="bg-black-900 h-px w-full" />
      <ItemsBox />
      <Line className="bg-black-900 h-px w-full mt-8 mb-6" />
      <TotalBillSection />
      <Line className="bg-black-900 h-px w-full mt-8" />
      <div className="common-pointer bg-light_blue-50 flex flex-col items-center justify-start py-3 px-6 xs:px-3 w-full rounded mt-6">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col gap-1 items-start justify-start">
            <Text
              className="text-base text-black-900 font-mohrroundedaltmedium"
              size="txtMohrRoundedAltMedium16"
            >
              {t("yourDetails")}
            </Text>
            <Text className="text-black-900 text-sm font-mohrroundedaltregular">
              Jacob James | +966 9876543210
            </Text>
          </div>
        </div>
      </div>
      <Text
        className="font-mohrroundedaltregular text-sm text-pink-800 mb-4 cursor-pointer mt-6"
        onClick={toggleDrawer(true)}
      >
        Need any help regarding your order?
      </Text>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div className="w-full max-w-[400px] px-[30px] sm:px-4 py-8 sm:py-4 before-pink-round ">
          <div className="flex flex-row gap-3 items-center justify-start w-full">
            <Img
              className="h-6 w-6 cursor-pointer"
              src="/images/img_close_black_900.svg"
              alt="close"
              onClick={toggleDrawer(false)}
            />
          </div>
          {/* content here */}
          <div className="flex flex-col items-start justify-between w-full">
            <Img
              className="h-auto w-[200px] cursor-pointer m-auto"
              src="/images/customer-support.png"
              alt="image"
            />
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl text-center w-full mt-3"
              size="txtMohrRoundedAltSemiBold24"
            >
              {t("needHelp")}
            </Text>
            <Text
              className="mt-3 mb-12 text-base text-gray-700 text-center w-full"
              size="txtMohrRoundedAltRegular16Gray700"
            >
              {t("doYouWantToCallCustomerCare")}
              <br />
              {t("(+966 9876543210)")} {t("ForHelpOrCancelOrAdjustThisOrder")}
            </Text>
            <Button className="bg-black-900 cursor-pointer py-[11px] rounded text-base text-center text-white-A700 w-full">
              {t("callNow")}
            </Button>
            <div className="flex flex-row font-mohrroundedaltmedium gap-5 items-center justify-start mt-5 w-full">
              <Button
                className="common-pointer border border-black-900 border-solid cursor-pointer py-[11px] rounded text-base text-black-900 text-center w-[164px] xs:w-auto xs:flex-1"
                onClick={handelsetCancelOrderOpen}
              >
                {t("cancelOrder")}
              </Button>
              <Button
                className="common-pointer border border-black-900 border-solid cursor-pointer py-[11px] rounded text-base text-black-900 text-center w-[164px] xs:w-auto xs:flex-1"
                onClick={handelsetAdjustOrderOpen}
              >
                {t("adjustOrder")}
              </Button>
            </div>
          </div>
        </div>
      </SwipeableDrawer>
      {AdjustOrderOpen === true ? (
        <AdjustOrder closepopup={setAdjustOrderOpen} />
      ) : null}
      {CancelOrderOpen === true ? (
        <CancelOrder closepopup={setCancelOrderOpenOpen} />
      ) : null}
    </>
  );
};

export default OrderDetailDelevery;