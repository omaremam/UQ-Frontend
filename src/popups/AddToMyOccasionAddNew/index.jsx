import { useEffect, useState } from "react";
import {
  Button,
  DatepickerInput,
  Img,
  Input,
  SelectBoxNew,
  Text,
} from "components";
import { useTranslation } from "react-i18next";
import globalRequest from "../../utils/global/globalRequest";
import { useDispatch, useSelector } from "react-redux";
import { changeLoader } from "../../redux/reducers/loader";
import * as API from "../../utils/helper/Enum";
import { setSnackbar } from "../../redux/reducers/snackbar";
import * as CUSTOM from "../../utils/helper/custom";
const AddToMyOccasionAddNew = (props) => {
  const {
    closepopup,
    modalTopIcon,
    OccasionTitle,
    OccasionParagraph,
    editData,
    openOccasionList
  } = props;

  let dispatch = useDispatch();
  const { t } = useTranslation();
  const [InputData, setInputData] = useState({
    id: 0,
    name: "",
    date: "",
    occasion_type_id: 0,
    relation_id: 0,
  });
  const [errors, setErrors] = useState({});
  const [options, setOption] = useState([]);
  const [options2, setOption2] = useState([]);
  const [isCart, setIsCart] = useState(false);
  useEffect(() => {
    if (props?.isCart == "yes" && typeof props?.isCart !== "undefined") {
      setIsCart(true);
    }
  }, [props]);

  useEffect(() => {
    if (typeof props?.isCart !== "undefined") {
      if (Object.keys(editData).length) {
        setInputData(editData);
      }
    }
  }, [editData]);

  useEffect(()=>{
        if(editData){
           if(editData?.edit){
            setInputData(editData);
           }
        }
  },[editData])
  /**
   * get relations list
   */
  const getRelations = async () => {
    try {
      let response = await globalRequest(
        API.RELATION.LISTING,
        "get",
        {},
        {},
        true
      );
      response = response?.data;
      dispatch(changeLoader(false));
      if (response?.status == "SUCCESS") {
        let relationArray = [];
        response?.data.map((item) => {
          relationArray.push({
            value: item?.id,
            label: CUSTOM.getdataByLangKey(
              item?.relationLocales,
              CUSTOM.getDefaultLanguage(),
              "name"
            ),
          });
        });
        setOption(relationArray);
      }
    } catch (e) {}
  };
  /**
   * get occasion type list
   */
  const getOccasionTypeList = async () => {
    try {
      let response = await globalRequest(
        API.OCCASION.TYPE_LISTING,
        "get",
        {},
        {},
        true
      );
      response = response?.data;
      dispatch(changeLoader(false));
      if (response?.status == "SUCCESS") {
        let relationArray = [];
        response?.data.map((item) => {
          relationArray.push({
            value: item?.id,
            label: CUSTOM.getdataByLangKey(
              item?.occasionTypeLocales,
              CUSTOM.getDefaultLanguage(),
              "name"
            ),
          });
        });
        setOption2(relationArray);
      }
    } catch (e) {}
  };
  /**
   * add occasion
   */
  const validateForm = (data) => {
    const errorss = {};
    if (!data?.name) {
      errorss.name = t("occasion_name_is_required");
    }
    if (!data?.relation_id) {
      errorss.relation_id = t("relation_is_required");
    }
    if (!data?.occasion_type_id) {
      errorss.occasion_type_id = t("occasion_type_is_required");
    }
    if (!data?.date) {
      errorss.date = t("date_is_required");
    }
    return errorss;
  };
  const addOccasion = async (e) => {
    e.preventDefault();
    let validationErrors = validateForm(InputData);
    if (Object.keys(validationErrors).length === 0) {
      dispatch(changeLoader(true));
      try {
        let response = await globalRequest(
          InputData?.id == 0
            ? API.OCCASION.ADD_OCCASION
            : API.OCCASION.UPDATE_OCCASION,
          InputData?.id == 0 ? "post" : "put",
          InputData,
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
        if (isCart) {
          closepopup();
          return true;
        }
        closepopupout("refetch");
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
      dispatch(changeLoader(false));
    } else {
      setErrors(validationErrors);
    }
  };
  const closepopupout = (type = false) => {
    closepopup(type);
    document.body.classList.remove("overflow-hidden");
    document.getElementById("header-box").classList.remove("relative");
  };

  useEffect(() => {
     getRelations();
    getOccasionTypeList();
  }, []);



  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-auto w-fit h-fit xs:px-4">
        <div className="relative w-auto my-6 mx-auto max-w-[760px] min-w-[760px] xs:min-w-full xs:max-w-full">
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
            <form onSubmit={addOccasion}>
              <div className="bg-white-A700 flex flex-col items-center justify-start  py-3 rounded-lg w-full">
                <div className="flex flex-col items-center justify-start mb-2 w-full px-6 relative z-[5]">
                  <div
                    className="relative flex flex-row items-center justify-center w-full"
                    onClick={closepopup}
                  >
                    {isCart?(<Img
                      className="h-6 w-6 cursor-pointer absolute ltr:left-0 rtl:right-0 rtl:rotate-180 top-2"
                      src="/images/img_arrowleft_gray_900_03.svg"
                      alt="arrowleft"
                    />):null}
                    <Img
                      className="h-auto w-[122px] cursor-pointer"
                      src={modalTopIcon}
                      alt="icon"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start mt-3 w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl text-center w-full"
                      size="txtMohrRoundedAltSemiBold24"
                    >
                      {OccasionTitle}
                    </Text>
                    <Text
                      className="mt-3 mb-6 text-base text-gray-700 text-center w-full"
                      size="txtMohrRoundedAltRegular16Gray700"
                    >
                      {OccasionParagraph}
                    </Text>
                    <div className="flex flex-row xs:flex-col items-start justify-start gap-x-5 w-full">
                      <div className="flex flex-col w-full">
                        <Input
                          label={t("occasionName")}
                          value={InputData?.name}
                          onChange={(e) => {
                            setInputData({
                              ...InputData,
                              name: e.target.value,
                            });
                            setErrors({ ...errors, name: "" });
                          }}
                        />
                        <span className="red-error font-mohrroundedaltregular text-xs text-red-900 -mt-6 mb-5">
                          {errors?.name}
                        </span>
                      </div>
                      <div className="flex flex-col w-full">
                        <SelectBoxNew
                          options={options}
                          label={t("relationWithRecipientRequired")}
                          value={InputData?.relation_id || null}
                          onChange={(e) => {
                            setInputData({
                              ...InputData,
                              relation_id: Number(e.target.value),
                            });
                            setErrors({ ...errors, relation_id: "" });
                          }}
                        />
                        <span className="red-error font-mohrroundedaltregular text-xs text-red-900 -mt-6 mb-5">
                          {errors?.relation_id}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-row xs:flex-col items-start justify-start gap-x-5 w-full">
                      <div className="flex flex-col w-full">
                        <SelectBoxNew
                          options={options2}
                          label={t("occasionTypeRequired")}
                          value={InputData?.occasion_type_id || null} 
                          onChange={(e) => {
                            setInputData({
                              ...InputData,
                              occasion_type_id: Number(e.target.value),
                            });
                            setErrors({ ...errors, occasion_type_id: "" });
                          }}
                        />
                        <span className="red-error font-mohrroundedaltregular text-xs text-red-900 -mt-6 mb-5">
                          {errors?.occasion_type_id}
                        </span>
                      </div>
                      <div className="flex flex-col w-full">
                        <DatepickerInput
                          label={t("occasionDateRequired")}
                          value={InputData?.date || ""}
                          disablePast={true}
                          onChange={(e) => {
                            setInputData({ ...InputData, date: e });
                            setErrors({ ...errors, date: "" });
                          }}
                          endAdornment={
                            <Img
                              className="top-[0] my-auto"
                              src="/images/img_calendar_black_900.svg"
                              alt="Calendar"
                            />
                          }
                        />
                        <span className="red-error font-mohrroundedaltregular text-xs text-red-900 -mt-6 mb-5">
                          {errors?.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-[340px] w-full mx-auto mb-5">
                  <Button
                    className="bg-black-900 border border-black-900 cursor-pointer py-3.5 rounded text-base text-center text-white-A700 w-full"
                    hover={true}
                    hoverclass="bg-white-A700"
                  >
                    {InputData?.id == 0 ? t("add") : t("update")}
                  </Button>
                </div>
              </div>
            </form>
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
export { AddToMyOccasionAddNew };
