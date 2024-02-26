import { Button, Img, Input, Text } from "components";
// Importing localization strings
import { useTranslation } from "react-i18next";
const AddNewCart = ({ closepopup }) => {
  const { t } = useTranslation();
  const closepopupout = () => {
    closepopup(false);
    document.body.classList.remove("overflow-hidden");
    document.getElementById("header-box").classList.remove("relative");
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-auto w-fit h-fit sm:px-4">
        <div className="relative w-auto my-6 mx-auto max-w-[760px] min-w-[760px] sm:min-w-full sm:max-w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white-A700 outline-none focus:outline-none overflow-hidden">
            {/*header*/}
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-row items-start justify-end w-auto pt-4 pr-4 rtl:pr-0 rtl:pl-4 absolute right-0 rtl:right-auto rtl:left-0 z-50">
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
            <div className="bg-white-A700 flex flex-col items-center justify-start pt-3 pb-[30px] rounded-lg w-full">
              <div className="flex flex-col items-center justify-start mb-2 w-full px-7 relative z-[5]">
                <div className="relative flex flex-row items-center justify-center w-full">
                  <Img
                    className="h-auto w-[122px] cursor-pointer"
                    src="/images/add-new-card-icon.svg"
                    alt="icon"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mt-3 w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl text-center w-full"
                    size="txtMohrRoundedAltSemiBold24"
                  >
                    {t("Add New Card")}
                  </Text>
                  <Text
                    className="mt-2 mb-6 text-base text-gray-700 text-center w-full"
                    size="txtMohrRoundedAltRegular16Gray700"
                  >
                    {t("Enter below details to add a new card.")}
                  </Text>
                  <div className="flex xs:flex-col items-center gap-x-5 justify-start w-full">
                    <Input required label={t("cardNumber")} />
                    <Input required label={t("cardHolderName")} />
                  </div>
                  <div className="flex xs:flex-col items-center gap-x-5 justify-start w-full">
                    <Input required label={t("expiryDate(MM/YY)")} />
                    <Input required label={t("cvv")} />
                  </div>
                </div>
              </div>
              <div className="max-w-[340px] w-full xs:px-7">
                <Button
                  className="bg-black-900 hover:border hover:border-black-900 cursor-pointer py-3.5 rounded text-base text-center text-white-A700 w-full"
                  hover={true}
                  hoverclass="bg-white-A700"
                >
                  {t("add")}
                </Button>
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
export { AddNewCart };