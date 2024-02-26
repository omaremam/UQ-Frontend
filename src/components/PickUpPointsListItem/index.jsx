import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";
import { useTranslation } from "react-i18next";
import * as CUSTOM from "../../utils/helper/custom";
import { useDispatch, useSelector } from "react-redux";
import { updateOrderData, getOrderData } from "../../redux/reducers/orderData";
import { changeLoader } from "../../redux/reducers/loader";
const PickUpPointsListItem = (props) => {
  const { zoneItem } = props;
  const dispatch = useDispatch();
  const orderData = useSelector(getOrderData);
  const navigate = useNavigate();
  const { t } = useTranslation();

  /*
   * set address data
   */
  const deliverHear = (data) => {
    const updatedOrderData = {
      ...orderData,
      delivery_mode_show: "hide",
      home_office: data,
      pageStep: 3,
      delivery_mode: "pickup_point",
    };
    if (orderData?.delivery_type === "fastest") {
      updatedOrderData.timeSloat = {};
      updatedOrderData.delivery_type = "";
    }
    dispatch(updateOrderData(updatedOrderData));
    dispatch(changeLoader("closepopup"));
  };

  return (
    <div className="flex flex-1 flex-col items-start justify-between w-full xs:gap-3">
      <div className="flex flex-1 xs:flex-col xs:items-start flex-row items-center justify-between w-full gap-12 xs:gap-4">
        <div className="flex flex-1 flex-row items-start justify-start w-full gap-3">
          <Img
            className={`h-6 w-6 mt-0.5 ${props.disabled ? "opacity-50" : ""}`}
            src="/images/img_location.svg"
            alt="location"
          />
          <div className="flex flex-1 flex-col items-start justify-between w-full gap-1">
            <div className="flex xs:flex-col xs:items-start flex-row items-center justify-start w-full gap-2">
              <Text
                className={`text-base  font-mohrroundedaltregular ${
                  props.disabled ? "text-gray-700" : "text-black-900"
                }`}
              >
                {zoneItem?.localName}
              </Text>
              {zoneItem?.discount > 0 ? (
                <Button
                  className={`cursor-pointer w-auto py-1 px-2 font-mohrroundedaltregular rounded text-center  text-xs ${
                    props.disabled
                      ? "bg-gray-100_01 text-gray-700"
                      : "bg-red-50_01 text-gray-900_01"
                  }`}
                >
                  {zoneItem?.discount}% {t("off")}
                </Button>
              ) : null}
            </div>
            <Text className="text-sm text-gray-700 font-mohrroundedaltregular">
              {zoneItem?.address}
            </Text>
          </div>
        </div>
        <div className="flex flex-row items-end justify-end w-auto xs:pl-9">
          <Button
            disabled={props.disabled}
            className={`common-pointer text-center text-sm w-auto font-mohrroundedaltmedium ${
              props.disabled ? "opacity-40 text-black-900" : "text-pink-800"
            }`}
            onClick={(e) => {
              deliverHear(zoneItem);
            }}
          >
            {t("SetPickUp")}
          </Button>
        </div>
      </div>
      {/* {tabs === 1 && ( */}
      {props.disabled === true ? (
        <div className="flex flex-1 flex-row items-center justify-between w-full px-8 xs:pr-0">
          <Button
            className="cursor-pointer flex items-center justify-center mt-2 px-3 py-[3px] rounded bg-red-50_01"
            leftIcon={
              <Img
                className="h-[18px] mr-2 rtl:mr-0 rtl:ml-2"
                src="/images/img_warning_gray_900_01.svg"
                alt="warning"
              />
            }
          >
            <div className="text-left text-gray-900_01 text-xs font-mohrroundedaltregular rtl:text-right">
              {t("currentlyNotAvailableAsDropZoneCapacityIsFull")}
            </div>
          </Button>
        </div>
      ) : null}
    </div>
  );
};
export { PickUpPointsListItem };
