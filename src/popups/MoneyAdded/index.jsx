import { Img, Text } from "components";
import { useTranslation } from "react-i18next";
const MoneyAdded = ({ closepopup }) => {
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
            {/*body*/}
            <div className="bg-white-A700 flex flex-col items-center justify-start px-[30px] pt-3 pb-8 rounded-lg w-full">
              <div className="flex items-center justify-center">
                <Img
                  className="h-auto w-[122px]"
                  src="/images/money-added-icon.svg"
                  alt="checkmark"
                />
              </div>
              <Text
                className="mt-3 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                size="txtMohrRoundedAltSemiBold24"
              >
                {t("Money Added")}
              </Text>
              <Text
                className="leading-[24.00px] mt-2 text-base text-center text-gray-700 w-[98%] sm:w-full"
                size="txtMohrRoundedAltRegular16Gray700"
              >
                <span className="text-gray-700 font-mohrroundedaltregular font-normal">
                  Your money{" "}
                </span>
                <span className="text-black-900 font-mohrroundedaltmedium font-normal">
                  SAR 100.00
                </span>
                <span className="text-gray-700 font-mohrroundedaltregular font-normal">
                  {" "}
                  added to wallet successfully.
                </span>
              </Text>
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
export { MoneyAdded };