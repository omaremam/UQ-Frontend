import { Button, CheckboxCustom, Img, Line, Radio, Text } from "components";
// Importing localization strings
import { useTranslation } from "react-i18next";
const AddToCartSelected = ({ closepopup }) => {
  const { t } = useTranslation();
  const closepopupout = () => {
    closepopup(false);
    document.body.classList.remove("overflow-hidden");
    document.getElementById("header-box").classList.remove("relative");
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-auto w-fit h-fit xs:px-4">
        <div className="relative w-auto my-6 mx-auto max-w-[550px] min-w-[525px] xs:w-full xs:min-w-full xs:max-w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white-A700 outline-none focus:outline-none">
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
            <div className="bg-white-A700 flex flex-col items-center justify-start rounded-lg w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start pt-3 rounded-tl-lg rounded-tr-lg w-full">
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex xs:flex-col flex-row xs:gap-3 items-start justify-start w-full px-7 xs:px-4">
                      <Img
                        className="h-12 md:h-auto sm:mt-0 mt-0.5 object-cover rounded-lg w-12"
                        src="/images/img_rectangle19009.png"
                        alt="rectangle19009"
                      />
                      <div className="flex flex-col gap-[7px] items-start justify-start ml-2 rtl:ml-0 rtl:mr-2.5 xs:ml-[0] sm:mt-0 mt-1">
                        <Text
                          className="text-base text-black-900"
                          size="txtMohrRoundedAltMedium16"
                        >
                          {t("fruitVanillaCake")}
                        </Text>
                        <Text
                          className="text-black-900 text-xs"
                          size="txtMohrRoundedAltRegular12"
                        >
                          {<>{t("sar")} 155.45</>}
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-gray-300 h-1 w-full" />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between mt-[18px] w-full px-7 xs:px-4">
                  <div className="flex flex-col gap-[7px] items-start justify-start">
                    <Text
                      className="text-base text-black-900"
                      size="txtMohrRoundedAltMedium16"
                    >
                      {t("chooseFromVariant")}
                    </Text>
                    <Text
                      className="text-gray-700 text-xs"
                      size="txtMohrRoundedAltRegular12Gray700"
                    >
                      {t("roundShape")}
                    </Text>
                  </div>
                  <div className="flex flex-col h-10 md:h-auto items-center justify-center rounded w-auto">
                    <div className="common-pointer flex flex-col h-10 md:h-auto items-center justify-center py-2 rounded w-auto">
                      <Text
                        className="text-pink-800 text-right text-sm w-auto"
                        size="txtMohrRoundedAltMedium14"
                      >
                        {t("change")}
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-gray-300 h-px mt-5 w-full" />
                <div className="flex  justify-end pt-5 relative w-full h-[315px] overflow-y-auto">
                  <div className="flex flex-col h-full items-center justify-start mt-auto mx-auto w-full">
                    <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row xs:flex-col xs:gap-3  items-start justify-between w-full px-7 xs:px-4">
                            <div className="flex flex-col gap-[7px] items-start justify-start mt-0.5">
                              <Text
                                className="text-base text-black-900"
                                size="txtMohrRoundedAltMedium16"
                              >
                                {t("chooseFromChoiceOfFlavor")}
                              </Text>
                              <Text
                                className="text-gray-700 text-xs"
                                size="txtMohrRoundedAltRegular12Gray700"
                              >
                                {t("chooseAny")} 1 {t("optionSmallLetter")}
                              </Text>
                            </div>
                            <Button
                              className="cursor-pointer flex items-center justify-center xs:ml-auto min-w-[113px] px-3 py-[7px] rounded bg-red-50_01"
                              leftIcon={
                                <Img
                                  className="h-[18px] mr-2 rtl:mr-0 rtl:ml-2"
                                  src="/images/img_checkmark_gray_900_01.svg"
                                  alt="checkmark"
                                />
                              }
                            >
                              <div className="text-center text-gray-900_01 text-sm">
                                {t("required")}
                              </div>
                            </Button>
                          </div>
                          <div className="flex flex-col font-mohrroundedaltregular mt-3 gap-[10px] relative w-full px-7 xs:px-4">
                            <div className="flex flex-row sm:gap-5 xs:gap-2 items-center justify-start mx-auto w-full">
                              <div className="flex items-center xs:w-[50%]">
                                <Radio className="mr-3 rtl:mr-0 rtl:ml-3" />
                                <Text
                                  className="text-base xs:text-sm text-black-900 truncate text-ellipsis"
                                  size="txtMohrRoundedAltRegular16"
                                >
                                  {t("truffleCake")}
                                </Text>
                              </div>
                              <Text
                                className="line-through ltr:ml-auto rtl:mr-auto text-gray-700 text-right text-sm"
                                size="txtMohrRoundedAltRegular14"
                              >
                                10.00
                              </Text>
                              <Text
                                className="text-base xs:text-sm text-black-900 text-right"
                                size="txtMohrRoundedAltRegular16"
                              >
                                {<>{t("sar")} 8.00</>}
                              </Text>
                            </div>
                            <div className="flex flex-row sm:gap-5 xs:gap-2 items-center justify-start mt-[0px] mx-auto w-full z-[1]">
                              <div className="flex items-center xs:w-[50%]">
                                <Radio className="mr-3 rtl:mr-0 rtl:ml-3" />
                                <Text
                                  className="text-base xs:text-sm text-black-900 truncate text-ellipsis"
                                  size="txtMohrRoundedAltRegular16"
                                >
                                  {t("chocolateCake")}
                                </Text>
                              </div>
                              <Text
                                className="line-through ltr:ml-auto rtl:mr-auto text-gray-700 text-right text-sm"
                                size="txtMohrRoundedAltRegular14"
                              >
                                7.00
                              </Text>
                              <Text
                                className="ml-2 rtl:ml-0 rtl:mr-2 sm:ml-[0] text-base xs:text-sm text-black-900 text-right "
                                size="txtMohrRoundedAltRegular16"
                              >
                                {<>{t("sar")} 5.00</>}
                              </Text>
                            </div>
                            <div className="flex flex-row sm:gap-5 xs:gap-2 items-center justify-start mt-[0px] mx-auto w-full z-[1]">
                              <div className="flex items-center xs:w-[50%]">
                                <Radio className="mr-3 rtl:mr-0 rtl:ml-3" />
                                <Text
                                  className="text-base xs:text-sm text-black-900 truncate text-ellipsis"
                                  size="txtMohrRoundedAltRegular16"
                                >
                                  {t("blackForestCake")}
                                </Text>
                              </div>
                              <Text
                                className="ml-auto text-base xs:text-sm text-black-900 text-right"
                                size="txtMohrRoundedAltRegular16"
                              >
                                {<>{t("sar")} 7.00</>}
                              </Text>
                            </div>
                          </div>
                          <Line className="bg-gray-300 h-px mt-5 w-full" />
                        </div>
                      </div>
                      <div className="flex flex-col font-mohrroundedaltregular justify-start w-full">
                        <div className="flex flex-col gap-[7px] items-start justify-start w-full px-7 xs:px-4">
                          <Text
                            className="text-base text-black-900"
                            size="txtMohrRoundedAltMedium16"
                          >
                            {t("chooseFromChoiceOfIngredients")}
                          </Text>
                          <Text
                            className="text-gray-700 text-xs"
                            size="txtMohrRoundedAltRegular12Gray700"
                          >
                            {t("chooseUpTo")} 4 {t("optionsSmallLetter")}
                          </Text>
                        </div>
                        <div className="flex flex-col font-mohrroundedaltregular mt-3 relative w-full mx-auto px-7 xs:px-4">
                          <div className="flex flex-row sm:gap-5 xs:gap-2 items-center justify-start mx-auto w-full">
                            <div className="flex items-center xs:w-[50%]">
                              <CheckboxCustom />
                              <Text
                                className="text-base xs:text-sm text-black-900 -ml-4 rtl:ml-0 rtl:-mr-4 truncate text-ellipsis"
                                size="txtMohrRoundedAltRegular16"
                              >
                                {t("confectionery")}
                              </Text>
                            </div>
                            <Text
                              className="line-through ltr:ml-auto rtl:mr-auto text-gray-700 text-right text-sm"
                              size="txtMohrRoundedAltRegular14"
                            >
                              8.00
                            </Text>
                            <Text
                              className="ml-2 rtl:ml-0 rtl:mr-2 sm:ml-[0] text-base xs:text-sm text-black-900 text-right "
                              size="txtMohrRoundedAltRegular16"
                            >
                              {<>{t("sar")} 4.00</>}
                            </Text>
                          </div>
                          <div className="flex flex-row sm:gap-5 xs:gap-2 items-center justify-start mx-auto w-full">
                            <div className="flex items-center xs:w-[50%]">
                              <CheckboxCustom />
                              <Text
                                className="text-base xs:text-sm text-black-900 -ml-4 rtl:ml-0 rtl:-mr-4 truncate text-ellipsis"
                                size="txtMohrRoundedAltRegular16"
                              >
                                {t("dryFruitsNutsAndSeeds")}
                              </Text>
                            </div>
                            <Text
                              className="line-through ltr:ml-auto rtl:mr-auto text-gray-700 text-right text-sm"
                              size="txtMohrRoundedAltRegular14"
                            >
                              8.00
                            </Text>
                            <Text
                              className="ml-2 rtl:ml-0 rtl:mr-2 sm:ml-[0] text-base xs:text-sm text-black-900 text-right "
                              size="txtMohrRoundedAltRegular16"
                            >
                              {<>{t("sar")} 4.00</>}
                            </Text>
                          </div>
                          <div className="flex flex-row sm:gap-5 xs:gap-2 items-center justify-start mx-auto w-full">
                            <div className="flex items-center xs:w-[50%]">
                              <CheckboxCustom />
                              <Text
                                className="text-base xs:text-sm text-black-900 -ml-4 rtl:ml-0 rtl:-mr-4 truncate text-ellipsis"
                                size="txtMohrRoundedAltRegular16"
                              >
                                <>
                                  {t("fondant")} / {t("sugarPaste")}
                                </>
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row sm:gap-5 xs:gap-2 items-center justify-start mx-auto w-full">
                            <div className="flex items-center xs:w-[50%]">
                              <CheckboxCustom />
                              <Text
                                className="text-base xs:text-sm text-black-900 -ml-4 rtl:ml-0 rtl:-mr-4 truncate text-ellipsis"
                                size="txtMohrRoundedAltRegular16"
                              >
                                {t("gelsAndGlazes")}
                              </Text>
                            </div>
                            <Text
                              className="line-through ltr:ml-auto rtl:mr-auto text-gray-700 text-right text-sm"
                              size="txtMohrRoundedAltRegular14"
                            >
                              8.00
                            </Text>
                            <Text
                              className="ml-2 rtl:ml-0 rtl:mr-2 sm:ml-[0] text-base xs:text-sm text-black-900 text-right "
                              size="txtMohrRoundedAltRegular16"
                            >
                              {<>{t("sar")} 4.00</>}
                            </Text>
                          </div>
                          <div className="flex flex-row sm:gap-5 xs:gap-2 items-center justify-start mx-auto w-full">
                            <div className="flex items-center xs:w-[50%]">
                              <CheckboxCustom />
                              <Text
                                className="text-base xs:text-sm text-black-900 -ml-4 rtl:ml-0 rtl:-mr-4 truncate text-ellipsis"
                                size="txtMohrRoundedAltRegular16"
                              >
                                {t("herbs")}
                              </Text>
                            </div>
                            <Text
                              className="line-through ltr:ml-auto rtl:mr-auto text-gray-700 text-right text-sm"
                              size="txtMohrRoundedAltRegular14"
                            >
                              8.00
                            </Text>
                            <Text
                              className="ml-2 rtl:ml-0 rtl:mr-2 sm:ml-[0] text-base xs:text-sm text-black-900 text-right "
                              size="txtMohrRoundedAltRegular16"
                            >
                              {<>{t("sar")} 4.00</>}
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-gray-300 h-[1px] mt-5 w-full" />
                        <div className="flex flex-col gap-[7px] items-start justify-start w-full px-7 xs:px-4">
                          <Text
                            className="text-base text-black-900"
                            size="txtMohrRoundedAltMedium16"
                          >
                            {t("chooseFromChoiceOfChocolates")}
                          </Text>
                          <Text
                            className="text-gray-700 text-xs"
                            size="txtMohrRoundedAltRegular12Gray700"
                          >
                            {t("chooseUpTo")} 5 {t("optionsSmallLetter")}
                          </Text>
                        </div>
                        <div className="flex flex-col font-mohrroundedaltregular mt-3 relative w-full mx-auto px-7 xs:px-4">
                          <div className="flex flex-row sm:gap-5 xs:gap-2 items-center justify-start mx-auto w-full">
                            <div className="flex items-center xs:w-[50%]">
                              <CheckboxCustom />
                              <Text
                                className="text-base xs:text-sm text-black-900 -ml-4 rtl:ml-0 rtl:-mr-4 truncate text-ellipsis"
                                size="txtMohrRoundedAltRegular16"
                              >
                                {t("chocoChips")}
                              </Text>
                            </div>
                            <Text
                              className="line-through ltr:ml-auto rtl:mr-auto text-gray-700 text-right text-sm"
                              size="txtMohrRoundedAltRegular14"
                            >
                              8.00
                            </Text>
                            <Text
                              className="ml-2 rtl:ml-0 rtl:mr-2 sm:ml-[0] text-base xs:text-sm text-black-900 text-right "
                              size="txtMohrRoundedAltRegular16"
                            >
                              {<>{t("sar")} 4.00</>}
                            </Text>
                          </div>
                          <div className="flex flex-row sm:gap-5 xs:gap-2 items-center justify-start mx-auto w-full">
                            <div className="flex items-center xs:w-[50%]">
                              <CheckboxCustom />
                              <Text
                                className="text-base xs:text-sm text-black-900 -ml-4 rtl:ml-0 rtl:-mr-4 truncate text-ellipsis"
                                size="txtMohrRoundedAltRegular16"
                              >
                                {t("chocolateAdditives")}
                              </Text>
                            </div>
                            <Text
                              className="line-through ltr:ml-auto rtl:mr-auto text-gray-700 text-right text-sm"
                              size="txtMohrRoundedAltRegular14"
                            >
                              8.00
                            </Text>
                            <Text
                              className="ml-2 rtl:ml-0 rtl:mr-2 sm:ml-[0] text-base xs:text-sm text-black-900 text-right "
                              size="txtMohrRoundedAltRegular16"
                            >
                              {<>{t("sar")} 4.00</>}
                            </Text>
                          </div>
                          <div className="flex flex-row sm:gap-5 xs:gap-2 items-center justify-start mx-auto w-full">
                            <div className="flex items-center xs:w-[50%]">
                              <CheckboxCustom />
                              <Text
                                className="text-base xs:text-sm text-black-900 -ml-4 rtl:ml-0 rtl:-mr-4 truncate text-ellipsis"
                                size="txtMohrRoundedAltRegular16"
                              >
                                {t("chocolateCompound")}
                              </Text>
                            </div>
                            <Text
                              className="line-through ltr:ml-auto rtl:mr-auto text-gray-700 text-right text-sm"
                              size="txtMohrRoundedAltRegular14"
                            >
                              8.00
                            </Text>
                            <Text
                              className="ml-2 rtl:ml-0 rtl:mr-2 sm:ml-[0] text-base xs:text-sm text-black-900 text-right "
                              size="txtMohrRoundedAltRegular16"
                            >
                              {<>{t("sar")} 4.00</>}
                            </Text>
                          </div>
                          <div className="flex flex-row sm:gap-5 xs:gap-2 items-center justify-start mx-auto w-full">
                            <div className="flex items-center xs:w-[50%]">
                              <CheckboxCustom />
                              <Text
                                className="text-base xs:text-sm text-black-900 -ml-4 rtl:ml-0 rtl:-mr-4 truncate text-ellipsis"
                                size="txtMohrRoundedAltRegular16"
                              >
                                {t("cocoaPowder")}
                              </Text>
                            </div>
                            <Text
                              className="line-through ltr:ml-auto rtl:mr-auto text-gray-700 text-right text-sm"
                              size="txtMohrRoundedAltRegular14"
                            >
                              8.00
                            </Text>
                            <Text
                              className="ml-2 rtl:ml-0 rtl:mr-2 sm:ml-[0] text-base xs:text-sm text-black-900 text-right "
                              size="txtMohrRoundedAltRegular16"
                            >
                              {<>{t("sar")} 4.00</>}
                            </Text>
                          </div>
                          <div className="flex flex-row sm:gap-5 xs:gap-2 items-center justify-start mx-auto w-full">
                            <div className="flex items-center xs:w-[50%]">
                              <CheckboxCustom />
                              <Text
                                className="text-base xs:text-sm text-black-900 -ml-4 rtl:ml-0 rtl:-mr-4 truncate text-ellipsis"
                                size="txtMohrRoundedAltRegular16"
                              >
                                {t("couverture")}
                              </Text>
                            </div>
                            <Text
                              className="line-through ltr:ml-auto rtl:mr-auto text-gray-700 text-right text-sm"
                              size="txtMohrRoundedAltRegular14"
                            >
                              8.00
                            </Text>
                            <Text
                              className="ml-2 rtl:ml-0 rtl:mr-2 sm:ml-[0] text-base xs:text-sm text-black-900 text-right "
                              size="txtMohrRoundedAltRegular16"
                            >
                              {<>{t("sar")} 4.00</>}
                            </Text>
                          </div>
                          <div className="flex flex-row sm:gap-5 xs:gap-2 items-center justify-start mx-auto w-full">
                            <div className="flex items-center xs:w-[50%]">
                              <CheckboxCustom />
                              <Text
                                className="text-base xs:text-sm text-black-900 -ml-4 rtl:ml-0 rtl:-mr-4 truncate text-ellipsis"
                                size="txtMohrRoundedAltRegular16"
                              >
                                {t("ferreroRocherShells")}
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row sm:gap-5 xs:gap-2 items-center justify-start mx-auto w-full">
                            <div className="flex items-center xs:w-[50%]">
                              <CheckboxCustom />
                              <Text
                                className="text-base xs:text-sm text-black-900 -ml-4 rtl:ml-0 rtl:-mr-4 truncate text-ellipsis"
                                size="txtMohrRoundedAltRegular16"
                              >
                                {t("gems")}
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start pb-5 rounded-bl-lg rounded-br-lg w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Line className="bg-gray-300 h-1 w-full" />
                    <div className="flex flex-row xs:flex-wrap xs:gap-3 sm:gap-5 items-center justify-between w-full px-7 xs:px-4">
                      <div className="flex flex-col gap-0.5 items-start justify-start w-auto xs:w-full">
                        <Text
                          className="text-base text-black-900 text-right w-auto"
                          size="txtMohrRoundedAltMedium16"
                        >
                          {<>{t("sar")} 155.00</>}
                        </Text>
                        <Text
                          className="text-gray-700 text-xs w-auto"
                          size="txtMohrRoundedAltRegular12Gray700"
                        >
                          {t("totalAmount")}
                        </Text>
                      </div>
                      <Button
                        className="border border-black-900 border-solid cursor-pointer py-[12px] rounded text-base text-black-900 text-center w-[162px] xs:w-full"
                        hover={true}
                        hoverclass="bg-black-900"
                      >
                        {t("addToOccasion")}
                      </Button>
                      <Button
                        className="bg-black-900 border border-black-900 text-white-A700 cursor-pointer flex items-center justify-center min-w-[146px] xs:min-w-full xs:w-full p-[13px] rounded"
                        hover={true}
                        hoverclass="bg-white-A700"
                        leftIcon={
                          <Img
                            className="h-5 mt-px btn-icon"
                            src="/images/img_mdicart_white_a700.svg"
                            alt="mdi:cart"
                          />
                        }
                      >
                        <div className="text-base text-center mx-2">
                          {t("addToCart")}
                        </div>
                      </Button>
                    </div>
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
export { AddToCartSelected };