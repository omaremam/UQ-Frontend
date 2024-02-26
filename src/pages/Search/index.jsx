import { Img, List } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import ProductCartCardBox from "components/ProductCartCardBox";
// Importing localization strings
import { useTranslation } from "react-i18next";
import SearchEmptyPage from "./SearchEmpty";
const SearchPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col flex-row font-mohrroundedaltmedium md:gap-5 items-center justify-center md:px-5 shadow-bs w-full" />
        <div className="md:px-4 w-full">
          <div className="bg-gray-50_02 flex items-center px-[20px] py-[12px] mt-10 w-full max-w-[920px] mx-auto rounded">
            <input
              type="text"
              placeholder={t("searchForProductsCategoryAndMore")}
              className="border-none bg-transparent p-0 w-full placeholder-gray-700"
            />
            <Img
              className="cursor-pointer h-6 ml-[16px] my-auto"
              src="/images/img_search.svg"
              alt="search"
            />
          </div>
          <SearchEmptyPage />
          <div className="bg-gray-50_02 flex flex-col items-center justify-start max-w-[920px] mx-auto py-[30px] px-10 md:px-[30px] sm:px-5 w-full sm:mb-[20px] mt-5">
            <List
              className="sm:flex-col flex-row gap-[40px] grid xs:grid-cols-1 sm:grid-cols-2 grid-cols-3 justify-center mx-auto w-full mb-8"
              orientation="horizontal"
            >
              <ProductCartCardBox
                className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[16px] rounded-lg w-full"
                productimage="images/img_rectangle17564_3.png"
                productRatingBox
                productrating="4 | 1280"
                productName={t("fruitVanillaCakeDots")}
                discountedPrice={<>{t("sar")} 155.45</>}
                originalPrice="175.45"
                buttonAddToCart
              />
              <ProductCartCardBox
                className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[16px] rounded-lg w-full"
                productimage="images/img_rectangle17564_3.png"
                productSortingBox
                productsorting={t("recommended")}
                productRatingBox
                productrating="4 | 1280"
                productName={t("fruitVanillaCakeDots")}
                discountedPrice={<>{t("sar")} 155.45</>}
                originalPrice="175.45"
                buttonAddToCart
              />
              <ProductCartCardBox
                className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[16px] rounded-lg w-full"
                productimage="images/img_rectangle17564_3.png"
                productRatingBox
                productrating="4 | 1280"
                productName={t("fruitVanillaCakeDots")}
                discountedPrice={<>{t("sar")} 155.45</>}
                originalPrice="175.45"
                buttonAddToCart
              />
              <ProductCartCardBox
                className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[16px] rounded-lg w-full"
                productimage="images/img_rectangle17564_3.png"
                productRatingBox
                productrating="4 | 1280"
                productName={t("fruitVanillaCakeDots")}
                discountedPrice={<>{t("sar")} 155.45</>}
                originalPrice="175.45"
                buttonAddToCart
              />
              <ProductCartCardBox
                className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[16px] rounded-lg w-full"
                productimage="images/img_rectangle17564_3.png"
                productRatingBox
                productrating="4 | 1280"
                productName={t("fruitVanillaCakeDots")}
                discountedPrice={<>{t("sar")} 155.45</>}
                originalPrice="175.45"
                buttonAddToCart
              />
              <ProductCartCardBox
                className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[16px] rounded-lg w-full"
                productimage="images/img_rectangle17564_3.png"
                productSortingBox
                productsorting={t("recommended")}
                productRatingBox
                productrating="4 | 1280"
                productName={t("fruitVanillaCakeDots")}
                discountedPrice={<>{t("sar")} 155.45</>}
                originalPrice="175.45"
                buttonAddToCart
              />
            </List>
            <div className="flex h-12 items-center justify-center mt-4 mb-10 rounded-[50%] w-full">
              <Img
                src="/images/Loaderanim.png"
                className="animate-spin"
                alt="loaderanim"
              />
            </div>
          </div>
        </div>
        <Footer className="flex font-mohrroundedaltregular items-center justify-center mt-[127px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default SearchPage;
