import { Button, Img, Text } from "components";
// Importing localization strings
import { useTranslation } from "react-i18next";
const AdjustOrder = ({
  closepopup,
  deleteTitle,
  deleteParagraph,
  deleteConfirm,
}) => {
  const { t } = useTranslation();
  const closepopupout = () => {
    closepopup(false);
    document.body.classList.remove("overflow-hidden");
    document.getElementById("header-box").classList.remove("relative");
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-auto w-fit h-fit xs:px-4">
        <div className="relative w-auto my-6 mx-auto max-w-[400px] min-w-[400px] xs:w-full xs:min-w-full xs:max-w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white-A700 outline-none focus:outline-none overflow-hidden">
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
            <div className="bg-white-A700 flex flex-col items-center justify-center px-[30px] pt-3 pb-7 rounded-lg w-full">
              <div className="flex flex-col gap-0 justify-center  items-center w-full relative z-[5]">
                <Img
                  src="/images/adjust-order-icon.svg"
                  className="w-[122px] h-auto"
                  alt="bg-repeat-popup"
                />
                <div className="flex flex-col items-center justify-center w-full">
                  <Text
                    className="leading-[32.00px] mb-3 mt-3 text-2xl md:text-[22px] text-black-900 sm:text-xl w-full text-center"
                    size="txtMohrRoundedAltSemiBold24"
                  >
                    Adjust Order
                  </Text>
                  <Text className="text-gray-700 text-sm w-full text-center font-mohrroundedaltregular">
                    Are you sure you want to adjust your order?
                  </Text>
                  <Text className="text-gray-700 text-sm w-full text-center font-mohrroundedaltregular mt-3">
                    This will cancel your current order and you will be refunded
                    back to your wallet. Your cart will again have the order
                    details and you can adjust the stuff before placing the
                    order again.
                  </Text>
                </div>
                <div className="flex flex-col items-center mt-6 justify-center w-full">
                  <div className="flex flex-row font-mohrroundedaltmedium gap-3 items-center justify-start mt-1 w-full">
                    <Button
                      onClick={(e) => {
                        deleteConfirm("yes");
                      }}
                      className="common-pointer border border-black-900 border-solid cursor-pointer py-[11px] rounded text-base text-black-900 text-center w-[164px] xs:w-auto xs:flex-1"
                      hover={true}
                      hoverclass="bg-black-900"
                    >
                      {t("yes")}
                    </Button>
                    <Button
                      onClick={(e) => {
                        deleteConfirm("no");
                      }}
                      className="bg-black-900 border border-black-900 cursor-pointer py-[11px] rounded text-base text-center text-white-A700 w-[164px] xs:w-auto xs:flex-1"
                      hover={true}
                      hoverclass="bg-white-A700"
                    >
                      {t("no")}
                    </Button>
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
  );
};
export { AdjustOrder };
