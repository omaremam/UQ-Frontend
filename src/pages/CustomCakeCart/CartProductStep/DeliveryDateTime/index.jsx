import { useState } from "react";
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
const DeliveryDateTime = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
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
  display: block;
`}
  `;
  const [activeTab, setActiveTab] = useState(null);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="relative flex flex-col w-full">
        <div className="flex xs:flex-col xs:items-start flex-row gap-4 items-center justify-between w-full mt-0.5 mb-2">
          <div className="flex flex-col gap-3 flex-row items-start justify-start w-full">
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
                {t("estimatedPrepTime")} 01.75hrs
              </div>
            </Button>
          </div>
          <Button
            className="w-auto mx-auto px-3 py-1.5 text-sm xs:mx-0"
            size="sm"
            variant="OutlineBlack"
          >
            {t("change")}
          </Button>
        </div>
        <div className="flex xs:flex-col xs:items-start flex-col gap-4 items-center justify-start w-full mt-0.5 mb-2">
          <div className="flex flex-row xs:flex-col xs:items-start md:gap-5 items-center justify-start w-full">
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
                {t("estimatedPrepTime")} 01.75hrs
              </div>
            </Button>
          </div>
        </div>
        <div className="gap-5 grid sm:grid-cols-1 grid-cols-2 justify-center w-full mt-5">
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
            <div className="flex flex-row gap-1 items-start justify-start w-auto">
              <Img className="h-6 w-6" src="/images/img_send.svg" alt="send" />
              <Text className="text-black-900 text-sm w-auto font-mohrroundedaltmedium">
                {t("fastestTime")}
              </Text>
            </div>
          </Tab>
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
              <DatepickerInput required={true} label={t("deliveryDate")} />
            </div>
          </div>
          <div className="flex flex-col gap-3 items-start justify-start w-full">
            <Text className="text-base text-black-900 font-mohrroundedaltmedium">
              {t("availableTimeSlots")}
            </Text>
            <div className="w-full flex flex-wrap gap-3">
              <TimeSlotRadio
                label="10:00 AM - 01:00 PM"
                name="time"
                className="w-auto"
                id="slot-1"
              />
              <TimeSlotRadio
                label="01:00 PM - 04:00 PM"
                name="time"
                className="w-auto"
                id="slot-2"
              />
              <TimeSlotRadio
                label="07:00 PM - 11:00 PM"
                name="time"
                className="w-auto"
                id="slot-3"
              />
            </div>
          </div>
          <div className="w-full max-w-[242px] mt-8 flex flex-row gap-4 mb-[18px]">
            <Button className="flex-1 mx-auto" size="lg" variant="FillBlack">
              {t("continue")}
            </Button>
          </div>
        </Panal>
        <Panal
          isSelected={activeTab === 0}
          className="flex flex-col items-start justify-start w-full hidden"
        >
          <div className="w-full max-w-[242px] mt-8 flex flex-row gap-4 mb-[18px]">
            <Button className="flex-1 mx-auto" size="lg" variant="FillBlack">
              {t("continue")}
            </Button>
          </div>
        </Panal>
      </div>
    </>
  );
};

export default DeliveryDateTime;