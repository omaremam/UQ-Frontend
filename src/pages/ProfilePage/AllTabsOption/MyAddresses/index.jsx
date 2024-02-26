import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Img, Text } from "components";
import { DeleteModal } from "popups/DeleteModal";
import { AddEditAddress } from "popups/AddEditAddress";
import globalRequest from "../../../../utils/global/globalRequest";
import { useDispatch, useSelector } from "react-redux";
import { changeLoader } from "../../../../redux/reducers/loader";
import {
  buildFullAddress,
  defaultAddressParams,
} from "../../../../utils/helper/custom";
import {
  updateMyAddress,
  getAddressData,
} from "../../../../redux/reducers/myAddress";
import { USERS } from "../../../../utils/helper/Enum";
import { setSnackbar } from "../../../../redux/reducers/snackbar";
import EmptyAllTab from "../EmptyAllTab";
const MyAddresses = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const addressData = useSelector(getAddressData);
  const [AddEditAddressOpen, setAddEditAddressOpen] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState(0);
  const [editData, setEditData] = React.useState(null);
  const [deleteConfirm, setdeleteConfirm] = useState("");
  const [apiData, setApiData] = React.useState({
    allAddress: [],
    allData: null,
  });
  /**
   * Edit add address popup open
   */
  const handelsetAddEditAddressOpen = (id) => {
    let defaultAddress = defaultAddressParams();
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");

    if (id > 0) {
      const updatedAllAddress = apiData.allAddress.filter(
        (item) => item.id == id
      );
      setEditData(updatedAllAddress[0]);
      defaultAddress = defaultAddressParams(updatedAllAddress[0]);
    } else {
      setEditData(null);
    }
    dispatch(updateMyAddress(defaultAddress));
    dispatch(changeLoader(true));
    setTimeout(() => {
      setAddEditAddressOpen(true);
      dispatch(changeLoader(false));
    }, 500);
  };
  const [DeleteModalOpen, setDeleteModalOpen] = React.useState(false);
  const handelsetDeleteModalOpen = (id) => {
    setDeleteId(id);
    setDeleteModalOpen(true);
  };
  /**
   * get address from api
   */
  const getAlladdress = async () => {
    try {
      dispatch(changeLoader(true));
      let response = await globalRequest(
        USERS?.GET_ALL_ADDRESS,
        "get",
        {},
        {},
        true
      );
      response = response?.data;
      if (response?.status == "SUCCESS") {
        let address =
          response?.data?.userAddresses != null
            ? response?.data?.userAddresses
            : [];
        setApiData({
          ...apiData,
          allAddress: address,
          allData: response?.data,
        });
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
  };
  /**
   * delete confirm
   */
  useEffect(() => {
    if (AddEditAddressOpen == "getAddressList") {
      getAlladdress();
      setAddEditAddressOpen(false);
    }
  }, [AddEditAddressOpen]);
  useEffect(() => {
    getAlladdress();
  }, []);

  /**
   * remove id from state
   */
  const removeIdFromAddressList = (id) => {
    const updatedAllAddress = apiData.allAddress.filter(
      (item) => item.id !== id
    );
    setApiData((prevState) => ({
      ...prevState,
      allAddress: updatedAllAddress,
    }));
  };
  /**
   * delete address
   */
  const deleteAddress = async () => {
    try {
      dispatch(changeLoader(true));
      let response = await globalRequest(
        USERS?.DELETE_ADDRESS + "/" + deleteId,
        "delete",
        { id: deleteId },
        {},
        true
      );
      response = response?.data;
      dispatch(changeLoader(false));
      if (response?.status == "SUCCESS") {
        setDeleteId(0);
        setDeleteModalOpen(false);
        setdeleteConfirm("");
        removeIdFromAddressList(deleteId);
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarMessage: response?.message,
            snackbarState: "success",
          })
        );
        return false;
      }
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarMessage: response?.message,
          snackbarState: "error",
        })
      );
    } catch (e) {
      dispatch(changeLoader(false));
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarMessage: e?.message,
          snackbarState: "error",
        })
      );
    }
  };
  useEffect(() => {
    if (deleteConfirm) {
      if (deleteConfirm == "no") {
        setDeleteId(0);
        setDeleteModalOpen(false);
        setdeleteConfirm("");
      } else {
        deleteAddress();
      }
    }
  }, [deleteConfirm]);

  return (
    <>
      <div className="flex flex-row font-mohrroundedaltmedium items-center justify-between w-full mb-7">
        <Text
          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
          size="txtMohrRoundedAltSemiBold24"
        >
          {t("myAddresses")}
        </Text>
        {apiData?.allAddress.length > 0 ? (
          <Button
            className="min-w-[125px] flex items-center justify-center"
            size="md"
            variant="OutlineBlack"
            hover={true}
            hoverclass="bg-black-900"
            onClick={(e) => {
              handelsetAddEditAddressOpen(0);
            }}
            leftIcon={
              <Img
                className="h-5 mt-px btn-icon"
                src="/images/img_plus_black_900_20x20.svg"
                alt="plus"
              />
            }
          >
            <Text className="mx-2" as="span">
              {t("newAddress")}
            </Text>
          </Button>
        ) : null}
      </div>
      {apiData?.allAddress.map((item, index) => {
        return (
          <div
            key={"address-key-" + index}
            className="flex items-center justify-between p-4 bg-light_blue-50 rounded mb-4"
          >
            <div className="flex items-center justify-start">
              <Img
                src="/images/img_location.svg"
                className="w-7 h-7"
                alt="location"
              />
              <div className="relative mx-3">
                <Text
                  className="text-black-900 text-sm md:text-base mb-1"
                  size="txtMohrRoundedAltMedium16"
                >
                  {item?.fullName}
                </Text>
                <Text
                  className="text-black-900"
                  size="txtMohrRoundedAltRegular12"
                >
                  {buildFullAddress(item)}
                </Text>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end">
              <Img
                src="/images/img_edit_black_900.svg"
                className={"cursor-pointer w-5 h-5 mx-3"}
                alt="edit"
                onClick={(e) => {
                  handelsetAddEditAddressOpen(item?.id);
                }}
              />
              <Img
                src="/images/img_trash.svg"
                className={"cursor-pointer w-5 h-5"}
                alt="delete"
                onClick={(e) => {
                  handelsetDeleteModalOpen(item?.id);
                }}
              />
            </div>
          </div>
        );
      })}
      {apiData?.allAddress.length == 0 ? (
        <>
          <EmptyAllTab
            emptyImg="images/empty-location-icon.svg"
            emptyParagraph="Add addresses here to use it in future while placing an order"
            emptyBtn="New Address"
            addAddressTrigger={handelsetAddEditAddressOpen}
          />
        </>
      ) : null}
      {AddEditAddressOpen === true ? (
        <AddEditAddress setAddAddressPopup={setAddEditAddressOpen}/>
      ) : null}
      {DeleteModalOpen === true ? (
        <DeleteModal
          deleteTitle={t("deleteAddress")}
          deleteParagraph={t(
            "areYouSureYouWantToDeleteThisAddressQuestionMark"
          )}
          closepopup={setDeleteModalOpen}
          deleteConfirm={setdeleteConfirm}
        />
      ) : null}
    </>
  );
};

export default MyAddresses;