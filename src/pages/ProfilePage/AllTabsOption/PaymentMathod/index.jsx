import { Img, List, Text } from "components";
import React from "react";
import { useTranslation } from "react-i18next";
import { DeleteModal } from "popups/DeleteModal";
import { AddNewCart } from "popups/AddNewCart";
const PaymentMathod = () => {
  const { t } = useTranslation();
  const [RemoveCardOpen, setRemoveCardOpen] = React.useState(false);
  const handelsetRemoveCardOpen = () => {
    setRemoveCardOpen(true);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };
  const [AddNewCardOpen, setAddNewCardOpen] = React.useState(false);
  const handelsetAddNewCardOpen = () => {
    setAddNewCardOpen(true);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };
  return (
    <>
      <div className="flex flex-col w-full mb-7">
        <Text
          className="text-2xl md:text-[22px] text-black-900 sm:text-xl mb-5"
          size="txtMohrRoundedAltSemiBold24"
        >
          {t("managePaymentMethods")}
        </Text>

        <List
          className="flex flex-col font-mohrroundedaltmedium gap-4 items-center w-full"
          orientation="vertical"
        >
          <div className="relative w-full">
            <div className="bg-light_blue-50 flex items-center justify-between py-3 px-5 rounded w-full">
              <div className="flex items-center justify-start gap-4">
                <Img
                  className="h-8 w-8"
                  src="/images/img_computer_black_900.svg"
                  alt="computer"
                />
                <Text
                  className="text-base text-black-900"
                  size="txtMohrRoundedAltMedium16"
                >
                  {t("creditOrDebitCards")}
                </Text>
              </div>
              <Text
                className="text-center text-pink-800 text-sm w-auto cursor-pointer py-2 px-3"
                size="txtMohrRoundedAltMedium14"
                onClick={() => {
                  handelsetAddNewCardOpen();
                }}
              >
                {t("add")}
              </Text>
            </div>
            <div className="border border-t-0 border-solid border-gray-300 w-full rounded-b-lg">
              <div className="flex items-center justify-between p-4 border-b border-solid border-gray-300">
                <div className="flex items-center">
                  <Img
                    className="h-8 w-8"
                    src="/images/img_023mastercard1.png"
                    alt="master"
                  />
                  <Text
                    className="text-base text-black-900 ml-3 rtl:ml-0 rtl:mr-3"
                    size="txtMohrRoundedAltMedium16"
                  >
                    XXXX XXXX XXXX 1301
                  </Text>
                </div>
                <Text
                  className="text-base text-black-900 text-ellipsis overflow-hidden w-[150px]"
                  size="txtMohrRoundedAltMedium16"
                >
                  Jacob James1
                </Text>
                <Text
                  className="text-base text-black-900"
                  size="txtMohrRoundedAltMedium16"
                >
                  11/32
                </Text>
                <Img
                  className="h-5 w-5 cursor-pointer mx-3"
                  src="/images/img_trash.svg"
                  alt="delete"
                  onClick={() => {
                    handelsetRemoveCardOpen();
                  }}
                />
              </div>
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  <Img
                    className="h-8 w-8"
                    src="/images/img_007visa.png"
                    alt="visa"
                  />
                  <Text
                    className="text-base text-black-900 ml-3 rtl:ml-0 rtl:mr-3"
                    size="txtMohrRoundedAltMedium16"
                  >
                    XXXX XXXX XXXX 1211
                  </Text>
                </div>
                <Text
                  className="text-base text-black-900 text-ellipsis overflow-hidden w-[150px]"
                  size="txtMohrRoundedAltMedium16"
                >
                  Jacob James
                </Text>
                <Text
                  className="text-base text-black-900"
                  size="txtMohrRoundedAltMedium16"
                >
                  11/32
                </Text>
                <Img
                  className="h-5 w-5 cursor-pointer mx-3"
                  src="/images/img_trash.svg"
                  alt="delete"
                  onClick={() => {
                    handelsetRemoveCardOpen();
                  }}
                />
              </div>
            </div>
          </div>
          <div className="bg-light_blue-50 flex items-center justify-between py-3 px-5 rounded w-full">
            <div className="flex items-center justify-start gap-4">
              <Img
                className="h-8 w-8"
                src="/images/img_computer_black_900.svg"
                alt="computer"
              />
              <Text
                className="text-base text-black-900"
                size="txtMohrRoundedAltMedium16"
              >
                {t("applePay")}
              </Text>
            </div>
            <Text
              className="text-center text-pink-800 text-sm w-auto cursor-pointer py-2 px-3"
              size="txtMohrRoundedAltMedium14"
            >
              {t("link")}
            </Text>
          </div>
          <div className="bg-light_blue-50 flex items-center justify-between py-3 px-5 rounded w-full">
            <div className="flex items-center justify-start gap-4">
              <Img
                className="h-8 w-8"
                src="/images/img_computer_black_900.svg"
                alt="computer"
              />
              <Text
                className="text-base text-black-900"
                size="txtMohrRoundedAltMedium16"
              >
                {t("buyNowPayLater")}
              </Text>
            </div>
            <Text
              className="text-center text-pink-800 text-sm w-auto cursor-pointer py-2 px-3"
              size="txtMohrRoundedAltMedium14"
            >
              {t("link")}
            </Text>
          </div>
        </List>
      </div>
      {AddNewCardOpen === true ? (
        <AddNewCart
          closepopup={setAddNewCardOpen}
          modalTopIcon="images/modal-celebration-icon.svg"
          OccasionTitle={t("addNewOccasion")}
          OccasionParagraph={t("enterBelowDetailsToAddANewOccasionDot")}
        />
      ) : null}
      {RemoveCardOpen === true ? (
        <DeleteModal
          deleteTitle={"Delete Card"}
          deleteParagraph={"Are you sure you want to remove this card?"}
          closepopup={setRemoveCardOpen}
        />
      ) : null}
    </>
  );
};

export default PaymentMathod;