import { Text, Img, List } from "components";
import { useTranslation } from "react-i18next";
import EmptyListOrder from "../EmptyListOrder";
import { useNavigate } from "react-router-dom";

const MyOrdersOrderlist = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <Text className="font-mohrroundedaltbold leading-[40px] md:leading-[32px] text-2xl md:text-3xl text-black-900 mb-7">
        {t("myOrders")}
      </Text>
      <List
        className="flex flex-col font-mohrroundedaltregular gap-5 items-center w-full mb-5"
        orientation="vertical"
      >
        <div
          className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-[19px] rounded w-full"
          onClick={() => navigate("/my-order-detail")}
        >
          <div className="flex flex-col gap-2 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-2 items-start justify-between w-full">
              <Text className="font-mohrroundedaltmedium leading-[24.00px] text-base text-black-900">
                2 x {t("fruitVanillaCake")}, 1 x {t("chocolateTruffle")}, 1 x{" "}
                {t("butterscotchCake")}
              </Text>
              <div className="flex md:flex-1 flex-row gap-2 items-end justify-end w-[50%] md:w-full">
                <Text className="font-mohrroundedaltregular text-black-900 text-right text-sm">
                  <span className="text-black-900 font-normal">
                    {t("placedOn")}
                  </span>
                  <span className="text-black-900 font-normal">
                    16/06/2023 - 11:15 {t("am")}
                  </span>
                </Text>
                <Img
                  className="h-6 w-6"
                  alt="check_circle"
                  src={"images/img_check_circle.svg"}
                />
              </div>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <Text className="font-mohrroundedaltregular text-base text-black-900">
                {t("sar")} 398.25
              </Text>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Text className="font-mohrroundedaltregular text-gray-700 text-right text-xs w-auto">
                  {t("delivery")}
                </Text>
                <div className="bg-gray-700 min-w-[4px] h-1 rounded-[50%] mt-1"></div>
                <Text className="font-mohrroundedaltregular text-gray-700 text-right text-xs w-auto">
                  #56465465445
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-[19px] rounded w-full"
          onClick={() => navigate("/my-order-detail")}
        >
          <div className="flex flex-col gap-2 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-2 items-start justify-between w-full">
              <Text className="font-mohrroundedaltmedium leading-[24.00px] text-base text-black-900">
                2 x {t("fruitVanillaCake")}, 1 x {t("chocolateTruffle")}, 1 x{" "}
                {t("butterscotchCake")}
              </Text>
              <div className="flex md:flex-1 flex-row gap-2 items-end justify-end w-[50%] md:w-full">
                <Text className="font-mohrroundedaltregular text-black-900 text-right text-sm">
                  <span className="text-black-900 font-normal">
                    {t("confirmOn")}
                  </span>
                  <span className="text-black-900 font-normal">
                    16/06/2023 - 11:15 {t("am")}
                  </span>
                </Text>
                <Img
                  className="h-6 w-6"
                  alt="check_circle"
                  src={"images/img_check_circle.svg"}
                />
              </div>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <Text className="font-mohrroundedaltregular text-base text-black-900">
                {t("sar")} 398.25
              </Text>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Text className="font-mohrroundedaltregular text-gray-700 text-right text-xs w-auto">
                  {t("delivery")}
                </Text>
                <div className="bg-gray-700 min-w-[4px] h-1 rounded-[50%] mt-1"></div>
                <Text className="font-mohrroundedaltregular text-gray-700 text-right text-xs w-auto">
                  #56465465445
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-[19px] rounded w-full"
          onClick={() => navigate("/my-order-detail")}
        >
          <div className="flex flex-col gap-2 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-2 items-start justify-between w-full">
              <Text className="font-mohrroundedaltmedium leading-[24.00px] text-base text-black-900">
                2 x {t("fruitVanillaCake")}, 1 x {t("chocolateTruffle")}, 1 x{" "}
                {t("butterscotchCake")}
              </Text>
              <div className="flex md:flex-1 flex-row gap-2 items-end justify-end w-[50%] md:w-full">
                <Text className="font-mohrroundedaltregular text-black-900 text-right text-sm">
                  <span className="text-black-900 font-normal">
                    {t("readyToPickupOn")}{" "}
                  </span>
                  <span className="text-black-900 font-normal">
                    07/07/2023 - 11:15 {t("am")}
                  </span>
                </Text>
                <Img
                  className="h-6 w-6"
                  alt="check_circle"
                  src={"images/img_check_circle.svg"}
                />
              </div>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <Text className="font-mohrroundedaltregular text-base text-black-900">
                {t("sar")} 398.25
              </Text>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Text className="font-mohrroundedaltregular text-gray-700 text-right text-xs w-auto">
                  {t("delivery")}
                </Text>
                <div className="bg-gray-700 min-w-[4px] h-1 rounded-[50%] mt-1"></div>
                <Text className="font-mohrroundedaltregular text-gray-700 text-right text-xs w-auto">
                  #56465465445
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-[19px] rounded w-full"
          onClick={() => navigate("/my-order-detail")}
        >
          <div className="flex flex-col gap-2 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-2 items-start justify-between w-full">
              <Text className="font-mohrroundedaltmedium leading-[24.00px] text-base text-black-900">
                2 x {t("fruitVanillaCake")}, 1 x {t("chocolateTruffle")}, 1 x{" "}
                {t("butterscotchCake")}
              </Text>
              <div className="flex md:flex-1 flex-row gap-2 items-end justify-end w-[50%] md:w-full">
                <Text className="font-mohrroundedaltregular text-black-900 text-right text-sm">
                  <span className="text-black-900 font-normal">
                    {t("processingOn")}{" "}
                  </span>
                  <span className="text-black-900 font-normal">
                    16/06/2023 - 11:15 {t("am")}
                  </span>
                </Text>
                <Img
                  className="h-6 w-6"
                  alt="check_circle"
                  src={"images/img_check_circle.svg"}
                />
              </div>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <Text className="font-mohrroundedaltregular text-base text-black-900">
                {t("sar")} 398.25
              </Text>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Text className="font-mohrroundedaltregular text-gray-700 text-right text-xs w-auto">
                  {t("delivery")}
                </Text>
                <div className="bg-gray-700 min-w-[4px] h-1 rounded-[50%] mt-1"></div>
                <Text className="font-mohrroundedaltregular text-gray-700 text-right text-xs w-auto">
                  #56465465445
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-[19px] rounded w-full"
          onClick={() => navigate("/my-order-detail")}
        >
          <div className="flex flex-col gap-2 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-2 items-start justify-between w-full">
              <Text className="font-mohrroundedaltmedium leading-[24.00px] text-base text-black-900">
                2 x {t("fruitVanillaCake")}, 1 x {t("Chocolate truffle")}, 1 x{" "}
                {t("butterscotchCake")}
              </Text>
              <div className="flex md:flex-1 flex-row gap-2 items-end justify-end w-[50%] md:w-full">
                <Text className="font-mohrroundedaltregular text-black-900 text-right text-sm">
                  <span className="text-black-900 font-normal">
                    {t("outForDeliveryOn")}{" "}
                  </span>
                  <span className="text-black-900 font-normal">
                    16/06/2023 - 11:15 {t("am")}
                  </span>
                </Text>
                <Img
                  className="h-6 w-6"
                  alt="check_circle"
                  src={"images/img_check_circle.svg"}
                />
              </div>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <Text className="font-mohrroundedaltregular text-base text-black-900">
                {t("sar")} 398.25
              </Text>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Text className="font-mohrroundedaltregular text-gray-700 text-right text-xs w-auto">
                  {t("delivery")}
                </Text>
                <div className="bg-gray-700 min-w-[4px] h-1 rounded-[50%] mt-1"></div>
                <Text className="font-mohrroundedaltregular text-gray-700 text-right text-xs w-auto">
                  #56465465445
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-[19px] rounded w-full"
          onClick={() => navigate("/my-order-detail")}
        >
          <div className="flex flex-col gap-2 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-2 items-start justify-between w-full">
              <Text className="font-mohrroundedaltmedium leading-[24.00px] text-base text-black-900">
                2 x {t("fruitVanillaCake")}, 1 x {t("chocolateTruffle")}, 1 x{" "}
                {t("butterscotchCake")}
              </Text>
              <div className="flex md:flex-1 flex-row gap-2 items-end justify-end w-[50%] md:w-full">
                <Text className="font-mohrroundedaltregular text-black-900 text-right text-sm">
                  <span className="text-black-900 font-normal">
                    {t("pendingOn")}{" "}
                  </span>
                  <span className="text-black-900 font-normal">
                    21/06/2023 - 12:30 {t("pm")}
                  </span>
                </Text>
                <Img
                  className="h-6 w-6"
                  alt="warning"
                  src={"images/img_warning.svg"}
                />
              </div>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <Text className="font-mohrroundedaltregular text-base text-black-900">
                {t("sar")} 398.25
              </Text>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Text className="font-mohrroundedaltregular text-gray-700 text-right text-xs w-auto">
                  {t("delivery")}
                </Text>
                <div className="bg-gray-700 min-w-[4px] h-1 rounded-[50%] mt-1"></div>
                <Text className="font-mohrroundedaltregular text-gray-700 text-right text-xs w-auto">
                  #56465465445
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-[19px] rounded w-full"
          onClick={() => navigate("/my-order-detail")}
        >
          <div className="flex flex-col gap-2 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-2 items-start justify-between w-full">
              <Text className="font-mohrroundedaltmedium leading-[24.00px] text-base text-black-900">
                2 x {t("fruitVanillaCake")}, 1 x {t("chocolateTruffle")}, 1 x{" "}
                {t("butterscotchCake")}
              </Text>
              <div className="flex md:flex-1 flex-row gap-2 items-end justify-end w-[50%] md:w-full">
                <Text className="font-mohrroundedaltregular text-black-900 text-right text-sm">
                  <span className="text-black-900 font-normal">
                    {t("cancelledOn")}{" "}
                  </span>
                  <span className="text-black-900 font-normal">
                    16/06/2023 - 11:20 {t("am")}
                  </span>
                </Text>
                <Img
                  className="h-6 w-6"
                  alt="info"
                  src={"images/img_info-red.svg"}
                />
              </div>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <Text className="font-mohrroundedaltregular text-base text-black-900">
                {t("sar")} 398.25
              </Text>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Text className="font-mohrroundedaltregular text-gray-700 text-right text-xs w-auto">
                  {t("delivery")}
                </Text>
                <div className="bg-gray-700 min-w-[4px] h-1 rounded-[50%] mt-1"></div>
                <Text className="font-mohrroundedaltregular text-gray-700 text-right text-xs w-auto">
                  #56465465445
                </Text>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-[19px] rounded w-full"
          onClick={() => navigate("/my-order-detail")}
        >
          <div className="flex flex-col gap-2 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-2 items-start justify-between w-full">
              <Text className="font-mohrroundedaltmedium leading-[24.00px] text-base text-black-900">
                2 x {t("fruitVanillaCake")}, 1 x {t("chocolateTruffle")}, 1 x{" "}
                {t("butterscotchCake")}
              </Text>
              <div className="flex md:flex-1 flex-row gap-2 items-end justify-end w-[50%] md:w-full">
                <Text className="font-mohrroundedaltregular text-black-900 text-right text-sm">
                  <span className="text-black-900 font-normal">
                    {t("unableToProcessOn")}{" "}
                  </span>
                  <span className="text-black-900 font-normal">
                    16/06/2023 - 11:20 {t("am")}
                  </span>
                </Text>
                <Img
                  className="h-6 w-6"
                  alt="info"
                  src={"images/img_info-red.svg"}
                />
              </div>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <Text className="font-mohrroundedaltregular text-base text-black-900">
                {t("sar")} 398.25
              </Text>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Text className="font-mohrroundedaltregular text-gray-700 text-right text-xs w-auto">
                  {t("delivery")}
                </Text>
                <div className="bg-gray-700 min-w-[4px] h-1 rounded-[50%] mt-1"></div>
                <Text className="font-mohrroundedaltregular text-gray-700 text-right text-xs w-auto">
                  #56465465445
                </Text>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-col items-center justify-start p-[19px] rounded w-full"
          onClick={() => navigate("/my-order-detail")}
        >
          <div className="flex flex-col gap-2 items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-2 items-start justify-between w-full">
              <Text className="font-mohrroundedaltmedium leading-[24.00px] text-base text-black-900">
                2 x {t("fruitVanillaCake")}, 1 x {t("chocolateTruffle")}, 1 x{" "}
                {t("butterscotchCake")}
              </Text>
              <div className="flex md:flex-1 flex-row gap-2 items-end justify-end w-[50%] md:w-full">
                <Text className="font-mohrroundedaltregular text-black-900 text-right text-sm">
                  <span className="text-black-900 font-normal">
                    {t("noShowOn")}{" "}
                  </span>
                  <span className="text-black-900 font-normal">
                    21/06/2023 - 12:30 {t("pm")}
                  </span>
                </Text>
                <Img
                  className="h-6 w-6"
                  alt="close"
                  src={"images/img_close-red.svg"}
                />
              </div>
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
              <Text className="font-mohrroundedaltregular text-base text-black-900">
                {t("sar")} 398.25
              </Text>
              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                <Text className="font-mohrroundedaltregular text-gray-700 text-right text-xs w-auto">
                  {t("delivery")}
                </Text>
                <div className="bg-gray-700 min-w-[4px] h-1 rounded-[50%] mt-1"></div>
                <Text className="font-mohrroundedaltregular text-gray-700 text-right text-xs w-auto">
                  #56465465445
                </Text>
              </div>
            </div>
          </div>
        </div>
      </List>
      <Img
        src="/images/Loaderanim.png"
        className="w-12 h-12 animate-spin m-auto"
        alt="loading"
      />
      <EmptyListOrder />
    </>
  );
};

export default MyOrdersOrderlist;