import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text, Radio } from "components";
import { useTranslation } from "react-i18next";
import SavedAddressesList from "./SavedAddressesList";
import PickUpPointsList from "./PickUpPointsList";
import SendAsAGift from "./SendAsAGift";
import styled from "styled-components";
import {
  addDeleteGetLocalStorage,
  storageKeys,
} from "../../../../utils/global/localData";
import globalRequest from "../../../../utils/global/globalRequest";
import { useDispatch, useSelector } from "react-redux";
import { changeLoader } from "../../../../redux/reducers/loader";
import { setSnackbar } from "../../../../redux/reducers/snackbar";
import * as APIS from "../../../../utils/helper/Enum";
import { getAuth } from "../../../../redux/reducers/loginData";
import {
  updateOrderData,
  getOrderData,
} from "../../../../redux/reducers/orderData";
import { AddEditAddress } from "popups/AddEditAddress";
import * as CUSTOM from "../../../../utils/helper/custom";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const DeliveryMode = () => {
  const dispatch = useDispatch();
  const orderData = useSelector(getOrderData);
  const guest_id = CUSTOM.getDeviceID();
  const auth = useSelector(getAuth);
  const [addressList, setAddressList] = useState(null);
  const [zoneList, setZoneList] = useState([]);
  const [occasionOptions, setOccasionOptions] = useState([]);
  const [defaultAddress, setDefaultAddress] = useState(null);
  const [AddAddressPopup, setAddAddressPopup] = useState(false);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(null);
  const { t } = useTranslation();
  const Tab = styled.div`
    /* Add the selected styles when the component is selected */
    ${({ isSelected }) =>
      isSelected &&
      ` 
  border-color: #BD0043 !important;
`}
  `;
  const Panal = styled.div`
    /* Add the selected styles when the component is selected */
    ${({ isSelected }) =>
      isSelected &&
      ` 
  display: block !important;
`}
  `;
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const getSavedAddress = async () => {
    try {
      dispatch(changeLoader(true));
      let response = await globalRequest(
        APIS?.USERS?.GET_ALL_ADDRESS,
        "get",
        {},
        {},
        true
      );
      response = response?.data;
      if (response?.status == "SUCCESS") {
        setAddressList(response?.data);
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

  const getOccasionOptions = async () => {
    if (auth?.id) {
      try {
        dispatch(changeLoader(true));
        let response = await globalRequest(
          APIS?.OCCASION?.LISTING,
          "get",
          {},
          {},
          true
        );
        response = response?.data;
        if (response?.status == "SUCCESS") {
          let relationArray = [];
          response?.data?.data.map((item) => {
            relationArray.push({
              value: item?.id,
              label: item?.name,
            });
          });
          setOccasionOptions(relationArray);
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
    }
  };

  const getPickupPoint = async () => {
    let inputSearch = {
      search: "",
      page: 1,
      limit: 500,
      lat: defaultAddress?.lattitude,
      long: defaultAddress?.longitude,
    };
    try {
      let response = await globalRequest(
        APIS?.DROP_ZONE?.GET_NEAR_ALL,
        "get",
        {},
        { params: inputSearch },
        true
      );
      response = response?.data;
      if (response?.status == "SUCCESS") {
        setZoneList(response?.data?.data);
      }
    } catch (e) {}
  };

  useEffect(() => {
    if (orderData?.addAddressPopup) {
      setAddAddressPopup(true);
    }
  }, [orderData?.addAddressPopup]);

  useEffect(() => {
    getOccasionOptions();
  }, []);

  useEffect(() => {
    if (auth?.id) {
      getSavedAddress();
    }
  }, [auth]);

  useEffect(() => {
    if (AddAddressPopup == "getAddressList") {
      if (auth?.id) {
        getSavedAddress();
      }
      dispatch(updateOrderData({ ...orderData, addAddressPopup: false }));
      setAddAddressPopup(false);
    }
    if(!AddAddressPopup){
      dispatch(updateOrderData({ ...orderData, addAddressPopup: false }));
    }
  }, [AddAddressPopup]);

  const getSavedGuestAddress = async () => {
    try {
      dispatch(changeLoader(true));
      let response = await globalRequest(
        APIS?.GUEST?.GET_ADDRESS_LIST,
        "get",
        {},
        { params: { guest_id: guest_id } },
        true
      );
      response = response?.data;
      if (response?.status == "SUCCESS") {
        let gaddress = [];
        gaddress.push(response?.data);
        setAddressList(gaddress);
      }
    } catch (e) {
      // dispatch(
      //   setSnackbar({
      //     snackbarOpen: true,
      //     snackbarMessage: e?.message,
      //     snackbarState: "error",
      //   })
      // );
    }
    dispatch(changeLoader(false));
  };

  useEffect(() => {
    if (auth?.id == 0) {
      getSavedGuestAddress();
    }
  }, [auth]);

  useEffect(() => {
    if (AddAddressPopup == "getAddressList") {
      if (auth?.id == 0) {
        getSavedGuestAddress();
      }
      dispatch(updateOrderData({ ...orderData, addAddressPopup: false }));
      setAddAddressPopup(false);
    }
  }, [AddAddressPopup]);

  useEffect(() => {
    if (defaultAddress != null) {
      getPickupPoint();
    }
  }, [defaultAddress]);

  useEffect(() => {
    if (addressList != null && auth?.id) {
      let address = addressList?.userAddresses?.find(
        (item) => item?.id === addressList?.defaultAddressId
      );
      if (address) {
        setDefaultAddress(address);
      }else{
        setDefaultAddress(CUSTOM.getDefautAddress());
      }
    }
  }, [addressList, auth]);

  useEffect(() => {
    if (auth?.id == 0) {
      let addressData = addDeleteGetLocalStorage(
        storageKeys.GUEST_ADDRESS,
        {},
        "get"
      );
      if (addressData) {
        addressData = JSON.parse(addressData);
        // setAddressList([addressData]);
        setDefaultAddress(addressData);
      }else{
        setDefaultAddress(CUSTOM.getDefautAddress());
      }
    }
  }, []);

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "transparent",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 300,
      margin: 0,
      padding: 0,
      ".MuiTooltip-arrow": {
        color: "#FFFFFF", // Arrow color
        width: "28px", // Arrow width
        height: "16px", // Arrow height
        bottom: "-8px", // Position where arrow is pointing
        left: "-9px !important", // Position where arrow is pointing
      },
    },
  }));

  return (
    <>
      <div className="relative flex flex-col w-full">
        {orderData?.delivery_mode && orderData?.delivery_mode_show == "hide" ? (
          <>
            <div className="flex flex-col gap-4 items-center justify-start w-full mb-2">
              <div className="flex flex-row xs:flex-col md:gap-5 items-center xs:items-start justify-start w-full">
                <div className="flex flex-col gap-1 items-start justify-start flex-1">
                  <Text className="text-base text-black-900 font-mohrroundedaltmedium">
                    {t("deliveryMode")}:
                    {orderData?.delivery_mode == "buying_for_love"
                      ? t("buyingForALovedOne")
                      : ""}
                    {orderData?.delivery_mode == "pickup_point"
                      ? t("PickUpPoint")
                      : ""}
                    {orderData?.delivery_mode == "home_office"
                      ? t("homeOfficeOtherDelivery")
                      : ""}
                  </Text>

                  {orderData?.delivery_mode == "pickup_point" ? (
                    <div className="flex gap-1 flex-row items-center">
                      <Text className="text-black-900 text-base font-mohrroundedaltmedium">
                        {orderData?.home_office?.localName}
                      </Text>
                    </div>
                  ) : null}

                  {orderData?.delivery_mode == "buying_for_love" ? (
                    <div className="flex gap-1 flex-row items-center">
                      <Text className="text-black-900 text-sm font-mohrroundedaltregular">
                        {orderData?.buying_for_love?.recipient_name}
                      </Text>
                    </div>
                  ) : null}

                  {orderData?.delivery_mode != "buying_for_love" ? (
                    <div className="flex gap-1 flex-row items-center">
                      <Text className="text-black-900 text-sm mohrroundedaltregular">
                        {orderData?.home_office?.address}
                      </Text>
                    </div>
                  ) : (
                    <div className="flex gap-1 flex-row items-center">
                      <Text className="text-black-900 text-sm mohrroundedaltregular">
                        {orderData?.buying_for_love?.country_code}{" "}
                        {orderData?.buying_for_love?.mobile_no} |{" "}
                        {orderData?.buying_for_love?.email}
                      </Text>
                    </div>
                  )}
                </div>
                <Button
                  className="w-auto mx-auto px-3 py-1.5 text-sm sm:mx-0"
                  size="sm"
                  variant="OutlineBlack"
                  hover={true}
                  hoverclass="bg-black-900"
                  onClick={(e) => {
                    dispatch(
                      updateOrderData({
                        ...orderData,
                        delivery_mode_show: "show",
                        pageStep: 2,
                      })
                    );
                  }}
                >
                  {t("change")}
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-4 items-center justify-start w-full mt-0.5 mb-2">
              <div className="flex flex-row md:gap-5 items-center justify-start w-full">
                <div className="flex flex-col gap-1 items-start justify-start flex-1">
                  <Text className="text-base text-black-900 font-mohrroundedaltmedium">
                    {t("deliveryMode")}
                  </Text>
                  <div className="flex gap-1 flex-row items-center">
                    <Text className="text-black-900 text-sm font-mohrroundedaltregular">
                      {t("forYourItemsChooseTheDeliveryMode")}
                    </Text>
                  </div>
                </div>
                {/* {orderData?.delivery_mode ? (
                  <Button
                    className="w-auto mx-auto px-3 py-1.5 text-sm sm:mx-0"
                    size="sm"
                    variant="OutlineBlack"
                    hover={true}
                    hoverclass="bg-black-900"
                    onClick={(e) => {
                      dispatch(
                        updateOrderData({
                          ...orderData,
                          delivery_mode_show: "hide",
                          pageStep:3,
                        })
                      );
                    }}
                  >
                    {t("Cancel")}
                  </Button>
                ) : null} */}
              </div>
            </div>
          </>
        )}

        {orderData?.pageStep == 2 && orderData?.delivery_mode_show != "hide" ? (
          <>
            <div className="flex flex-row md:flex-col flex-wrap w-full gap-x-3 md:gap-y-3 mt-[22px] mb-[18px]">
              <Tab
                className="common-pointer bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 justify-start p-4 w-[32%] md:w-full md:order-1"
                isSelected={activeTab === 0}
                onClick={() => handleTabClick(0)}
              >
                <div className="flex gap-2">
                  <Radio
                    name="deliveryMode"
                    checked={activeTab === 0}
                    onChange={() => handleTabClick(0)}
                  />
                  <Text className="h-max leading-5 my-auto text-black-900 text-sm w-full font-mohrroundedaltmedium pr-10 rtl:pr-0 rtl:pl-10">
                    {t("homeOfficeOtherDelivery")}
                  </Text>
                </div>
                <Text className="leading-4 text-gray-700 text-xs w-full font-mohrroundedaltregular">
                  {t("multipleAddressesInThisLocationOrAddANewOne")}
                </Text>
              </Tab>
              <Tab
                className="common-pointer relative bg-white-A700 border border-gray-300 border-solid flex flex-col gap-4 justify-start p-4 w-[32%] md:w-full md:order-3"
                isSelected={activeTab === 1}
                onClick={() => handleTabClick(1)}
              >
                <div className="absolute flex flex-col items-end justify-start -right-2 rtl:right-auto rtl:-left-2 top-[6%] w-[39%]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-6 items-end justify-start p-1 w-auto pl-4 rtl:rotate-180"
                    style={{
                      backgroundImage: "url('images/img_group425.svg')",
                    }}
                  >
                    <Text className="mr-[7px] text-white-A700 text-xs font-mohrroundedaltregular whitespace-nowrap rtl:rotate-180">
                      {t("bestOffer")}
                    </Text>
                  </div>
                  <Img
                    className="h-2 w-2 rtl:rotate-90"
                    src="/images/img_signal_pink_900.svg"
                    alt="signal"
                  />
                </div>
                <div className="flex gap-2">
                  <Radio
                    name="deliveryMode"
                    checked={activeTab === 1}
                    onChange={() => handleTabClick(1)}
                  />
                  <Text className="h-max leading-5 my-auto text-black-900 text-sm w-full font-mohrroundedaltmedium pr-10 rtl:pr-0 rtl:pl-10">
                    {t("pickUp")} <br className="md:hidden" />
                    {t("point")}
                  </Text>
                </div>
                <Text className="leading-4 text-gray-700 text-xs w-full font-mohrroundedaltregular">
                  {t(
                    "getDiscountOnYourOrderByPickingANearestDropZoneAsDeliveryLocation"
                  )}
                </Text>
              </Tab>

              {auth?.id==0?(<HtmlTooltip
                placement="top-start"
                arrow
                title={
                  <>
                    <div className="bg-white-A700 py-3 px-5 rounded w-full shadow-2xl -ml-5">
                      <Text className="leading-5 text-black-900 text-sm w-full font-mohrroundedaltmedium">
                        {t("loginNowNeed")}
                        <Text className="text-pink-800 inline ml-1 cursor-pointer"
                        onClick={(e)=>{
                           navigate('/login');
                        }}
                        >
                          {t("loginNow")}
                        </Text>
                      </Text>
                    </div>
                  </>
                }
              >
                <Tab
                  className="common-pointer bg-light_blue-50 flex flex-col gap-4 justify-start p-4 bg-no-repeat ltr:bg-right-top rtl:bg-left-top bg-auto w-[32%] border border-solid border-light_blue-50 md:w-full md:order-5"
                  isSelected={activeTab === 2}
                  onClick={(e) => {
                    if (auth?.id != 0) {
                       // handleTabClick(2);
                    }else{
                        
                    }
                  }}
                  style={{
                    backgroundImage: "url('images/img_group710.svg')",
                  }}
                >
                  <div className="flex gap-2">
                    <Radio
                      name="deliveryMode"
                      checked={activeTab === 2}
                      onClick={(e) => {
                        if (auth?.id != 0) {
                          //handleTabClick(2);
                        }
                      }}
                    />
                    <Text className="h-max leading-5 my-auto text-black-900 text-sm w-full font-mohrroundedaltmedium pr-10 rtl:pr-0 rtl:pl-10">
                      {t("buyingForALovedOne")}
                    </Text>
                  </div>
                  <Text className="leading-4 text-gray-700 text-xs w-full font-mohrroundedaltregular">
                    {t("sendAGiftAndPersonalizedMessageOrSong")}
                  </Text>
                </Tab>
              </HtmlTooltip>):<>
              <Tab
                  className="common-pointer bg-light_blue-50 flex flex-col gap-4 justify-start p-4 bg-no-repeat ltr:bg-right-top rtl:bg-left-top bg-auto w-[32%] border border-solid border-light_blue-50 md:w-full md:order-5"
                  isSelected={activeTab === 2}
                  onClick={(e) => {
                    if (auth?.id != 0) {
                        handleTabClick(2);
                    }else{
                        
                    }
                  }}
                  style={{
                    backgroundImage: "url('images/img_group710.svg')",
                  }}
                >
                  <div className="flex gap-2">
                    <Radio
                      name="deliveryMode"
                      checked={activeTab === 2}
                      onClick={(e) => {
                        if (auth?.id != 0) {
                          handleTabClick(2);
                        }
                      }}
                    />
                    <Text className="h-max leading-5 my-auto text-black-900 text-sm w-full font-mohrroundedaltmedium pr-10 rtl:pr-0 rtl:pl-10">
                      {t("buyingForALovedOne")}
                    </Text>
                  </div>
                  <Text className="leading-4 text-gray-700 text-xs w-full font-mohrroundedaltregular">
                    {t("sendAGiftAndPersonalizedMessageOrSong")}
                  </Text>
                </Tab>
              </>}

              {activeTab == 0 ? (
                <Panal
                  isSelected={activeTab === 0}
                  className="hidden md:order-2 w-full"
                >
                  <SavedAddressesList addressList={addressList} />
                </Panal>
              ) : null}

              <Panal
                isSelected={activeTab === 1}
                className="hidden md:order-4 w-full"
              >
                <PickUpPointsList zoneList={zoneList} />
              </Panal>

              <Panal
                isSelected={activeTab === 2}
                className="hidden md:order-6 w-full"
              >
                <SendAsAGift occasionOptions={occasionOptions} />
              </Panal>

              {AddAddressPopup ? (
                <AddEditAddress
                  setAddAddressPopup={setAddAddressPopup}
                  pageName={'cart'}
                ></AddEditAddress>
              ) : null}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default DeliveryMode;
