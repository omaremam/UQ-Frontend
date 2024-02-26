import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Img,
  MobileInput,
  Input,
  Text,
  SelectBoxNew,
  SwitchCustom,
} from "components";
import { useTranslation } from "react-i18next";
import { Gift } from "popups/Gift";
import {
  addDeleteGetLocalStorage,
  storageKeys,
} from "../../../../../utils/global/localData";
import globalRequest from "../../../../../utils/global/globalRequest";
import { useDispatch, useSelector } from "react-redux";
import { changeLoader } from "../../../../../redux/reducers/loader";
import { setSnackbar } from "../../../../../redux/reducers/snackbar";
import * as APIS from "../../../../../utils/helper/Enum";
import { getAuth } from "../../../../../redux/reducers/loginData";
import {
  updateOrderData,
  getOrderData,
} from "../../../../../redux/reducers/orderData";
import * as CUSTOM from "../../../../../utils/helper/custom";
import { Checkbox } from "@mui/material";

const SendAsAGift = (props) => {
  const { occasionOptions } = props;
  const navigate = useNavigate();
  const orderData = useSelector(getOrderData);
  const auth = useSelector(getAuth);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [giftOpen, setgiftOpen] = useState(false);
  const [errors, setErrors] = useState([]);
  const [cardForm, setCardForm] = useState({
    sender_name: "",
    recipient_name: "",
    country_code: "+966",
    mobile_no: "",
    email: "",
    occasion_id: 0,
    message: "",
    link: "",
    is_show: 0,
  });
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [options, setOptions] = useState([]);
  const GiftOpenclick = () => {
    setgiftOpen(true);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };

  useEffect(() => {
    let status = true;
    if (Object.keys(validForm(cardForm)).length < 1) {
      status = false;
    }
    setDisabledBtn(status);
  }, [cardForm]);

  useEffect(()=>{
    if(orderData?.delivery_mode=='buying_for_love'){
      setCardForm(orderData?.buying_for_love);
    }
  },[orderData?.delivery_mode_show])

  const validForm = (data) => {
    let error = {};
    if (data?.mobile_no) {
      if (data?.mobile_no.length != 9) {
        error.mobile_no = t("mobile_no_length_error");
      }
    } else {
      error.mobile_no = t("mobile_no_required");
    }
    if (!data?.recipient_name) {
      error.recipient_name = t("recipient_name_required");
    }
    if (!data?.sender_name) {
      error.sender_name = t("sender_name_required");
    }

    if (!data?.occasion_id || data?.occasion_id == 0) {
      error.occasion_id = t("occasion_is_required");
    }
    if (data?.email) {
      if (!CUSTOM.isValidField(data?.email, "email")) {
        error.email = t("email_name_required");
      }
    } else {
      error.email = t("email_name_required");
    }
    if (!data?.message) {
      error.message = t("last_name_required");
    }
    if (!data?.link) {
      error.link = t("url_is_required");
    } else {
      if (!CUSTOM.isValidField(data?.link, "url")) {
        error.link = t("url_is_required");
      }
    }
    return error;
  };

  /*
   * set address data
   */
  const deliverHear = () => {
    dispatch(
      updateOrderData({
        ...orderData,
        delivery_mode_show: "hide",
        home_office: {},
        buying_for_love: cardForm,
        pageStep:4,
        delivery_mode: "buying_for_love",
      })
    );
  };

  const saveGiftData = () => {
    if (Object.keys(validForm(cardForm)).length < 1) {
      deliverHear();
    }
  };


  return (
    <>
      <div className="mt-2.5 w-full">
        <Text className="text-base text-black-900 font-mohrroundedaltmedium mb-6">
          {t("sendAsAGift")}
        </Text>
        <div className="w-full max-w-[620px]">
          <div className="bg-light_blue-50 flex flex-row gap-3 items-center justify-start p-3 my-6 rounded w-full">
            <Img
              className="h-6 ml-2 rtl:ml-0 rtl:mr-2 sm:ml-[0] w-6"
              src="/images/img_antdesigninfo_black_900.svg"
              alt="antdesigninfo"
            />
            <Text className="leading-4 text-black-900 text-xs w-full font-mohrroundedaltregular max-w-[80%]">
              {t(
                "onlyTheRecipientMayChooseTheDeliveryDateTimeAndPlaceWhenGivingTheseItemsAsGift"
              )}
            </Text>
          </div>
          <div className="w-full flex flex-row gap-x-5 xs:flex-col">
            <Input
              required
              label={t("recipientName")}
              value={cardForm?.recipient_name}
              onChange={(e) => {
                setCardForm({
                  ...cardForm,
                  recipient_name: CUSTOM.strFormat(e.target.value, "max:50"),
                });
              }}
            />
            <MobileInput
              required
              label={t("whatsappMobileNumber")}
              value={cardForm?.mobile_no}
              onChange={(e) => {
                setCardForm({
                  ...cardForm,
                  mobile_no: CUSTOM.strFormat(e.target.value, "max:9|number"),
                });
              }}
            />
          </div>
          <div className="w-full flex flex-row gap-x-5 xs:flex-col">
            <Input
              required
              label={t("email")}
              value={cardForm?.email}
              onChange={(e) => {
                setCardForm({
                  ...cardForm,
                  email: CUSTOM.strFormat(e.target.value, "max:100"),
                });
              }}
            />
            <SelectBoxNew
              required
              options={occasionOptions}
              label={t("occasion*")}
              value={cardForm?.occasion_id}
              onChange={(e) => {
                setCardForm({
                  ...cardForm,
                  occasion_id: e.target.value,
                });
              }}
            />
          </div>
          <div className="w-full flex flex-row gap-x-5 xs:flex-col">
            <Input
              required
              multiline
              minRows={3}
              value={cardForm?.message}
              label={t("typeYourCardMessageHere")}
              onChange={(e) => {
                setCardForm({
                  ...cardForm,
                  message: CUSTOM.strFormat(e.target.value, "max:180"),
                });
              }}
            />
          </div>
          <div className="w-full flex flex-row items-center gap-x-5 mb-6">
          <Checkbox   
            checked={cardForm?.is_show==1} 
            onChange={(e) => {
              if (e.target.checked) {
                //alert(1);
                setCardForm({ ...cardForm, is_show: 1 });
              } else {
                setCardForm({ ...cardForm, is_show: 0 });
              }
            }}
           />
            <Text className="text-base text-black-900 font-mohrroundedaltmedium  ">
              {t("dontshownameoncart")}
            </Text>
            {/* <SwitchCustom
              checked="false"
              onChange={(e) => {
                alert();
                // if (e.target.checked) {
                //   setCardForm({ ...cardForm, is_show: 1 });
                // } else {
                //   setCardForm({ ...cardForm, is_show: 0 });
                // }
              }}
            /> */}
          </div>
          <div className="w-full flex flex-row gap-x-5 xs:flex-col">
            <Input
              required
              label={t("senderName")}
              value={cardForm?.sender_name}
              onChange={(e) => {
                setCardForm({
                  ...cardForm,
                  sender_name: CUSTOM.strFormat(e.target.value, "max:50"),
                });
              }}
            />
          </div>
          <div className="w-full flex flex-row gap-x-5 xs:flex-col">
            <Text className="text-base text-black-900 font-mohrroundedaltmedium mt-2">
              {t("shareYourFeelingsWithA")}
            </Text>
          </div>
          <div className="w-full flex flex-row gap-x-5 mt-3 xs:flex-col">
            <Input
              startAdornment={
                <Img
                  className="mr-3 rtl:mr-0 rtl:ml-3 mt-1"
                  src="/images/img_iconeditorinsertlink.svg"
                  alt=""
                />
              }
              value={cardForm?.link}
              onChange={(e) => {
                setCardForm({
                  ...cardForm,
                  link: CUSTOM.strFormat(e.target.value, "max:500"),
                });
              }}
              placeholder={t("pasteALinkToASongOrVideo")}
            />
          </div>
          <div className="w-full max-w-[350px] mt-3 flex flex-row gap-4 mb-[18px]">
            <Button
              className="flex-1 mx-auto"
              size="lg"
              variant="FillBlack"
              hover={true}
              hoverclass="bg-white-A700"
              disabled={disabledBtn}
              onClick={(e) => {
                saveGiftData();
              }}
            >
              {t("continue")}
            </Button>
            <Button
              className="w-auto min-w-[140px] mx-auto xs:min-w-[unset] xs:w-full"
              size="lg"
              variant="OutlineBlack"
              onClick={GiftOpenclick}
              disabled={disabledBtn}
              hover={true}
              hoverclass="bg-black-900"
            >
              {t("preview")}
            </Button>
          </div>
        </div>
      </div>
      {giftOpen === true ? <Gift closepopup={setgiftOpen} Giftdata={cardForm} /> : null}
    </>
  );
};

export default SendAsAGift;
