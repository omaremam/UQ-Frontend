import { Img, Input, Text, Button } from "components";
// Importing localization strings
import { useTranslation } from "react-i18next";
import * as CUSTOM from "../../utils/helper/custom";
import * as API from "../../utils/helper/Enum";
import {
  updateMyAddress,
  getAddressData,
} from "../../redux/reducers/myAddress";
import { changeLoader } from "../../redux/reducers/loader";
import { setSnackbar } from "../../redux/reducers/snackbar";
import { globalRequest } from "../../utils/global/globalRequest";
import { useDispatch, useSelector } from "react-redux";
import EmptyAllTab from "pages/ProfilePage/AllTabsOption/EmptyAllTab";
const ChooseLocation = ({
  closepopup,
  headerAddressList,
  setAddAddressPopup,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const closepopupout = () => {
    closepopup(false);
    document.body.classList.remove("overflow-hidden");
    document.getElementById("header-box").classList.remove("relative");
  };
  const addAddressPopup = () => {
    closepopup(false);
    dispatch(updateMyAddress(CUSTOM.defaultAddressParams()));
    setAddAddressPopup(true);
  };

  const setDefaultAddress = async (id) => {
    try {
      dispatch(changeLoader(true));
      let response = await globalRequest(API.USERS.SET_DEFAULT_ADDRESS,"put",
        {id:id},
        {},
        true
      );
      response = response?.data; 
      if (response?.status == "SUCCESS") {
        closepopupout();
      }
    } catch (e) {}
    dispatch(changeLoader(false));
  };

  return (
    <>
      <div className="justify-center items-center xs:items-start xs:m-0 xs:h-full flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-auto w-fit h-fit xs:px-4">
        <div className="relative w-full my-6 mx-auto max-w-[760px] xs:max-w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white-A700 outline-none focus:outline-none overflow-hidden">
            {/*header*/}
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-row items-start justify-end w-auto pt-4 pr-4 rtl:pr-0 rtl:pl-4 absolute right-0 rtl:right-auto rtl:left-0">
                  <Img
                    src="/images/img_close_gray_700.svg"
                    className="common-pointer h-3 w-3"
                    alt="close"
                    onClick={() => closepopupout()}
                  />
                </div>
              </div>
            </div>
            {/*body*/}
            <div className="bg-white-A700 flex flex-col items-start justify-start rounded-lg w-full">
              <div className="px-[30px] py-[28px]">
                <Text className="text-2xl md:text-[22px] text-black-900 mb-2 sm:text-xl font-mohrroundedaltsemibold">
                  {t("chooseLocation")}
                </Text>
                <Text
                  className="leading-[24.00px] text-gray-700 text-base w-full text-left mb-8"
                  size="txtMohrRoundedAltRegular14"
                >
                  {t("chooseLocationFromTheListBelowOrAddANewOne")}
                </Text>
                <div className="flex flex-col gap-6 max-h-48vh">
                  {headerAddressList?.map((item, index) => {
                    return (
                      <>
                        {" "}
                        <div
                          className="flex flex-1 flex-row items-start justify-start w-full gap-2 cursor-pointer"
                          key={`address-header-list-${index}`}
                          onClick={(e)=>{setDefaultAddress(item?.id)}}
                        >
                          <Img
                            className={`h-6 w-6 mt-0.5`}
                            src="/images/location_on_black.svg"
                            alt="location"
                          />
                          <div className="flex flex-1 flex-col items-start justify-between w-full gap-1">
                            <div className="flex xs:flex-col xs:items-start flex-row items-center justify-start w-full gap-2">
                              <Text
                                className={`text-base  font-mohrroundedaltregular text-black-900`}
                              >
                                {CUSTOM.buildFullAddress(item)}
                              </Text>
                            </div>
                          </div>
                        </div>
                        {index != headerAddressList.length - 1 ? (
                          <div className="w-full h-px bg-gray-300"></div>
                        ) : null}
                      </>
                    );
                  })}
                  {headerAddressList.length < 1 ? (
                    <>
                      <div className="header-address-box">
                        <EmptyAllTab
                          emptyImg="images/empty-location-icon.svg"
                          emptyParagraph="Add addresses here to use it in future while placing an order"
                          emptyBtn="New Address"
                          addAddressTrigger={"s"}
                        />
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
              <div className="w-full h-px bg-gray-300"></div>
              <div className="px-[30px] py-5 w-full">
                <Button
                  className="max-w-[160px] w-full flex items-center justify-center"
                  size="md"
                  variant="OutlineBlack"
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
                  <Text
                    className="mx-2"
                    as="span"
                    onClick={(e) => {
                      addAddressPopup();
                    }}
                  >
                    {t("addNew")}
                  </Text>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="opacity-75 fixed inset-0 z-40 bg-black-900"
        onClick={() => closepopupout()}
      ></div>
    </>
  );
};
export { ChooseLocation };
