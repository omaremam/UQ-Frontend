import React, { useState } from "react";
import {
  Img,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
  ProductImageZoomSlider,
  ThumbnailSlider,
} from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import Breadcrumb from "components/Breadcrumb";
import ButtonAddToCartRemoveAdd from "components/ButtonAddToCartRemoveAdd";
import ProductCartCardBox from "components/ProductCartCardBox";
import { AddToMyOccasion } from "popups/AddToMyOccasion";
import { AddToMyOccasionAddNew } from "popups/AddToMyOccasionAddNew";
import { AddToCart } from "popups/AddToCart";
import { RepeatOrder } from "popups/RepeatOrder";
// Importing localization strings
import { useTranslation } from "react-i18next";
import globalRequest from "../../utils/global/globalRequest";
import { useDispatch, useSelector } from "react-redux";
import { changeLoader, currentLoader } from "../../redux/reducers/loader";
import { setSnackbar } from "../../redux/reducers/snackbar";
import * as CUSTOM from "../../utils/helper/custom";
import * as APIS from "../../utils/helper/Enum";
import { getAllCategories } from "../../redux/reducers/allCategories";
import {
  addDeleteGetLocalStorage,
  storageKeys,
} from "../../utils/global/localData";
import { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Navigate, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  customTooltip: {
    backgroundColor: "white", // Change the background color here
    color: "black", // Change the font color here
    fontSize: "16px", // You can adjust the font size here if needed
    boxShadow: "10px 14px 16px rgba(0, 0, 0, 0.1)",
    padding: "20px",
  },
}));

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#ffffff',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 400,
    margin: 0,
    marginLeft: '-20px',
    padding: 0,
    boxShadow: '0 0 25px -5px rgb(0 0 0 / 0.1), 0 0 10px -6px rgb(0 0 0 / 0.1)',
    '.MuiTooltip-arrow': {
      color: '#FFFFFF', // Arrow color
      width: '28px', // Arrow width
      height: '16px', // Arrow height
      top: '-7px', // Position where arrow is pointing
      left: '12px!important', // Position where arrow is pointing
    },
  },
}));

