import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";
import { useTranslation } from "react-i18next";
import { SavedAddressesListItem } from "components/SavedAddressesListItem";
import { YourDetails } from "popups/YourDetails";
const SavedAddressesList = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [YourDetailsOpen, setYourDetailsOpen] = useState(false);
  const YourDetailsOpenclick = () => {
    setYourDetailsOpen(true);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };
  return (
    <>
      <div className="mt-2.5 w-full">
        <Text className="text-base text-black-900 font-mohrroundedaltmedium mb-6">
          {t("savedAddresses")}
        </Text>
        <div className="flex flex-col gap-4">
          <SavedAddressesListItem />
          <div className="w-full h-px bg-gray-300"></div>
          <SavedAddressesListItem />
          <div className="w-full h-px bg-gray-300"></div>
          <SavedAddressesListItem />
          <div className="w-full h-px bg-gray-300"></div>
          <div className="flex flex-1 flex-row items-center justify-between w-full">
            <Button
              className="flex flex-1 flex-row items-center justify-start w-full gap-2"
              onClick={YourDetailsOpenclick}
            >
              <Img
                className="h-6 w-6"
                src="/images/img_plus_pink_800.svg"
                alt="location"
              />
              <Text className="common-pointer text-center text-pink-800 text-sm w-auto font-mohrroundedaltmedium">
                {t("addANewAddress")}
              </Text>
            </Button>
          </div>
        </div>
      </div>
      {YourDetailsOpen === true ? (
        <YourDetails closepopup={setYourDetailsOpen} />
      ) : null}
    </>
  );
};

export default SavedAddressesList;