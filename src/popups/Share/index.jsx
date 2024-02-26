import { Img, Text } from "components";
// Importing localization strings
import { useTranslation } from "react-i18next";
const Share = ({ closepopup }) => {
  const { t } = useTranslation();
  const closepopupout = () => {
    closepopup(false);
    document.body.classList.remove("overflow-hidden");
    document.getElementById("header-box").classList.remove("relative");
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-auto w-fit h-fit xs:px-4">
        <div className="relative w-auto my-6 mx-auto max-w-[400px] min-w-[400px] xs:min-w-full xs:max-w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white-A700 outline-none focus:outline-none overflow-hidden">
            {/*header*/}
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-row items-start justify-end w-auto pt-4 pr-4 rtl:pr-0 rtl:pl-4 absolute right-0 rtl:right-auto rtl:left-0">
                  <Img
                    src="/images/modal-close.svg"
                    className="common-pointer h-6 w-6"
                    alt="close"
                    onClick={() => closepopupout()}
                  />
                </div>
              </div>
            </div>
            {/*body*/}
            <div className="bg-white-A700 flex flex-col items-center justify-start px-[30px] pt-3 pb-8 rounded-lg w-full">
              <div className="flex flex-col justify-start w-full relative z-[5]">
                <div className="relative flex flex-row items-center justify-center w-full">
                  <Img
                    className="h-auto w-[122px] cursor-pointer"
                    src="/images/share-icon.svg"
                    alt="icon"
                  />
                </div>
                <div className="flex flex-row items-center justify-start w-full mt-3">
                  <Text
                    className="leading-[32.00px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-full text-center"
                    size="txtMohrRoundedAltSemiBold24"
                  >
                    {t("shareThisImages")}
                  </Text>
                </div>
                <div className="flex flex-col items-center mt-2 justify-start w-full">
                  <div className="w-full flex flex-row gap-x-5"></div>
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
export { Share };