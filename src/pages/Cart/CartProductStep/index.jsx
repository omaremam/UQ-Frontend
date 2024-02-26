import { Img } from "components";
import Account from "./Account";
import DeliveryMode from "./DeliveryMode";
import DeliveryDateTime from "./DeliveryDateTime";
import Payment from "./Payment";
import { useEffect, useState } from "react";
import {
  updateOrderData,
  getOrderData,
} from "../../../redux/reducers/orderData";
import { getAuth } from "../../../redux/reducers/loginData";
import { useDispatch, useSelector } from "react-redux";
const CartProductStep = () => {
  const dispatch = useDispatch();
  const auth = useSelector(getAuth);
  const orderData = useSelector(getOrderData);
  const [loadPage, setLoadPage] = useState(true);

  useEffect(() => {
    setLoadPage(false)
    setTimeout(()=>{
      setLoadPage(true);
    },150)
  }, [auth?.id]);

  return (
    <div className="relative flex flex-col flex-1 w-full gap-y-8 ltr:md:pl-7 rtl:md:pr-7 sm:order-2">
      <div className="relative bg-white-A700 py-[18px] px-6 xs:px-4">
        <div className="absolute bg-red-100 flex h-9 items-center justify-center -left-7 rtl:-left-[auto] rtl:-right-7 p-1.5 top-6 w-9 z-[1] step-icon active">
          <Img className="h-6" src="/images/person.svg" alt="user" />
        </div>
        <div className="absolute border-l-2 mt-2 border-gray-300 border-dashed w-px -left-3 rtl:-left-[auto] rtl:-right-3 z-[0] step-line success"></div>
        <Account />
      </div>
      <div
        className={`${
          orderData?.pageStep < 2 ? "opacity-down" : ""
        } relative bg-white-A700 py-[18px] px-6 xs:px-4`}
      >
        <div className="absolute bg-white-A700 flex h-9 items-center justify-center -left-7 rtl:-left-[auto] rtl:-right-7 p-1.5 top-6 shadow-bs6 w-9 z-[1] step-icon active">
          <Img className="h-6" src="/images/location_on.svg" alt="location" />
        </div>
        <div
          className={`absolute border-l-2 mt-2 border-gray-300 border-dashed w-px -left-3 rtl:-left-[auto] rtl:-right-3 z-[0] step-line`}
        ></div>
        {loadPage?(<DeliveryMode />):null}
      </div>

      {orderData?.delivery_mode != "buying_for_love" ? (
        <div
          className={`${
            orderData?.pageStep < 3 ? "opacity-down" : ""
          } relative bg-white-A700 py-[18px] px-6 xs:px-4`}
        >
          <div className="absolute bg-white-A700 flex h-9 items-center justify-center -left-7 rtl:-left-[auto] rtl:-right-7 p-1.5 top-6 shadow-bs6 w-9 z-[1] step-icon">
            <Img className="h-6" src="/images/event_note.svg" alt="calendar" />
          </div>
          <div
            className={`absolute border-l-2 mt-2 border-gray-300 border-dashed w-px -left-3 rtl:-left-[auto] rtl:-right-3 z-[0] step-line ${
              orderData?.pageStep < 4 ? "opacity-down" : ""
            }`}
          ></div>
            {loadPage?(<DeliveryDateTime />):null}
        </div>
      ) : null}

      <div
        className={`${
          orderData?.pageStep < 4 ? "opacity-down" : ""
        } relative bg-white-A700 pt-[18px]`}
      >
        <div className="absolute bg-white-A700 flex h-9 items-center justify-center -left-7 rtl:-left-[auto] rtl:-right-7 p-1.5 top-6 shadow-bs6 w-9 z-[1] step-icon">
          <Img
            className="h-6"
            src="/images/account_balance_wallet.svg"
            alt="camera"
          />
        </div>
        {loadPage?(<Payment />):null}
      </div>
    </div>
  );
};

export default CartProductStep;
