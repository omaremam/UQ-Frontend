import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Img,
  DatepickerInput,
  Text,
  Radio,
  TimeSlotRadio,
} from "components";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import globalRequest from "../../../../utils/global/globalRequest";
import { useDispatch, useSelector } from "react-redux";
import { changeLoader, currentLoader } from "../../../../redux/reducers/loader";
import { setSnackbar } from "../../../../redux/reducers/snackbar";
import * as APIS from "../../../../utils/helper/Enum";
import { getAuth } from "../../../../redux/reducers/loginData";
import {
  updateOrderData,
  getOrderData,
} from "../../../../redux/reducers/orderData";
import { AddEditAddress } from "popups/AddEditAddress";
import * as CUSTOM from "../../../../utils/helper/custom";
import { iteratee } from "lodash";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const DeliveryDateTime = () => {
  const navigate = useNavigate();
  const orderData = useSelector(getOrderData);
  const currentDate = new Date();
  const auth = useSelector(getAuth);
  const loadingValue = useSelector(currentLoader);
  const [slotData, setSlotData] = useState([]);
  const [prepTime, setPrepTime] = useState("");
  const [timeslotSelected, setTimeslotSelected] = useState(null);
  const [disableTimeButton, setDisableTimeButton] = useState(false);
  const guest_id = CUSTOM.getDeviceID();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [timeslotData, setTimeslotData] = useState({
    is_show: 0,
    day: "",
    date: "",
    user_id: 0,
    guest_id: guest_id,
  });

  const changeDate = (e) => {
    let date = CUSTOM.changeDateFormat(e, "yyyy-MM-dd");
    let day = CUSTOM.getDayOfWeek(date);
    const updateTimeslotData = { ...timeslotData };
    updateTimeslotData.date = date;
    updateTimeslotData.day = day;
    setTimeslotData(updateTimeslotData);
  };

  useEffect(() => {
    if (timeslotData?.date) {
      getTimeSlots();
    }
  }, [timeslotData]);

  useEffect(() => {
    setTimeslotData({ ...timeslotData, user_id: auth?.id });
  }, [auth]);

  useEffect(() => {
    if (timeslotSelected != null) {
      let exitOrNot = slotData?.find(
        (item) => item?.id == timeslotSelected?.id
      );
      if (!exitOrNot) {
        dispatch(
          updateOrderData({ ...orderData, timeSloat: { id: 0 }, pageStep: 3 })
        );
        setTimeslotSelected(null);
      }
    }
  }, [slotData, timeslotSelected]);

  const getTimeSlots = async () => {
    try {
      dispatch(changeLoader(true));
      let response = await globalRequest(
        APIS?.CHECKOUT?.GET_SLOT_LIST_BY_DATE,
        "get",
        {},
        { params: timeslotData }
      );
      response = response?.data;
      if (response.status != "SUCCESS") {
        setSlotData([]);
      } else {
        setSlotData(response?.data?.slots);
      }
    } catch (e) {
      setSlotData([]);
      // dispatch(
      //   setSnackbar({
      //     snackbarOpen: true,
      //     snackbarMessage: e?.message,
      //     snackbarState: "error",
      //   })
      // );
    }
    dispatch(changeLoader(false));
  };

  const getPreTime = async () => {
    try {
      dispatch(changeLoader(true));
      let loginUser = CUSTOM.loginData();
      timeslotData.user_id = loginUser?.id;
      let response = await globalRequest(
        APIS?.CHECKOUT?.GET_PREP_TIME,
        "get",
        {},
        { params: timeslotData }
      );
      response = response?.data;
      if (response.status != "SUCCESS") {
        // dispatch(
        //   setSnackbar({
        //     snackbarOpen: true,
        //     snackbarMessage: response?.message,
        //     snackbarState: "error",
        //   })
        // );

        setPrepTime("");
      } else {
        setPrepTime(response?.data?.estimated_prep_time);
      }
    } catch (e) {
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarMessage: e?.message,
          snackbarState: "error",
        })
      );
      setPrepTime("");
    }
    dispatch(changeLoader(false));
  };

  useEffect(() => {
    let a = ["fetchCartCount", "loggedin"];
    if (a.includes(loadingValue)) {
      getTimeSlots();
      getPreTime();
    }
  }, [loadingValue]);

  useEffect(() => {
    if (orderData?.pageStep == 3) {
      if (orderData?.delivery_mode == "home_office") {
        setTimeslotData({
          ...timeslotData,
          lat: orderData?.home_office?.itemDetail?.lattitude,
          long: orderData?.home_office?.itemDetail?.longitude,
        });
      } else {
        setTimeslotData({
          ...timeslotData,
          lat: orderData?.home_office?.latitude,
          long: orderData?.home_office?.longitude,
        });
      }
      getPreTime();
    }
  }, [orderData?.pageStep]);

  const Tab = styled.div`
    /* Add the selected styles when the component is selected */
    ${({ isSelected }) =>
      isSelected &&
      ` 
  border-color: #BD0043 !important;
