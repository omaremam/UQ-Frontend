import { Button, Img, Line, Text } from "components";
// Importing localization strings
import { useTranslation } from "react-i18next";
import globalRequest from "../../utils/global/globalRequest";
import { useDispatch, useSelector } from "react-redux";
import { changeLoader } from "../../redux/reducers/loader";
import { setSnackbar } from "../../redux/reducers/snackbar";
import * as APIS from "../../utils/helper/Enum";
import { useNavigate } from "react-router-dom";
import { loginData, getDefaultLanguage } from "../../utils/helper/custom";
import {
  addDeleteGetLocalStorage,
  storageKeys,
} from "../../utils/global/localData";
import { updateAuth, getAuth } from "../../redux/reducers/loginData";
import { useEffect, useState } from "react";
const AddToMyOccasion = (props) => {
  const { closepopup, setNewOccasion, moveToOccasion } = props;
  const navigate=useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  let auth = useSelector(getAuth);
  const [occasionOptions, setOccasionOptions] = useState([]);
  const [action, setAction] = useState(false);
  const [occasionId, setoccasionId] = useState(0);
  const closepopupout = (type = "") => { 
    if (type == "new" && typeof setNewOccasion == "function") {
      setNewOccasion();
    }
    closepopup(false);
    document.body.classList.remove("overflow-hidden");
    document.getElementById("header-box").classList.remove("relative");
  };

  const getOccasionOptions = async () => {
    if (auth?.id) {
      try {
        dispatch(changeLoader(true));
        let response = await globalRequest(
          APIS?.OCCASION?.LISTING,
          "get",
          {},
          {},
          true
        );
        response = response?.data;
        if (response?.status == "SUCCESS") {
          setOccasionOptions(response?.data?.data);
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
      dispatch(changeLoader(false));
    }
  };



  useEffect(() => {
    getOccasionOptions();
  }, []);

  useEffect(() => {
    if (action) {
      setAction(false);
      if (typeof moveToOccasion !== "undefined") {
        moveOccasion();
      }
    }
  }, [action]);

  const moveOccasion = async () => {
    if (auth?.id) {
      try {
        dispatch(changeLoader(true));
        let inputData = {
          occasion_id: occasionId,
          cart_item_id: moveToOccasion,
        };
        let response = await globalRequest(
          APIS?.CART?.MOVE_CART_TO_OCCASION,
          "put",
          inputData,
          {},
          true
        );
        response = response?.data;
        if (response?.status == "SUCCESS") {
          addDeleteGetLocalStorage(
            storageKeys.ORDER_TAB,
            "occasion",
            "add",
            "single"
          );
          addDeleteGetLocalStorage(
            storageKeys.ORDER_TAB_ID,
            `${occasionId}`,
            "add",
            "single"
          );
          navigate("/my-order");
          dispatch(
            setSnackbar({
              snackbarOpen: true,
              snackbarMessage: response?.message,
              snackbarState: "success",
            })
          );
          dispatch(changeLoader("fetchCartCount"));
          closepopupout();
        } else {
          dispatch(
            setSnackbar({
              snackbarOpen: true,
              snackbarMessage: response?.message,
              snackbarState: "error",
            })
          );
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
      dispatch(changeLoader(false));
    }
  };

  return (
    <>
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
              <div className="bg-white-A700 flex flex-col items-center justify-start px-[30px] py-3 rounded-lg w-full">
                <div className="flex flex-col justify-start w-full relative z-[5]">
                  <div className="relative flex flex-row items-center justify-center w-full">
                    <Img
                      className="h-auto w-[122px] cursor-pointer"
                      src="/images/add_to-occasion-icon.svg"
                      alt="icon"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start w-full mt-3 mb-2">
                    <Text
                      className="leading-[32.00px] text-2xl md:text-[22px] text-black-900 sm:text-xl text-center w-full"
                      size="txtMohrRoundedAltSemiBold24"
                    >
                      {t("addToMyOccasion")}
                    </Text>
                  </div>
                  <div className="flex flex-col font-mohrroundedaltregular items-center justify-start w-full mb-6">
                    <Text
                      className="text-base text-gray-700 text-center w-full"
                      size="txtMohrRoundedAltMedium16"
                    >
                      {t("chooseAnOccasionFromTheListBelowOrAddANewOneDot")}
                    </Text>
                  </div>

                  <div className="flex flex-col items-start justify-start w-full max-h-[200px] overflow-auto">
                    {occasionOptions.map((items, index) => {
                      return (
                        <>
                          <Text
                            className={`text-base text-black-900 mb-2 cursor-pointer`}
                            size="txtMohrRoundedAltRegular16"
                            onClick={(e) => {
                              setoccasionId(items?.id);
                              setAction(true);
                            }}
                          >
                            {items?.name}
                          </Text>
                          {occasionOptions.length - 1 != index ? (
                            <Line className="bg-gray-300 mb-[13px] h-px  w-[95%]" />
                          ) : (
                            ""
                          )}
                        </>
                      );
                    })}
                  </div>

                  <div className="flex flex-row font-mohrroundedaltmedium gap-3 items-center justify-start mt-6 mb-5 w-full">
                    <Button
                      className="common-pointer border border-black-900 border-solid cursor-pointer py-3.5 rounded text-base text-black-900 text-center w-full flex items-center justify-center"
                      hover={true}
                      hoverclass="bg-black-900"
                      leftIcon={
                        <Img
                          className="h-[20px] w-[20px] mr-2 rtl:mr-0 rtl:ml-2 btn-icon"
                          src="/images/add-black-icon.svg"
                          alt="checkmark"
                        />
                      }
                      onClick={(e) => {
                        closepopupout("new");
                      }}
                    >
                      {t("addNew")}
                    </Button>
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
    </>
  );
};
export { AddToMyOccasion };
