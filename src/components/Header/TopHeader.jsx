import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";
import { Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { loginData, getDefaultLanguage } from "../../utils/helper/custom";
import { useTranslation } from "react-i18next";
import { LogoutModal } from "popups/LogoutModal";
import { ChooseLocation } from "popups/ChooseLocation";
import globalRequest from "../../utils/global/globalRequest";
import { useDispatch, useSelector } from "react-redux";
import { changeLoader } from "../../redux/reducers/loader";
import { USERS } from "../../utils/helper/Enum";
import { setSnackbar } from "../../redux/reducers/snackbar";
import { AddEditAddress } from "popups/AddEditAddress";
import * as CUSTOM from "../../utils/helper/custom";
import {
  addDeleteGetLocalStorage,
  storageKeys,
} from "../../utils/global/localData";
import { updateAuth, getAuth } from "../../redux/reducers/loginData";
const TopHeader = (props) => {
  const navigate = useNavigate();
  const [headerAddressList, setHeaderAddressList] = useState({});
  const [defaultAddress, setDefaultAddress] = useState("");
  const [addAddressPopup, setAddAddressPopup] = useState(false);
  const dispatch = useDispatch();
  const [language, setLanguage] = useState(false);
  const { t } = useTranslation();
  let auth = useSelector(getAuth);
  const handlelanguage = () => {
    setLanguage(!language);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const enStyles = !language ? "hidden" : "block";
  const [LogoutModalOpen, setLogoutModalOpen] = useState(false);
  const handelsetLogoutModalOpen = () => {
    setAnchorEl(null);
    setLogoutModalOpen(true);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };
  const [ChooseLocationModalOpen, setChooseLocationModalOpen] = useState(false);
  const handelsetChooseLocationModalOpen = () => {
    if (auth?.id == 0) {
      setAddAddressPopup(true);
    } else {
      setChooseLocationModalOpen(true);
    }
    document.body.classList.add("overflow-hidden");
  };

  const getSavedAddress = async () => {
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
        setHeaderAddressList(response?.data);
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

  useEffect(() => {
    if (auth?.id) {
      getSavedAddress();
    }
  }, [ChooseLocationModalOpen, auth]);

  useEffect(() => {
    //setDefaultAddress
    if (Object.keys(headerAddressList).length > 0 && auth?.id) {
      let address = headerAddressList?.userAddresses?.find(
        (item) => item?.id === headerAddressList?.defaultAddressId
      );
      if (address) {
        setDefaultAddress(CUSTOM.buildFullAddress(address));
      }else{
        setDefaultAddress(CUSTOM.getDefautAddress()?.address);
      }
    }
  }, [headerAddressList, auth]);

  useEffect(() => {
    if (auth?.id == 0) {
      let addressData = addDeleteGetLocalStorage(
        storageKeys.GUEST_ADDRESS,
        {},
        "get"
      );
      if (addressData) {
        addressData = JSON.parse(addressData);
        let address = {
          streetNumber: addressData?.street_number,
          buildingNumber: addressData?.building_number,
          floorApartment: addressData?.floor_apartment,
          address: addressData?.address,
        };
        setDefaultAddress(CUSTOM.buildFullAddress(address));
      }else{
        setDefaultAddress(CUSTOM.getDefautAddress()?.address);
      }
    }
  }, [auth, addAddressPopup]);

  return (
    <>
      <div className="bg-pink-100 flex md:flex-col flex-row md:gap-5 items-center justify-start w-full relative z-[2]">
        <div className="flex flex-row items-center justify-between w-full max-w-[1110px] mx-auto py-2 md:px-4">
          {props?.cpage != "/cart" ? (
            <div
              className="flex flex-row items-center justify-center w-auto"
              onClick={() => {
                handelsetChooseLocationModalOpen();
              }}
            >
              <Img
                className="h-6 w-6 cursor-pointer"
                src="/images/img_location.svg"
                alt="location"
              />
              {}
              <Text
                className="mx-1 text-black-900 text-sm"
                size="txtMohrRoundedAltRegular14Black900"
              >
                {defaultAddress || props?.riyadh}
              </Text>
            </div>
          ) : null}

          <div className="flex flex-row items-center justify-end w-auto flex-1">
            {props?.cpage != "/cart" ? (
              <>
                <div className="flex flex-row items-start justify-center xs:hidden w-auto">
                  <Text
                    className="text-black-900 text-right text-sm"
                    size="txtMohrRoundedAltRegular14Black900"
                  >
                    {props?.callusforany}
                  </Text>
                  <Text
                    className="ltr:ml-1 rtl:mr-1 text-black-900 text-right text-sm"
                    size="txtMohrRoundedAltRegular14Black900"
                  >
                    {props?.userphonenumber}
                  </Text>
                </div>

                <Text
                  className="ml-3 rtl:ml-0 rtl:mr-3 xs:ml-[0] text-black-900 xs:hidden text-sm"
                  size="txtMohrRoundedAltRegular14Black900"
                >
                  {props?.one}
                </Text>
                <Text
                  className="px-3 text-black-900 text-sm relative cursor-pointer"
                  size="txtMohrRoundedAltRegular14Black900"
                  onClick={handlelanguage}
                >
                  {getDefaultLanguage("capital")}
                  <div
                    className={`${enStyles} bg-pink-800 h-1 w-full absolute -bottom-[10px] left-0 z-50`}
                  ></div>
                  <div
                    className={`${enStyles} absolute left-auto top-full top-[30px] -right-10 z-50`}
                  >
                    <div className="w-auto flex flex-row bg-white-A700 shadow-md mx-auto">
                      <div className="flex flex-col py-2 w-full">
                        <ul className="flex flex-col">
                          <li
                            className="flex items-center gap-2 px-4 py-2 text-black-900 hover:bg-gray-50_02 hover:text-pink-800"
                            onClick={(e) => {
                              localStorage.setItem(
                                "jsahdjkanbn",
                                "sd542s3ad2sa1d3iu748923DSF"
                              );
                              window.location.reload();
                            }}
                          >
                            <Img
                              className="h-6 object-contain w-6 min-w-[1.5rem]"
                              src="/images/flag-eng.svg"
                              alt="rabbitholelogo"
                            />
                            <Text className="whitespace-nowrap font-mohrroundedaltregular font-normal text-base leading-6 -mt-1 self-center">
                              English
                            </Text>
                          </li>
                          <li
                            className="flex items-center gap-2 px-4 py-2 text-black-900 hover:bg-gray-50_02 hover:text-pink-800"
                            onClick={(e) => {
                              localStorage.setItem(
                                "jsahdjkanbn",
                                "sd5s42s3ad2sa1d3iu748923DSF"
                              );
                              window.location.reload();
                            }}
                          >
                            <Img
                              className="h-6 object-contain w-6 min-w-[1.5rem]"
                              src="/images/flag-arb.svg"
                              alt="rabbitholelogo"
                            />
                            <Text className="whitespace-nowrap font-mohrroundedaltregular font-normal	text-base leading-6 -mt-1 self-center">
                              عربي
                            </Text>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Text>
                <Text
                  className="text-black-900 text-sm"
                  size="txtMohrRoundedAltRegular14Black900"
                >
                  {props?.two}
                </Text>
              </>
            ) : null}
            {auth?.id ? (
              <>
                <Button
                  className="pl-3 rtl:pl-0 rtl:pr-3 text-black-900 text-sm relative font-mohrroundedaltregular font-normal text-[14px] mb-[-6px] h-full flex -mt-1 overflow-visible"
                  id="profilemenu-button"
                  aria-controls={open ? "profilemenu-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  rightIcon={<KeyboardArrowDownIcon />}
                >
                  Hi, {auth?.firstName}
                  <div
                    className={`hidden profilemenu-button-line bg-pink-800 h-1 w-full absolute -bottom-[7px] left-0 right-0 m-auto z-50 max-w-[90px]`}
                  ></div>
                </Button>
                <Menu
                  id="profilemenu-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "profilemenu-button",
                  }}
                  transformOrigin={{ horizontal: "center", vertical: "top" }}
                  anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
                >
                  <MenuItem onClick={() => navigate("/my-order")}>
                    {t("Profile")}
                  </MenuItem>
                  <MenuItem onClick={() => navigate("/my-order")}>
                    {t("orders")}
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handelsetLogoutModalOpen();
                    }}
                  >
                    {t("Logout")}
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Text
                className="ml-3 rtl:ml-0 rtl:mr-3 text-black-900 text-sm cursor-pointer"
                size="txtMohrRoundedAltRegular14Black900"
                onClick={() => navigate("/login")}
              >
                {props?.Signup_Login}
              </Text>
            )}
          </div>
        </div>
      </div>

      {LogoutModalOpen === true ? (
        <LogoutModal closepopup={setLogoutModalOpen} />
      ) : null}
      {ChooseLocationModalOpen === true ? (
        <ChooseLocation
          headerAddressList={headerAddressList?.userAddresses || []}
          closepopup={setChooseLocationModalOpen}
          setAddAddressPopup={setAddAddressPopup}
        />
      ) : null}

      {addAddressPopup === true ? (
        <AddEditAddress
          setAddAddressPopup={setAddAddressPopup}
        ></AddEditAddress>
      ) : null}
    </>
  );
};

TopHeader.defaultProps = {
  riyadh: "Arabic",
  callusforany: "Call us for any query:",
  userphonenumber: "+974 98765432",
  one: "|",
  en: "EN",
  two: "|",
  Signup_Login: "Signup/Login",
};

export { TopHeader };