`}
  `;
  const Panal = styled.div`
    /* Add the selected styles when the component is selected */
    ${({ isSelected }) =>
      isSelected &&
      ` 
  display: block !important;
`}
  `;
  const [activeTab, setActiveTab] = useState(null);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const setSlotTime = (items) => {
    setTimeslotSelected(items);
  };

  const continueTime = () => {
    let delivery_type = activeTab == 0 ? "fastest" : "schedule";
    if (delivery_type == "fastest" && orderData?.totalCartItem == 4) {
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarMessage: t('fastestTimeError'),
          snackbarState: "error",
        })
      );
      return;
    }
    if (delivery_type == "fastest") {
      dispatch(
        updateOrderData({
          ...orderData,
          timeSloat: { id: 0 },
          pageStep: 4,
          delivery_type: delivery_type,
        })
      );
    } else {
      dispatch(
        updateOrderData({
          ...orderData,
          timeSloat: timeslotSelected,
          pageStep: 4,
          delivery_type: delivery_type,
          delivery_date: timeslotData?.date,
        })
      );
    }
  };

  useEffect(() => {
    if (orderData?.delivery_mode) {
      if (orderData?.delivery_mode) {
        setTimeslotSelected(null);
        dispatch(updateOrderData({ ...orderData, timeSloat: null }));
      }
    }
  }, [orderData?.delivery_mode]);

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#ffffff",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 400,
      margin: 0,
      marginLeft: "-20px",
      padding: 0,
      boxShadow:
        "0 0 25px -5px rgb(0 0 0 / 0.1), 0 0 10px -6px rgb(0 0 0 / 0.1)",
      ".MuiTooltip-arrow": {
        color: "#FFFFFF", // Arrow color
        width: "28px", // Arrow width
        height: "16px", // Arrow height
        top: "-7px", // Position where arrow is pointing
        left: "12px!important", // Position where arrow is pointing
      },
    },
  }));

  return (
    <>
      <div className="relative flex flex-col w-full">
        <div className="flex xs:flex-col xs:items-start flex-row gap-4 items-center justify-between w-full mt-0.5 mb-2">
          <div className="flex flex-col gap-3 flex-row items-start justify-start w-full">
            {orderData?.pageStep < 3 || !orderData?.pageStep ? (
              <div className="flex flex-col gap-1 items-start justify-start flex-1">
                <Text className="text-base text-black-900 font-mohrroundedaltmedium">
                  {t("deliveryDateAndTime")}
                </Text>
                <div className="flex gap-1 flex-row items-center">
                  <Text className="text-black-900 text-sm font-mohrroundedaltregular">
                    {t("forYourItemsChooseTheDeliveryDateAndTime")}
                  </Text>
                </div>
              </div>
            ) : null}

            {orderData?.delivery_mode &&
            orderData?.timeSloat &&
            orderData?.pageStep > 2 ? (
              <>
                <div className="flex flex-col gap-1 items-start justify-start flex-1">
                  <Text className="text-base text-black-900 font-mohrroundedaltmedium">
                    {orderData?.delivery_mode == "home_office"
                      ? t("deliveryDateAndTime")
                      : ""}
                    {orderData?.delivery_mode == "pickup_point"
                      ? t("pickUpDateTime")
                      : ""}
                  </Text>
                  <div className="flex gap-1 flex-row items-center">
                    <Text className="text-black-900 text-sm font-mohrroundedaltregular">
                      {orderData?.delivery_type != "fastest" ? (
                        <>
                          {CUSTOM.changeDateFormat(
                            timeslotData?.date,
                            "dd/MM/yyyy"
                          )}{" "}
                          {CUSTOM.formatTimeRange(
                            timeslotSelected?.openTime,
                            timeslotSelected?.closeTime
                          )}
                        </>
                      ) : (
                        <></>
                      )}
                      {orderData?.delivery_type == "fastest" ? (
                        <>{t("fastestTime")}</>
                      ) : null}
                    </Text>
                  </div>
                </div>
                <Button
                  className="flex items-center bg-red-50_01 justify-center  px-2 py-[7px] rounded"
                  leftIcon={
                    <Img
                      className="h-[18px] mr-2 rtl:mr-0 rtl:ml-2"
                      src="/images/img_clock.svg"
                      alt="clock"
                    />
                  }
                >
                  <div className="text-left text-gray-900_01 font-mohrroundedaltmedium text-sm rtl:text-right">
                    {t("estimatedPrepTime")} {CUSTOM.minutsToHour(prepTime)} hrs
                  </div>
                </Button>
              </>
            ) : null}
          </div>
          {orderData?.timeSloat && orderData?.pageStep > 2 ? (
            <Button
              className="w-auto mx-auto px-3 py-1.5 text-sm xs:mx-0"
              size="sm"
              variant="OutlineBlack"
              hover={true}
              hoverclass="bg-black-900"
              onClick={(e) => {
                dispatch(
                  updateOrderData({
                    ...orderData,
                    timeSloat: null,
                    pageStep: 3,
                  })
                );
              }}
            >
              {t("change")}
            </Button>
          ) : null}
        </div>
        {orderData?.pageStep == 3 && !orderData?.timeSloat ? (
          <>
            <div className="flex xs:flex-col xs:items-start flex-col gap-4 items-center justify-start w-full mt-0.5 mb-2">
              <div className="flex flex-row xs:flex-col xs:items-start md:gap-5 items-center justify-start w-full">
                <div className="flex flex-col gap-1 items-start justify-start flex-1">
                  <Text className="text-base text-black-900 font-mohrroundedaltmedium">
                    {orderData?.delivery_mode == "home_office"
                      ? t("deliveryDateAndTime")
                      : ""}
                    {orderData?.delivery_mode == "pickup_point"
                      ? t("pickUpDateTime")
                      : ""}
                  </Text>
                  <div className="flex gap-1 flex-row items-center">
                    <Text className="text-black-900 text-sm font-mohrroundedaltregular">
                      {t("forYourItemsChooseTheDeliveryDateAndTime")}
                    </Text>
                  </div>
                </div>
                <Button
                  className="flex items-center bg-red-50_01 justify-center  px-2 py-[7px] rounded"
                  leftIcon={
                    <Img
                      className="h-[18px] mr-2 rtl:mr-0 rtl:ml-2"
                      src="/images/img_clock.svg"
                      alt="clock"
                    />
                  }
                >
                  <div className="text-left text-gray-900_01 font-mohrroundedaltmedium text-sm rtl:text-right">
                    {t("estimatedPrepTime")} {CUSTOM.minutsToHour(prepTime)} hrs
                  </div>
                </Button>
              </div>
            </div>
            <div className="gap-5 grid sm:grid-cols-1 grid-cols-2 justify-center w-full mt-5">
              {orderData?.delivery_mode == "home_office" ? (
                <>
                  <Tab
                    className="common-pointer bg-white-A700 border border-gray-300 border-solid flex flex-1 gap-3 flex-row items-center justify-start p-5 w-full"
                    isSelected={activeTab === 0}
                    onClick={() => handleTabClick(0)}
                  >
                    <Radio
                      className="flex items-center justify-start"
                      name="Deliverytype"
                      checked={activeTab === 0}
                      onChange={() => handleTabClick(0)}
                    />
                    <div className="flex flex-row gap-1 items-start justify-between w-full">
                      <div className="flex flex-row gap-1 items-start justify-start">
                        <Img
                          className="h-6 w-6"
                          src="/images/img_send.svg"
                          alt="send"
                        />
                        <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                          {t("fastestTime")}
                        </Text>
                      </div>
                      {orderData?.totalCartItem==4?(<HtmlTooltip
                        placement="bottom-start"
                        arrow
                        title={
                          <>
                            <div className="py-4 px-5 w-full">
                              <Text className="leading-5 text-black-900 text-sm w-full font-mohrroundedaltmedium">
                               {t('fastestTimeError')}
                              </Text>
                            </div>
                          </>
                        }
                      >
                        {/* <Radio
                          name="deliveryMode"
                          checked={activeTab === 2}
                          onClick={(e)=>{
                              if(auth?.id!=0){
                                handleTabClick(2)
                              }
                          }}
                        /> */}
                        <div>
                          <Img
                            className="h-6 w-6"
                            src="/images/info_icon.svg"
                            alt="send"
                          />
                        </div>
                      </HtmlTooltip>):null}
                    </div>
                  </Tab>
                </>
              ) : null}
              <Tab
                className="common-pointer bg-white-A700 border border-gray-300 border-solid flex flex-1 gap-3 flex-row items-center justify-start p-5 w-full"
                isSelected={activeTab === 1}
                onClick={() => handleTabClick(1)}
              >
                <Radio
                  className="flex items-center justify-start"
                  name="Deliverytype"
                  checked={activeTab === 1}
                  onChange={() => handleTabClick(1)}
                />
                <div className="flex flex-row gap-1 items-start justify-start w-auto">
                  <Img
                    className="h-6 w-6"
                    src="/images/img_calendar_24x24.svg"
                    alt="calendar"
                  />
                  <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                    {t("scheduleTime")}
                  </Text>
                </div>
              </Tab>
            </div>
            <Panal
              isSelected={activeTab === 1}
              className="flex flex-col items-start justify-start w-full mt-7 hidden"
            >
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <Text className="text-base text-black-900 font-mohrroundedaltmedium">
                  {t("selectDate")}
                </Text>
                <div className="max-w-[350px] w-full">
                  <DatepickerInput
                    required={true}
                    disablePast={true}
                    label={t("deliveryDate")}
                    value={timeslotData?.date}
                    onChange={(e) => {
                      changeDate(e);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <Text className="text-base text-black-900 font-mohrroundedaltmedium">
                  {slotData.length > 0
                    ? t("availableTimeSlots")
                    : t("noSloatFound")}
                </Text>
                <div className="w-full flex flex-wrap gap-3">
                  {slotData?.map((items, index) => {
                    return (
                      <TimeSlotRadio
                        label={CUSTOM.formatTimeRange(
                          items?.openTime,
                          items?.closeTime
                        )}
                        checked={timeslotSelected?.id == items?.id}
                        name="time"
                        className="w-auto"
                        id={`slot-${index}`}
                        onClick={(e) => {
                          setSlotTime(items);
                        }}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="w-full max-w-[242px] mt-8 flex flex-row gap-4 mb-[18px]">
                <Button
                  className="flex-1 mx-auto"
                  size="lg"
                  variant="FillBlack"
                  hover={true}
                  hoverclass="bg-white-A700"
                  disabled={
                    activeTab == 1
                      ? timeslotSelected == null
                      : slotData.length == 0
                      ? true
                      : false
                  }
                  onClick={(e) => {
                    continueTime();
                  }}
                >
                  {t("continue")}
                </Button>
              </div>
            </Panal>
            <Panal
              isSelected={activeTab === 0}
              className="flex flex-col items-start justify-start w-full hidden"
            >
              {orderData?.delivery_mode == "home_office" ? (
                <div className="w-full max-w-[242px] mt-8 flex flex-row gap-4 mb-[18px]">
                  <Button
                    className="flex-1 mx-auto"
                    size="lg"
                    variant="FillBlack"
                    hover={true}
                    hoverclass="bg-white-A700"
                    onClick={(e) => {
                      continueTime();
                    }}
                  >
                    {t("continue")}
                  </Button>
                </div>
              ) : null}
            </Panal>
          </>
        ) : null}
      </div>
    </>
  );
};

export default DeliveryDateTime;
