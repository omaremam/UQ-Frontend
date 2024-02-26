import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, CheckboxCustom, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import { useTranslation } from "react-i18next";
import ProductCartCardBox from "components/ProductCartCardBox";
import Breadcrumb from "components/Breadcrumb";
/**custom modules*/
import {
  addDeleteGetLocalStorage,
  storageKeys,
} from "../../utils/global/localData";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import globalRequest from "../../utils/global/globalRequest";
import { useDispatch, useSelector } from "react-redux";
import { changeLoader, currentLoader } from "../../redux/reducers/loader";
import { setSnackbar } from "../../redux/reducers/snackbar";
import * as CUSTOM from "../../utils/helper/custom";
import * as APIS from "../../utils/helper/Enum";
import EmptyAllTab from "../ProfilePage/AllTabsOption/EmptyListOrder";
import {
  updateCategories,
  getAllCategories,
} from "../../redux/reducers/allCategories";
import { useEffect } from "react";
let timer = null;
let defaultLanguage = CUSTOM.getDefaultLanguage();
let priceFilter = CUSTOM.ProductPriceFilter();
const ProductListPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  let { slug } = useParams();
  const allCategories = useSelector(getAllCategories);
  const loaderStatus = useSelector(currentLoader);
  const dispatch = useDispatch();
  const [FilterOpen, setFilterOpen] = React.useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [pageLoad, setPageLoad] = useState(false);
  const [productList, setProductList] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [inputData, setInputData] = useState({
    subcat: [],
    price: [],
    order_by: "isRecommended",
    order_type: "desc",
    subcatid: 0,
    name: "",
    list: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleFilter = () => {
    setFilterOpen(!FilterOpen);
  };

  /**
   * get price in array
   */
  const priceByArray = () => {
    let indexes = inputData?.price;
    const categorizedRanges = [];
    let ranges = priceFilter;
    indexes.forEach((index) => {
      let k = 0;
      for (const range of ranges) {
        if (index == k) {
          categorizedRanges.push(
            `${range.min}-${range.max == "+" ? 9989864564545 : range.max}`
          );
          break;
        }
        k++;
      }
    });
    return categorizedRanges.join(",");
  };

  /**
   * get all products
   */
  const getAllProductList = async (type = "new") => {
    try {
      let params = {
        sub_category_id:
          inputData?.subcat.length > 0
            ? inputData?.subcat.join()
            : inputData?.subcatid,
        price: priceByArray(inputData?.price),
        orderType: inputData?.order_type,
        orderBy: inputData?.order_by,
        page: 1,
        limit: 10,
      };
      let response = await globalRequest(
        APIS?.PRODUCTS?.GET_PRODUCT_LIST,
        "get",
        {},
        { params: params },
        true
      );
      response = response?.data;
      if (type == "new") {
        setProductList([]);
      }
      if (response?.status == "SUCCESS") {
        setProductList((prevItems) => [...prevItems, ...response?.data?.data]);
      }
    } catch (e) {}
    dispatch(changeLoader(false));
  };
  /**
   * first time call list api
   */
  useEffect(() => {
    if (pageLoad) {
      dispatch(changeLoader(true));
      clearTimeout(timer);
      timer = setTimeout(() => {
        getAllProductList();
      }, 500);
    }
  }, [inputData]);

  /**
   * set categories using slug
   */
  const setCategoryData = () => {
    if (slug) {
      let result = CUSTOM.getCategoryDataBySlug(allCategories, slug);
      let updatedInputData = { ...inputData };
      if (result?.id) {
        updatedInputData.subcat.push(result?.id);
      }
      updatedInputData.subcatname = result?.name;
      updatedInputData.subcatid = result?.subcatid;
      updatedInputData.maincategoryname = "";
      updatedInputData.list = result?.list;
      //updatedInputData.pageLoaded=true;
      setInputData(updatedInputData);
      setPageLoad(true);
      addDeleteGetLocalStorage(
        storageKeys?.SUBCATEGORY_NAME,
        { slug: result?.subcatslug, name: result?.name },
        "add",
        "single"
      );
    }
  };

  /**
   * set filter data
   */
  useEffect(() => {
    inputData.subcat = [];
    setCategoryData();
  }, [allCategories, slug]);

  useEffect(() => {
    let dataCart = addDeleteGetLocalStorage(storageKeys.CART_DATA, {}, "get");
    if (dataCart) {
      setCartData(JSON.parse(dataCart));
    } else {
      setCartData([]);
    }
  }, []);

  useEffect(() => {
    if (loaderStatus == "loadCartData") {
      let dataCart = addDeleteGetLocalStorage(storageKeys.CART_DATA, {}, "get");
      if (dataCart) {
        setCartData(JSON.parse(dataCart));
      } else {
        setCartData([]);
      }
    }
  }, [loaderStatus]);

  const filterStyle = !FilterOpen
    ? "sm:hidden"
    : "flex bg-white-A700 p-[16px] rounded-lg top-full absolute w-full z-50 m-0 sm:items-start sm:justify-start shadow-lg h-[296px] overflow-y-auto";
  return (
    <>
      <div className="bg-gray-50_02 flex flex-col font-mohrroundedaltregular items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col flex-row font-mohrroundedaltmedium md:gap-5 items-center justify-center md:px-5 shadow-bs w-full" />
        <div className="flex flex-col items-center justify-start w-full max-w-[1110px] mx-auto">
          <Breadcrumb data={inputData} />
          <div className="flex flex-row xs:flex-wrap font-mohrroundedaltsemibold md:gap-10 xs:gap-4 items-center xs:items-start justify-between max-w-[1110px] mt-[11px] mx-auto md:px-5 w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtMohrRoundedAltSemiBold24"
            >
              {inputData?.subcatname}
            </Text>
            <div className="flex items-center sortby-dropdown">
              <Text
                className="text-base text-gray-700 w-[106px]"
                size="txtMohrRoundedAltRegular16"
              >
                {t("sortByColon")}
              </Text>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">
                  {t("recommended")}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="category"
                  onChange={(e) => {
                    if (e.target.value) {
                      setInputData({
                        ...inputData,
                        order_by: e.target.value,
                        order_type: "desc",
                      });
                    }
                  }}
                >
                  <MenuItem value="isRecommended">{t("recommended")}</MenuItem>
                  <MenuItem value="high_to_low">{t("highToLow")}</MenuItem>
                  <MenuItem value="low_to_high">{t("lowToHigh")}</MenuItem>
                  <MenuItem value="isBestseller">{t("bestSeller")}</MenuItem>
                  <MenuItem value="">{t("customerraiting")}</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row font-mohrroundedaltregular gap-[30px] items-start justify-start max-w-[1123px] my-[26px] mx-auto md:px-5 w-full">
            <div className="sm:h-auto relative w-[24%] sm:w-full">
              <div className="flex flex-col font-mohrroundedaltmedium gap-[21px] justify-center m-auto w-full">
                <Text
                  className="text-base text-black-900 hidden sm:block"
                  size="txtMohrRoundedAltMedium16"
                  onClick={handleFilter}
                >
                  {t("FilterUppercase")}
                </Text>
                <div
                  className={`${filterStyle} flex flex-col font-mohrroundedaltmedium gap-[21px] justify-center m-auto w-full`}
                >
                  {inputData?.list?.length != 0 ? (
                    <>
                      <div className="flex flex-col gap-2 justify-start w-full">
                        <div className="flex">
                          <Text
                            className="text-base text-black-900"
                            size="txtMohrRoundedAltMedium16"
                          >
                            {t("FilterUppercase")}
                          </Text>
                          <Text
                            className="text-base text-black-900 ltr:ml-1 rtl:mr-1"
                            size="txtMohrRoundedAltMedium16"
                          >
                            {t("subDashCategoryUppercase")}
                          </Text>
                        </div>
                        <div className="flex flex-col font-mohrroundedaltregular relative">
                          {inputData?.list?.map((items, index) => {
                            return (
                              <>
                                <div
                                  className="flex flex-row items-center justify-start"
                                  key={`cat-index${index}`}
                                >
                                  <CheckboxCustom
                                    value={items?.id}
                                    checked={inputData?.subcat.includes(
                                      items?.id
                                    )}
                                    label={CUSTOM.getdataByLangKey(
                                      items?.categoryLocales,
                                      defaultLanguage,
                                      "name"
                                    )}
                                    className="text-black_900 text-sm mr-0 text-left product-list-checkbox rtl:text-right"
                                    onChange={(e) => {
                                      let id = items?.id;
                                      setInputData((prevData) => {
                                        const existingIndex =
                                          prevData.subcat.indexOf(id);
                                        if (existingIndex !== -1) {
                                          // ID exists, so remove it
                                          const newSubcat = [
                                            ...prevData.subcat,
                                          ];
                                          newSubcat.splice(existingIndex, 1);
                                          return {
                                            ...prevData,
                                            subcat: newSubcat,
                                          };
                                        } else {
                                          // ID doesn't exist, so add it
                                          const newSubcat = [
                                            ...prevData.subcat,
                                            id,
                                          ];
                                          return {
                                            ...prevData,
                                            subcat: newSubcat,
                                          };
                                        }
                                      });
                                    }}
                                  />
                                </div>
                              </>
                            );
                          })}
                        </div>
                      </div>{" "}
                      <Line className="bg-gray-300 h-px sm:h-[2px] w-full" />
                    </>
                  ) : (
                    ""
                  )}

                  <div className="flex flex-col gap-2 justify-start w-full">
                    <Text
                      className="text-base text-black-900 rtl:text-right"
                      size="txtMohrRoundedAltMedium16"
                    >
                      {t("PriceUppercase")}
                    </Text>
                    <div className="flex flex-col font-mohrroundedaltregular relative">
                      {priceFilter?.map((priceItem, index) => {
                        let labels =
                          priceItem?.max != "+"
                            ? `${t("sar")} ${priceItem?.min} - ${t("sar")} ${
                                priceItem?.max
                              }`
                            : `${t("sar")} ${priceItem?.min} +`;
                        return (
                          <div className="flex flex-row items-center justify-start">
                            <CheckboxCustom
                              label={labels}
                              className="text-black_900 text-sm mr-0 text-left product-list-checkbox rtl:text-right"
                              checked={inputData?.price.includes(index)}
                              onChange={(e) => {
                                let id = index;
                                setInputData((prevData) => {
                                  const existingIndex =
                                    prevData.price.indexOf(id);
                                  if (existingIndex !== -1) {
                                    // ID exists, so remove it
                                    const newprice = [...prevData.price];
                                    newprice.splice(existingIndex, 1);
                                    return { ...prevData, price: newprice };
                                  } else {
                                    // ID doesn't exist, so add it
                                    const newprice = [...prevData.price, id];
                                    return { ...prevData, price: newprice };
                                  }
                                });
                              }}
                            />{" "}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col font-mohrroundedaltmedium gap-[30px] items-start justify-start w-[74%] md:w-full">
              <div className="flex flex-row items-center justify-start w-auto">
                {inputData?.price?.map((priceItemF) => {
                  let priceItem = priceFilter[priceItemF];
                  let labels =
                    priceItem?.max != "+"
                      ? `${t("sar")} ${priceItem?.min} - ${t("sar")} ${
                          priceItem?.max
                        }`
                      : `${t("sar")} ${priceItem?.min} +`;
                  return (
                    <Button
                      key={`price-p${priceItemF}`}
                      className="cursor-pointer flex h-8 items-center justify-center min-w-[181px] pl-3 mr-2 pr-2 py-1.5 rounded bg-red-50_01"
                      rightIcon={
                        <Img
                          className="h-[18px] mt-px ml-2 rtl:ml-0 rtl:mr-2"
                          src="/images/img_close_gray_900_01.svg"
                          alt="close"
                          onClick={(e) => {
                            setInputData((prevData) => {
                              const existingIndex =
                                prevData.price.indexOf(priceItemF);
                              if (existingIndex !== -1) {
                                // ID exists, so remove it
                                const newprice = [...prevData.price];
                                newprice.splice(existingIndex, 1);
                                return { ...prevData, price: newprice };
                              } else {
                                // ID doesn't exist, so add it
                                const newprice = [
                                  ...prevData.price,
                                  priceItemF,
                                ];
                                return { ...prevData, price: newprice };
                              }
                            });
                          }}
                        />
                      }
                    >
                      <Text
                        className="text-gray-900_01 text-left text-sm rtl:text-right"
                        size="txtMohrRoundedAltMedium16"
                      >
                        {<>{labels}</>}
                      </Text>
                    </Button>
                  );
                })}
                {inputData?.price.length > 0 ? (
                  <Text
                    className="text-pink-800 text-xs ml-2 rtl:ml-0 rtl:mr-2 cursor-pointer"
                    size="txtMohrRoundedAltRegular12Pink800"
                    onClick={(e) => {
                      setInputData({ ...inputData, price: [] });
                    }}
                  >
                    {t("clearAllSmallBrackets")}
                  </Text>
                ) : null}
              </div>
              <div className="md:gap-5 gap-[30px] grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-3 grid-cols-3 justify-center min-h-[auto] w-full">
                {productList?.map((pitems, pindex) => {
                  return (
                    <>
                      <ProductCartCardBox
                        productId={pitems?.id}
                        className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[16px] rounded-lg w-full"
                        productimage={CUSTOM.getImage(
                          pitems?.productUoms?.[0]?.productUomImages?.[0]
                            ?.image || ""
                        )}
                        isRecommended={pitems?.isRecommended}
                        isBestSeller={pitems?.isBestseller}
                        productRatingBox
                        productrating="4 | 1280"
                        productName={`${CUSTOM?.getdataByLangKey(
                          pitems?.productLocales,
                          defaultLanguage,
                          "name"
                        )} - ${pitems?.productUoms?.[0]?.name || ""}`}
                        discountedPrice={
                          <>
                            {t("sar")}{" "}
                            {pitems?.productUoms?.[0]?.sellingPrice || ""}
                          </>
                        }
                        originalPrice={
                          pitems?.productUoms?.[0]?.actualPrice || ""
                        }
                        buttonAddToCart
                        slug={pitems?.slug}
                        uomData={pitems?.productUoms?.[0]}
                        cartData={cartData}
                      />
                    </>
                  );
                })}
              </div>
              {isLoading ? (
                <div className="flex h-12 items-center justify-center mt-4 mb-10 rounded-[50%] w-full">
                  <Img
                    src="/images/Loaderanim.png"
                    className="animate-spin"
                    alt="loaderanim"
                  />
                </div>
              ) : null}
              {productList?.length == 0 && loaderStatus == false ? (
                <>
                  <EmptyAllTab
                    emptyImg="images/empty-location-icon.svg"
                    emptyParagraph="Add addresses here to use it in future while placing an order"
                    emptyBtn="New Address"
                    addAddressTrigger={"s"}
                  />
                </>
              ) : null}
            </div>
          </div>
          <Footer className="flex font-mohrroundedaltregular items-center justify-center mt-[54px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ProductListPage;
