import { Button, Img, Text } from "components";
import { useEffect, useState } from "react";
// Importing localization strings
import { useTranslation } from "react-i18next";

import globalRequest from "../../utils/global/globalRequest";
import { useDispatch, useSelector } from "react-redux";
import { changeLoader } from "../../redux/reducers/loader";
import { setSnackbar } from "../../redux/reducers/snackbar";
import * as CUSTOM from "../../utils/helper/custom";
import * as APIS from "../../utils/helper/Enum";
import { loginData, getDefaultLanguage } from "../../utils/helper/custom";

const RepeatOrder = (props) => {
  const { closepopup, cartIds, cartData } = props;
  let dispatch = useDispatch();
  const { t } = useTranslation();
  const [uomModifier, setUomModifier] = useState([]);
  const [itemModifier, setItemModifier] = useState([]);
  const [modiferName, setModifierName] = useState("");
  const closepopupout = (type = false) => {
    closepopup(type);
    document.body.classList.remove("overflow-hidden");
    document.getElementById("header-box").classList.remove("relative");
  };

  const getModifiers = async () => {
    try {
      dispatch(changeLoader(true));
      let response = await globalRequest(
        `${APIS?.PRODUCTS?.GET_MODIFIER_BY_UOM_ID}/${cartIds?.uomData?.uomId}`,
        "get",
        {},
        {},
        true
      );
      response = response?.data;
      if (response?.status == "SUCCESS") {
        setUomModifier(response?.data);
      }
    } catch (e) {}
    dispatch(changeLoader(false));
  };

  const getItemModifiers = async () => {
    dispatch(changeLoader(true));
    try {
      let response = await globalRequest(
        `${APIS?.CART?.CART_MODIFIER_BY_ITEM_ID}`,
        "get",
        {},
        { params: { cart_item_id: cartIds?.id } },
        true
      );
      response = response?.data;
      if (response?.status == "SUCCESS") {
        setItemModifier(response?.data);
      }
    } catch (e) {}
    dispatch(changeLoader(false));
  };

  useEffect(() => {
    getItemModifiers();
    getModifiers();
  }, []);

  useEffect(() => {
    //modiferName
    if (Array.isArray(itemModifier) && Array.isArray(uomModifier)) {
      const allItemId = itemModifier
        .flatMap((item) =>
          item?.cartModifierItems.map((itm) => itm?.modifierItemId)
        )
        .filter(Boolean);
      const names = uomModifier.flatMap((item) =>
        item?.productUomModifierItems
          .filter((items) => allItemId.includes(items?.id))
          .map((items) =>
            CUSTOM.getdataByLangKey(
              items?.modifierGroupItem?.modifierGroupItemLocales,
              CUSTOM.getDefaultLanguage(),
              "name"
            )
          )
      );
      setModifierName(names.join(", "));
    }
  }, [uomModifier, itemModifier]);

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
                    src="/images/modal-close.svg"
                    className="common-pointer h-6 w-6"
                    alt="close"
                    onClick={() => closepopupout()}
                  />
                </div>
              </div>
            </div>
            {/*body*/}
            <div className="bg-white-A700 flex flex-col items-center justify-start px-[30px] pt-3 pb-[30px] rounded-lg w-full">
              <div className="flex flex-col justify-start w-full relative z-[5]">
                <div className="relative flex flex-row items-center justify-center w-full">
                  <Img
                    className="h-auto w-[122px] cursor-pointer"
                    src="/images/add_to-occasion-icon.svg"
                    alt="icon"
                  />
                </div>
                <div className="flex flex-row items-center justify-start w-full mt-3">
                  <Text
                    className="leading-[32.00px] text-2xl md:text-[22px] text-black-900 sm:text-xl text-center w-full"
                    size="txtMohrRoundedAltSemiBold24"
                  >
                    {t("repeatLastUsedCustomizationQuestionMark")}
                  </Text>
                </div>
                <div className="mt-4 flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtMohrRoundedAltMedium16"
                  >
                    {cartIds?.uomData?.productUom?.name}
                  </Text>
                  <Text
                    className="leading-[20.00px] mt-2 text-gray-700 text-sm w-full text-center"
                    size="txtMohrRoundedAltRegular14"
                  >
                    {modiferName}
                  </Text>
                  <div className="flex flex-row font-mohrroundedaltmedium gap-3 items-center justify-start mt-8 w-full">
                    <Button
                      className="common-pointer border border-black-900 border-solid cursor-pointer py-[11px] rounded text-base text-black-900 text-center w-[164px] xs:w-auto xs:flex-1"
                      hover={true}
                      hoverclass="bg-black-900"
                      onClick={(e) => {
                        closepopupout("addNewProduct");
                      }}
                    >
                      {t("addNew")}
                    </Button>
                    <Button
                      className="bg-black-900 border border-black-900 cursor-pointer py-[11px] rounded text-base text-center text-white-A700 w-[164px] xs:w-auto xs:flex-1"
                      hover={true}
                      hoverclass="bg-white-A700"
                      onClick={(e) => {
                        closepopupout("incQty");
                      }}
                    >
                      {t("repeatLast")}
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
export { RepeatOrder };
