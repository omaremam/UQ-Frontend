import { useTranslation } from "react-i18next";
import { Button, Img, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import { useNavigate,useParams } from "react-router-dom";
import Confetti from 'react-confetti'

const CartSuccess = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  let { slug } = useParams();

  return (
    <>
      <div className="bg-gray-50_02 flex flex-col font-mohrroundedaltregular items-center justify-start mx-auto w-full h-full">
        <Header />
        <div className="flex flex-col items-center justify-center w-full md:px-4 py-7 my-auto h-full relative">
          <Confetti className="w-full h-full absolute top-0 left-0 z-0" />
          <Img
            className="relative h-20 z-[2] m-auto"
            src="/images/cart-success.svg"
            alt="group36102"
          />
          <Text className="text-left mt-8 text-2xl md:text-[22px] text-black-900 sm:text-xl font-mohrroundedaltsemibold font-normal rtl:text-right">
            {t("orderPlaced")}
          </Text>
          <Text className="mt-5 text-base text-gray-700 text-center font-mohrroundedaltregular w-full max-w-[490px]">
            {t("thankYouYourOrderOrderID")}{" "}
            <span className="text-black-900">{slug}</span>
            {t(
              "hasBeenPlacedForFurtherInformationVisitYourOrdersOrYouCanContinueShopping"
            )}
          </Text>
          <Button
            className="common-pointer hover:border hover:border-black-900 bg-black-900 cursor-pointer font-mohrroundedaltmedium h-12 mt-11 py-3.5 rounded text-base text-center text-white-A700 w-[180px]"
            hover={true}
            hoverclass="bg-gray-50_02"
            onClick={(e)=>{
              navigate('/');
            }}
          >
            {t("goToHome")}
          </Button>
          <Text className="common-pointer text-center text-pink-800 text-sm w-auto font-mohrroundedaltmedium mt-6"
           onClick={(e)=>{
            navigate('/my-order');
           }}
          >
            {t("myOrders")}
          </Text>
        </div>
        <Footer className="absolute bottom-[0] flex font-mohrroundedaltregular inset-x-[0] items-center justify-center mx-auto w-full" />
      </div>
    </>
  );
};

export default CartSuccess;