let defaultLanguage = CUSTOM.getDefaultLanguage();
const ProductDetailsroundshapePage = () => {
  const { slug } = useParams();
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const loaderStatus = useSelector(currentLoader);
  const [openTooltip, setOpenTooltip] = React.useState({ status: false, id: 0 });
  const [AddToCartOpen, setAddToCartOpen] = React.useState(false);
  const navigate = useNavigate();
  const allCategories = useSelector(getAllCategories);
  const [isExpanded, setIsExpanded] = useState(false);
  const [product, setProduct] = useState(null);
  const [cartData, setCartData] = useState([]);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [RepeatOrderOpen, setRepeatOrderOpen] = useState(false);
  const [incrementQty, setIncrementQty] = React.useState({
    id: 0,
    qty: 0,
    product_id: 0,
    uomData: {},
  });
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const [isExpanded2, setIsExpanded2] = useState(false);
  const toggleReadMore2 = () => {
    setIsExpanded2(!isExpanded2);
  };
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const [thumbnailImages, setThumbnailImages] = React.useState([]);
  const [breadcrumbData, setBreadcrumbData] = React.useState({
    maincategoryname: "",
    subcatname: "",
  });
  const [AddToMyOccasionOpen, setAddToMyOccasionOpen] = React.useState(false);
  const [AddToMyOccasionAddNewOpen, setAddToMyOccasionAddNewOpen] =
    React.useState(false);
  const [mainImageUrl, setMainImageUrl] = useState("/images/product-3.png");
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);
  const handleThumbnailClick = (index) => {
    setSelectedThumbnailIndex(index);
    setMainImageUrl(thumbnailImages[index]);
  };
  const [activeUom, setActiveUom] = React.useState({});
  /**
   * get product details
   */
  const getProduct = async () => {
    try {
      dispatch(changeLoader(true));
      //user/api/v1/get-products?orderBy=&orderType=&page=&limit=&price=400-500&sub_category_id=1,2&category_id=1 isme
      let params = {
        slug: slug,
      };
      let response = await globalRequest(
        APIS?.PRODUCTS?.GET_PRODUCT_BY_ID,
        "get",
        {},
        { params: params },
        true
      );
      response = response?.data;
      if (response?.status == "SUCCESS") {
        setProduct(response?.data);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    } catch (e) {}
    dispatch(changeLoader(false));
  };

  /**
   * get product details
   */
  const getRelatedProduct = async (id) => {
    try {
      dispatch(changeLoader(true));
      //user/api/v1/get-products?orderBy=&orderType=&page=&limit=&price=400-500&sub_category_id=1,2&category_id=1 isme
      let response = await globalRequest(
        `${APIS?.PRODUCTS?.GET_RELATED_PRODUCT}/${id}`,
        "get",
        {},
        {},
        true
      );
      response = response?.data;
      if (response?.status == "SUCCESS") {
        setRelatedProduct(response?.data?.data);
      } else {
        setRelatedProduct([]);
      }
    } catch (e) {}
    dispatch(changeLoader(false));
  };

  useEffect(() => {
    if (slug) {
      getProduct();
    }
  }, [slug]);

  const setBreadcrumb = () => {
    if (product?.productCategories) {
      const mainCategory =
        product?.productCategories?.map((item) => item?.categoryId) || [];
      let matchedCategory = { main: "", sub: "" };
      for (const catItem of allCategories) {
        for (const subcatItem of catItem?.subcategories) {
          if (mainCategory.includes(catItem?.id)) {
            matchedCategory.main = CUSTOM.getdataByLangKey(
              catItem?.categoryLocales,
              CUSTOM.getDefaultLanguage(),
              "name"
            );
            matchedCategory.sub = CUSTOM.getdataByLangKey(
              subcatItem?.categoryLocales,
              CUSTOM.getDefaultLanguage(),
              "name"
            );
            break; // Stop the loop if a match is found
          }
        }
      }

      let LocalData = addDeleteGetLocalStorage(
        storageKeys?.SUBCATEGORY_NAME,
        {},
        "get"
      );
      if (LocalData) {
        LocalData = JSON.parse(LocalData);
        setBreadcrumbData({
          subcatname: CUSTOM.getdataByLangKey(
            product?.productLocales,
            defaultLanguage,
            "name"
          ),
          maincategoryname: LocalData?.name,
          maincategoryslug: LocalData?.slug,
        });
      } else {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    if (allCategories.length > 0 && product != null) {
      setBreadcrumb();
    }
  }, [allCategories, product]);

  useEffect(() => {
    if (product != null) {
      getRelatedProduct(product?.id);
      let uoms = product?.productUoms;
      //uoms = uoms.map((items) => (items?.isDefault == 1 ? items : []));
      uoms = uoms.filter((item) => item?.isDefault == 1);
      if (uoms.length > 0) {
        setActiveUom(uoms[0]);
      }
    }
  }, [product]);

  useEffect(() => {
    if (Object.keys(activeUom).length != 0) {
      let imageUrls = activeUom?.productUomImages?.map((item) =>
        CUSTOM.getImage(item?.image)
      );
      setThumbnailImages(imageUrls);
      setMainImageUrl(imageUrls?.[0]);
    }
  }, [activeUom]);

  const changeUom = (id) => {
    let uoms = product?.productUoms;
    uoms = uoms.filter((item) => item?.id === id);
    if (uoms.length != 0) {
      setActiveUom(uoms?.length > 0 ? uoms[0] : {});
    }
  };

  const getFeaturedImage = (imgs) => {
    let featuredImage = imgs?.find((item) => item?.featured === "1");
    if (featuredImage) {
      return CUSTOM.getImage(featuredImage?.image);
    }
    return "";
  };

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

  const CheckUomExistInCart = (main_product_id) => {
    if (cartData.length > 0) {
      let data = cartData.filter(
        (items) => items?.productId == main_product_id
      );
      if (data.length > 0) {
        return data[data.length - 1];
      }
    }
  };

  const decrementCount = async (id, qtyCount, type = "subtract") => {
    //getCartItemID
    try {
      dispatch(changeLoader(true));
      let inputData = {
        cart_item_id: id,
        qty: type == "subtract" ? Number(qtyCount) - 1 : Number(qtyCount) + 1,
      };
      let response = await globalRequest(
        APIS?.CART?.UPDATE_QTY,
        "put",
        inputData,
        {},
        true
      );
      response = response?.data;
      if (response?.status == "SUCCESS") {
        dispatch(changeLoader("fetchCartCount"));
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarMessage: response?.message,
            snackbarState: "success",
          })
        );
      } else {
        dispatch(
          setSnackbar({
            snackbarOpen: true,
            snackbarMessage: response?.message,
            snackbarState: "error",
          })
        );
      }
    } catch (e) {
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarMessage: e?.message,
          snackbarState: "error",
        })
      );
    }
  };

  const changeQuy = (id, type = "subtract") => {
    if (cartData.length > 0) {
      let data = cartData.filter((items) => items?.productId == id);
      if (type == "add") {
        let lastids = data[data.length - 1];
        setIncrementQty({
          id: lastids?.id,
          qty: Number(lastids?.quantity),
          product_id: lastids?.productId,
          uomData: lastids,
        });
        setRepeatOrderOpen(true)
      } else {
        if (data.length > 1) {
          setOpenTooltip({ status: true, id: id });
        } else {
          decrementCount(data?.[0]?.id, data?.[0]?.quantity, type);
          setOpenTooltip({ status: false, id: 0 });
        }
      }
    }
  };

  const handleTooltipClose = () => {
    setOpenTooltip({ status: false, id: 0 });
  };

  useEffect(() => {
    if (RepeatOrderOpen == "incQty") {
      setRepeatOrderOpen(false);
      decrementCount(incrementQty?.id, incrementQty?.qty, "add");
    }
    if (RepeatOrderOpen == "addNewProduct") {
      setRepeatOrderOpen(false);
      setAddToCartOpen(true);
    }
  }, [RepeatOrderOpen]);

  useEffect(() => {
    if (openTooltip?.status) {
      setTimeout(() => {
        setOpenTooltip({
          status: false,
          id: 0,
        });
      }, 2500);
    }
  }, [openTooltip?.status]);
 
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mohrroundedaltregular items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col flex-row font-mohrroundedaltmedium md:gap-5 items-center justify-center md:px-5 shadow-bs w-full" />
        <div className="flex flex-col items-center justify-start w-full max-w-[1110px] mx-auto">
          <Breadcrumb data={breadcrumbData} />
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row sm:flex-col font-mohrroundedaltregular gap-[30px] items-start justify-start max-w-[1110px] mt-[30px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start w-[49%] md:w-full">
              <div className="flex flex-row xs:flex-col gap-5 items-start justify-between w-full">
                <div className="flex flex-col xs:flex-row xs:flex-wrap xs:justify-start gap-3 w-20 xs:w-full h-[356px] md:h-auto items-start justify-between w-auto xs:order-2">
                  <ThumbnailSlider
                    thumbnailImages={thumbnailImages}
                    onThumbnailClick={handleThumbnailClick}
                  />
                </div>
                <div className="h-[440px] relative w-[440px] sm:w-full xs:order-1 product-main-img">
                  <ProductImageZoomSlider
                    imageUrl={mainImageUrl}
                    zoomProps={{ zoomStyle: { zoom: 4 } }} // Adjust zoom level as needed
                  />
                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-between left-[3%] rtl:left-[unset] rtl:right-[3%] py-4 w-1/4 md:w-auto">
                    {Number(product?.isRecommended) == 1 ? (
                      <div className="bg-red-50_01 font-mohrroundedaltregular min-w-[107px] py-1 rounded text-center text-gray-900_01 text-xs">
                        {t("recommended")}
                      </div>
                    ) : Number(product?.isBestseller) == 1 ? (
                      <div className="bg-red-50_01 font-mohrroundedaltregular min-w-[107px] py-1 rounded text-center text-gray-900_01 text-xs">
                        {t("bestseller")}
                      </div>
                    ) : (
                      <div className="bg-red-50_01"></div>
                    )}

                    <div className="bg-red-50_01 flex items-center justify-center min-w-[105px] px-3 py-[7px] rounded">
                      <Img
                        className="h-[18px] ltr:mr-2 rtl:ml-2 w-[18px]"
                        src="/images/img_star.svg"
                        alt="star"
                      />
                      <div className="font-mohrroundedaltmedium text-center text-gray-900_01 text-sm">
                        4 | 1280
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-[49%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtMohrRoundedAltSemiBold24"
              >
                {CUSTOM.getdataByLangKey(
                  product?.productLocales,
                  defaultLanguage,
                  "name"
                )}{" "}
                - {activeUom?.name}
              </Text>
              <div className="flex flex-col font-mohrroundedaltmedium gap-2 items-start justify-start mt-5 w-auto">
                <div className="flex flex-row gap-1 items-start justify-start w-auto">
                  <Text
                    className="text-gray-700 text-sm w-auto"
                    size="txtMohrRoundedAltMedium14Gray700"
                  >
                    {t("chooseVariantColon")}
                  </Text>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtMohrRoundedAltMedium14Black900"
                  >
                    {activeUom?.name}
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start w-auto md:w-full">
                  {product?.productUoms?.map((items) => {
                    return (
                      <div
                        className="flex flex-col gap-2 items-center justify-center"
                        key={Math.random()}
                      >
                        <div
                          className="relative mt-2"
                          onClick={(e) => {
                            changeUom(items?.id);
                          }}
                        >
                          {activeUom?.id == items?.id ? (
                            <Img
                              src="/images/product-check.svg"
                              className="h-6 w-6 absolute -top-2 -right-2"
                              alt="check"
                            />
                          ) : null}
                          <Img
                            className="h-[72px] md:h-auto object-cover border border-2 overflow-hidden rounded-lg border-black-900 w-[72px] cursor-pointer"
                            src={getFeaturedImage(items?.productUomImages)}
                            alt="rectangle19161"
                          />
                        </div>
                        <Text className="text-black-900 text-xs w-auto font-mohrroundedaltregular">
                          {items?.name}
                        </Text>
                      </div>
                    );
                  })}

                  {/* <Img
                    className="h-[72px] md:h-auto object-cover rounded-lg w-[72px] cursor-pointer"
                    src="/images/img_rectangle19162.png"
                    alt="rectangle19162"
                  />
                  <Img
                    className="h-[72px] md:h-auto object-cover rounded-lg w-[72px] cursor-pointer"
                    src="/images/img_rectangle19163.png"
                    alt="rectangle19163"
                  /> */}
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center justify-start mt-[38px] w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                  size="txtMohrRoundedAltSemiBold24"
                >
                  {`${t("sar")} ${activeUom?.sellingPrice || ""}`}
                </Text>
                <Text
                  className="line-through text-base text-gray-700 w-auto"
                  size="txtMohrRoundedAltRegular16Gray700"
                >
                  {activeUom?.actualPrice || ""}
                </Text>
                <Text
                  className="text-base text-red-A700 w-auto"
                  size="txtMohrRoundedAltRegular16RedA700"
                >
                  {activeUom?.actualPrice || "" ? (
                    <>
                      (
                      {CUSTOM.getOff(
                        activeUom?.actualPrice || "",
                        activeUom?.sellingPrice || ""
                      )}{" "}
                      {t("off")})
                    </>
                  ) : (
                    ""
                  )}
                </Text>
              </div>
              {!CheckUomExistInCart(product?.id) ? (
                <ButtonAddToCartRemoveAdd
                  className="bg-white-A700 flex flex-1 flex-col items-center justify-start rounded-lg mt-[10px] w-full"
                  buttonAddToCart
                  productId={product?.id}
                />
              ) : null}

              {CheckUomExistInCart(product?.id) && (
                <div className="border border-black-900 border-solid bg-black-900 flex flex-col items-center justify-center mt-5 rounded">
                  <div className="flex flex-row gap-2 items-center justify-center pl-4 sm:pr-5 pr-6 py-3 rounded w-full">
                    <HtmlTooltip
                     open={openTooltip?.status && openTooltip?.id == product?.id}
                     placement="bottom-start" arrow
                      title={
                        <>
                          <div className="py-4 px-5 w-full">
                            <Text className="leading-5 text-black-900 text-sm w-full font-mohrroundedaltmedium">
                            {t("multiple_customization")}
                            </Text>
                          </div>
                        </>
                      }
                    >
                      <div>
                        <Img
                          className="h-5 w-5 cursor-pointer"
                          src="/images/minus-white.svg"
                          alt="minus"
                          onClick={() => {
                            changeQuy(product?.id, "subtract");
                          }}
                        />
                      </div>
                    </HtmlTooltip>
                    {/* <Tooltip
                      classes={{ tooltip: classes.customTooltip }}
                      open={openTooltip}
                      onClose={handleTooltipClose}
                      title={t("multiple_customization")}
                      arrow
                      placement="bottom"
                    ></Tooltip> */}
                    <Text
                      className="text-base text-white-A700 text-center w-[100px]"
                      size="txtMohrRoundedAltMedium16"
                    >
                      {CheckUomExistInCart(product?.id)?.quantity}
                    </Text>
                    <Img
                      className="h-5 w-5 cursor-pointer"
                      src="/images/add-white.svg"
                      alt="add"
                      onClick={() => {
                        changeQuy(product?.id, "add"); 
                      }}
                    />
                  </div>
                </div>
              )}

              <Line className="bg-gray-300 h-px mt-8 w-full" />
              <Text
                className="mt-[34px] text-base text-black-900 rtl:text-right w-full"
                size="txtMohrRoundedAltMedium16"
              >
                {t("description")}
              </Text>
              <Text
                className="leading-[24.00px] mt-3.5 text-gray-700 text-sm"
                size="txtMohrRoundedAltMedium14Gray700"
                dangerouslySetInnerHTML={{
                  __html: CUSTOM.getdataByLangKey(
                    product?.productLocales,
                    defaultLanguage,
                    "description"
                  ),
                }}
              ></Text>
            </div>
          </div>
          {relatedProduct?.length > 0 ? (
            <div className="bg-gray-50_02 flex flex-col items-center justify-start mt-20 p-[54px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-[43px] items-center justify-start max-w-[1110px] mb-[5px] mx-auto w-full relative">
                <div className="flex xs:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start">
                    <Text
                      className="sm:text-4xl xs:text-2xl md:text-[38px] text-[40px] text-black-900"
                      size="txtMohrRoundedAltBold40Black900"
                    >
                      {t("buyItWith")}
                    </Text>
                    <Text
                      className="text-base xs:text-sm text-black-900"
                      size="txtMohrRoundedAltMedium16"
                    >
                      {t(
                        "weHaveCreatedACakeOptimizedOrderingExperienceForYouComma"
                      )}
                    </Text>
                  </div>
                  {relatedProduct?.length > 4 ? (
                    <Img
                      className="h-6 sm:mt-0 mt-[11px]"
                      src="/images/img_reply_black_900.svg"
                      alt="reply"
                    />
                  ) : null}
                </div>

                <List className="w-full" orientation="horizontal">
                  <div className="mx-[-15px] sm:mx-[-10px] indicator-hide">
                    {relatedProduct?.length < 5 ? (
                      <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-[30px]">
                        {relatedProduct?.map((products) => {
                          return (
                            <ProductCartCardBox
                              className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[16px] rounded-lg w-full"
                              productimage={CUSTOM.getImage(
                                products?.productUoms?.[0]
                                  ?.productUomImages?.[0]?.image || ""
                              )}
                              productRatingBox
                              productrating="4 | 1280"
                              isRecommended={products?.isRecommended}
                              isBestSeller={products?.isBestseller}
                              uomData={products?.productUoms?.[0]}
                              productName={`${CUSTOM?.getdataByLangKey(
                                products?.productLocales,
                                defaultLanguage,
                                "name"
                              )} - ${products?.productUoms?.[0]?.name || ""}`}
                              discountedPrice={
                                <>
                                  {t("sar")}{" "}
                                  {products?.productUoms?.[0]?.sellingPrice ||
                                    ""}
                                </>
                              }
                              originalPrice={
                                products?.productUoms?.[0]?.actualPrice || ""
                              }
                              buttonAddToCart
                              productId={products?.id}
                              slug={products?.slug}
                              cartData={cartData}
                            />
                          );
                        })}
                      </div>
                    ) : (
                      <Slider
                        indicators={true}
                        infinite={false}
                        arrows={false}
                        autoPlay={false}
                        disableButtonsControls={false}
                        mouseTracking={false}
                        autoPlayInterval={6000}
                        activeIndex={sliderState}
                        responsive={{
                          0: { items: 1 },
                          550: { items: 2 },
                          768: { items: 3 },
                          992: { items: 4 },
                        }}
                        onSlideChanged={(e) => {
                          setsliderState(e?.item);
                        }}
                        activeSlideCSS="scale-[1.00] absolute"
                        ref={sliderRef}
                        className="h-[100%] relative w-[100%]"
                        items={relatedProduct?.map((products) => {
                          return (
                            <React.Fragment key={Math.random()}>
                              <div className="px-[15px] sm:px-[10px]">
                                <ProductCartCardBox
                                  className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[16px] rounded-lg w-full"
                                  productimage={CUSTOM.getImage(
                                    products?.productUoms?.[0]
                                      ?.productUomImages?.[0]?.image || ""
                                  )}
                                  productRatingBox
                                  productrating="4 | 1280"
                                  productName={CUSTOM.getdataByLangKey(
                                    products?.productLocales,
                                    defaultLanguage,
                                    "name"
                                  )}
                                  discountedPrice={
                                    <>
                                      {t("sar")}{" "}
                                      {products?.productUoms?.[0]
                                        ?.sellingPrice || ""}
                                    </>
                                  }
                                  originalPrice={
                                    products?.productUoms?.[0]?.actualPrice ||
                                    ""
                                  }
                                  buttonAddToCart
                                  slug={products?.slug}
                                />
                              </div>
                            </React.Fragment>
                          );
                        })}
                        renderDotsItem={({ isActive }) => {
                          if (isActive) {
                            return (
                              <div className="inline-block cursor-pointer rounded-[50%] h-1.5 bg-white_A700 w-1.5 relative" />
                            );
                          }
                          return (
                            <div
                              className="inline-block cursor-pointer rounded-[50%] h-1.5 bg-white_A700_7e w-1.5 relative"
                              role="button"
                              tabIndex={0}
                            />
                          );
                        }}
                      />
                    )}

                    <PagerIndicator
                      className="flex gap-1 h-1.5 w-[26px] mt-[-25px] mx-auto"
                      count={4}
                      activeCss="inline-block cursor-pointer rounded-[50%] h-1.5 bg-white_A700 w-1.5 relative"
                      activeIndex={sliderState}
                      inactiveCss="inline-block cursor-pointer rounded-[50%] h-1.5 bg-gray-900_01 w-1.5 relative"
                      sliderRef={sliderRef}
                      selectedWrapperCss="inline-block"
                      unselectedWrapperCss="inline-block"
                    />
                  </div>
                </List>
              </div>
            </div>
          ) : null}
          <div className="flex flex-col font-mohrroundedaltregular items-start justify-start max-w-[1110px] mx-auto md:px-5 w-full">
            <div className="w-full mb-7 xs:mb-3">
              <Text
                className="mt-20 sm:text-4xl xs:text-2xl md:text-[38px] text-[40px] text-black-900 rtl:text-right"
                size="txtMohrRoundedAltBold40Black900"
              >
                {t("customerReviews")}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-5 w-[68%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row font-mohrroundedaltmedium gap-2 items-center justify-start w-[19%] md:w-full">
                  <div className="flex items-start justify-start gap-[2px]">
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-yellow.svg"
                      alt="star-yellow"
                    />
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-yellow.svg"
                      alt="star-yellow"
                    />
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-yellow.svg"
                      alt="star-yellow"
                    />
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-half-yellow.svg"
                      alt="star-half-yellow"
                    />
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-gray.svg"
                      alt="star-gray"
                    />
                  </div>
                  <Text
                    className="my-1 text-base text-black-900"
                    size="txtMohrRoundedAltMedium16"
                  >
                    4.5
                  </Text>
                </div>
                <Text
                  className="leading-[24.00px] mt-4 text-base xs:text-sm text-black-900 w-full rtl:text-right"
                  size="txtMohrRoundedAltRegular16"
                >
                  {t(
                    "weRecentlyOrderedAWeddingCakeAndWereExtremelyPleasedWithTheResultsDotTheDesignOfTheCakeWasStunningCommaWithBeautifulDecorationsAndColorsDot"
                  )}
                </Text>
                <Text
                  className="mt-3 text-gray-700 text-xs"
                  size="txtMohrRoundedAltRegular12Gray700"
                >
                  <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                    {t("allexCarry")}
                  </span>
                  <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                    |
                  </span>
                  <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                    01/06/2023
                  </span>
                </Text>
              </div>
            </div>
            <Line className="bg-gray-300 h-px max-w-[1110px] mt-5 mx-auto w-full" />
            <div className="flex flex-col items-center justify-start mt-5 w-1/2 md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row font-mohrroundedaltmedium gap-2 items-center justify-start w-[19%] md:w-full">
                  <div className="flex items-start justify-start gap-[2px]">
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-yellow.svg"
                      alt="star-yellow"
                    />
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-yellow.svg"
                      alt="star-yellow"
                    />
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-yellow.svg"
                      alt="star-yellow"
                    />
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-half-yellow.svg"
                      alt="star-half-yellow"
                    />
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-half-yellow.svg"
                      alt="star-half-yellow"
                    />
                  </div>
                  <Text
                    className="my-1 text-base text-black-900"
                    size="txtMohrRoundedAltMedium16"
                  >
                    4.5
                  </Text>
                </div>
                <Text
                  className="leading-[24.00px] mt-4 text-base xs:text-sm text-black-900 w-full rtl:text-right"
                  size="txtMohrRoundedAltRegular16"
                >
                  {t(
                    "weHighlyRecommendToAnyoneLookingForABeautifulAndDeliciousWeddingCakeDot"
                  )}
                </Text>
                <Text
                  className="mt-[15px] text-gray-700 text-xs"
                  size="txtMohrRoundedAltRegular12Gray700"
                >
                  <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                    {t("jackJohnson")} |
                  </span>
                  <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                    31/05/2023
                  </span>
                </Text>
              </div>
            </div>
            <Line className="bg-gray-300 h-px max-w-[1110px] mt-5 mx-auto w-full" />
            <div className="flex flex-col items-center justify-start mt-5 w-[68%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row font-mohrroundedaltmedium gap-2 items-center justify-start w-[19%] md:w-full">
                  <div className="flex items-start justify-start gap-[2px]">
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-yellow.svg"
                      alt="star-yellow"
                    />
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-yellow.svg"
                      alt="star-yellow"
                    />
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-yellow.svg"
                      alt="star-yellow"
                    />
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-half-yellow.svg"
                      alt="star-half-yellow"
                    />
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-half-yellow.svg"
                      alt="star-half-yellow"
                    />
                  </div>
                  <Text
                    className="my-1 text-base text-black-900"
                    size="txtMohrRoundedAltMedium16"
                  >
                    4.5
                  </Text>
                </div>
                <Text
                  className="leading-[24.00px] mt-4 text-base xs:text-sm text-black-900 w-full rtl:text-right"
                  size="txtMohrRoundedAltRegular16"
                >
                  {t(
                    "theCakeAndFillingTastingWasAVeryGoodExperienceDotTheActualCakeWasVeryPrettyAndTastyWeHadRedVelvetCakeWithOreo cookiesAndCreamFillingDot"
                  )}
                </Text>
                <Text
                  className="mt-3 text-gray-700 text-xs"
                  size="txtMohrRoundedAltRegular12Gray700"
                >
                  <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                    {t("elliasAndrew")} |
                  </span>
                  <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                    31/05/2023
                  </span>
                </Text>
              </div>
            </div>
            <Line className="bg-gray-300 h-px max-w-[1110px] mt-5 mx-auto w-full" />
            <div className="flex flex-col items-center justify-start mt-5 w-[68%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row font-mohrroundedaltmedium gap-2 items-center justify-start w-[19%] md:w-full">
                  <div className="flex items-start justify-start gap-[2px]">
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-yellow.svg"
                      alt="star-yellow"
                    />
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-yellow.svg"
                      alt="star-yellow"
                    />
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-yellow.svg"
                      alt="star-yellow"
                    />
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-half-yellow.svg"
                      alt="star-half-yellow"
                    />
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-half-yellow.svg"
                      alt="star-half-yellow"
                    />
                  </div>
                  <Text
                    className="my-1 text-base text-black-900"
                    size="txtMohrRoundedAltMedium16"
                  >
                    4.5
                  </Text>
                </div>
                <Text
                  className="leading-[24.00px] mt-4 text-base xs:text-sm text-black-900 w-full rtl:text-right"
                  size="txtMohrRoundedAltRegular16"
                >
                  {t(
                    "weHadOurCakeTastingAFewMonthsAheadOfOurWeddingAndWeFellInLoveWithTheFlavorsTheirFrostingCommaAndNotToMentionHowAffordableItWasForSuchAmazingTasteCommaTheyHaveATonOfFlavorCombinationsAllDeliciousTheDecorIsSuperbDot"
                  )}
                </Text>
                <Text
                  className="mt-3 text-gray-700 text-xs"
                  size="txtMohrRoundedAltRegular12Gray700"
                >
                  <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                    {t("davidWilliamson")} |{" "}
                  </span>
                  <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                    29/05/2023
                  </span>
                </Text>
              </div>
            </div>
            <Line className="bg-gray-300 h-px max-w-[1110px] mt-5 mx-auto w-full" />
            <div className="flex flex-col items-center justify-start mt-5 w-1/2 md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row font-mohrroundedaltmedium gap-2 items-center justify-start w-[19%] md:w-full">
                  <div className="flex items-start justify-start gap-[2px]">
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-yellow.svg"
                      alt="star-yellow"
                    />
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-yellow.svg"
                      alt="star-yellow"
                    />
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-yellow.svg"
                      alt="star-yellow"
                    />
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-half-yellow.svg"
                      alt="star-half-yellow"
                    />
                    <Img
                      className="h-7 w-7 min-w-[28px]"
                      src="/images/star-half-yellow.svg"
                      alt="star-half-yellow"
                    />
                  </div>
                  <Text
                    className="my-1 text-base text-black-900"
                    size="txtMohrRoundedAltMedium16"
                  >
                    4.5
                  </Text>
                </div>
                <Text
                  className="leading-[24.00px] mt-4 text-base xs:text-sm text-black-900 w-full rtl:text-right"
                  size="txtMohrRoundedAltRegular16"
                >
                  We highly recommend to anyone looking for a beautiful and
                  delicious wedding cake.
                </Text>
                <Text
                  className="mt-[15px] text-gray-700 text-xs"
                  size="txtMohrRoundedAltRegular12Gray700"
                >
                  <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                    Jack Johnson |{" "}
                  </span>
                  <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                    31/05/2023
                  </span>
                </Text>
              </div>
            </div>
            <Line className="bg-gray-300 h-px max-w-[1110px] mt-5 mx-auto w-full" />
            {isExpanded2 && (
              <>
                <div className="flex flex-col items-center justify-start mt-5 w-[68%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row font-mohrroundedaltmedium gap-2 items-center justify-start w-[19%] md:w-full">
                      <div className="flex items-start justify-start gap-[2px]">
                        <Img
                          className="h-7 w-7 min-w-[28px]"
                          src="/images/star-yellow.svg"
                          alt="star-yellow"
                        />
                        <Img
                          className="h-7 w-7 min-w-[28px]"
                          src="/images/star-yellow.svg"
                          alt="star-yellow"
                        />
                        <Img
                          className="h-7 w-7 min-w-[28px]"
                          src="/images/star-yellow.svg"
                          alt="star-yellow"
                        />
                        <Img
                          className="h-7 w-7 min-w-[28px]"
                          src="/images/star-yellow.svg"
                          alt="star-yellow"
                        />
                        <Img
                          className="h-7 w-7 min-w-[28px]"
                          src="/images/star-yellow.svg"
                          alt="star-yellow"
                        />
                      </div>
                      <Text
                        className="my-1 text-base text-black-900"
                        size="txtMohrRoundedAltMedium16"
                      >
                        4.5
                      </Text>
                    </div>
                    <Text
                      className="leading-[24.00px] mt-4 text-base xs:text-sm text-black-900 w-full rtl:text-right"
                      size="txtMohrRoundedAltRegular16"
                    >
                      We had our cake tasting a few months ahead of our wedding
                      and we fell in love with the flavors their frosting, and
                      not to mention how affordable it was for such amazing
                      taste, they have a ton of flavor combinations all
                      delicious the decor is superb.
                    </Text>
                    <Text
                      className="mt-3 text-gray-700 text-xs"
                      size="txtMohrRoundedAltRegular12Gray700"
                    >
                      <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                        David Williamson |{" "}
                      </span>
                      <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                        29/05/2023
                      </span>
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-300 h-px max-w-[1110px] mt-5 mx-auto w-full" />
                <div className="flex flex-col items-center justify-start mt-5 w-1/2 md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row font-mohrroundedaltmedium gap-2 items-center justify-start w-[19%] md:w-full">
                      <div className="flex items-start justify-start gap-[2px]">
                        <Img
                          className="h-7 w-7 min-w-[28px]"
                          src="/images/star-yellow.svg"
                          alt="star-yellow"
                        />
                        <Img
                          className="h-7 w-7 min-w-[28px]"
                          src="/images/star-yellow.svg"
                          alt="star-yellow"
                        />
                        <Img
                          className="h-7 w-7 min-w-[28px]"
                          src="/images/star-yellow.svg"
                          alt="star-yellow"
                        />
                        <Img
                          className="h-7 w-7 min-w-[28px]"
                          src="/images/star-yellow.svg"
                          alt="star-yellow"
                        />
                        <Img
                          className="h-7 w-7 min-w-[28px]"
                          src="/images/star-yellow.svg"
                          alt="star-yellow"
                        />
                      </div>
                      <Text
                        className="my-1 text-base text-black-900"
                        size="txtMohrRoundedAltMedium16"
                      >
                        4.5
                      </Text>
                    </div>
                    <Text
                      className="leading-[24.00px] mt-4 text-base xs:text-sm text-black-900 w-full rtl:text-right"
                      size="txtMohrRoundedAltRegular16"
                    >
                      We highly recommend to anyone looking for a beautiful and
                      delicious wedding cake.
                    </Text>
                    <Text
                      className="mt-[15px] text-gray-700 text-xs"
                      size="txtMohrRoundedAltRegular12Gray700"
                    >
                      <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                        Jack Johnson |{" "}
                      </span>
                      <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                        31/05/2023
                      </span>
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-300 h-px max-w-[1110px] mt-5 mx-auto w-full" />
              </>
            )}
            <div className="flex flex-col font-mohrroundedaltmedium items-center justify-center mt-5 rounded w-auto">
              <div className="common-pointer flex flex-col items-center justify-center pr-3 py-2 rounded w-auto mb-10">
                <Text
                  className="txtMohrRoundedAltMedium14 text-center text-pink-800 text-sm w-auto"
                  onClick={toggleReadMore2}
                >
                  {" "}
                  {isExpanded2 ? "View less" : "View more"}
                </Text>
              </div>
            </div>
          </div>
          <Footer className="flex font-mohrroundedaltregular items-center justify-center mt-[68px] md:px-5 w-full" />
        </div>
      </div>
      {AddToCartOpen === true ? (
        <AddToCart closepopup={setAddToCartOpen} productId={product?.id} />
      ) : null}

      {RepeatOrderOpen === true ? (
        <RepeatOrder
          closepopup={setRepeatOrderOpen}
          cartIds={incrementQty}
          cartData={cartData}
        />
      ) : null}
      {AddToMyOccasionOpen === true ? (
        <AddToMyOccasion closepopup={setAddToMyOccasionOpen} />
      ) : null}
      {AddToMyOccasionAddNewOpen === true ? (
        <AddToMyOccasionAddNew
          closepopup={setAddToMyOccasionAddNewOpen}
          modalTopIcon="/images/img_arrowleft_gray_900_03.svg"
          OccasionTitle={t("addNewOccasion")}
          OccasionParagraph={t("enterBelowDetailsToAddANewOccasionDot")}
        />
      ) : null}
    </>
  );
};

export default ProductDetailsroundshapePage;
