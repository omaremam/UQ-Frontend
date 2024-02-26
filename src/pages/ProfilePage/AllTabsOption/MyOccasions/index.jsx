import { Button, Img, Line, Text } from "components";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import OccasionDetailBox from "./OccasionDetailBox";
import { AddToMyOccasionAddNew } from "popups/AddToMyOccasionAddNew";
import { DeleteModal } from "popups/DeleteModal";
import globalRequest from "../../../../utils/global/globalRequest";
import { useDispatch } from "react-redux";
import { changeLoader } from "../../../../redux/reducers/loader";
import * as CUSTOM from "../../../../utils/helper/custom";
import { CART, OCCASION } from "../../../../utils/helper/Enum";
import { setSnackbar } from "../../../../redux/reducers/snackbar";
import { useNavigate } from "react-router-dom";
import EmptyAll from "../../../EmptyList";
import {
  addDeleteGetLocalStorage,
  storageKeys,
} from "../../../../utils/global/localData";
function createData(Occasion, Relation, OccasionType, OccasionDate, protein) {
  return { Occasion, Relation, OccasionType, OccasionDate, protein };
}

const MyOccasions = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rows, setRow] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const [editData, setEditdata] = useState({});
  const [drawerData, setdrawerData] = useState({ data: [], detail: null });
  const [AddToMyOccasionAddNewOpen, setAddToMyOccasionAddNewOpen] =
    React.useState(false);
  const [AddToMyOccasionAddEditOpen, setAddToMyOccasionAddEditOpen] =
    React.useState(false);
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    if (rows.length > 0) {
      let tabName = addDeleteGetLocalStorage(storageKeys.ORDER_TAB, {}, "get");
      let tabId = addDeleteGetLocalStorage(storageKeys.ORDER_TAB_ID, {}, "get");
      if (tabName && tabId) {
        if (tabName == "occasion") {
          let rowdata = rows?.find((item) => item?.id == tabId);
          if (rowdata) {
            addDeleteGetLocalStorage(storageKeys.ORDER_TAB, {}, "delete");
            addDeleteGetLocalStorage(storageKeys.ORDER_TAB_ID, {}, "delete");
            getOccasionProducts(rowdata?.id, rowdata);
          }
        }
      }
    }
  }, [rows]);

  /**
   * get all occasion
   */
  const getAllOccasion = async () => {
    try {
      dispatch(changeLoader(true));
      let response = await globalRequest(
        OCCASION?.LISTING,
        "get",
        {},
        {},
        true
      );
      response = response?.data;
      if (response?.status == "SUCCESS") {
        setRow(response?.data?.data);
        setIsEmpty(false);
      } else {
        setIsEmpty(true);
      }
    } catch (e) {
      setIsEmpty(true);
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
  useEffect(() => {
    getAllOccasion();
  }, []);

  useEffect(() => {
    if (AddToMyOccasionAddNewOpen == "refetch") {
      getAllOccasion();
      setAddToMyOccasionAddNewOpen(false);
    }
  }, [AddToMyOccasionAddNewOpen]);

  const deleteData = (deleteId) => {
    const updatedData = rows.filter((item) => item.id !== deleteId);
    if(updatedData.length==0){
      setIsEmpty(true);
    }
    setRow(updatedData);
    dispatch(changeLoader(false));
  };

  /**
   * delete confirm
   */
  const deleteConfirm = async (type) => {
    if (type == "yes" && deleteId != 0) {
      dispatch(changeLoader(true));
      try {
        let response = await globalRequest(
          OCCASION?.UPDATE_OCCASION_STATUS,
          "put",
          { id: deleteId, status: "deleted" },
          {},
          true
        );
        response = response?.data;
        if (response?.status == "SUCCESS") {
          //getAllOccasion();
          deleteData(deleteId);
          dispatch(
            setSnackbar({
              snackbarOpen: true,
              snackbarMessage: response?.message,
              snackbarState: "success",
            })
          );
        }
      } catch (e) {
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarMessage: e?.message,
            snackbarState: "error",
          })
        );
        dispatch(changeLoader(false));
      }
    } else {
      setDeleteId(0);
    }
  };

  const handelAddToMyOccasionAddNew = () => {
    setEditdata({});
    setAddToMyOccasionAddNewOpen(true);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };
  const handelAddToMyOccasionAddEdit = () => {
    setAddToMyOccasionAddNewOpen(true);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };
  const [DeleteModalOpen, setDeleteModalOpen] = React.useState(false);
  const handelsetDeleteModalOpen = () => {
    setDeleteModalOpen(true);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };

  const getOccasionProducts = async (id, detail = {}) => {
    dispatch(changeLoader(true));
    try {
      let response = await globalRequest(
        `${OCCASION?.GET_OCCASION_PRODUCT_BY_ID}/${id}`,
        "get",
        {},
        {},
        true
      );
      response = response?.data;
      if (response?.status == "SUCCESS") {
        setdrawerData({ data: response?.data, detail: detail });
      } else {
        setdrawerData({ data: [], detail: detail });
      }
      setOpen(true);
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

  const deleteItem = async (id = 0) => {
    try {
      let response = await globalRequest(
        `${CART?.DELETE_BY_ITEM_ID}/${id}`,
        "delete",
        {},
        {},
        true
      );
      response = response?.data;
      if (response?.status == "SUCCESS") {
        if (drawerData?.detail?.id) {
          getOccasionProducts(drawerData?.detail?.id, drawerData?.detail);
        }
      }
    } catch (e) {}
  };

  return (
    <>
      <div className="flex flex-row font-mohrroundedaltmedium items-center justify-between w-full mb-7">
        <Text
          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
          size="txtMohrRoundedAltSemiBold24"
        >
          {t("myOccasions")}
        </Text>
        <Button
          className="min-w-[125px] flex items-center justify-center"
          size="md"
          variant="OutlineBlack"
          onClick={handelAddToMyOccasionAddNew}
          hover={true}
          hoverclass="bg-black-900"
          leftIcon={
            <Img
              className="h-5 mt-px btn-icon"
              src="/images/img_plus_black_900_20x20.svg"
              alt="plus"
            />
          }
        >
          <Text className="mx-2" as="span">
            {t("newOccasion")}
          </Text>
        </Button>
      </div>
      {!isEmpty ? (
        <>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>{t("occasion")}</TableCell>
                  <TableCell>{t("relation")}</TableCell>
                  <TableCell>{t("occasionType")}</TableCell>
                  <TableCell>{t("occasionDate")}</TableCell>
                  <TableCell>{""}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.Occasion}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className="cursor-pointer"
                      onClick={(e) => {
                        getOccasionProducts(row?.id, row);
                      }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell>
                      {CUSTOM.getdataByLangKey(
                        row?.relation?.relationLocales,
                        CUSTOM.getDefaultLanguage(),
                        "name"
                      )}
                    </TableCell>
                    <TableCell>
                      {CUSTOM.getdataByLangKey(
                        row?.occasionType?.occasionTypeLocales,
                        CUSTOM.getDefaultLanguage(),
                        "name"
                      )}
                    </TableCell>
                    <TableCell>
                      {row.date
                        ? CUSTOM.changeDateFormat(row?.date, "MMM d, yyyy")
                        : ""}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-row items-center justify-end">
                        <Img
                          src="/images/img_edit_black_900.svg"
                          className={"cursor-pointer w-5 h-5 mx-3"}
                          alt="edit"
                          onClick={(e) => {
                            setEditdata({
                              id: row?.id,
                              name: row.name,
                              date: row?.date,
                              occasion_type_id: row?.occasionType?.id,
                              relation_id: row?.relation?.id,
                              edit:'yes'
                            });
                            handelAddToMyOccasionAddEdit();
                          }}
                        />
                        <Img
                          src="/images/img_trash.svg"
                          className={"cursor-pointer w-5 h-5"}
                          alt="delete"
                          onClick={() => {
                            setDeleteId(row?.id);
                            handelsetDeleteModalOpen();
                          }}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <SwipeableDrawer
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <div className="w-[450px] xs:w-full px-[35px] sm:px-4 py-8 sm:py-4 before-pink-round">
              <div className="flex flex-row gap-3 items-center justify-start w-full mb-8 sm:mb-4">
                <Img
                  className="h-6 w-6 cursor-pointer"
                  src="/images/img_close_black_900.svg"
                  alt="close"
                  onClick={toggleDrawer(false)}
                />
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtMohrRoundedAltSemiBold24"
                >
                  {drawerData?.detail?.name}
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between mt-[22px] w-full">
                <div className="flex flex-col gap-1 items-start justify-start">
                  <Text
                    className="text-base text-black-900"
                    size="txtMohrRoundedAltMedium16"
                  >
                    {t("relation")}
                  </Text>
                  <Text
                    className="text-base text-gray-700"
                    size="txtMohrRoundedAltRegular16Gray700"
                  >
                    {CUSTOM.getdataByLangKey(
                      drawerData?.detail?.relation?.relationLocales,
                      "en",
                      "name"
                    )}
                  </Text>
                </div>
                <Line className="bg-gray-300 h-8 my-2 w-px" />
                <div className="flex flex-col gap-1 items-start justify-start">
                  <Text
                    className="text-base text-black-900"
                    size="txtMohrRoundedAltMedium16"
                  >
                    {t("occasionType")}
                  </Text>
                  <Text
                    className="text-base text-gray-700"
                    size="txtMohrRoundedAltRegular16Gray700"
                  >
                    {CUSTOM.getdataByLangKey(
                      drawerData?.detail?.occasionType?.occasionTypeLocales,
                      "en",
                      "name"
                    )}
                  </Text>
                </div>
                <Line className="bg-gray-300 h-8 my-2 w-px" />
                <div className="flex flex-col gap-1 items-start justify-start">
                  <Text
                    className="text-base text-black-900"
                    size="txtMohrRoundedAltMedium16"
                  >
                    {t("occasionDate")}
                  </Text>
                  <Text
                    className="text-base text-gray-700"
                    size="txtMohrRoundedAltRegular16Gray700"
                  >
                    {drawerData?.detail?.date
                      ? CUSTOM.changeDateFormat(
                          drawerData?.detail?.date,
                          "MMM d, yyyy"
                        )
                      : ""}
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-300 h-px my-4 w-full" />
              {drawerData?.data.length != 0 &&
              drawerData?.data?.cartItems.length != 0 ? (
                <>
                  <Text
                    className="mt-[19px] text-gray-700 text-xs"
                    size="txtMohrRoundedAltRegular12Gray700"
                  >
                    {drawerData?.data?.cartItems
                      ? drawerData?.data?.cartItems.length
                      : 0}{" "}
                    {t("items")}
                  </Text>
                  <div className="mt-[10px] w-full detail-box-height">
                    <div className="flex flex-wrap items-start justify-start gap-4 w-full">
                      {drawerData?.data?.cartItems.map((items, index) => {
                        return (
                          <OccasionDetailBox
                            className=""
                            caketext={`${CUSTOM.getdataByLangKey(
                              items?.product?.productLocales,
                              "en",
                              "name"
                            )} - ${items?.productUom?.name}`}
                            image={`${
                              items?.productUom?.productUomImages?.[0]?.image ||
                              ""
                            }`}
                            itemId={items?.id}
                            delete={deleteItem}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-4 shadow-bs7 w-full absolute left-0 right-0 bottom-0">
                    <Button
                      className="w-full"
                      variant={"FillBlack"}
                      size={"lg"}
                    >
                      {t("placeOrder")}
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center w-full">
                    <Img
                      className="h-[140px] w-[140px] mt-14 mx-auto"
                      src="/images/img_package011.svg"
                      alt="package011"
                    />
                    <Text
                      className="mt-3 text-base text-black-900 text-center"
                      size="txtMohrRoundedAltMedium16"
                    >
                      {t("noItems")}
                    </Text>
                    <Text
                      className="mt-3 text-center text-gray-700 text-xs text-center"
                      size="txtMohrRoundedAltRegular12Gray700"
                    >
                      {t("currentlyNoItemsAddedYetInThisOccassionDot")}
                    </Text>
                    <Button
                      className="w-[180px] mx-auto mt-10"
                      variant={"FillBlack"}
                      size={"md"}
                      onClick={(e) => {
                        navigate("/");
                      }}
                    >
                      {t("addNow")}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </SwipeableDrawer>
        </>
      ) : (
        <EmptyAll type="occasion"></EmptyAll>
      )}

      {AddToMyOccasionAddNewOpen === true ? (
        <AddToMyOccasionAddNew
          editData={editData}
          closepopup={setAddToMyOccasionAddNewOpen}
          modalTopIcon="/images/add_to-occasion-icon.svg"
          OccasionTitle={
            Object.keys(editData).length == 0
              ? t("addNewOccasion")
              : t("UpdateOccasion")
          }
          OccasionParagraph={t("enterBelowDetailsToAddANewOccasionDot")}
        />
      ) : null}
      {DeleteModalOpen === true ? (
        <DeleteModal
          deleteTitle={t("deleteOccasion")}
          deleteParagraph={t(
            "areYouSureYouWantToDeleteThisOccasionQuestionMark"
          )}
          closepopup={setDeleteModalOpen}
          deleteConfirm={deleteConfirm}
        />
      ) : null}
    </>
  );
};

export default MyOccasions;
