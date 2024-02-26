import React, { useState, useEffect } from "react";
import { Img } from "components";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Footer from "components/Footer";
import Header from "components/Header";
import { useTranslation } from "react-i18next";
import ProfileEdit from "../ProfileEdit";
import MyOccasions from "../AllTabsOption/MyOccasions";
import MyAddresses from "../AllTabsOption/MyAddresses";
import PaymentMathod from "../AllTabsOption/PaymentMathod";
import Preferredlanguage from "../AllTabsOption/Preferredlanguage";
import Wallet from "../AllTabsOption/Wallet";
import MyCustomCake from "../AllTabsOption/MyCustomCake";
import MyOrdersOrderlist from "../AllTabsOption/MyOrderList";
import { useMediaQuery } from "@mui/material";
import {
  addDeleteGetLocalStorage,
  storageKeys,
} from "../../../utils/global/localData";
// import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
function TabPanel(props) {
  let { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
const MyOrder = () => {
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    let tabName = addDeleteGetLocalStorage(storageKeys.ORDER_TAB, {}, "get");
    let tabId = addDeleteGetLocalStorage(storageKeys.ORDER_TAB_ID, {}, "get");
    if (tabName && tabId) {
      if (tabName == "occasion") {
        setValue(1);
      }
    }
  }, []);

  const [bgColor, setBgColor] = useState("bg-gray-50_02");
  useEffect(() => {
    const handleScroll = () => {
      const div = document.getElementById("order-box");
      if (div) {
        const rect = div.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (window.scrollY === 0) {
          // At the top of the page
          setBgColor("bg-gray-50_02");
        } else if (isVisible) {
          // Scrolling and div is visible
          setBgColor("bg-transparent");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isMobile = useMediaQuery("(max-width: 990px)");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mohrroundedaltregular items-center justify-start mx-auto w-full">
        <Header />
        <div
          className={`font-mohrroundedaltbold relative w-full min-h-[100vh] ${bgColor}`}
        >
          <ProfileEdit />
          <div
            id="order-box"
            className="flex flex-col items-center justify-center mx-auto w-full max-w-[1246px] py-[40px] md:py-5 px-[68px] md:px-5 bg-white-A700"
          >
            <div className="w-full bg-gray-100_01 sm:bg-white-A700 relative flex flex-row sm:flex-col">
              <Tabs
                orientation={isMobile ? "horizontal" : "vertical"}
                variant="scrollable"
                value={value}
                onChange={handleChange}
                scrollButtons={isMobile ? "auto" : ""}
                allowScrollButtonsMobile
                aria-label={
                  isMobile
                    ? "scrollable force tabs example"
                    : "Vertical auto  tabs example"
                }
                className="my-order-tabs w-full max-w-[255px] sm:max-w-full sm:bg-gray-100_01 sticky z-[20] xs:z-0 xs:relative xs:top-0 top-[70px] h-fit pl-5 py-5 sm:px-0 rtl-tabs"
              >
                <Tab
                  className="sm:w-auto sm:max-w-[unset]"
                  label={
                    <>
                      <Img
                        src="/images/img_cart_black_900.svg"
                        className="w-7 h-7"
                      />
                      <span className="block px-[10px] text-left sm:whitespace-nowrap rtl:text-right">
                        {t("myOrders")}
                      </span>
                    </>
                  }
                  {...a11yProps(0)}
                />
                <Tab
                  className="sm:w-auto sm:max-w-[unset]"
                  label={
                    <>
                      <Img
                        src="/images/img_volume_black_900.svg"
                        className="w-7 h-7"
                      />
                      <span className="block px-[10px] text-left sm:whitespace-nowrap rtl:text-right">
                        {t("myOccasions")}
                      </span>
                    </>
                  }
                  {...a11yProps(1)}
                />
                <Tab
                  className="sm:w-auto sm:max-w-[unset]"
                  label={
                    <>
                      <Img src="/images/img_location.svg" className="w-7 h-7" />
                      <span className="block px-[10px] text-left sm:whitespace-nowrap rtl:text-right">
                        {t("myAddresses")}
                      </span>
                    </>
                  }
                  {...a11yProps(2)}
                />
                <Tab
                  className="sm:w-auto sm:max-w-[unset]"
                  label={
                    <>
                      <Img src="/images/img_wallet.svg" className="w-7 h-7" />
                      <span className="block px-[10px] text-left sm:whitespace-nowrap rtl:text-right">
                        {t("wallet")}
                      </span>
                    </>
                  }
                  {...a11yProps(3)}
                />
                <Tab
                  className="sm:w-auto sm:max-w-[unset]"
                  label={
                    <>
                      <Img
                        src="/images/img_payment-menthod.svg"
                        className="w-6 h-6 mx-[2px]"
                      />
                      <span className="block px-[10px] text-left sm:whitespace-nowrap rtl:text-right">
                        {t("managePaymentMenthods")}
                      </span>
                    </>
                  }
                  {...a11yProps(4)}
                />
                <Tab
                  className="sm:w-auto sm:max-w-[unset]"
                  label={
                    <>
                      <Img
                        src="/images/img_computer_black_900_28x28.svg"
                        className="w-7 h-7"
                      />
                      <span className="block px-[10px] text-left sm:whitespace-nowrap rtl:text-right">
                        {t("myCustomCakes")}
                      </span>
                    </>
                  }
                  {...a11yProps(5)}
                />
                <Tab
                  className="sm:w-auto sm:max-w-[unset]"
                  label={
                    <>
                      <Img
                        src="/images/img_bluetooth.svg"
                        className="w-7 h-7"
                      />
                      <span className="block px-[10px] text-left sm:whitespace-nowrap rtl:text-right">
                        {t("preferredLanguage")}
                      </span>
                    </>
                  }
                  {...a11yProps(6)}
                />
              </Tabs>
              <div className="w-full bg-white-A700  p-7 p-7 pr-0 rtl:pr-7 rtl:sm:pr-0 rtl:pl-0 sm:pl-0 z-1 items-start justify-between">
                <TabPanel value={value} index={0}>
                  <MyOrdersOrderlist />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <MyOccasions />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <MyAddresses />
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <Wallet />
                </TabPanel>
                <TabPanel value={value} index={4}>
                  <PaymentMathod />
                </TabPanel>
                <TabPanel value={value} index={5}>
                  <MyCustomCake />
                </TabPanel>
                <TabPanel value={value} index={6}>
                  <Preferredlanguage />
                </TabPanel>
              </div>
            </div>
          </div>
          <Footer className="absolute bottom-[0] flex font-mohrroundedaltregular inset-x-[0] items-center justify-center mx-auto w-full" />
        </div>
      </div>
    </>
  );
};

export default MyOrder;
