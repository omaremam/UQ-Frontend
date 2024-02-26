import React, { useState } from "react";
import { Button, Img, Text } from "components";
import { useTranslation } from "react-i18next";
import { CheckboxCustom } from "components/CheckboxCustom";
import { AddToCart } from "popups/AddToCart";
import { AddToCartSelected } from "popups/AddToCartSelected";
import { RepeatOrder } from "popups/RepeatOrder";
import { AddToMyOccasion } from "popups/AddToMyOccasion";
import { AddToMyOccasionAddNew } from "popups/AddToMyOccasionAddNew";
const CartProductDetail = () => {
  const { t } = useTranslation();
  const [AddToCartOpen, setAddToCartOpen] = React.useState(false);
  const [AddToCartSelectedOpen, setAddToCartSelectedOpen] =
    React.useState(false);
  const [RepeatOrderOpen, setRepeatOrderOpen] = React.useState(false);
  const [AddToMyOccasionOpen, setAddToMyOccasionOpen] = React.useState(false);
  const [AddToMyOccasionAddNewOpen, setAddToMyOccasionAddNewOpen] =
    React.useState(false);
  const [count, setCount] = useState(0);
  const handelAddToCart = () => {
    setAddToCartOpen(true);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };
  const handelAddToCartSelected = () => {
    setAddToCartSelectedOpen(true);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };
  const handelRepeatOrder = () => {
    setRepeatOrderOpen(true);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };
  const incrementCount = () => {
    handelRepeatOrder();
    setCount(count + 1);
  };
  const decrementCount = () => {
    handelAddToCartSelected();
    setCount(count - 1);
  };
  const handelAddToMyOccasion = () => {
    setAddToMyOccasionOpen(true);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };
  const handelAddToMyOccasionAddNew = () => {
    setAddToMyOccasionAddNewOpen(true);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };
  return (
    <>
      <div className="max-w-[350px] w-full sm:pl-7 xs:pl-0 sm:max-w-full">
        <div className="bg-white-A700 w-full">
          <div className="px-2 py-1 flex flex-row items-center justify-between border-b border-gray-300 w-full">
            <div className="w-auto flex flex-row items-center gap-0.5">
              <Img
                className="h-10 object-contain w-10 min-w-[1.5rem]"
                src="/images/state-layer-unselect.svg"
                alt="rabbitholelogo"
              />
              <Text
                className="cursor-pointer text-black-900 whitespace-nowrap font-medium font-mohrroundedaltmedium text-sm leading-6 mb-1"
                onClick={handelAddToMyOccasionAddNew}
              >
                3/5
              </Text>
            </div>
            <div className="w-auto pr-3">
              <Text
                className="cursor-pointer text-pink-800 whitespace-nowrap font-medium font-mohrroundedaltmedium text-sm leading-6 mb-1"
                onClick={handelAddToMyOccasion}
              >
                {t("moveToOccasion")}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 py-4 w-full">
            <div className="px-5 flex flex-row items-center justify-between w-full">
              <div className="w-full flex flex-row items-center gap-[0] flex-1">
                <CheckboxCustom />
                <div className="flex flex-col gap-0.5 -ml-4 rtl:ml-0 rtl:-mr-4">
                  <Text className="text-black-900 whitespace-nowrap font-medium font-mohrroundedaltmedium text-sm leading-5">
                    Fruit Vanilla...
                  </Text>
                  <Text
                    className="cursor-pointer cursor-pointer text-gray-700 flex items-center whitespace-nowrap text-xs font-mohrroundedaltregular font-normal leading-4"
                    onClick={() => {
                      handelAddToCart();
                    }}
                  >
                    {t("customize")}
                    <Img
                      className="h-4 object-contain w-4 min-w-[1rem] mt-0.5"
                      src="/images/arrow_forward.svg"
                      alt="rabbitholelogo"
                    />
                  </Text>
                </div>
              </div>
              <div className="w-auto flex flex-row justify-between gap-5">
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-start py-[3px] px-1 rounded w-full min-w-[68px] max-w-[68px]">
                  <Img
                    className="h-3 w-3 cursor-pointer"
                    src="/images/img_menu.svg"
                    alt="menu_One"
                    onClick={decrementCount}
                  />
                  <Text className="flex-1 text-black-900 text-center text-xs leading-4">
                    {count}
                  </Text>
                  <Img
                    className="h-3 w-3 cursor-pointer"
                    src="/images/img_plus_black_900.svg"
                    alt="plus_One"
                    onClick={incrementCount}
                  />
                </div>
                <Text className="text-gray-700 whitespace-nowrap font-medium font-mohrroundedaltmedium text-xs leading-4">
                  {t("sar")} 310.00
                </Text>
              </div>
            </div>
            <div className="px-5 flex flex-row items-center justify-between w-full">
              <div className="w-full flex flex-row items-center gap-[0] flex-1">
                <CheckboxCustom />
                <div className="flex flex-col gap-0.5 -ml-4 rtl:ml-0 rtl:-mr-4">
                  <Text className="text-black-900 whitespace-nowrap font-medium font-mohrroundedaltmedium text-sm leading-5">
                    Chocolate T...
                  </Text>
                  <Text
                    className="cursor-pointer text-gray-700 flex items-center whitespace-nowrap text-xs font-mohrroundedaltregular font-normal leading-4"
                    onClick={() => {
                      handelAddToCart();
                    }}
                  >
                    {t("customize")}
                    <Img
                      className="h-4 object-contain w-4 min-w-[1rem] mt-0.5"
                      src="/images/arrow_forward.svg"
                      alt="rabbitholelogo"
                    />
                  </Text>
                </div>
              </div>
              <div className="w-auto flex flex-row justify-between gap-5">
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-start py-[3px] px-1 rounded w-full min-w-[68px] max-w-[68px]">
                  <Img
                    className="h-3 w-3 cursor-pointer"
                    src="/images/img_menu.svg"
                    alt="menu_One"
                    onClick={decrementCount}
                  />
                  <Text className="flex-1 text-black-900 text-center text-xs leading-4">
                    {count}
                  </Text>
                  <Img
                    className="h-3 w-3 cursor-pointer"
                    src="/images/img_plus_black_900.svg"
                    alt="plus_One"
                    onClick={incrementCount}
                  />
                </div>
                <Text className="text-gray-700 whitespace-nowrap font-medium font-mohrroundedaltmedium text-xs leading-4">
                  {t("sar")} 310.00
                </Text>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat min-h-[60px] p-1 px-5 flex flex-row items-center justify-between w-full"
              style={{ backgroundImage: "url('images/img_group16.svg')" }}
            >
              <div className="w-full flex flex-row items-center gap-[0] flex-1">
                <CheckboxCustom />
                <div className="flex flex-col gap-0.5 -ml-4 rtl:ml-0 rtl:-mr-4">
                  <Text className="text-black-900 whitespace-nowrap font-medium font-mohrroundedaltmedium text-sm leading-5">
                    Sparkle Can...
                  </Text>
                </div>
              </div>
              <div className="w-auto flex flex-row justify-between gap-5">
                <Button className="bg-red-100 cursor-pointer font-mohrroundedaltregular h-max inset-y-[0] min-w-[89px] my-auto py-1 right-[26%] rounded text-center text-gray-900_01 text-xs">
                  {t("unavailable")}
                </Button>
                <Img
                  className="h-6 w-6"
                  src="/images/img_trash.svg"
                  alt="trash"
                />
              </div>
            </div>
            <div className="px-5 flex flex-row items-center justify-between w-full">
              <div className="w-full flex flex-row items-center gap-[0] flex-1">
                <CheckboxCustom />
                <div className="flex flex-col gap-0.5 -ml-4 rtl:ml-0 rtl:-mr-4">
                  <Text className="text-black-900 whitespace-nowrap font-medium font-mohrroundedaltmedium text-sm leading-5">
                    Red PartyD...
                  </Text>
                </div>
              </div>
              <div className="w-auto flex flex-row justify-between gap-5">
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-start py-[3px] px-1 rounded w-full min-w-[68px] max-w-[68px]">
                  <Img
                    className="h-3 w-3 cursor-pointer"
                    src="/images/img_menu.svg"
                    alt="menu_One"
                    onClick={decrementCount}
                  />
                  <Text className="flex-1 text-black-900 text-center text-xs leading-4">
                    {count}
                  </Text>
                  <Img
                    className="h-3 w-3 cursor-pointer"
                    src="/images/img_plus_black_900.svg"
                    alt="plus_One"
                    onClick={incrementCount}
                  />
                </div>
                <Text className="text-gray-700 whitespace-nowrap font-medium font-mohrroundedaltmedium text-xs leading-4">
                  {t("sar")} 310.00
                </Text>
              </div>
            </div>
            <div className="px-5 flex flex-row items-center justify-between w-full">
              <div className="w-full flex flex-row items-center gap-[0] flex-1">
                <CheckboxCustom />
                <div className="flex flex-col gap-0.5 -ml-4 rtl:ml-0 rtl:-mr-4">
                  <Text className="text-black-900 whitespace-nowrap font-medium font-mohrroundedaltmedium text-sm leading-5">
                    Butterscotch...
                  </Text>
                  <Text
                    className="cursor-pointer text-gray-700 flex items-center whitespace-nowrap text-xs font-mohrroundedaltregular font-normal leading-4"
                    onClick={() => {
                      handelAddToCart();
                    }}
                  >
                    {t("customize")}
                    <Img
                      className="h-4 object-contain w-4 min-w-[1rem] mt-0.5"
                      src="/images/arrow_forward.svg"
                      alt="rabbitholelogo"
                    />
                  </Text>
                </div>
              </div>
              <div className="w-auto flex flex-row justify-between gap-5">
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-start py-[3px] px-1 rounded w-full min-w-[68px] max-w-[68px]">
                  <Img
                    className="h-3 w-3 cursor-pointer"
                    src="/images/img_menu.svg"
                    alt="menu_One"
                    onClick={decrementCount}
                  />
                  <Text className="flex-1 text-black-900 text-center text-xs leading-4">
                    {count}
                  </Text>
                  <Img
                    className="h-3 w-3 cursor-pointer"
                    src="/images/img_plus_black_900.svg"
                    alt="plus_One"
                    onClick={incrementCount}
                  />
                </div>
                <Text className="text-gray-700 whitespace-nowrap font-medium font-mohrroundedaltmedium text-xs leading-4">
                  {t("sar")} 310.00
                </Text>
              </div>
            </div>
          </div>
          <div className="py-1 px-5">
            <div className="p-2 bg-gray-50_02 flex items-center gap-4">
              <Img
                className="h-6 object-contain w-6"
                src="/images/img_thumbsup.svg"
                alt="thumbsup"
              />
              <input
                type="text"
                placeholder={t("anyNote?WriteHere")}
                className="border-[0] p-0 bg-transparent flex-1"
              />
            </div>
          </div>
          <div className="pt-4 px-5 pb-5 flex flex-col gap-5">
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between">
              <div className="flex flex-row px-2 items-center">
                <Img
                  className="h-6 w-6"
                  src="/images/img_iconamoondiscountlight.svg"
                  alt="iconamoondiscou"
                />
                <Text
                  className="ml-2 rtl:ml-0 rtl:mr-2 text-gray-700 text-xs font-mohrroundedaltregular"
                  size="txtMohrRoundedAltRegular12Gray700"
                >
                  {t("couponCode")}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center rounded w-auto">
                <div className="flex flex-col items-center justify-center px-3 py-[9px] rounded w-auto">
                  <Text
                    className="text-center text-pink-800 text-sm xs:text-xs w-auto cursor-pointer"
                    size="txtMohrRoundedAltMedium14"
                  >
                    {t("applyCoupon")}
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between">
              <div className="flex flex-col px-2 py-[9px] gap-0.5 items-start">
                <Text className="text-black-900 whitespace-nowrap font-medium font-mohrroundedaltregular text-sm leading-5">
                  WELCOMEOFFER
                </Text>
                <Text className="text-gray-700 flex items-center whitespace-nowrap text-xs font-mohrroundedaltregular font-normal leading-4">
                  {t("offerAppliedOnTheBill")}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center rounded w-auto">
                <div className="flex flex-col items-center justify-center px-3 py-[9px] rounded w-auto">
                  <Text
                    className="text-center text-pink-800 text-sm xs:text-xs w-auto cursor-pointer"
                    size="txtMohrRoundedAltMedium14"
                  >
                    {t("Remove")}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 flex flex-col gap-3">
            <div className="flex flex-row items-center justify-between">
              <Text className="text-black-900 whitespace-nowrap font-medium font-mohrroundedaltregular text-sm leading-5">
                {t("orderSummary")}
              </Text>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Text className="text-gray-700 whitespace-nowrap font-medium font-mohrroundedaltregular text-xs leading-5 text-start">
                {t("productsubtotal")}
              </Text>
              <Text className="text-gray-700 whitespace-nowrap font-medium font-mohrroundedaltregular text-xs leading-4 text-end">
                {t("sar")} 715.00
              </Text>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Text className="text-gray-700 whitespace-nowrap font-medium font-mohrroundedaltregular text-xs leading-4 text-start">
                {t("deliveryFee")}
              </Text>
              <Text className="text-gray-700 whitespace-nowrap font-medium font-mohrroundedaltregular text-xs leading-4 text-end">
                -
              </Text>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Text className="text-gray-700 whitespace-nowrap font-medium font-mohrroundedaltregular text-xs leading-4 text-start">
                {t("taxVAT")}
              </Text>
              <Text className="text-gray-700 whitespace-nowrap font-medium font-mohrroundedaltregular text-xs leading-4 text-end">
                {t("sar")} 109.50
              </Text>
            </div>
            <div className="flex flex-row items-center justify-between">
              <Text className="text-gray-700 whitespace-nowrap font-medium font-mohrroundedaltregular text-xs leading-4 text-start">
                {t("dropzonediscount")}
              </Text>
              <Text className="text-teal-400 whitespace-nowrap font-medium font-mohrroundedaltregular text-xs leading-4 text-end">
                - {t("sar")} 109.50
              </Text>
            </div>
            <div className="border-b mt-2 border-black-900"></div>
          </div>
          <div className="bg-white-A700 flex flex-row items-start justify-between py-4 px-5 shadow-bs1 w-full">
            <Text className="text-base text-black-900 font-mohrroundedaltregular">
              {t("totalAmount")}
            </Text>
            <Text className="text-base text-black-900 text-right font-mohrroundedaltmedium">
              {t("sar")} 809.50
            </Text>
          </div>
        </div>
      </div>
      {AddToCartOpen === true ? (
        <AddToCart closepopup={setAddToCartOpen} />
      ) : null}
      {AddToCartSelectedOpen === true ? (
        <AddToCartSelected closepopup={setAddToCartSelectedOpen} />
      ) : null}
      {RepeatOrderOpen === true ? (
        <RepeatOrder closepopup={setRepeatOrderOpen} />
      ) : null}
      {AddToMyOccasionOpen === true ? (
        <AddToMyOccasion closepopup={setAddToMyOccasionOpen}/>
      ) : null}
      {AddToMyOccasionAddNewOpen === true ? (
        <AddToMyOccasionAddNew
          closepopup={setAddToMyOccasionAddNewOpen}
          modalTopIcon="images/img_arrowleft_gray_900_03.svg"
          OccasionTitle={t("addNewOccasion")}
          OccasionParagraph={t("enterBelowDetailsToAddANewOccasionDot")}
        />
      ) : null}
    </>
  );
};

export default CartProductDetail;