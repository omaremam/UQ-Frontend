import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";
import { useTranslation } from "react-i18next";
import { SavedAddressesListItem } from "components/SavedAddressesListItem";
import { YourDetails } from "popups/YourDetails";
import { AddEditAddress } from "popups/AddEditAddress";
import {
  updateMyAddress,
  getAddressData,
} from "../../../../../redux/reducers/myAddress";
import { useDispatch, useSelector } from "react-redux";
import * as CUSTOM from "../../../../../utils/helper/custom";
import { changeLoader } from "redux/reducers/loader";
import {
  updateOrderData,
  getOrderData,
} from "../../../../../redux/reducers/orderData";
import { getAuth } from "../../../../../redux/reducers/loginData";

const SavedAddressesList = (props) => {
  const { addressList } = props;
  const navigate = useNavigate();
  const auth = useSelector(getAuth);
  const dispatch = useDispatch();
  const orderData = useSelector(getOrderData);
  const { t } = useTranslation();
  let existAddress = 0;
  return (
    <>
      <div className="mt-2.5 w-full">
        <Text className="text-base text-black-900 font-mohrroundedaltmedium mb-6">
          {t("savedAddresses")}
        </Text>

        <div className="flex flex-col gap-4">
          {addressList != null && auth?.id != 0 ? (
            <>
              {addressList?.userAddresses.map((addressItem, index) => {
                existAddress = 1;
                return (
                  <>
                    <span key={`addressitem-${addressItem?.id}`}>
                      <SavedAddressesListItem items={addressItem} />
                    </span>
                    {addressList?.userAddresses?.length != index + 1 ? (
                      <div className="w-full h-px bg-gray-300"></div>
                    ) : null}
                  </>
                );
              })}
            </>
          ) : null}
          {addressList != null && auth?.id == 0 ? (
            <>
              {addressList?.map((addressItem, index) => {
                existAddress = 1;
                return (
                  <>
                    <span key={`addressitem-${addressItem?.id}`}>
                      <SavedAddressesListItem items={addressItem} />
                    </span>
                  </>
                );
              })}
            </>
          ) : null}

          {existAddress == 0 ? <div>{t("data_not_found")}</div> : null}

          <div className="w-full h-px bg-gray-300"></div>
          <div className="flex flex-1 flex-row items-center justify-between w-full">
            <Button
              className="flex flex-1 flex-row items-center justify-start w-full gap-2"
              onClick={(e) => {
                dispatch(
                  updateOrderData({ ...orderData, addAddressPopup: true })
                );
                dispatch(updateMyAddress(CUSTOM.defaultAddressParams()));
              }}
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
    </>
  );
};

export default SavedAddressesList;
