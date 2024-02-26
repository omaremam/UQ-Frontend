import { Button, DatepickerInput, Text, TimeSlotRadio } from "components";
import { useTranslation } from "react-i18next";
const StepsDeliveryDateTime = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="relative flex flex-col w-full">
        <div className="flex xs:flex-col xs:items-start flex-row gap-4 items-center justify-between w-full mt-0.5 mb-2">
          <div className="flex flex-col gap-3 flex-row items-start justify-start w-full">
            <div className="flex flex-col gap-1 items-start justify-start">
              <Text className="text-base text-black-900 font-mohrroundedaltmedium">
                {t("deliveryDateAndTime")}
              </Text>
              <div className="flex flex-row items-center">
                <Text className="text-gray-700 text-sm font-mohrroundedaltregular">
                  {t("forYourItemsChooseTheDeliveryDateAndTime")}
                </Text>
              </div>
            </div>
          </div>
          <Button
            className="w-auto mx-auto px-3 py-1.5 text-sm xs:mx-0"
            size="sm"
            variant="OutlineBlack"
          >
            {t("change")}
          </Button>
        </div>
        <div className="flex flex-col items-start justify-start w-full mt-3">
          <div className="flex flex-col gap-3 items-start justify-start w-full">
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
          <div className="w-full max-w-[350px] mt-3 flex flex-row gap-4 mb-[18px]">
            <div className="w-full max-w-[242px] mt-8 flex flex-row gap-4 mb-[18px]">
              <Button
                className="flex-1 mx-auto bg-gray-300 border-gray-300"
                size="lg"
                variant="FillBlack"
                style={{ color: "rgba(0,0,0,0.38)" }}
              >
                {t("continue")}
              </Button>
            </div>
            <div className="w-full max-w-[242px] mt-8 flex flex-row gap-4 mb-[18px]">
              <Button className="flex-1 mx-auto" size="lg" variant="FillBlack">
                {t("continue")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StepsDeliveryDateTime;
