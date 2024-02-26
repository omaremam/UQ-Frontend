import { useEffect, useState } from "react";
import {
  Button,
  Img,
  Input,
  Line,
  MobileInput,
  Text,
  AutoFillAddress,
} from "components";
// Importing localization strings
import { useTranslation } from "react-i18next";
import {
  validateForm,
  strFormat,
  defaultAddressParams,
  loginData,
} from "../../utils/helper/custom";
import { updateAuth, getAuth } from "../../redux/reducers/loginData";
import { USERS, GUEST, ADDRESS } from "utils/helper/Enum";
import {
  updateMyAddress,
  getAddressData,
} from "../../redux/reducers/myAddress";
import { useDispatch, useSelector } from "react-redux";
import { changeLoader } from "../../redux/reducers/loader";
import { setSnackbar } from "../../redux/reducers/snackbar";
import { globalRequest } from "../../utils/global/globalRequest";
import {
  addDeleteGetLocalStorage,
  storageKeys,
} from "../../utils/global/localData";
import * as CUSTOM from "../../utils/helper/custom";

const AddEditAddress = (props) => {
  const { setAddAddressPopup, pageName } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const auth = useSelector(getAuth);
  const getAddress = useSelector(getAddressData);
  const [center, setCenter] = useState({ lat: "", lng: "" });
  const [errors, setErrors] = useState({});
  let editData = {};
  const closepopupout = (type = false) => {
    dispatch(changeLoader("closepopup"));
    setAddAddressPopup(type);
  };
  const saveAddress = async (e) => {
    e.preventDefault();
    let validationErrors = validateForm(getAddress, "addAddress", t);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(changeLoader(true));
      if (auth?.id) {
        try {
          let response = await globalRequest(
            Number(getAddress?.id) < 1
              ? USERS?.ADD_ADDRESS
              : USERS?.UPDATE_ADDRESS,
            Number(getAddress?.id) < 1 ? "post" : "put",
            getAddress,
            {},
            true
          );
          response = response?.data;
          dispatch(changeLoader(false));
          if (response?.status !== "SUCCESS") {
            dispatch(
              setSnackbar({
                snackbarOpen: true,
                snackbarMessage: response?.message,
                snackbarState: "error",
              })
            );
            return;
          }
          closepopupout("getAddressList");
          dispatch(
            setSnackbar({
              snackbarOpen: true,
              snackbarMessage: response?.message,
              snackbarState: "success",
            })
          );
        } catch (e) {
          dispatch(
            setSnackbar({
              snackbarOpen: true,
              snackbarMessage: e?.message,
              snackbarState: "error",
            })
          );
        }
      } else {
        let addguest = { ...getAddress };
        addguest.guest_id = CUSTOM.getDeviceID();
        if (pageName == "cart") {
          try {
            let response = await globalRequest(
              GUEST?.ADD_ADDRESS,
              "post",
              addguest,
              {},
              true
            );
            response = response?.data;
            dispatch(changeLoader(false));
            if (response?.status !== "SUCCESS") {
              dispatch(
                setSnackbar({
                  snackbarOpen: true,
                  snackbarMessage: response?.message,
                  snackbarState: "error",
                })
              );
            } else {
              closepopupout("getAddressList");
            }
          } catch (e) {
            dispatch(
              setSnackbar({
                snackbarOpen: true,
                snackbarMessage: e?.message,
                snackbarState: "error",
              })
            );
          }
        } else {
          try{
            let response = await globalRequest(
              ADDRESS.CHECK_ADDRESS,
              "post",
              addguest,
              {},
              true
            );
            response = response?.data;
            dispatch(changeLoader(false));
            if (response?.status !== "SUCCESS") {
              dispatch(
                setSnackbar({
                  snackbarOpen: true,
                  snackbarMessage: response?.message,
                  snackbarState: "error",
                })
              );
              return;
            }
          }catch(e){
            dispatch(
              setSnackbar({
                snackbarOpen: true,
                snackbarMessage: e?.message,
                snackbarState: "error",
              })
            );
            return;
          }
          addDeleteGetLocalStorage(
            storageKeys.GUEST_ADDRESS,
            getAddress,
            "add",
            "single"
          );
          closepopupout(false);
        }
      }
      dispatch(changeLoader(false));
    }
  };

  useEffect(() => {
    if (auth?.id == 0) {
      let dAddress = defaultAddressParams();
      try {
        let addressData = addDeleteGetLocalStorage(
          storageKeys.GUEST_ADDRESS,
          {},
          "get"
        );
        if (addressData) {
          dAddress = JSON.parse(addressData);
        }
      } catch (e) {}
      dispatch(updateMyAddress(dAddress));
    }
  }, []);

  return (
    <>
      {Object.keys(getAddress).length > 0 ? (
        <>
          <div className="all-popup-class justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-auto w-fit h-fit sm:w-full xs:px-4">
            <div className="relative w-auto my-6 mx-auto max-w-[700px] min-w-[700px] xs:w-full xs:min-w-full xs:max-w-full overflow-hidden">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white-A700 outline-none focus:outline-none max-h-[80vh] overflow-auto">
                {/*header*/}
                <div className="flex flex-row items-center justify-between w-full px-7 py-3">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl m-0"
                    size="txtMohrRoundedAltSemiBold24"
                  >
                    {!getAddress?.id ? t("addNewAddress") : t("editAddress")}
                  </Text>
                  <div className="flex flex-row items-start justify-end w-auto ltr:pr-4 rtl:pl-4 absolute ltr:right-0 rtl:left-0">
                    <Img
                      src="/images/img_close_gray_700.svg"
                      className="common-pointer h-3 w-3"
                      alt="close"
                      onClick={() => closepopupout(false)}
                    />
                  </div>
                </div>
                <Line className="bg-gray-300 h-px mx-auto w-full" />
                {/*body*/}
                <div className="flex flex-row sm:flex-col items-start justify-start rounded-lg w-full">
                  <div className="mb-auto w-[53%] sm:w-full z-[1] relative">
                    <div className="absolute md:relative top-[0px] inset-x-[0]">
                      <AutoFillAddress></AutoFillAddress>
                    </div>
                  </div>
                  <div className="flex flex-col font-mohrroundedaltmedium items-start justify-start p-5 sm:p-4 w-[47%] sm:w-full z-[1]">
                    <form id="addressForm" onSubmit={saveAddress}>
                      <Input
                        className="w-full"
                        label={`${t("fullname")}*`}
                        error={errors?.full_name}
                        value={getAddress?.full_name}
                        onChange={(e) => {
                          setErrors({ ...errors, full_name: "" });
                          dispatch(
                            updateMyAddress({
                              ...getAddress,
                              full_name: strFormat(
                                e.target.value,
                                "max:50|text"
                              ),
                            })
                          );
                        }}
                      />
                      <MobileInput
                        className="w-full"
                        label={`${t("mobile")}*`}
                        error={errors?.mobile_no}
                        value={getAddress?.mobile_no}
                        onChange={(e) => {
                          setErrors({ ...errors, mobile_no: "" });
                          dispatch(
                            updateMyAddress({
                              ...getAddress,
                              mobile_no: strFormat(
                                e.target.value,
                                "max:9|number"
                              ),
                            })
                          );
                        }}
                      />
                      <Input
                        className="w-full"
                        label={`${t("streetAddress")}*`}
                        error={errors?.address}
                        value={getAddress?.address}
                        readOnly="true"
                        onChange={(e) => {
                          setErrors({ ...errors, address: "" });
                        }}
                      />
                      <Input
                        className="w-full"
                        label={`${t("streetNumber")}*`}
                        error={errors?.street_number}
                        value={getAddress?.street_number}
                        onChange={(e) => {
                          setErrors({ ...errors, street_number: "" });
                          dispatch(
                            updateMyAddress({
                              ...getAddress,
                              street_number: strFormat(
                                e.target.value,
                                "max:50"
                              ),
                            })
                          );
                        }}
                      />
                      <Input
                        className="w-full"
                        label={`${t("buildingNumber")}*`}
                        error={errors?.building_number}
                        value={getAddress?.building_number}
                        onChange={(e) => {
                          setErrors({ ...errors, building_number: "" });
                          dispatch(
                            updateMyAddress({
                              ...getAddress,
                              building_number: strFormat(
                                e.target.value,
                                "max:50"
                              ),
                            })
                          );
                        }}
                      />
                      <Input
                        className="w-full"
                        label={`${t("floor_Apartment")}*`}
                        error={errors?.floor_apartment}
                        value={getAddress?.floor_apartment}
                        onChange={(e) => {
                          setErrors({ ...errors, floor_apartment: "" });
                          dispatch(
                            updateMyAddress({
                              ...getAddress,
                              floor_apartment: strFormat(
                                e.target.value,
                                "max:50"
                              ),
                            })
                          );
                        }}
                      />
                      <Button
                        className="w-full"
                        size="md"
                        variant="FillBlack"
                        hover={true}
                        hoverclass="bg-white-A700"
                      >
                        {t("save")}
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="opacity-75 fixed inset-0 z-40 bg-black-900"
            onClick={() => closepopupout(false)}
          ></div>
        </>
      ) : null}
    </>
  );
};
export { AddEditAddress };
