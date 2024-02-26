import React from "react";

import { Img, Text } from "components";

const CartAlertToaster = () => {
  return (
    <>
      <div className="absolute bg-black-900 bottom-1/4 flex flex-col font-mohrroundedaltregular inset-x-[0] items-center justify-end mx-auto py-2.5 px-6 rounded w-fit">
        <div className="flex sm:flex-col flex-row gap-4 items-center justify-start md:w-full">
          <Img
            className="h-7 w-7"
            src="images/item-unavailable.svg"
            alt=""
          />
          <div className="flex flex-col gap-1 items-start justify-start">
            <Text
              className="text-base text-white-A700 font-mohrroundedaltregular"
            >
              Item(s) unavailable
            </Text>
            <Text
              className="text-white-A700 text-xs whitespace-nowrap font-mohrroundedaltregular"
            >
              Try alternatives or remove unavailable item(s) to place an order
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export { CartAlertToaster };
