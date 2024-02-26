import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";
import { AddToCart } from "popups/AddToCart";
import { AddToCartSelected } from "popups/AddToCartSelected";
import { RepeatOrder } from "popups/RepeatOrder";
// Importing localization strings
import { useTranslation } from "react-i18next";

// Importing localization strings
import globalRequest from "../../utils/global/globalRequest";
import { useDispatch, useSelector } from "react-redux";
import { changeLoader } from "../../redux/reducers/loader";
import { setSnackbar } from "../../redux/reducers/snackbar";
import * as CUSTOM from "../../utils/helper/custom";
import * as APIS from "../../utils/helper/Enum";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { makeStyles } from "@mui/styles";
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
    backgroundColor: "#ffffff",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 400,
    margin: 0,
    marginLeft: "-20px",
    padding: 0,
    boxShadow: "0 0 25px -5px rgb(0 0 0 / 0.1), 0 0 10px -6px rgb(0 0 0 / 0.1)",
    ".MuiTooltip-arrow": {
      color: "#FFFFFF", // Arrow color
      width: "28px", // Arrow width
      height: "16px", // Arrow height
      top: "-7px", // Position where arrow is pointing
      left: "12px!important", // Position where arrow is pointing
    },
  },
}));

const ProductCartCardBox = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [AddToCartOpen, setAddToCartOpen] = React.useState(false);
  const [uomData, setUomData] = React.useState({});
  const [main_product_id, setPpoductId] = React.useState({});
  const [cartData, setCartData] = React.useState([]);
  const [openTooltip, setOpenTooltip] = React.useState({
    status: false,
    id: 0,
  });
  const [incrementQty, setIncrementQty] = React.useState({
    id: 0,
    qty: 0,
    product_id: 0,
    uomData: {},
  });



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

  const [AddToCartSelectedOpen, setAddToCartSelectedOpen] =
    React.useState(false);
  const [RepeatOrderOpen, setRepeatOrderOpen] = React.useState(false);
  const handelAddToCart = () => {
    //alert(props?.productID)
    setAddToCartOpen(true);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };
  const handelAddToCartSelected = () => {
    setAddToCartSelectedOpen(true);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };
  const handelRepeatOrder = () => {
    setRepeatOrderOpen(true);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };

  useEffect(() => {
    if (typeof props?.uomData !== "undefined") {
      setUomData(props?.uomData);
    }
  }, [props]);

  useEffect(() => {
    if (typeof props?.productId !== "undefined") {
      setPpoductId(props?.productId);
    }
  }, [props]);

  useEffect(() => {
    if (typeof props?.cartData !== "undefined") {
      setCartData(props?.cartData);
    }
  }, [props]);

  const CheckUomExistInCart = () => {
    if (cartData.length > 0 && Object.keys(uomData).length > 0) {
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
    if (cartData.length > 0 && Object.keys(uomData).length > 0) {
      let data = cartData.filter((items) => items?.productId == id);
      if (type == "add") {
        let lastids = data[data.length - 1];
        setIncrementQty({
          id: lastids?.id,
          qty: Number(lastids?.quantity),
          product_id: lastids?.productId,
          uomData: lastids,
        });
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

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start rtl:items-end justify-start w-full">
          <div
            className="h-[220px] relative w-[220px] md:w-full cursor-pointer"
            onClick={() => navigate(`/productdetail/${props?.slug}`)}
          >
            <Img
              className="absolute h-[220px] inset-[0] justify-center m-auto object-cover rounded-lg w-[220px] sm:w-full"
              alt="rectangle17564"
              src={props?.productimage}
            />

            {Number(props?.isBestSeller) == 1 ? (
              <div className="bg-red-50_01 font-mohrroundedaltregular min-w-[74px] py-1 px-2 rounded text-center text-gray-900_01 text-xs absolute mt-2 ml-2 rtl:ml-0 rtl:mr-2 top-0 ltr:left-0 rtl:right-0">
                {t("bestseller")}
              </div>
            ) : (
              "2223"
            )}

            {Number(props?.isRecommended) == 1 ? (
              <div className="bg-red-50_01 font-mohrroundedaltregular min-w-[74px] py-1 px-2 rounded text-center text-gray-900_01 text-xs absolute mt-2 ml-2 rtl:ml-0 rtl:mr-2 top-0 ltr:left-0 rtl:right-0">
                {t("recommended")}
              </div>
            ) : (
              ""
            )}

            {props?.productSortingBox && (
              <div className="bg-red-50_01 font-mohrroundedaltregular min-w-[74px] py-1 px-2 rounded text-center text-gray-900_01 text-xs absolute mt-2 ml-2 rtl:ml-0 rtl:mr-2 top-0 ltr:left-0 rtl:right-0">
                {props?.productsorting}
              </div>
            )}

            {props?.productRatingBox && (
              <div className="bg-red-50_01 flex items-center justify-center min-w-[67px] px-1 py-[3px] rounded absolute mb-2 ml-2 rtl:ml-0 rtl:mr-2 bottom-0 ltr:left-0 rtl:right-0">
                <Img
                  className="h-4 mb-px mr-1"
                  src="/images/img_star.svg"
                  alt="star"
                />
                <div className="font-mohrroundedaltregular text-gray-900_01 text-left text-xs">
                  {props?.productrating}
                </div>
              </div>
            )}
          </div>
          <Text
            className="mt-3 text-base text-black-900 cursor-pointer w-full rtl:text-right"
            size="txtMohrRoundedAltMedium16"
            onClick={() => navigate(`/productdetail/${props?.slug}`)}
          >
            {props?.productName}
          </Text>
          <div
            className="flex flex-row gap-2 items-center justify-start mt-[13px] w-full cursor-pointer"
            onClick={() => navigate("/productdetail")}
          >
            <Text
              className="text-base text-black-900"
              size="txtMohrRoundedAltMedium16"
            >
              {props?.discountedPrice}
            </Text>
            <Text
              className="line-through text-gray-700 text-sm"
              size="txtMohrRoundedAltRegular14"
            >
              {props?.originalPrice}
            </Text>
          </div>
          {!CheckUomExistInCart() && (
            <div className="flex flex-col items-center justify-center mt-5 rounded w-full">
              <Button
                className="border border-black-900 border-solid text-black-900 flex flex-row gap-2 items-center justify-center pl-4 sm:pr-5 pr-6 py-3 rounded w-full"
                hover={true}
                hoverclass="bg-black-900"
                onClick={() => {
                  handelAddToCart();
                }}
              >
                <Img
                  className="h-5 w-5 btn-icon"
                  src="/images/img_mdicart.svg"
                  alt="mdicart"
                />
                <Text
                  className="text-base text-center w-auto"
                  size="txtMohrRoundedAltMedium16"
                >
                  {t("addToCart")}
                </Text>
              </Button>
            </div>
          )}

          {CheckUomExistInCart() && (
            <div className="border border-black-900 border-solid bg-black-900 flex flex-col items-center justify-center mt-5 rounded w-full">
              <div className="flex flex-row gap-2 items-center justify-center pl-4 sm:pr-5 pr-6 py-3 rounded w-full">
                <HtmlTooltip
                  placement="bottom-start"
                  open={
                    openTooltip?.status && openTooltip?.id == main_product_id
                  }
                  arrow
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
                        changeQuy(main_product_id, "subtract");
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
                  {CheckUomExistInCart()?.quantity}
                </Text>
                <Img
                  className="h-5 w-5 cursor-pointer"
                  src="/images/add-white.svg"
                  alt="add"
                  onClick={() => {
                    changeQuy(main_product_id, "add");
                    setRepeatOrderOpen(true);
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {AddToCartOpen === true ? (
        <AddToCart closepopup={setAddToCartOpen} productId={props?.productId} />
      ) : null}

      {RepeatOrderOpen === true ? (
        <RepeatOrder
          closepopup={setRepeatOrderOpen}
          cartIds={incrementQty}
          cartData={cartData}
        />
      ) : null}
    </>
  );
};

ProductCartCardBox.defaultProps = {
  productimage: "",
  productSortingBox: "",
  productsorting: "",
  productRatingBox: "",
  productrating: "",
  productName: "",
  discountedPrice: "",
  originalPrice: "",
  buttonAddToCart: "",
  buttonAddRemoveProduct: "",
};

export default ProductCartCardBox;
