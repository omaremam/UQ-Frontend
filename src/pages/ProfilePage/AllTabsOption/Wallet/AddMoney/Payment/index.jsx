import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Text, Radio, CheckboxCustom } from "components";
import { MoneyAdded } from "popups/MoneyAdded";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const Payment = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [MoneyAddedOpen, setMoneyAddedOpen] = React.useState(false);
  const handelsetMoneyAddedOpen = () => {
    setMoneyAddedOpen(true);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };
  const Tab = styled.div`
    /* Add the selected styles when the component is selected */
    ${({ isSelected }) => isSelected && ` `}
  `;
  const Panal = styled.div`
    /* Add the selected styles when the component is selected */
    ${({ isSelected }) =>
      isSelected &&
      ` 
  display: flex;`}
  `;
  const [activeTab, setActiveTab] = useState(null);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="relative flex flex-col w-full">
        <div className="flex flex-row xs:flex-col xs:items-start gap-4 items-center justify-between w-full">
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
        </div>
        <div className="flex flex-col items-center justify-between w-full mt-7">
          <Tab
            className="common-pointer flex flex-row flex-row gap-3 items-start justify-start w-full pb-3.5 border-b border-solid border-gray-300"
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
                <div className="w-full flex gap-4">
                  <Button
                    className="flex-1 mx-auto xs:w-full max-w-[242px]"
                    size="lg"
                    variant="FillBlack"
                    hover={true}
                    hoverclass="bg-white-A700"
                  >
                    {t("payNow")} ({t("sar")} 186.10)
                  </Button>
                  <Button
                    className="w-auto min-w-[92px]"
                    size="md"
                    variant="OutlineBlack"
                    hover={true}
                    hoverclass="bg-black-900"
                  >
                    {t("cancel")}
                  </Button>
                </div>
              </Panal>
            </div>
          </Tab>
          <Tab
            className="common-pointer flex flex-row flex-row gap-3 items-start justify-start w-full pt-5 pb-5 "
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
                className="hidden max-w-[580px] w-full flex flex-col items-start justify-start mt-6 mb-[0px]"
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
                    hover={true}
                    hoverclass="bg-white-A700"
                    onClick={() => {
                      handelsetMoneyAddedOpen();
                    }}
                  >
                    {t("payNow")} (SAR 186.10)
                  </Button>
                </div>
              </Panal>
            </div>
          </Tab>
        </div>
        <div className="bg-red-50_01 flex xs:flex-col gap-4 flex-row items-center justify-between py-[22px] px-[30px] xs:p-5 absolute bottom-[-88px] xs:bottom-[-148px] left-[-24px] xs:-left-4 payment-secure-box">
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
      </div>
      {MoneyAddedOpen === true ? (
        <MoneyAdded closepopup={setMoneyAddedOpen} />
      ) : null}
    </>
  );
};

export default Payment;
