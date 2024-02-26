import React from "react";
import { Img, Text } from "components";
import QRCode from "react-qr-code";
// Importing localization strings
import { useTranslation } from "react-i18next";
const Gift = (props) => {
  let { closepopup, Giftdata } = props;
  const { t } = useTranslation();
  const closepopupout = () => {
    closepopup(false);
    document.body.classList.remove("overflow-hidden");
    document.getElementById("header-box").classList.remove("relative");
  };

  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none m-auto w-fit h-fit xs:px-4">
        <div className="relative w-auto my-6 mx-auto max-w-[445px] min-w-[445px] xs:w-full xs:min-w-full xs:max-w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white-A700 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-row items-start justify-end w-auto absolute -right-9 xs:right-3 xs:top-3 z-50">
                  <Img
                    src="/images/img_close_black_900_28x28.svg"
                    className="common-pointer h-7 w-7"
                    alt="close"
                    onClick={() => closepopupout()}
                  />
                </div>
              </div>
            </div>
            {/*body*/}
            <div
              className="bg-cover bg-no-repeat bg-center bg-white-A700 flex flex-col items-center justify-start px-[60px] xs:px-4 pt-[150px] pb-[60px] rounded-lg w-full"
              style={{ backgroundImage: "url('images/gift-popup-bg.svg')" }}
            >
              {/* <Img
                src="/images/gift-popup-bg.svg"
                className="absolute top-0 left-0 z-0"
                alt="bg-repeat-popup"
              /> */}
              <div className="bg-white-A700 rounded-3xl text-center flex flex-col items-center justify-between min-h-[410px] w-full relative z-[5] pb-3 ">
                <div className="relative flex flex-col px-10">
                  <Img
                    src="/images/img_group_deep_purple_700_01.svg"
                    className="w-auto h-[153px] absolute -top-[7.5rem] left-0 right-0 mx-auto z-0"
                    alt="bg-repeat-popup"
                  />
                  <Text className="mt-[72px] text-base text-black-900 text-center font-mohrroundedaltmedium">
                    {Giftdata?.recipient_name}
                  </Text>
                  <Text className="leading-5 mt-3 text-black-900 text-center text-sm w-full fort-mohrroundedaltregular">
                     {Giftdata?.message}
                  </Text>
                  {Giftdata?.is_show != 1 ? (
                    <Text className="mt-4 text-base text-black-900 text-center font-mohrroundedaltmedium">
                      {Giftdata?.sender_name}
                    </Text>
                  ) : null}
                </div>
                <div className="flex flex-col items-center gap-1 justify-start w-full px-14">
                  <QRCode value={Giftdata?.link} className="w-20 h-20" />
                  <Text
                    className="leading-[16px] text-gray-700 text-xs w-full text-center"
                    size="txtMohrRoundedAltRegular12"
                  >
                    {t("thereIsAGiftForYouPleaseScanThisQRCode")}
                  </Text>
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
  );
};
export { Gift };
