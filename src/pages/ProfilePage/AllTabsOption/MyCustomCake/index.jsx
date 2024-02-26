import { Button, Img, List, Text } from "components";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import MyCustomCakesCustomcakecard from "./MyCustomCakesCustomcakecard";

const MyCustomCake = (prop) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-row font-mohrroundedaltmedium items-center justify-between w-full mb-7 xs:flex-wrap xs:gap-4">
        <Text
          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
          size="txtMohrRoundedAltSemiBold24"
        >
          {t("myCustomCakes")}
        </Text>
        <Button
          className="min-w-[125px] flex items-center justify-center ltr:ml-auto rtl:mr-auto"
          size="md"
          variant="OutlineBlack"
          hover={true}
          hoverclass="bg-black-900"
          onClick={() => navigate("/create-cake")}
          leftIcon={
            <Img
              className="h-5 mt-px btn-icon"
              src="/images/img_plus_black_900_20x20.svg"
              alt="plus"
            />
          }
        >
          <Text className="mx-2" as="span">
            {t("designCake")}
          </Text>
        </Button>
      </div>
      <List
        className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
        orientation="horizontal"
      >
        <MyCustomCakesCustomcakecard
          className=""
          userimage="images/img_rectangle17564_7.png"
          esttime="Est. Time :"
          esttime1="2hrs"
          estprice="Est. Price :"
          estprice1="SAR 300.00"
          buttontext="Place Order"
        />
        <MyCustomCakesCustomcakecard
          className=""
          userimage="images/img_rectangle17564_6.png"
          esttime="Est. Time :"
          esttime1="2hrs"
          estprice="Est. Price :"
          estprice1="SAR 300.00"
          buttontext="Place Order"
        />
        <MyCustomCakesCustomcakecard
          className=""
          userimage="images/img_rectangle17564_5.png"
          esttime="Est. Time :"
          esttime1="2hrs"
          estprice="Est. Price :"
          estprice1="SAR 300.00"
          buttontext="Place Order"
        />
      </List>
    </>
  );
};

export default MyCustomCake;