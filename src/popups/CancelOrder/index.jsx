import { Button, Img, Text, Radio } from "components";
// Importing localization strings
import { useTranslation } from "react-i18next";
const CancelOrder = ({
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
                  src="/images/cancel-order.svg"
                  className="w-[122px] h-auto"
                  alt="bg-repeat-popup"
                />
                <div className="flex flex-col items-center justify-center w-full mb-7">
                  <Text
                    className="leading-[32.00px] mb-3 mt-3 text-2xl md:text-[22px] text-black-900 sm:text-xl w-full text-center"
                    size="txtMohrRoundedAltSemiBold24"
                  >
                    Cancel Order
                  </Text>
                  <Text className="text-gray-700 text-sm w-full text-center font-mohrroundedaltregular">
                    Are you sure you want to cancel this order?
                  </Text>
                  <Text className="text-gray-700 text-sm w-full text-center font-mohrroundedaltregular mt-2">
                    Select a refund mode for your payment
                  </Text>
                </div>
                <div className="common-pointer flex flex-row flex-row gap-3 items-start justify-start w-full mb-6 ">
                  <Radio name="order" />
                  <div className="flex flex-col items-start gap-1 justify-start flex-1 mt-0.5">
                    <Text className="text-base text-black-900 font-mohrroundedaltregular">
                      Wallet
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start flex-1">
                      <Text className="text-gray-700 text-[12px] font-mohrroundedaltregular">
                        You will get your money back in your wallet
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="common-pointer flex flex-row flex-row gap-3 items-start justify-start w-full ">
                  <Radio name="order" />
                  <div className="flex flex-col items-start gap-1 justify-start flex-1 mt-0.5">
                    <Text className="text-base text-black-900 font-mohrroundedaltregular">
                      Source Payment (xxxx 1301)
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start flex-1">
                      <Text className="text-gray-700 text-[12px] font-mohrroundedaltregular">
                        You can get your money back in the source from which you
                        did the payment.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center mt-8 justify-center w-full">
                  <div className="flex flex-row font-mohrroundedaltmedium gap-3 items-center justify-start mt-1 w-full">
                    <Button
                      className="bg-black-900 border border-black-900 cursor-pointer py-[11px] rounded text-base text-center text-white-A700 w-full xs:w-auto xs:flex-1"
                      hover={true}
                      hoverclass="bg-white-A700"
                    >
                      {t("confirm")}
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
export { CancelOrder };