import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text } from "components";
import { useTranslation } from "react-i18next";
import { PickUpPointsListItem } from "components/PickUpPointsListItem";
import { PickUpPoint } from "popups/PickUpPoint";
import {
  addDeleteGetLocalStorage,
  storageKeys,
} from "../../../../../utils/global/localData";
import globalRequest from "../../../../../utils/global/globalRequest";
import { useDispatch, useSelector } from "react-redux";
import { changeLoader } from "../../../../../redux/reducers/loader";
import { setSnackbar } from "../../../../../redux/reducers/snackbar";
import * as CUSTOM from "../../../../../utils/helper/custom";
import * as APIS from "../../../../../utils/helper/Enum";
import { YourDetails } from "popups/YourDetails";
import { getAuth } from "../../../../../redux/reducers/loginData";
import {
  updateOrderData,
  getOrderData,
} from "../../../../../redux/reducers/orderData";

let timer = null;
const PickUpPointsList = (props) => {
  const { zoneList } = props;

  const auth = useSelector(getAuth);
  const dispatch = useDispatch();
  const [pickUpPointsList, setPickUpPointsList] = React.useState([]);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [pickUpPoints, setPickUpPoints] = React.useState(false);
  const handelsetpickUpPoints = () => {
    setPickUpPoints(true);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };

  return (
    <>
      <div className="mt-2.5 w-full">
        <Text className="text-base text-black-900 font-mohrroundedaltmedium mb-6">
          {t("pickUpPointsNearYou")}
        </Text>
        <div className="flex flex-col gap-4">
          {zoneList?.length > 0 ? (
            <>
              {zoneList.map((zoneItem, index) => {
                if (index < 8) {
                  let tlen = zoneList?.length > 8 ? 8 : zoneList?.length;
                  return (
                    <>
                      <PickUpPointsListItem zoneItem={zoneItem} />
                      {tlen != index + 1 ? (
                        <div
                          className="w-full h-px bg-gray-300"
                          key={`pikitem${index}`}
                        ></div>
                      ) : (
                        <span key={`pikitem${index}`}></span>
                      )}
                    </>
                  );
                }
              })}
              <div className="w-full h-px bg-gray-300"></div>
              <div
                className="flex flex-1 flex-row items-center justify-between w-full"
                onClick={() => {
                  handelsetpickUpPoints();
                }}
              >
                <Button className="flex flex-1 flex-row items-center justify-start w-full gap-2">
                  <Text className="common-pointer text-center text-pink-800 text-sm w-auto font-mohrroundedaltmedium">
                    {t("viewAll")}
                  </Text>
                </Button>
              </div>
            </>
          ) : (
            <div>{t("data_not_found")}</div>
          )}
        </div>
      </div>
      {pickUpPoints === true ? (
        <PickUpPoint closepopup={setPickUpPoints} zoneList={zoneList} />
      ) : null}
    </>
  );
};

export default PickUpPointsList;
