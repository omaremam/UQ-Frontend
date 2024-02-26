import { useEffect, useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { Button, Img, Text } from "components";
import { TopHeader } from "components/Header/TopHeader";
import { NavMenu } from "components/Header/NavMenu";
import {
  addDeleteGetLocalStorage,
  storageKeys,
} from "../../utils/global/localData";
/**custom modules*/
import globalRequest from "../../utils/global/globalRequest";
import { useDispatch, useSelector } from "react-redux";
import { changeLoader, currentLoader } from "../../redux/reducers/loader";
import { setSnackbar } from "../../redux/reducers/snackbar";
import { CATEGORIES } from "../../utils/helper/Enum";
import * as CUSTOM from "../../utils/helper/custom";
import * as API from "../../utils/helper/Enum";
import { updateAuth, getAuth } from "../../redux/reducers/loginData";
import { updateOrderData,  getOrderData } from "../../redux/reducers/orderData";
const Header = (props) => {
  let cpage = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loadingValue = useSelector(currentLoader);
  const auth = useSelector(getAuth);
  const guestId = CUSTOM.getDeviceID();
  const [cartCount, setCartCount] = useState(0);
  const [headerfixed, setheaderfixed] = useState("");
  const [hamburger, setHamburger] = useState(false);
  const handlehamburger = () => {
    setHamburger(!hamburger);
    if (!hamburger) {
      document.body.classList.add("overflow-hidden");
      document.getElementById("header-box").classList.add("relative");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.getElementById("header-box").classList.remove("relative");
      document.getElementById("header-box").classList.remove("relative");
    }
  };
  const hamburgerStyles = !hamburger ? "" : "is-active";
  const navStyles = !hamburger
    ? "sm:hidden"
    : "sm:flex absolute flex-col items-start bg-white z-[99999] right-0 top-full sm:w-screen bg-white-A700 overflow-auto header-height-xs p-4";
 
  /**
   * get cart count
   */
  const getCartCount = async () => {
    try {
      let authD=CUSTOM.loginData();
      let param = { user_id: authD?.id, guest_id: guestId };
      let response = await globalRequest(
        API?.CART?.GET_CART_COUNT,
        "get",
        {},
        { params: param },
        true
      );
      response = response?.data;
      if (response?.status == "SUCCESS") {
        //addDeleteGetLocalStorage(storageKeys?.CART_COUNTER,response?.data?.cartCount, "add","single");
        setCartCount(response?.data?.cartCount)
      }
    } catch (e) {}
    dispatch(changeLoader(false));
  };

  const getCartData = async () => {
    try {
      dispatch(changeLoader(true));
      let authD=CUSTOM.loginData();
      let params = {
        user_id: authD?.id,
        guest_id: guestId,
      };
      let response = await globalRequest(
        API?.CART?.GET_CART_DATA,
        "get",
        {},
        { params: params },
        true
      );
      response = response?.data;
      if (response?.status == "SUCCESS") {
        addDeleteGetLocalStorage(
          storageKeys?.CART_DATA,
          response?.data?.cartItems,
          "add",
          "single"
        );
      } else {
        addDeleteGetLocalStorage(storageKeys?.CART_DATA, {}, "delete");
      }
    } catch (e) {
      addDeleteGetLocalStorage(storageKeys?.CART_DATA, {}, "delete");
    }
    dispatch(changeLoader("loadCartData"));
    dispatch(changeLoader(false));
  };

  useEffect(() => {
    let a=["fetchCartCount","loggedin"]
    if (a.includes(loadingValue)){
          getCartCount();
          getCartData();
    }
  }, [loadingValue]);

  useEffect(() => {
      getCartData();
      getCartCount();
  }, []);

  useEffect(()=>{
    if (loadingValue == "loadCartData") {
       setTimeout(() => {
        dispatch(changeLoader(false));
       }, 1000);
    }
  },[loadingValue])

  useEffect(()=>{
    if(cpage?.pathname){
      if(cpage?.pathname!='/cart'){
        dispatch(updateOrderData({orderData:{}}))
      }
    }
  },[cpage])


  return (
    <>
       <TopHeader cpage={cpage?.pathname}/> 
      <header
        id="header-box"
        className={`${headerfixed} sticky top-0 z-30 bg-white-A700 flex flex-row font-mohrroundedaltmedium  items-center justify-center shadow-bs w-full`}
      >
        <div className="relative flex flex-row justify-between w-full md:gap-5 max-w-[1110px] mx-auto md:px-4">
          <div
            className="cursor-pointer flex flex-row items-center py-1.5"
            onClick={() => navigate("/")}
          >
            <Img
              className="h-[62px] w-[114px] w-[auto]"
              src="/images/logo.svg"
              alt="rabbitholelogo"
            />
          </div>
          {cpage?.pathname!='/cart'?(<><NavMenu setHamburger={setHamburger} navStyles={`${navStyles}`} />
          <div className="flex flex-row items-center gap-7 md:gap-4 sm:gap-4">
            <Button
              className="cursor-pointer font-mohrroundedaltmedium py-1 px-2 sm:hidden border border-pink-800 rounded text-center text-pink-800 text-sm leading-6"
              hover={true}
              hoverclass="bg-pink-800"
              onClick={() => navigate("/designmyowncake")}
            >
              Design My Cake
            </Button>
            <div className="flex flex-col h-6 items-center justify-start w-6">
              <Img
                className="h-6 w-6 cursor-pointer"
                src="/images/img_search.svg"
                alt="search"
                onClick={() => navigate("/search")}
              />
            </div>
            <div className="h-[30px] relative w-[30px] cursor-pointer">
              <Img
                className="absolute bottom-[0] h-6 left-[0] w-6 cursor-pointer"
                src="/images/img_mdicart.svg"
                alt="mdicart"
                onClick={() => navigate("/cart")}
              />
              {cartCount > 0 ? (
                <Text
                  className="absolute bg-pink-800 flex h-4 items-center justify-center right-[0] rtl:right-[auto] rtl:left-[0] rounded-[50%] text-[11px] text-center text-white-A700 top-[0] tracking-[0.50px] w-4"
                  size="txtRobotoMedium11"
                >
                  {cartCount}
                </Text>
              ) : null}
            </div>
            <button
              className={`${hamburgerStyles} hamburger hamburger--slider hidden sm:flex`}
              type="button"
              onClick={handlehamburger}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
          </>):null}
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
