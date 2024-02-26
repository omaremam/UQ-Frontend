import React from "react";
import { Button, Img, Text } from "components";
import { AddToCart } from "popups/AddToCart";
import { AddToCartSelected } from "popups/AddToCartSelected";
import { RepeatOrder } from "popups/RepeatOrder";
// Importing localization strings
import { useTranslation } from "react-i18next";
const ButtonAddToCartRemoveAdd = (props) => {
  const { t } = useTranslation();
  const [AddToCartOpen, setAddToCartOpen] = React.useState(false);
  const [AddToCartSelectedOpen, setAddToCartSelectedOpen] =
    React.useState(false);
  const [RepeatOrderOpen, setRepeatOrderOpen] = React.useState(false);
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          {props?.buttonAddToCart && (
            <div className="border border-black-900 hover:bg-black-900 border-solid flex flex-col items-center justify-center mt-5 rounded w-[223px] adtocart-btn">
              <Button
                className="flex flex-row gap-2 items-center justify-center pl-4 sm:pr-5 pr-6 py-3 rounded w-full"
                onClick={() => {
                  setAddToCartOpen(true);
                }}
              >
                <Img
                  className="h-5 w-5 cart-icon"
                  src="/images/img_mdicart.svg"
                  alt="mdicart"
                />
                <Text
                  className="text-base text-black-900 text-center w-auto"
                  size="txtMohrRoundedAltMedium16"
                >
                  {t("addToCart")}
                </Text>
              </Button>
            </div>
          )}

          {props?.buttonAddRemoveProduct && (
            <div className="border border-black-900 border-solid bg-black-900 flex flex-col items-center justify-center mt-5 rounded w-[223px]">
              <div className="flex flex-row gap-2 items-center justify-center pl-4 sm:pr-5 pr-6 py-3 rounded w-full">
                <Img
                  className="h-5 w-5 cursor-pointer"
                  src="/images/minus-white.svg"
                  alt="minus"
                  onClick={() => {
                    setAddToCartSelectedOpen(true);
                  }}
                />
                <Text
                  className="text-base text-white-A700 text-center w-[100px]"
                  size="txtMohrRoundedAltMedium16"
                >
                  1
                </Text>
                <Img
                  className="h-5 w-5 cursor-pointer"
                  src="/images/add-white.svg"
                  alt="add"
                  onClick={() => {
                    setRepeatOrderOpen(true);
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {AddToCartOpen === true ? (
        <AddToCart closepopup={setAddToCartOpen} productId={props?.productId}/>
      ) : null}
      {AddToCartSelectedOpen === true ? (
        <AddToCartSelected closepopup={setAddToCartSelectedOpen} />
      ) : null}
      {RepeatOrderOpen === true ? (
        <RepeatOrder closepopup={setRepeatOrderOpen} />
      ) : null}
    </>
  );
};

ButtonAddToCartRemoveAdd.defaultProps = {
  buttonAddToCart: "",
  buttonAddRemoveProduct: "",
};

export default ButtonAddToCartRemoveAdd;