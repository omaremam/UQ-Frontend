import React, { useState, useEffect } from "react";
import Footer from "components/Footer";
import Header from "components/Header";
import CartProductDetail from "./CartProductDetail";
import CartProductStep from "./CartProductStep";
import CartEmpty from "./CartEmpty";
import { useTranslation } from "react-i18next";
import globalRequest from "../../utils/global/globalRequest";
import { useDispatch, useSelector } from "react-redux";
import {
  addDeleteGetLocalStorage,
  storageKeys,
} from "../../utils/global/localData";
import { changeLoader, currentLoader } from "../../redux/reducers/loader";
import { setSnackbar } from "../../redux/reducers/snackbar";
import * as CUSTOM from "../../utils/helper/custom";
import * as APIS from "../../utils/helper/Enum";
import { updateAuth, getAuth } from "../../redux/reducers/loginData";
import { updateOrderSummary } from "../../redux/reducers/orderSummary";
import { updateOrderData, getOrderData } from "../../redux/reducers/orderData";
import { CartAlertToaster } from "components/CartAlertToaster";

const Cart = () => {
  const { t } = useTranslation();
  const loaderStatus = useSelector(currentLoader);
  const auth = useSelector(getAuth);
  const orderData = useSelector(getOrderData);
  const dispatch = useDispatch();
  const guestId = CUSTOM.getDeviceID();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    let dataCart = addDeleteGetLocalStorage(storageKeys.CART_DATA, {}, "get");
    if (dataCart) {
      setCartData(JSON.parse(dataCart));
    } else {
      setCartData([]);
    }
  }, []);

  useEffect(() => {
    let updateCartOrder = { ...orderData };
    if (cartData.length > 3) {
      updateCartOrder.totalCartItem = 4;
      if (orderData?.delivery_type == "fastest") {
        updateCartOrder.timeSloat = null;
        updateCartOrder.pageStep = 3;
      }
    } else {
      updateCartOrder.totalCartItem = 3;
    }
    dispatch(updateOrderData(updateCartOrder));
  }, [cartData]);

  console.log(orderData);

  const getOrderSummary = async () => {
    dispatch(changeLoader(true));
    try {
      let inputData = {
        user_id: auth?.id,
        guest_id: guestId,
      };
      if (orderData?.delivery_mode != "buying_for_love") {
        if (orderData?.delivery_mode == "home_office") {
          inputData.userAddresslat =
            orderData?.home_office?.itemDetail?.lattitude;
          inputData.userAddresslong =
            orderData?.home_office?.itemDetail?.longitude;
          inputData.drop_zone_id = 0;
        } else {
          inputData.userAddresslat = orderData?.home_office?.latitude;
          inputData.userAddresslong = orderData?.home_office?.longitude;
          inputData.drop_zone_id = orderData?.home_office?.id;
        }
      }
      let response = await globalRequest(
        APIS?.ORDER?.GET_SUMMARY,
        "get",
        {},
        { params: inputData },
        true
      );
      response = response?.data;
      let dataSummary = {};
      if (response?.status == "SUCCESS") {
        dataSummary = response?.data;
      }
      dispatch(updateOrderSummary(dataSummary));
    } catch (e) {
      dispatch(updateOrderSummary({}));
    }
    dispatch(changeLoader(false));
  };

  useEffect(() => {
    getOrderSummary();
  }, []);

  useEffect(() => {
    if (loaderStatus == "loadCartData") {
      let dataCart = addDeleteGetLocalStorage(storageKeys.CART_DATA, {}, "get");
      if (dataCart) {
        setCartData(JSON.parse(dataCart));
      } else {
        setCartData([]);
      }
      getOrderSummary();
    }
  }, [loaderStatus]);

  useEffect(() => {
    if (orderData?.delivery_mode) {
      getOrderSummary();
    }
  }, [orderData?.delivery_mode, orderData?.home_office]);

  return (
    <>
      <div className="bg-gray-50_02 flex flex-col font-mohrroundedaltregular items-center justify-start mx-auto w-full h-full md:h-full">
        <Header />
        {/* for empty cart */}

        {/* for empty cart */}

        {cartData.length != 0 ? (
          <>
            <div className="pt-7 pb-36 flex flex-row gap-7 sm:flex-col max-w-[1110px] w-full mx-auto md:px-4 items-start">
              <CartProductStep />
              <CartProductDetail cartData={cartData} />{" "}
            </div>
          </>
        ) : null}
        {cartData.length == 0 ? <CartEmpty /> : ""}
        <Footer className="absolute bottom-[0] flex font-mohrroundedaltregular inset-x-[0] items-center justify-center mx-auto w-full" />
      </div>
      {/* <CartAlertToaster/> */}
    </>
  );
};

export default Cart;
