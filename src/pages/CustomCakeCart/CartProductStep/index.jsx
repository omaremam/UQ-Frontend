import { Button, Img } from "components";
import Account from "./Account";
import DeliveryMode from "./DeliveryMode";
import DeliveryDateTime from "./DeliveryDateTime";
import Payment from "./Payment";
const CartProductStep = () => {
  return (
    <div className="relative flex flex-col flex-1 w-full gap-y-8 ltr:md:pl-7 rtl:md:pr-7">
      <div className="relative bg-white-A700 py-[18px] px-6 xs:px-4">
        <Button className="absolute bg-red-100 flex h-9 items-center justify-center -left-7 p-1.5 top-6 w-9 z-[1] step-icon active">
          <Img className="h-6" src="/images/person.svg" alt="user" />
        </Button>
        <div className="absolute border-l-2 mt-2 border-gray-300 border-dashed w-px -left-3 rtl:-left-[auto] rtl:-right-3 z-[0] step-line success"></div>
        <Account />
      </div>
      <div className="relative bg-white-A700 py-[18px] px-6 xs:px-4">
        <Button className="absolute bg-white-A700 flex h-9 items-center justify-center -left-7 p-1.5 top-6 shadow-bs6 w-9 z-[1] step-icon active">
          <Img className="h-6" src="/images/location_on.svg" alt="location" />
        </Button>
        <div className="absolute border-l-2 mt-2 border-gray-300 border-dashed w-px -left-3 rtl:-left-[auto] rtl:-right-3 z-[0] step-line"></div>
        <DeliveryMode />
      </div>
      <div className="relative bg-white-A700 py-[18px] px-6 xs:px-4">
        <Button className="absolute bg-white-A700 flex h-9 items-center justify-center -left-7 p-1.5 top-6 shadow-bs6 w-9 z-[1] step-icon">
          <Img className="h-6" src="/images/event_note.svg" alt="calendar" />
        </Button>
        <div className="absolute border-l-2 mt-2 border-gray-300 border-dashed w-px -left-3 rtl:-left-[auto] rtl:-right-3 z-[0] step-line"></div>
        <DeliveryDateTime />
      </div>
      <div className="relative bg-white-A700 py-[18px] px-6 xs:px-4">
        <Button className="absolute bg-white-A700 flex h-9 items-center justify-center -left-7 p-1.5 top-6 shadow-bs6 w-9 z-[1] step-icon">
          <Img
            className="h-6"
            src="/images/account_balance_wallet.svg"
            alt="camera"
          />
        </Button>
        <Payment />
      </div>
    </div>
  );
};

export default CartProductStep;