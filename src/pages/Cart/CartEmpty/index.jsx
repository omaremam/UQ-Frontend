import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Img, Text } from "components";
import { useNavigate } from "react-router-dom";
const CartEmpty = () => {
  const { t } = useTranslation();
  const navigate=useNavigate();
  return (
    <>
      <div className="bg-white-A700 max-w-[1110px] flex flex-col items-center justify-center w-full md:px-4 py-12 my-auto h-full rounded mt-12">
        <Img
          className="h-[170px]"
          src="/images/cart-empty.svg"
          alt="group36102"
        />
        <Text className="mt-5 text-2xl md:text-[22px] text-black-900 sm:text-xl font-mohrroundedaltsemibold">
          {t("yourCartIsEmpty")}
        </Text>
        <Text className="mt-2 text-base text-black-900 text-center font-mohrroundedaltregular">
          {t("thereIsNothingInYourBagLet’sAddSomeProducts")}
        </Text>
        <Button
          className="common-pointer bg-black-900 hover:border hover:border-black-900 cursor-pointer font-mohrroundedaltmedium h-12 mt-10 py-3.5 rounded text-base text-center text-white-A700 w-[180px] mb-5"
          hover={true}
          hoverclass="bg-white-A700"
          onClick={(e)=>{
            navigate('/');
          }}
        >
          {t("shopNow")}
        </Button>
      </div>
    </>
  );
};

export default CartEmpty;