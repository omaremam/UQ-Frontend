import React from "react";
import { Button, Img, Line, Text } from "components";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { DeleteModal } from "popups/DeleteModal";

const MyCustomCakesCustomcakecard = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [DeleteModalOpen, setDeleteModalOpen] = React.useState(false);
  const handelsetDeleteModalOpen = () => {
    setDeleteModalOpen(true);
    setAnchorEl(null);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [openSidebar, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <div
        className={
          "bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-end p-4 rounded-lg w-full"
        }
      >
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="h-[223px] relative w-[223px] md:w-full md:h-full">
              <Img
                className="h-[223px] m-auto object-cover rounded-lg w-[223px] md:w-full md:h-auto"
                alt="rectangle17564"
                src={props?.userimage}
                onClick={toggleDrawer(true)}
              />
              <div className="absolute bg-white-A700_28 flex flex-col h-7 items-center justify-start right-[2%] rounded-[50%] top-[4%] w-7">
                <IconButton
                  className="edit-delete-menu"
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem
                    onClick={() => navigate("/designmyowncakequestionone")}
                  >
                    <Img
                      src="/images/img_edit_black_900.svg"
                      className={"cursor-pointer w-5 h-5"}
                      alt="edit"
                    />
                    <Text
                      className="text-sm text-black-900 mx-2"
                      size="txtMohrRoundedAltMedium16"
                    >
                      {t("edit")}
                    </Text>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handelsetDeleteModalOpen();
                    }}
                  >
                    <Img
                      src="/images/img_trash.svg"
                      className={"cursor-pointer w-5 h-5"}
                      alt="delete"
                    />
                    <Text
                      className="text-sm text-black-900 mx-2"
                      size="txtMohrRoundedAltMedium16"
                    >
                      {t("delete")}
                    </Text>
                  </MenuItem>
                </Menu>
              </div>
            </div>
            <div
              className="flex flex-row items-center justify-between mt-3 w-full"
              onClick={toggleDrawer(true)}
            >
              <Text
                className="text-base text-black-900"
                size="txtMohrRoundedAltMedium16"
              >
                {props?.esttime}
              </Text>
              <Text
                className="text-base text-gray-700 text-right"
                size="txtMohrRoundedAltRegular16Gray700"
              >
                {props?.esttime1}
              </Text>
            </div>
            <div
              className="flex flex-row gap-[37px] items-center justify-between mt-[13px] w-full"
              onClick={toggleDrawer(true)}
            >
              <Text
                className="text-base text-black-900"
                size="txtMohrRoundedAltMedium16"
              >
                {props?.estprice}
              </Text>
              <Text
                className="text-base text-gray-700 text-right"
                size="txtMohrRoundedAltRegular16Gray700"
              >
                {props?.estprice1}
              </Text>
            </div>
            <Line className="bg-gray-300 h-px mt-5 w-full" />
          </div>
          <div
            className="flex flex-col h-auto items-center justify-center mt-3 rounded w-full cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <Text
              className="text-center text-pink-800 text-sm w-auto "
              size="txtMohrRoundedAltMedium14"
            >
              {props?.buttontext}
            </Text>
          </div>
        </div>
      </div>

      {DeleteModalOpen === true ? (
        <DeleteModal
          deleteTitle={t("deleteCake")}
          deleteParagraph={t("areYouSureYouWantToRemoveThisCakeQuestionMark")}
          closepopup={setDeleteModalOpen}
        />
      ) : null}

      <SwipeableDrawer
        anchor="right"
        open={openSidebar}
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
              4” {t("cake!")}
            </Text>
          </div>
          <div className="mt-[10px] w-full ">
            <div className="bg-red-50_01 p-4 rounded w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <div className="flex items-center ">
                  <Img
                    className="h-6 w-6"
                    src="/images/img_clock_black_900.svg"
                    alt="clock"
                  />
                  <Text
                    className="text-base text-black-900 w-auto mx-2"
                    size="txtMohrRoundedAltMedium16"
                  >
                    {t("estimatedPriceColon")}
                  </Text>
                </div>
                <Text
                  className="text-base text-gray-700 w-auto"
                  size="txtMohrRoundedAltRegular16Gray700"
                >
                  {t("sar")} 300.00
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between mt-3 w-full">
                <div className="flex items-center ">
                  <Img
                    className="h-6 w-6"
                    src="/images/img_television.svg"
                    alt="television"
                  />
                  <Text
                    className="text-base text-black-900 w-auto mx-2"
                    size="txtMohrRoundedAltMedium16"
                  >
                    {t("estimatedPrepDotTimeColon")}
                  </Text>
                </div>
                <Text
                  className="text-base text-gray-700 w-auto"
                  size="txtMohrRoundedAltRegular16Gray700"
                >
                  2 {t("hrs")}
                </Text>
              </div>
            </div>
            <div className="flex flex-col w-full mt-6 detail-box-height">
              <div className="flex flex-col gap-1 items-start justify-start w-auto mb-4">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtMohrRoundedAltMedium16"
                >
                  {t("choiceOfFlavorColon")}
                </Text>
                <Text
                  className="text-base text-gray-700 w-auto"
                  size="txtMohrRoundedAltRegular16Gray700"
                >
                  {t("truffleCake")}
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-start justify-start w-auto mb-4">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtMohrRoundedAltMedium16"
                >
                  {t("weightOfCakeColon")}
                </Text>
                <Text
                  className="text-base text-gray-700 w-auto"
                  size="txtMohrRoundedAltRegular16Gray700"
                >
                  1 {t("kg")}
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-start justify-start w-auto mb-4 ">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtMohrRoundedAltMedium16"
                >
                  {t("choiceOfIngredientsColon")}
                </Text>
                <Text
                  className="text-base text-gray-700 w-auto"
                  size="txtMohrRoundedAltRegular16Gray700"
                >
                  {t("confectioneryFondantSugarPasteGelsAndGlazes")}
                </Text>
              </div>
              <div className="flex flex-col gap-1 items-start justify-start w-auto mb-4">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtMohrRoundedAltMedium16"
                >
                  {t("choiceOfChocolatesColon")}
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[415px] md:max-w-full text-base text-gray-700"
                  size="txtMohrRoundedAltRegular16Gray700"
                >
                  {t("chocoChipsChocolateAdditivesCocoaPowderCouverture")}
                </Text>
              </div>
              <Line className="bg-gray-300 h-px mt-2 mb-5 w-full" />
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="text-base text-black-900"
                  size="txtMohrRoundedAltMedium16"
                >
                  {t("referenceImageSlashLink")}
                </Text>
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
                  <Img
                    className="h-[100px] md:h-auto object-cover rounded-lg w-[169px] sm:w-full"
                    src="/images/img_rectangle17564_11.png"
                    alt="rectangle19120"
                  />
                  <Img
                    className="h-[100px] md:h-auto object-cover rounded-lg w-[169px] sm:w-full"
                    src="/images/img_rectangle17564_7.png"
                    alt="rectangle19121"
                  />
                  <Img
                    className="h-[100px] md:h-auto object-cover rounded-lg w-[169px] sm:w-full"
                    src="/images/img_rectangle17564_3.png"
                    alt="rectangle19122"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start p-4 shadow-bs7 w-full absolute left-0 right-0 bottom-0">
              <Button className="w-full" variant={"FillBlack"} size={"lg"}>
                {t("placeOrder")}
              </Button>
            </div>
          </div>
        </div>
      </SwipeableDrawer>
    </>
  );
};

export default MyCustomCakesCustomcakecard;