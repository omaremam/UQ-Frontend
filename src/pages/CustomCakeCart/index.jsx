import Footer from "components/Footer";
import Header from "components/Header";
import CartProductDetail from "./CartProductDetail";
import CartProductStep from "./CartProductStep";
const CustomCakeCart = () => {
  return (
    <>
      <div className="bg-gray-50_02 flex flex-col font-mohrroundedaltregular items-center justify-start mx-auto w-full">
        <Header />
        <div className="pt-7 pb-36 flex flex-row gap-7 sm:flex-col max-w-[1110px] w-full mx-auto md:px-4 items-start">
          <CartProductStep />
          <CartProductDetail />
        </div>
        <Footer className="absolute bottom-[0] flex font-mohrroundedaltregular inset-x-[0] items-center justify-center mx-auto w-full" />
      </div>
    </>
  );
};

export default CustomCakeCart;