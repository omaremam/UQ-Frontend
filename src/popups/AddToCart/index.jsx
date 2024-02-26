import { Button, Img, Line, Radio, Text, CheckboxCustom } from "components";
import { useEffect, useState } from "react";
// Importing localization strings
import {
  addDeleteGetLocalStorage,
  storageKeys,
} from "../../utils/global/localData";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import globalRequest from "../../utils/global/globalRequest";
import { useDispatch, useSelector } from "react-redux";
import { changeLoader } from "../../redux/reducers/loader";
import { setSnackbar } from "../../redux/reducers/snackbar";
import * as CUSTOM from "../../utils/helper/custom";
import * as APIS from "../../utils/helper/Enum";
import { loginData, getDefaultLanguage } from "../../utils/helper/custom";
import { AddToMyOccasionAddNew } from "popups/AddToMyOccasionAddNew";
import { updateAuth, getAuth } from "../../redux/reducers/loginData";
const AddToCart = (props) => {
  const { closepopup, productId, customizeItem } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let auth = useSelector(getAuth);
  const guestId = CUSTOM.getDeviceID();
  const [productData, setProductData] = useState({});
  const [modifierData, setModifierData] = useState([]);
  const [occasionOptions, setOccasionOptions] = useState([]);
  const [uoms, setUoms] = useState([]);
  const [defaultUom, setDefaultUom] = useState({});
  const [step, setStep] = useState(1);
  const [featuredImg, setFeaturedImg] = useState("");
  const [modifierItems, setModifierItems] = useState("");
  const [selectedCartItem, setSelectedCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [disableButton, setDisableButton] = useState(false);
  const [cartData, setCartData] = useState({
    type: "occasion",
    user_occasion_id: 0,
    cartItems: [
      {
        product_id: 0,
        uom_id: 0,
        cart_item_id: 0,
        selling_price: 0,
        actual_price: 0,
        cartModifiers: [],
      },
    ],
  });
  /**
   * total price count
   */
  useEffect(() => {
    if (cartData?.cartItems?.[0]) {
      let selling_price = cartData?.cartItems?.[0]?.selling_price;
      cartData?.cartItems?.[0].cartModifiers.map((item) => {
        if (item?.cartModifierItems) {
          item?.cartModifierItems.map((itemPrice) => {
            selling_price += Number(itemPrice?.price);
          });
        }
      });
      setTotalPrice(selling_price);
    }
  }, [cartData]);

  /**
   * disable enable button
   */
  useEffect(() => {
    let error = 0;
    setDisableButton(false);
    if (modifierData?.length > 0) {
      modifierData.map((item) => {
        let mid = item?.id;
        let min = item?.modifierGroup?.min;
        if (min > 0 && item?.modifierGroup.type == "single") {
          min = 1;
        }
        let max = item?.modifierGroup?.min;
        const existingModifierIndex =
          cartData.cartItems[0].cartModifiers.findIndex(
            (modifier) => modifier.modifier_id == mid
          );
        if (existingModifierIndex !== -1) {
          let dataGetLength =
            cartData.cartItems[0].cartModifiers[existingModifierIndex]
              ?.cartModifierItems.length;
          if (dataGetLength < min) {
            error = 1;
          }
        } else {
          if (min != 0) {
            error = 1;
          }
        }
      });
      if (error == 1) {
        setDisableButton(true);
      }
    }
  }, [cartData, modifierData]);

  /**
   * get product details
   */
  const getProduct = async () => {
    try {
      dispatch(changeLoader(true));
      let params = {
        id: productId,
      };
      let response = await globalRequest(
        APIS?.PRODUCTS?.GET_PRODUCT_BY_ID,
        "get",
        {},
        { params: params },
        true
      );
      response = response?.data;
      if (response?.status == "SUCCESS") {
        setProductData(response?.data);
      } else {
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarMessage: response?.message,
            snackbarState: "error",
          })
        );
        closepopupout();
      }
    } catch (e) {
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarMessage: e?.message,
          snackbarState: "error",
        })
      );
      closepopupout();
    }
    dispatch(changeLoader(false));
  };
  /**
   * get modifiers
   */
  const getModifiers = async () => {
    try {
      dispatch(changeLoader(true));
      let response = await globalRequest(
        `${APIS?.PRODUCTS?.GET_MODIFIER_BY_UOM_ID}/${defaultUom?.id}`,
        "get",
        {},
        {},
        true
      );
      response = response?.data;
      setStep(2);
      if (response?.status == "SUCCESS") {
        setModifierData(response?.data);
      } else {
        // dispatch(
        //   setSnackbar({
        //     snackbarOpen: true,
        //     snackbarMessage: response?.message,
        //     snackbarState: "error",
        //   })
        // );
        //closepopupout();
      }
    } catch (e) {
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarMessage: e?.message,
          snackbarState: "error",
        })
      );
      closepopupout();
    }
    dispatch(changeLoader(false));
  };
  /**
   * get product data
   */
  useEffect(() => {
    if (productId) {
      getProduct();
    }
  }, [productId]);
  /**
   * get  uom data
   */
  useEffect(() => {
    if (Object.keys(productData).length != 0) {
      setUoms(productData?.productUoms);
    }
  }, [productData]);

  /**set default uom*/
  useEffect(() => {
    if (uoms.length && typeof customizeItem == "undefined") {
      const defaultItem = uoms?.find((item) => item?.isDefault === "1");
      if (defaultItem) {
        setDefaultUom(defaultItem);
      }
    }
  }, [uoms]);

  /**
   * set default uom data
   */
  const setDefaultUomData = (id) => {
    const defaultItem = uoms?.find((item) => item?.id == id);
    if (defaultItem) {
      setDefaultUom(defaultItem);
    }
  };
  /**
   * set default uom
   */
  useEffect(() => {
    if (Object.keys(defaultUom).length > 0) {
      let featured = defaultUom?.productUomImages?.find(
        (item) => Number(item?.featured) == "1"
      );
      if (featured) {
        setFeaturedImg(CUSTOM.getImage(featured?.image));
      }
    }
  }, [defaultUom]);
  /**
   * close popup
   */
  const closepopupout = () => {
    closepopup(false);
    document.body.classList.remove("overflow-hidden");
    document.getElementById("header-box").classList.remove("relative");
  };
  /**
   * set cart data
   */
  useEffect(() => {
    if (Object.keys(defaultUom).length > 0) {
      let items = {
        product_id: productId,
        uom_id: defaultUom?.id,
        selling_price: defaultUom?.sellingPrice,
        actual_price: defaultUom?.actualPrice,
        cart_item_id:
          typeof customizeItem != "undefined" ? customizeItem?.uomData?.id : 0,
        cartModifiers: [],
      };
      setCartData({ ...cartData, cartItems: [items] });
    }
  }, [defaultUom]);
  /**
   * add item incart state
   */
  const addCartItemsState = (group, item, isChecked) => {
    const existingModifierIndex = cartData.cartItems[0].cartModifiers.findIndex(
      (modifier) => modifier.modifier_id === group?.id
    );
    if (existingModifierIndex !== -1) {
      if (isChecked) {
        let dataGetLength =
          cartData.cartItems[0].cartModifiers[existingModifierIndex]
            ?.cartModifierItems.length;
        let modifierDataGet = modifierData?.find(
          (item) => item?.id == group?.id
        );
        let min = 0;
        let max = 0;
        if (modifierDataGet) {
          if (modifierDataGet?.modifierGroup) {
            min = modifierDataGet?.modifierGroup?.min;
            max = modifierDataGet?.modifierGroup?.max;
            if (modifierDataGet?.modifierGroup?.type == "single") {
              min = 1;
              max = 1;
            }
          }
        }
        if (dataGetLength == max && max != 0) {
          return false;
        }
        let newCartModifierItem = {
          modifier_item_id: item?.id,
          price: item?.price,
        };
        const updatedCartData = {
          ...cartData,
          cartItems: cartData.cartItems.map((cartItem, index) => {
            return {
              ...cartItem,
              cartModifiers: cartItem.cartModifiers.map(
                (modifier, modifierIndex) => {
                  if (modifierIndex === existingModifierIndex) {
                    return {
                      ...modifier,
                      cartModifierItems: [
                        ...modifier.cartModifierItems,
                        newCartModifierItem,
                      ],
                    };
                  } else {
                    // Otherwise, leave the modifier unchanged
                    return modifier;
                  }
                }
              ),
            };
          }),
        };
        setCartData(updatedCartData);
      } else {
        const modifiedCartData = { ...cartData };
        const modifierItemIdToRemove = item?.id;
        const cartModifiersIndex =
          modifiedCartData.cartItems[0].cartModifiers.findIndex((modifier) => {
            return modifier.cartModifierItems.some(
              (item) => item.modifier_item_id === modifierItemIdToRemove
            );
          });
        if (cartModifiersIndex !== -1) {
          const cartModifierItems =
            modifiedCartData.cartItems[0].cartModifiers[cartModifiersIndex]
              .cartModifierItems;
          const cartModifierItemIndex = cartModifierItems.findIndex(
            (item) => item.modifier_item_id === modifierItemIdToRemove
          );
          if (cartModifierItemIndex !== -1) {
            cartModifierItems.splice(cartModifierItemIndex, 1);
            if (cartModifierItems.length === 0) {
              modifiedCartData.cartItems[0].cartModifiers.splice(
                cartModifiersIndex,
                1
              );
            }
          }
        }
        setCartData(modifiedCartData);
      }
    } else {
      const newModifier = {
        modifier_id: group?.id,
        cartModifierItems: [
          {
            modifier_item_id: item?.id,
            price: item?.price,
          },
        ],
      };
      const updatedCartData = {
        ...cartData,
        cartItems: [
          {
            ...cartData.cartItems[0],
            cartModifiers: [
              ...cartData.cartItems[0].cartModifiers,
              newModifier,
            ],
          },
        ],
      };
      setCartData(updatedCartData);
    }
  };
  /**
   * Check item exist or not in cart state
   */
  const checkItemExistOrNot = (ItemId) => {
    const modifiedCartData = { ...cartData };
    const modifierItemIdToRemove = ItemId;
    const cartModifiersIndex =
      modifiedCartData.cartItems[0].cartModifiers.findIndex((modifier) => {
        return modifier.cartModifierItems.some(
          (item) => item.modifier_item_id === modifierItemIdToRemove
        );
      });

    if (cartModifiersIndex !== -1) {
      const cartModifierItems =
        modifiedCartData.cartItems[0].cartModifiers[cartModifiersIndex]
          .cartModifierItems;
      const cartModifierItemIndex = cartModifierItems.findIndex(
        (item) => item.modifier_item_id === modifierItemIdToRemove
      );
      if (cartModifierItemIndex !== -1) {
        return true;
      }
    }
    return false;
  };
  /**
   * add data in occasion
   */
  const AddToMyOccasion = async (id) => {
    try {
      dispatch(changeLoader(true));
      cartData.user_occasion_id = id;
      if (auth?.id && auth?.id != 0) {
        cartData.user_id = auth?.id;
      } else {
        cartData.guest_id = guestId;
      }
      let url =
        id != 0
          ? `${APIS?.CART?.ADD_TO_OCCASION}`
          : `${APIS?.CART?.ADD_TO_CART}`;
      let itemID = cartData?.cartItems?.[0]?.cart_item_id || 0;
      let method = "post";
      if (itemID != 0) {
        url = `${APIS?.CART?.CUSTOMIZE_CART}`;
        method = "put";
      }
      let response = await globalRequest(url, method, cartData, {}, true);
      response = response?.data;
      if (response?.status == "SUCCESS") {
        dispatch(changeLoader("fetchCartCount"));
        if (id != 0) {
          addDeleteGetLocalStorage(
            storageKeys.ORDER_TAB,
            "occasion",
            "add",
            "single"
          );
          addDeleteGetLocalStorage(
            storageKeys.ORDER_TAB_ID,
            `${id}`,
            "add",
            "single"
          );
          //addDeleteGetLocalStorage(storageKeys.ORDER_TAB_ID,id,'add','single')
          navigate("/my-order");
          return;
        }
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarMessage: response?.message,
            snackbarState: "success",
          })
        );
        closepopupout();
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
    dispatch(changeLoader(false));
  };

  /**
   * get occasion list from api
   */
  const getOccasionOptions = async () => {
    if (auth?.id) {
      try {
        dispatch(changeLoader(true));
        let response = await globalRequest(
          APIS?.OCCASION?.LISTING,
          "get",
          {},
          {},
          true
        );
        response = response?.data;
        if (response?.status == "SUCCESS") {
          setOccasionOptions(response?.data?.data);
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
      dispatch(changeLoader(false));
    }
  };
  /**
   * add new occasion popup
   */
  const handelAddToMyOccasionAddNew = () => {
    setStep(3);
    getOccasionOptions();
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };
  /**
   * call occasion api list when page load first time
   */
  useEffect(() => {
    getOccasionOptions();
  }, []);

  const getItemModifiers = async () => {
    dispatch(changeLoader(true));
    try {
      let response = await globalRequest(
        `${APIS?.CART?.CART_MODIFIER_BY_ITEM_ID}`,
        "get",
        {},
        { params: { cart_item_id: customizeItem?.uomData?.id } },
        true
      );
      response = response?.data;
      if (response?.status == "SUCCESS") {
        setSelectedCartItem(response?.data);
      }
    } catch (e) {}
    dispatch(changeLoader(false));
  };

  useEffect(() => {
    if (typeof customizeItem !== "undefined" && selectedCartItem.length == 0) {
      getItemModifiers(); 
    }
  }, []);

  useEffect(() => {
    if (typeof customizeItem !== "undefined"){
      if (selectedCartItem.length > 0 && uoms.length > 0) {
        setDefaultUomData(customizeItem?.uomData?.uomId);
      }else{
        setDefaultUomData(customizeItem?.uomData?.uomId);
      } 
    }
  }, [selectedCartItem, uoms]);



  const getPriceOfModifierByID = (id) => {
    for (const item of modifierData) {
      for (const modifierItem of item.productUomModifierItems) {
        if (modifierItem.id === id) {
          return parseFloat(modifierItem.price);
        }
      }
    }
    return 0;
  };

  useEffect(() => {
    if (modifierData.length > 0 && selectedCartItem.length > 0) {
      const updatedCartData = { ...cartData };
      const itemIndex = 0;
      const updatedCartModifiers = [
        ...updatedCartData.cartItems[itemIndex].cartModifiers,
      ];
      selectedCartItem.forEach((item) => {
        let mfier = {
          modifier_id: item?.modifierGroupId,
          cartModifierItems: item.cartModifierItems.map((items) => ({
            modifier_item_id: items?.modifierItemId,
            price: getPriceOfModifierByID(items?.modifierItemId),
          })),
        };
        updatedCartModifiers.push(mfier);
      });
      updatedCartData.cartItems[itemIndex].cartModifiers = updatedCartModifiers;
      setCartData(updatedCartData);
    }
  }, [modifierData, selectedCartItem]);

  return (
    <>
      {step == 1 ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-auto w-fit h-fit xs:w-full xs:px-4">
            <div className="relative w-auto my-6 mx-auto max-w-[550px] min-w-[525px] xs:w-full xs:min-w-full xs:max-w-full">
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
                <div className="bg-white-A700 flex flex-col items-center justify-start pt-3 rounded-lg w-[100%] md:w-full">
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex xs:flex-col flex-row xs:gap-3 items-start justify-start w-full px-7 xs:px-4">
                      {featuredImg ? (
                        <Img
                          className="h-12 md:h-auto sm:mt-0 mt-0.5 object-cover rounded-lg w-12"
                          src={featuredImg}
                          alt="rectangle19009"
                        />
                      ) : (
                        ""
                      )}
                      <div className="flex flex-col gap-[7px] items-start justify-start ml-2.5 rtl:ml-0 rtl:mr-2.5 xs:ml-[0] sm:mt-0 mt-1">
                        <Text
                          className="text-base text-black-900"
                          size="txtMohrRoundedAltMedium16"
                        >
                          {defaultUom?.name}
                        </Text>
                        <Text
                          className="text-black-900 text-xs"
                          size="txtMohrRoundedAltRegular12"
                        >
                          {
                            <>
                              {t("sar")} {defaultUom?.sellingPrice}
                            </>
                          }
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Line className="bg-gray-300 h-1 w-full" />
                      <div className="flex flex-col items-center justify-start mt-4 w-full px-7 xs:px-4">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row items-start justify-between w-[98%] xs:gap-3 md:w-full xs:flex-wrap">
                            <div className="flex flex-col gap-[7px] items-start justify-start mt-0.5">
                              <Text
                                className="text-base text-black-900"
                                size="txtMohrRoundedAltMedium16"
                              >
                                {t("chooseFromVariant")}
                              </Text>
                              <Text
                                className="text-gray-700 text-xs"
                                size="txtMohrRoundedAltRegular12Gray700"
                              >
                                {
                                  <>
                                    {t("chooseAny")} 1 {t("optionSmallLetter")}
                                  </>
                                }
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer flex items-center justify-center min-w-[113px] px-3 py-[7px] rounded bg-red-50_01"
                              leftIcon={
                                <Img
                                  className="h-[18px] mr-2 rtl:mr-0 rtl:ml-2"
                                  src="/images/img_checkmark_gray_900_01.svg"
                                  alt="checkmark"
                                />
                              }
                            >
                              <div className="text-center text-gray-900_01 text-sm">
                                {t("required")}
                              </div>
                            </Button>
                          </div>
                          <div className="flex flex-col gap-[10px] font-mohrroundedaltregular mt-3 relative w-[98%] sm:w-full">
                            {uoms?.map((item, index) => {
                              return (
                                <>
                                  {" "}
                                  <div
                                    key={`${index}-uom-list-popup`}
                                    className="flex xs:flex-wrap flex-row sm:gap-5 items-center justify-between mx-auto w-full"
                                  >
                                    <div className="flex items-center">
                                      <Radio
                                        className="mr-3 rtl:mr-0 rtl:ml-3"
                                        value={item?.id}
                                        checked={item?.id == defaultUom?.id}
                                        onClick={(e) => {
                                          setDefaultUomData(e.target.value);
                                        }}
                                      />
                                      <Text
                                        className="text-base text-black-900"
                                        size="txtMohrRoundedAltRegular16"
                                      >
                                        {item?.name}
                                      </Text>
                                    </div>
                                    <Text
                                      className="text-base text-black-900 text-right"
                                      size="txtMohrRoundedAltRegular16"
                                    >
                                      {
                                        <>
                                          {t("sar")} {item?.sellingPrice}
                                        </>
                                      }
                                    </Text>
                                  </div>{" "}
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col items-center justify-start mt-5 pb-5 rounded-bl-lg rounded-br-lg w-full">
                        <div className="flex flex-col gap-5 items-center justify-start w-full">
                          <Line className="bg-gray-300 h-1 w-full" />
                          <div className="flex flex-row items-center justify-between w-full px-7 xs:px-4">
                            <Text
                              className="text-base text-black-900 text-right"
                              size="txtMohrRoundedAltMedium16"
                            >
                              {<>{t("step")} 1/2</>}
                            </Text>
                            <Button
                              className="common-pointer bg-black-900 border border-black-900 cursor-pointer h-auto py-3 xs:px-3.5 rounded text-base text-center text-white-A700 w-[180px] xs:w-auto"
                              hover={true}
                              hoverclass="bg-white-A700"
                              onClick={(e) => {
                                getModifiers();
                              }}
                            >
                              {t("continue")}
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
          <div
            className="opacity-75 fixed inset-0 z-40 bg-black-900"
            onClick={() => closepopupout()}
          ></div>
        </>
      ) : (
        ""
      )}
      {step == 2 ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-auto w-fit h-fit xs:px-4">
            <div className="relative w-auto my-6 mx-auto max-w-[550px] min-w-[525px] xs:w-full xs:min-w-full xs:max-w-full">
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
                <div className="bg-white-A700 flex flex-col items-center justify-start rounded-lg w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col items-center justify-start pt-3 rounded-tl-lg rounded-tr-lg w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex xs:flex-col flex-row xs:gap-3 items-start justify-start w-full px-7 xs:px-4">
                          {featuredImg ? (
                            <Img
                              className="h-12 md:h-auto sm:mt-0 mt-0.5 object-cover rounded-lg w-12"
                              src={featuredImg}
                              alt="rectangle19009"
                            />
                          ) : (
                            ""
                          )}
                          <div className="flex flex-col gap-[7px] items-start justify-start ml-2 rtl:ml-0 rtl:mr-2.5 xs:ml-[0] sm:mt-0 mt-1">
                            <Text
                              className="text-base text-black-900"
                              size="txtMohrRoundedAltMedium16"
                            >
                              {defaultUom?.name}
                            </Text>
                            <Text
                              className="text-black-900 text-xs"
                              size="txtMohrRoundedAltRegular12"
                            >
                              {
                                <>
                                  {t("sar")} {defaultUom?.sellingPrice}
                                </>
                              }
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-gray-300 h-1 w-full" />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[18px] w-full px-7 xs:px-4">
                      <div className="flex flex-col gap-[7px] items-start justify-start">
                        <Text
                          className="text-base text-black-900"
                          size="txtMohrRoundedAltMedium16"
                        >
                          {t("chooseFromVariant")}
                        </Text>
                        <Text
                          className="text-gray-700 text-xs"
                          size="txtMohrRoundedAltRegular12Gray700"
                        >
                          {defaultUom?.name}
                        </Text>
                      </div>
                      <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded w-auto">
                        <div className="common-pointer flex flex-col h-10 md:h-auto items-center justify-center py-2 rounded w-auto">
                          <Text
                            className="text-pink-800 text-right text-sm w-auto"
                            size="txtMohrRoundedAltMedium14"
                            onClick={(e) => {
                              setStep(1);
                            }}
                          >
                            {t("change")}
                          </Text>
                        </div>
                      </div>
                    </div>

                    {modifierData.length ? (
                      <>
                        <Line className="bg-gray-300 h-px mt-5 w-full" />
                        <div className="flex  justify-end pt-5 relative w-full h-[315px] overflow-y-auto">
                          <div className="flex flex-col h-full items-center justify-start mt-auto mx-auto w-full">
                            {modifierData?.map((item, index) => {
                              return (
                                <>
                                  <div
                                    key={`modifier-item-of-product-${index}`}
                                    className={`flex ${
                                      index != 0 ? "mt-5" : ""
                                    } flex-col gap-[18px] items-center justify-start w-full`}
                                  >
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div className="flex flex-col items-center justify-start w-full">
                                        <div className="flex flex-row xs:flex-col xs:gap-3  items-start justify-between w-full px-7 xs:px-4">
                                          <div className="flex flex-col gap-[7px] items-start justify-start mt-0.5">
                                            <Text
                                              className="text-base text-black-900"
                                              size="txtMohrRoundedAltMedium16"
                                            >
                                              {CUSTOM.getdataByLangKey(
                                                item?.modifierGroup
                                                  ?.modifierGroupLocales,
                                                CUSTOM.getDefaultLanguage(),
                                                "name"
                                              )}
                                            </Text>
                                            <Text
                                              className="text-gray-700 text-xs"
                                              size="txtMohrRoundedAltRegular12Gray700"
                                            >
                                              {item?.modifierGroup?.type ==
                                              "single" ? (
                                                <>
                                                  {t("chooseAny")} 1{" "}
                                                  {t("optionSmallLetter")}
                                                </>
                                              ) : null}
                                              {item?.modifierGroup?.type ==
                                                "multiple" &&
                                              item?.modifierGroup?.min == 0 &&
                                              item?.modifierGroup?.max == 0 ? (
                                                <>{t("chooseMutipleOptions")}</>
                                              ) : null}
                                              {item?.modifierGroup?.type ==
                                                "multiple" &&
                                              item?.modifierGroup?.min == 0 &&
                                              item?.modifierGroup?.max != 0 ? (
                                                <>
                                                  {CUSTOM.replaceKeyValue(
                                                    t("chooseMaxOption"),
                                                    "[VALUE]",
                                                    item?.modifierGroup?.max
                                                  )}
                                                </>
                                              ) : null}
                                              {item?.modifierGroup?.type ==
                                                "multiple" &&
                                              item?.modifierGroup?.min != 0 &&
                                              item?.modifierGroup?.max == 0 ? (
                                                <>
                                                  {CUSTOM.replaceKeyValue(
                                                    t("chooseMinOption"),
                                                    "[VALUE]",
                                                    item?.modifierGroup?.min
                                                  )}
                                                </>
                                              ) : null}

                                              {item?.modifierGroup?.type ==
                                                "multiple" &&
                                              item?.modifierGroup?.min != 0 &&
                                              item?.modifierGroup?.max != 0 ? (
                                                <>
                                                  {CUSTOM.replaceKeyValue(
                                                    t("cooseMinMAxOption"),
                                                    "['MIN','MAX']",
                                                    "[" +
                                                      item?.modifierGroup?.min +
                                                      "," +
                                                      item?.modifierGroup?.max +
                                                      "]",
                                                    "array"
                                                  )}
                                                </>
                                              ) : null}
                                            </Text>
                                          </div>
                                          {item?.modifierGroup?.min > 0 ? (
                                            <Button
                                              className="cursor-pointer flex items-center justify-center xs:ml-auto min-w-[113px] px-3 py-[7px] rounded bg-red-50_01"
                                              leftIcon={
                                                <Img
                                                  className="h-[18px] mr-2 rtl:mr-0 rtl:ml-2"
                                                  src="/images/img_checkmark_gray_900_01.svg"
                                                  alt="checkmark"
                                                />
                                              }
                                            >
                                              <div className="text-center text-gray-900_01 text-sm">
                                                {t("required")}
                                              </div>
                                            </Button>
                                          ) : null}
                                        </div>
                                        <div className="flex flex-col font-mohrroundedaltregular mt-3 gap-[0px] relative w-full px-7 xs:px-4">
                                          {item?.productUomModifierItems.map(
                                            (nItem, nIndex) => {
                                              return (
                                                <>
                                                  <div className="flex flex-row sm:gap-5 xs:gap-2 items-center justify-start mx-auto w-full">
                                                    <div className="flex items-center xs:w-[50%]">
                                                      {item?.modifierGroup
                                                        ?.type == "multiple" ? (
                                                        <CheckboxCustom
                                                          className="mr-0 rtl:mr-0 rtl:ml-0"
                                                          checked={checkItemExistOrNot(
                                                            nItem?.id
                                                          )}
                                                          onChange={(e) => {
                                                            addCartItemsState(
                                                              item,
                                                              nItem,
                                                              e.target.checked
                                                            );
                                                          }}
                                                        />
                                                      ) : (
                                                        <CheckboxCustom
                                                          className="mr-0 rtl:mr-0 rtl:ml-0"
                                                          checked={checkItemExistOrNot(
                                                            nItem?.id
                                                          )}
                                                          onChange={(e) => {
                                                            addCartItemsState(
                                                              item,
                                                              nItem,
                                                              e.target.checked
                                                            );
                                                          }}
                                                        />
                                                      )}
                                                      <Text
                                                        className="text-base xs:text-sm text-black-900 truncate text-ellipsis"
                                                        size="txtMohrRoundedAltRegular16"
                                                      >
                                                        {CUSTOM.getdataByLangKey(
                                                          nItem
                                                            ?.modifierGroupItem
                                                            ?.modifierGroupItemLocales,
                                                          CUSTOM.getDefaultLanguage(),
                                                          "name"
                                                        )}
                                                      </Text>
                                                    </div>
                                                    {Number(
                                                      nItem?.modifierGroupItem
                                                        ?.price
                                                    ) > Number(nItem?.price) ? (
                                                      <Text
                                                        className="line-through ltr:ml-auto rtl:mr-auto text-gray-700 text-right text-sm"
                                                        size="txtMohrRoundedAltRegular14"
                                                      >
                                                        {
                                                          nItem
                                                            ?.modifierGroupItem
                                                            ?.price
                                                        }
                                                      </Text>
                                                    ) : (
                                                      <Text
                                                        className="line-through ltr:ml-auto rtl:mr-auto text-gray-700 text-right text-sm"
                                                        size="txtMohrRoundedAltRegular14"
                                                      />
                                                    )}
                                                    <Text
                                                      className="text-base xs:text-sm text-black-900 text-right"
                                                      size="txtMohrRoundedAltRegular16"
                                                    >
                                                      {
                                                        <>
                                                          {t("sar")}{" "}
                                                          {nItem?.price}
                                                        </>
                                                      }
                                                    </Text>
                                                  </div>
                                                </>
                                              );
                                            }
                                          )}
                                        </div>
                                        <Line className="bg-gray-300 h-px mt-5 w-full" />
                                      </div>
                                    </div>
                                  </div>
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="mb-5"></div>
                    )}

                    <div className="bg-white-A700 flex flex-col items-center justify-start pb-5 rounded-bl-lg rounded-br-lg w-full">
                      <div className="flex flex-col gap-5 items-center justify-start w-full">
                        <Line className="bg-gray-300 h-1 w-full" />
                        <div className="flex flex-row xs:flex-wrap xs:gap-3 sm:gap-5 items-center justify-between w-full px-7 xs:px-4">
                          <div className="flex flex-col gap-0.5 items-start justify-start w-auto xs:w-full">
                            <Text
                              className="text-base text-black-900 text-right w-auto"
                              size="txtMohrRoundedAltMedium16"
                            >
                              {
                                <>
                                  {t("sar")} {totalPrice}
                                </>
                              }
                            </Text>
                            <Text
                              className="text-gray-700 text-xs w-auto"
                              size="txtMohrRoundedAltRegular12Gray700"
                            >
                              {t("totalAmount")}
                            </Text>
                          </div>
                          {auth?.id &&
                          cartData?.cartItems?.[0]?.cart_item_id == 0 ? (
                            <Button
                              className="border border-black-900 border-solid cursor-pointer py-[12px] rounded text-base text-black-900 text-center w-[162px] xs:w-full"
                              hover={!disableButton}
                              hoverclass="bg-black-900"
                              onClick={(e) => {
                                setStep(3);
                              }}
                              disabled={disableButton}
                            >
                              {t("addToOccasion")}
                            </Button>
                          ) : null}
                          <Button
                            className={`bg-black-900 border border-black-900 text-white-A700 cursor-pointer flex items-center justify-center min-w-[146px] xs:min-w-full xs:w-full p-[13px] rounded`}
                            hover={!disableButton}
                            hoverclass="bg-white-A700"
                            disabled={disableButton}
                            leftIcon={
                              <Img
                                className="h-5 mt-px btn-icon"
                                src="/images/img_mdicart_white_a700.svg"
                                alt="mdi:cart"
                              />
                            }
                            onClick={(e) => {
                              AddToMyOccasion(0);
                            }}
                          >
                            <div className="text-base text-center mx-2">
                              {t("addToCart")}
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="opacity-75 fixed inset-0 z-40 bg-black-900"
            onClick={() => closepopupout()}
          ></div>
        </>
      ) : (
        ""
      )}
      {step == 3 ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-auto w-fit h-fit xs:px-4">
            <div className="relative w-auto my-6 mx-auto max-w-[400px] min-w-[400px] xs:min-w-full xs:max-w-full">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white-A700 outline-none focus:outline-none overflow-hidden">
                {/*header*/}
                <div className="flex flex-col items-center justify-start w-auto">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <div className="flex flex-row items-start justify-end w-auto pt-4 pr-4 rtl:pr-0 rtl:pl-4 absolute right-0 rtl:right-auto rtl:left-0">
                      <Img
                        src="/images/modal-close.svg"
                        className="common-pointer h-6 w-6"
                        alt="close"
                        onClick={() => closepopupout()}
                      />
                    </div>
                  </div>
                </div>
                {/*body*/}
                <div className="bg-white-A700 flex flex-col items-center justify-start px-[30px] py-3 rounded-lg w-full">
                  <div className="flex flex-col justify-start w-full relative z-[5]">
                    <div className="relative flex flex-row items-center justify-center w-full">
                      <Img
                        className="h-auto w-[122px] cursor-pointer"
                        src="/images/add_to-occasion-icon.svg"
                        alt="icon"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-start w-full mt-3 mb-2">
                      <Text
                        className="leading-[32.00px] text-2xl md:text-[22px] text-black-900 sm:text-xl text-center w-full"
                        size="txtMohrRoundedAltSemiBold24"
                      >
                        {t("addToMyOccasion")}
                      </Text>
                    </div>
                    <div className="flex flex-col font-mohrroundedaltregular items-center justify-start w-full mb-6">
                      <Text
                        className="text-base text-gray-700 text-center w-full"
                        size="txtMohrRoundedAltMedium16"
                      >
                        {t("chooseAnOccasionFromTheListBelowOrAddANewOneDot")}
                      </Text>
                    </div>

                    <div className="flex flex-col items-start justify-start w-full max-h-[200px] overflow-auto">
                      {occasionOptions.map((items, index) => {
                        return (
                          <>
                            <Text
                              className={`text-base text-black-900 mb-2 cursor-pointer`}
                              size="txtMohrRoundedAltRegular16"
                              onClick={(e) => {
                                AddToMyOccasion(items?.id);
                              }}
                            >
                              {items?.name}
                            </Text>
                            {occasionOptions.length - 1 != index ? (
                              <Line className="bg-gray-300 mb-[13px] h-px  w-[95%]" />
                            ) : (
                              ""
                            )}
                          </>
                        );
                      })}
                    </div>

                    <div className="flex flex-row font-mohrroundedaltmedium gap-3 items-center justify-start mt-6 mb-5 w-full">
                      <Button
                        className="common-pointer border border-black-900 border-solid cursor-pointer py-3.5 rounded text-base text-black-900 text-center w-full flex items-center justify-center"
                        hover={true}
                        hoverclass="bg-black-900"
                        leftIcon={
                          <Img
                            className="h-[20px] w-[20px] mr-2 rtl:mr-0 rtl:ml-2 btn-icon"
                            src="/images/add-black-icon.svg"
                            alt="checkmark"
                          />
                        }
                        onClick={(e) => {
                          setStep(4);
                        }}
                      >
                        {t("addNew")}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="opacity-75 fixed inset-0 z-40 bg-black-900"
            onClick={() => closepopupout()}
          ></div>
        </>
      ) : null}
      {step == 4 ? (
        <>
          <AddToMyOccasionAddNew
            editData={{}}
            isCart={"yes"}
            closepopup={handelAddToMyOccasionAddNew}
            modalTopIcon="/images/add_to-occasion-icon.svg"
            OccasionTitle={t("addNewOccasion")}
            OccasionParagraph={t("enterBelowDetailsToAddANewOccasionDot")}
            AddToMyOccasion={AddToMyOccasion}
          />
        </>
      ) : null}
    </>
  );
};
export { AddToCart };
