import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text } from "components";
import { useTranslation } from "react-i18next";
import { PickUpPointsListItem } from "components/PickUpPointsListItem";
import { PickUpPoint } from "popups/PickUpPoint";
const PickUpPointsList = () => {
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
          <PickUpPointsListItem />
          <div className="w-full h-px bg-gray-300"></div>
          <PickUpPointsListItem disabled />
          <div className="w-full h-px bg-gray-300"></div>
          <PickUpPointsListItem />
          <div className="w-full h-px bg-gray-300"></div>
          <PickUpPointsListItem />
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
        </div>
      </div>
      {pickUpPoints === true ? (
        <PickUpPoint closepopup={setPickUpPoints} />
      ) : null}
    </>
  );
};

export default PickUpPointsList;