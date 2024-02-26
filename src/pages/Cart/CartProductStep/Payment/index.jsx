import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Text, Radio, CheckboxCustom } from "components";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {
  updateOrderData,
  getOrderData,
} from "../../../../redux/reducers/orderData";
import { getOrderSummary } from "../../../../redux/reducers/orderSummary";
import { changeLoader, currentLoader } from "../../../../redux/reducers/loader";
import * as CUSTOM from "../../../../utils/helper/custom";
import { useDispatch, useSelector } from "react-redux";
import { setSnackbar } from "../../../../redux/reducers/snackbar";
import { getAuth } from "../../../../redux/reducers/loginData";
import * as APIS from "../../../../utils/helper/Enum";
import globalRequest from "../../../../utils/global/globalRequest";
const Payment = () => {
  const dispatch = useDispatch();
  const auth = useSelector(getAuth);
  const orderData = useSelector(getOrderData);
  const orderSummary = useSelector(getOrderSummary);
  const navigate = useNavigate();
  const { t } = useTranslation(); 
  const Tab = styled.div`
    /* Add the selected styles when the component is selected */
    ${({ isSelected }) => isSelected && ` `}
  `;
  const Panal = styled.div`
    /* Add the selected styles when the component is selected */
    ${({ isSelected }) => isSelected && `display: flex !important;`}
  `;
  const [activeTab, setActiveTab] = useState(null);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const placeOrder = async () => {

    console.log(orderData)

    let input = {
      guest_id: CUSTOM.getDeviceID(),
      user_id: auth?.id,
      branch_id: orderData?.timeSloat?.branchId,
      address_id:
        orderData?.delivery_mode == "home_office"
          ? orderData?.home_office?.itemDetail?.id
          : orderData?.home_office?.id, //if delivery mode is delivery
      drop_zone_id:
        orderData?.delivery_mode == "pickup_point"
          ? orderData?.home_office?.id
          : 0, //if delivery mode is pickup
      coupon_code_id: 0,
      coupon_code: "",
      delivery_mode: CUSTOM.deliveryMethod(orderData?.delivery_mode), //delivery , pickUp , gift
      delivery_type: orderData?.delivery_type, //fastest/schedule
      delivery_date: orderData?.delivery_date,
      delivery_time_slot_id: 1,
      additional_notes: "note",
      payment_method: "wallet",
      wallet_use: 1,
      device_type: "web", 
      user_details:{
        "first_name":orderData?.userDetails?.first_name,
        "last_name":orderData?.userDetails?.last_name,
        "mobile_no":orderData?.userDetails?.mobile_no,
        "email":orderData?.userDetails?.email
      },
    };
 
    try {
      dispatch(changeLoader(true));
      let response = await globalRequest(
        APIS?.ORDER?.PLACE_ORDER,
        "post",
        input,
        {},
        true
      );
      response = response?.data;
      if (response?.status == "SUCCESS") {
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarMessage: response?.message,
            snackbarState: "success",
          })
        );
         let order_number=response?.data?.order_number; 
         navigate('/cart-success/'+order_number);
      }else{
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

  return (
    <>
      <div className="relative flex flex-col w-full">
        <div className="flex flex-row xs:flex-col xs:items-start gap-4 items-center justify-between w-full mb-4 px-6 xs:px-4">
          <div className="flex flex-col gap-1 items-start justify-start flex-1">
            <Text className="text-base text-black-900 font-mohrroundedaltmedium">
              {t("payment")}
            </Text>
            <div className="flex gap-1 flex-row items-center">
              <Text className="text-black-900 text-sm font-mohrroundedaltregular">
                {t("selectAnOptionToPay")}
              </Text>
            </div>
          </div>

          {orderData?.pageStep > 3 ? (
            <Text className="w-auto text-base text-black-900 font-mohrroundedaltmedium whitespace-nowrap">
              {t("sar")} {CUSTOM.setPrice(orderSummary?.total_amount)}
            </Text>
          ) : null}
        </div>
        {orderData?.pageStep > 3 &&
        orderData?.delivery_mode != "buying_for_love" ? (
          <div className="flex flex-col items-center justify-between w-full mt-0.5 px-6 xs:px-4">
            <div className="flex flex-row flex-row items-start justify-start w-full pb-3.5 border-b ">
              <CheckboxCustom
                checked={orderData?.iswallet==1}
                onChange={(e) => {
                  if (e.target.checked) {
                     dispatch(updateOrderData({...orderData,iswallet:1}))
                  } else {
                    dispatch(updateOrderData({...orderData,iswallet:0}))
                  }
                }}
              />
              <div className="flex flex-col items-start justify-start flex-1 -ml-4 rtl:ml-0 rtl:-mr-4 mt-2">
                <Text className="text-base text-black-900 font-mohrroundedaltregular">
                  {t("wallet")}
                </Text>
                <div className="flex flex-row xs:flex-col gap-1 items-start justify-start flex-1">
                  <Text className="text-gray-700 text-sm font-mohrroundedaltregular">
                    {t("availableBalance")}
                  </Text>
                  <Text className="text-black-900 text-sm font-mohrroundedaltmedium">
                    {t("sar")} {CUSTOM.setPrice(orderSummary?.total_amount)}
                  </Text>
                </div>
                {orderData?.iswallet ? (
                  <div className="w-full mt-3 max-w-[242px]">
                    <Button
                      className="flex-1 mx-auto xs:w-full"
                      size="lg"
                      variant="FillBlack"
                      onClick={(e) => {
                        placeOrder();
                      }}
                    >
                      {t("payNow")} {t("sar")} (
                      {CUSTOM.setPrice(orderSummary?.total_amount)})
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
            {orderData?.iswallet!=1 ? (
              <>
                <div className="flex flex-row gap-4 items-center justify-between w-full mt-6 mb-4">
                  <Text className="text-base text-black-900 font-mohrroundedaltmedium">
                    {t("payRemainingAmountWith")}
                  </Text>
                  <Text className="w-auto text-base text-black-900 font-mohrroundedaltmedium whitespace-nowrap">
                    {t("sar")} {CUSTOM.setPrice(orderSummary?.total_amount)}
                  </Text>
                </div>
                <Tab
                  className="common-pointer flex flex-row flex-row gap-3 items-start justify-start w-full pb-3.5 border-b "
                  isSelected={activeTab === 0}
                  onClick={() => handleTabClick(0)}
                >
                  <Radio
                    name="paymentMode"
                    checked={activeTab === 0}
                    onChange={() => handleTabClick(0)}
                  />
                  <div className="flex flex-col items-start gap-1 justify-start flex-1 mt-0.5">
                    <Text className="text-base text-black-900 font-mohrroundedaltregular">
                      ICICI Debit Card
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start flex-1">
                      <Text className="text-gray-700 text-sm font-mohrroundedaltregular">
                        1234 xxxx xxxx 9874
                      </Text>
                      <Text className="text-black-900 text-sm font-mohrroundedaltmedium">
                        <Img
                          className="h-6"
                          src="/images/img_lightbulb.svg"
                          alt="signal"
                        />
                      </Text>
                    </div>
                    <Panal
                      isSelected={activeTab === 0}
                      className="hidden flex flex-col items-start justify-start mt-5 mb-[18px] xs:-ml-7"
                    >
                      <div className="max-w-[280px] w-full">
                        <Input required label={t("cvv")} />
                      </div>
                      <div className="w-full max-w-[242px]">
                        <Button
                          className="flex-1 mx-auto xs:w-full"
                          size="lg"
                          variant="FillBlack"
                        >
                          {t("payNow")} (SAR 186.10)
                        </Button>
                      </div>
                    </Panal>
                  </div>
                </Tab>
                <Tab
                  className="common-pointer flex flex-row flex-row gap-3 items-start justify-start w-full pt-5 pb-5 border-b "
                  isSelected={activeTab === 1}
                  onClick={() => handleTabClick(1)}
                >
                  <Radio
                    className="flex"
                    name="paymentMode"
                    checked={activeTab === 1}
                    onChange={() => handleTabClick(1)}
                  />
                  <div className="flex flex-col items-start gap-1 justify-start flex-1 -mt-1">
                    <Text className="text-base text-black-900 font-mohrroundedaltregular">
                      {t("creditDebitCard")}
                    </Text>
                    <Panal
                      isSelected={activeTab === 1}
                      className="hidden max-w-[580px] w-full flex flex-col items-start justify-start mt-6 mb-[18px]"
                    >
                      <div className="grid grid-cols-2 xs:grid-cols-1 gap-x-5 w-full ">
                        <Input required label={t("cardNumber")} />
                        <Input required label={t("cardHolderName")} />
                      </div>
                      <div className="grid grid-cols-2 xs:grid-cols-1 gap-x-5 w-full">
                        <Input required label={t("cardHolderName")} />
                        <Input required label={t("cvv")} />
                      </div>
                      <div className="flex items-center justify-start w-full -mt-3">
                        <CheckboxCustom />
                        <Text className="text-black-900 text-base font-mohrroundedaltregular -ml-4 rtl:ml-0 rtl:-mr-4 -mt-1">
                          {t("saveCardDetailsForFuturePurpose")}
                        </Text>
                      </div>

                      <div className="w-full max-w-[242px] mt-5">
                        <Button
                          className="flex-1 mx-auto"
                          size="lg"
                          variant="FillBlack"
                        >
                          {t("payNow")} (SAR 186.10)
                        </Button>
                      </div>
                    </Panal>
                  </div>
                </Tab>
                <Tab
                  className="common-pointer flex flex-row flex-row gap-3 items-start justify-start w-full pt-5 pb-5"
                  isSelected={activeTab === 2}
                  onClick={() => handleTabClick(2)}
                >
                  <Radio
                    className="flex"
                    name="paymentMode"
                    checked={activeTab === 2}
                    onChange={() => handleTabClick(2)}
                  />
                  <div className="flex flex-col items-start gap-1 justify-start flex-1 -mt-1">
                    <Text className="text-base text-black-900 font-mohrroundedaltregular">
                      {t("buyNowPayLater")}
                    </Text>
                  </div>
                </Tab>
              </>
            ) : null}
          </div>
        ) : null}

        {orderData?.pageStep > 3 &&
        orderData?.delivery_mode == "buying_for_love" ? (
          <div className="px-6 xs:px-4">
            <div className="common-pointer bg-light_blue-50 flex flex-col items-center justify-start py-3 px-6 xs:px-3 w-full rounded mt-6">
              <div className="flex flex-row items-center justify-between w-full gap-x-10 gap-y-3 xs:flex-col xs:items-start">
                <div className="flex flex-col flex-1 w-full gap-3 items-start justify-start">
                  <Text className="text-black-900 text-sm font-mohrroundedaltregular">
                    {t(
                      "thePaymentWillBeRequestedByThePlatformOnceTheRecipientConfirmsTheDetailsYouWillBeNotifiedForTheSame"
                    )}
                  </Text>
                  <Text className="text-black-900 text-sm font-mohrroundedaltregular">
                    {t(
                      "onceTheRecipientHasConfirmedTheDetailsYouHave30MinutesToMakePaymentAndConfirmThisOrderOtherwiseItWillBeCancelled"
                    )}
                  </Text>
                </div>
                <Button
                  className="w-auto mx-auto text-base py-[11px] px-[24px] xs:mx-0"
                  size="lg"
                  variant="FillBlack"
                  hover={true}
                  hoverclass="bg-light_blue-50"
                >
                  {t("sendGift")}
                </Button>
              </div>
            </div>
          </div>
        ) : null}

        {orderData?.pageStep > 3 &&
        orderData?.delivery_mode != "buying_for_love" ? (
          <div className="bg-red-50_01 flex md:flex-col flex-row md:gap-5 items-center justify-between py-[22px] px-[30px] xs:p-5 mt-7 w-full">
            <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
              <Img
                className="h-9 w-9"
                src="/images/img_shielddone.svg"
                alt="shielddone"
              />
              <div className="flex flex-col gap-1 items-start justify-start">
                <Text className="text-base text-black-900 font-mohrroundedaltmedium">
                  {t("secureCardPayment")}
                </Text>
                <Text className="text-black-900 text-xs font-mohrroundedaltregular">
                  {t("100SecurePaymentsPoweredByRabbitHole")}
                </Text>
              </div>
            </div>
            <div className="gap-2 grid grid-cols-4 w-auto">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="h-8 w-[44px] bg-white-A700 rounded-md">
                  <Img
                    className="h-full w-full object-contain"
                    src="/images/img_file_white_a700.svg"
                    alt="file"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="h-8 w-[44px] bg-white-A700 rounded-md">
                  <Img
                    className="h-full w-full object-contain"
                    src="/images/img_023mastercard1.png"
                    alt="023mastercardOne"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="h-8 w-[44px] bg-white-A700 rounded-md">
                  <Img
                    className="h-full w-full object-contain"
                    src="/images/img_007visa.png"
                    alt="007visa"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="h-8 w-[44px] bg-white-A700 rounded-md">
                  <Img
                    className="h-full w-full object-contain"
                    src="/images/img_1200pxrupaysvg.png"
                    alt="1200pxrupaysvg"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Payment;
