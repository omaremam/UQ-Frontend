import { Button, Img, Line, Text } from "components";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Account from "./Account";
import Payment from "./Payment";

const AddMoney = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col w-full ">
        <Text
          className="text-2xl md:text-[22px] text-black-900 sm:text-xl mb-7"
          size="txtMohrRoundedAltSemiBold24"
        >
          {t('addMoneyToWallet')}
        </Text>
        <div className="w-full pl-7 rtl:pl-0 rtl:pr-7 relative">
          <div className="relative bg-gray-100_01 py-[18px] px-6 xs:px-4 mb-8">
            <div className="absolute bg-red-100 flex h-9 items-center justify-center -left-7 rtl:-left-[auto] rtl:-right-7 p-1.5 top-6 w-9 z-[1] step-icon active">
              <Img
                className="h-6"
                src="/images/wallet-open.svg"
                alt="account_balance_wallet"
              />
            </div>
            <div className="absolute border-l-2 mt-2 border-gray-300 border-dashed w-px -left-3 rtl:-left-[auto] rtl:-right-3 z-[0] step-line success"></div>
            <Account />
          </div>
          <div className="relative bg-gray-100_01 py-[18px] px-6 xs:px-4 mb-[88px] xs:mb-[148px]">
            <div className="absolute bg-red-100 flex h-9 items-center justify-center -left-7 rtl:-left-[auto] rtl:-right-7 p-1.5 top-6 w-9 z-[1] ">
              <Img
                className="h-6"
                src="/images/account_balance_wallet.svg"
                alt="account_balance_wallet"
              />
            </div>
            <div className="absolute border-l-2 mt-2 border-gray-300 border-dashed w-px -left-3 rtl:-left-[auto] rtl:-right-3 z-[0] "></div>
            <Payment />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMoney;
