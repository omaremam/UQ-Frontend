import React, { useEffect, useState } from "react";
import { Button, Img, Text } from "components";
import { useTranslation } from "react-i18next";
import { CheckboxCustom } from "components/CheckboxCustom";
import { AddToCart } from "popups/AddToCart";
import { RepeatOrder } from "popups/RepeatOrder";
import { AddToMyOccasion } from "popups/AddToMyOccasion";
// Importing localization strings
import globalRequest from "../../../utils/global/globalRequest";
import { useDispatch, useSelector } from "react-redux";
import { changeLoader } from "../../../redux/reducers/loader";
import { setSnackbar } from "../../../redux/reducers/snackbar";
import * as CUSTOM from "../../../utils/helper/custom";
import * as APIS from "../../../utils/helper/Enum";
import { getAuth } from "../../../redux/reducers/loginData";
import { getOrderSummary } from "../../../redux/reducers/orderSummary";
import { AddToMyOccasionAddNew } from "popups/AddToMyOccasionAddNew";
const CartProductDetail = (props) => {
  const { t } = useTranslation();
  const auth = useSelector(getAuth);
  const orderSummary=useSelector(getOrderSummary);
  const dispatch = useDispatch();
  const [AddToCartOpen, setAddToCartOpen] = React.useState(false);
  const [cartSummary,setCartSummary] = React.useState(null);
  const [customizeOpen, setCustomiseOpen] = useState(false);
  const [checkedCartItemId, setCheckedCartItemId] = useState([]);
  const [AddToCartSelectedOpen, setAddToCartSelectedOpen] =
    React.useState(false);
  const [RepeatOrderOpen, setRepeatOrderOpen] = React.useState(false);
  const [AddToMyOccasionOpen, setAddToMyOccasionOpen] = React.useState(false);
  const [AddToMyOccasionAddNewOpen, setAddToMyOccasionAddNewOpen] =
    React.useState(false);
  const [incrementQty, setIncrementQty] = React.useState({
    id: 0,
    qty: 0,
    product_id: 0,
    uomData: {},
  });
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
  const incrementCount = (id, qty, productId, uomData) => {
    handelRepeatOrder();
    setIncrementQty({
      id: id,
      qty: qty,
      product_id: productId,
      uomData: uomData,
    });
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

  useEffect(() => {
    if (AddToMyOccasionAddNewOpen == "refetch") {
      setAddToMyOccasionAddNewOpen(false);
      handelAddToMyOccasion();
    }
  }, [AddToMyOccasionAddNewOpen]);

  const storeChekboxCartId = (newValue, isChecked) => {
    let updatedArray = [...checkedCartItemId];
    if (isChecked) {
      updatedArray.push(newValue);
    } else {
      updatedArray = updatedArray.filter((item) => item !== newValue);
    }
    setCheckedCartItemId(updatedArray);
  };

  const decrementCount = async (id, qtyCount, type = "subtract") => {
    try {
      dispatch(changeLoader(true));
      let inputData = {
        cart_item_id: id,
        qty: type == "subtract" ? Number(qtyCount) - 1 : Number(qtyCount) + 1,
      };
      let response = await globalRequest(
        APIS?.CART?.UPDATE_QTY,
        "put",
        inputData,
        {},
        true
      );
      response = response?.data;
      if (response?.status == "SUCCESS") {
        dispatch(changeLoader("fetchCartCount"));
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarMessage: response?.message,
            snackbarState: "success",
          })
        );
      } else {
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarMessage: response?.message,
            snackbarState: "error",
          })
        );
      }
    } catch (e) {
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarMessage: e?.message,
          snackbarState: "error",
        })
      );
    }
  };

  useEffect(() => {
    if (RepeatOrderOpen == "incQty") {
      setRepeatOrderOpen(false);
      decrementCount(incrementQty?.id, incrementQty?.qty, "add");
    }
    if (RepeatOrderOpen == "addNewProduct") {
      setRepeatOrderOpen(false);
      setAddToCartOpen(true);
    }
  }, [RepeatOrderOpen]);

  useEffect(() => {
    let allid = [];
    props?.cartData.map((items) => {
      allid.push(items?.id);
    });
    setCheckedCartItemId(allid);
  }, []);

  useEffect(()=>{
      let cartTotal=0;
      props?.cartData.map((items, index) => {
          let totalPrice = Number(items?.productUom?.sellingPrice)*items?.quantity;
          items?.cartModifiers.forEach((modifierItem) => {
            modifierItem?.cartModifierItems.forEach((priceItem) => {
              totalPrice += Number(
                priceItem?.productUomModifierItem?.price
              )*items?.quantity;
            });
          });
          cartTotal += totalPrice;
        })
        setCartSummary({...cartSummary,product_subtotal:cartTotal,total_amount:cartTotal})
  },[props?.cartData])
 


  return (
    <>
      <div className="max-w-[350px] w-full sm:pl-0 xs:pl-0 sm:max-w-full sm:order-1">
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
                {checkedCartItemId.length}/{props?.cartData.length}
              </Text>
            </div>
            <div className="w-auto pr-3">
              {auth?.id != 0 && checkedCartItemId.length != 0 ? (
                <Text
                  className="cursor-pointer text-pink-800 whitespace-nowrap font-medium font-mohrroundedaltmedium text-sm leading-6 mb-1"
                  onClick={handelAddToMyOccasion}
                >
                  {t("moveToOccasion")}
                </Text>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 py-4 w-full">
            {props?.cartData.map((items, index) => {
              let totalPrice = Number(items?.productUom?.sellingPrice);
              items?.cartModifiers.forEach((modifierItem) => {
                modifierItem?.cartModifierItems.forEach((priceItem) => {
                  totalPrice += Number(
                    priceItem?.productUomModifierItem?.price
                  );
                });
              });
              return (
                <>
                  {items?.productUom.status == "active" ? (
                    <>
                      <div
                        className="px-5 flex flex-row items-center justify-between w-full"
                        key={`cart-item-key-${index}`}
                      >
                        <div className="w-full flex flex-row items-center gap-[0] flex-1">
                          <CheckboxCustom
                            onChange={(e) => {
                              storeChekboxCartId(items?.id, e.target.checked);
                            }}
                            checked={checkedCartItemId.includes(items?.id)}
                          />
                          <div className="flex flex-col gap-0.5 -ml-4 rtl:ml-0 rtl:-mr-4">
                            <Text className="text-black-900 whitespace-nowrap font-medium font-mohrroundedaltmedium text-sm leading-5 text-ellipsis overflow-hidden max-w-[125px] ">
                              {CUSTOM.getdataByLangKey(
                                items?.product?.productLocales,
                                CUSTOM.getDefaultLanguage(),
                                "name"
                              )}
                            </Text>
                            <Text
                              className="cursor-pointer cursor-pointer text-gray-700 flex items-center whitespace-nowrap text-xs font-mohrroundedaltregular font-normal leading-4"
                              onClick={() => {
                                setIncrementQty({
                                  ...incrementQty,
                                  product_id: items?.product?.id,
                                  uomData: items,
                                });
                                setCustomiseOpen(true);
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
                              onClick={(e) => {
                                decrementCount(
                                  items?.id,
                                  items?.quantity,
                                  "subtract"
                                );
                              }}
                            />
                            <Text className="flex-1 text-black-900 text-center text-xs leading-4">
                              {items?.quantity}
                            </Text>
                            <Img
                              className="h-3 w-3 cursor-pointer"
                              src="/images/img_plus_black_900.svg"
                              alt="plus_One"
                              onClick={(e) => {
                                incrementCount(
                                  items?.id,
                                  items?.quantity,
                                  items?.productId,
                                  items
                                );
                              }}
                            />
                          </div>
                          <Text className="text-gray-700 whitespace-nowrap font-medium font-mohrroundedaltmedium text-xs leading-4">
                            {t("sar")} {totalPrice * items?.quantity}
                          </Text>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className="bg-cover bg-no-repeat min-h-[60px] p-1 px-5 flex flex-row items-center justify-between w-full"
                        style={{
                          backgroundImage: "url('images/img_group16.svg')",
                        }}
                      >
                        <div className="w-full flex flex-row items-center gap-[0] flex-1">
                          <CheckboxCustom
                            className="opacity-down"
                            checked={true}
                          />
                          <div className="flex flex-col gap-0.5 -ml-4 rtl:ml-0 rtl:-mr-4">
                            <Text className="text-black-900 whitespace-nowrap font-medium font-mohrroundedaltmedium text-sm leading-5">
                              Sparkle Can...
                            </Text>
                          </div>
                        </div>
                        <div className="w-auto flex flex-row justify-between gap-5">
                          <Button className="bg-red-100 cursor-pointer font-mohrroundedaltregular h-max inset-y-[0] min-w-[89px] my-auto py-1 right-[26%] rtl:right-0 rounded text-center text-gray-900_01 text-xs">
                            {t("unavailable")}
                          </Button>
                          <Img
                            className="h-6 cursor-pointer w-6"
                            src="/images/img_trash.svg"
                            alt="trash"
                            onClick={(e) => {
                              decrementCount(
                                items?.id,
                                1,
                                "subtract"
                              );
                            }}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </>
              );
            })}
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
                {t("sar")} {CUSTOM.setPrice(orderSummary?.sub_total)}
              </Text>
            </div>
            {orderSummary?.delivery_fees?(<div className="flex flex-row items-center justify-between">
              <Text className="text-gray-700 whitespace-nowrap font-medium font-mohrroundedaltregular text-xs leading-4 text-start">
                {t("deliveryFee")}
              </Text>
              <Text className="text-gray-700 whitespace-nowrap font-medium font-mohrroundedaltregular text-xs leading-4 text-end">
              {t("sar")} {CUSTOM.setPrice(orderSummary?.delivery_fees)}
              </Text>
            </div>):null}
            {orderSummary?.vat?(<div className="flex flex-row items-center justify-between">
              <Text className="text-gray-700 whitespace-nowrap font-medium font-mohrroundedaltregular text-xs leading-4 text-start">
                {t("taxVAT")}
              </Text>
              <Text className="text-gray-700 whitespace-nowrap font-medium font-mohrroundedaltregular text-xs leading-4 text-end">
                {t("sar")} {CUSTOM.setPrice(orderSummary?.vat)}
              </Text>
            </div>):null}
            {orderSummary?.pickup_discount?(<div className="flex flex-row items-center justify-between">
              <Text className="text-gray-700 whitespace-nowrap font-medium font-mohrroundedaltregular text-xs leading-4 text-start">
                {t("dropzonediscount")}
              </Text>
              <Text className="text-teal-400 whitespace-nowrap font-medium font-mohrroundedaltregular text-xs leading-4 text-end">
                - {t("sar")} {CUSTOM.setPrice(orderSummary?.pickup_discount)}
              </Text>
            </div>):null}
            <div className="border-b mt-2 border-black-900"></div>
          </div>
          <div className="bg-white-A700 flex flex-row items-start justify-between py-4 px-5 shadow-bs1 w-full">
            <Text className="text-base text-black-900 font-mohrroundedaltregular">
              {t("totalAmount")}
            </Text>
            <Text className="text-base text-black-900 text-right font-mohrroundedaltmedium">
              {t("sar")} {CUSTOM.setPrice(orderSummary?.total_amount)}
            </Text>
          </div>
        </div>
      </div>
      {AddToCartOpen === true ? (
        <AddToCart
          closepopup={setAddToCartOpen}
          productId={incrementQty?.product_id}
        />
      ) : null}
      {customizeOpen === true ? (
        <AddToCart
          closepopup={setCustomiseOpen}
          productId={incrementQty?.product_id}
          customizeItem={incrementQty}
        />
      ) : null}
      {/* {AddToCartSelectedOpen === true ? (
        <AddToCartSelected closepopup={setAddToCartSelectedOpen} />
      ) : null} */}
      {RepeatOrderOpen === true ? (
        <RepeatOrder
          closepopup={setRepeatOrderOpen}
          cartIds={incrementQty}
          cartData={props?.cartData}
        />
      ) : null}
      {AddToMyOccasionOpen === true ? (
        <AddToMyOccasion
          closepopup={setAddToMyOccasionOpen}
          setNewOccasion={handelAddToMyOccasionAddNew}
          moveToOccasion={checkedCartItemId}
        />
      ) : null}
      {AddToMyOccasionAddNewOpen === true ? (
        <AddToMyOccasionAddNew
          closepopup={setAddToMyOccasionAddNewOpen}
          modalTopIcon="/images/add_to-occasion-icon.svg"
          OccasionTitle={t("addNewOccasion")}
          OccasionParagraph={t("enterBelowDetailsToAddANewOccasionDot")}
        />
      ) : null}
    </>
  );
};

export default CartProductDetail;
