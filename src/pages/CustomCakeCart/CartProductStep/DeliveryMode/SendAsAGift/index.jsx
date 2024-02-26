import React, { useState } from "react";
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
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
const SendAsAGift = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [giftOpen, setgiftOpen] = useState(false);
  const GiftOpenclick = () => {
    setgiftOpen(true);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
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
            <Input required label={t("recipientName")} />
            <MobileInput required label={t("whatsappMobileNumber")} />
          </div>
          <div className="w-full flex flex-row gap-x-5 xs:flex-col">
            <Input required label={t("email")} />
            <SelectBoxNew required options={options} label={t("occasion*")} />
          </div>
          <div className="w-full flex flex-row gap-x-5 xs:flex-col">
            <Input
              required
              multiline
              minRows={3}
              label={t("typeYourCardMessageHere")}
            />
          </div>
          <div className="w-full flex flex-row items-center justify-between gap-x-5 mb-6">
            <Text className="text-base text-black-900 font-mohrroundedaltmedium  ">
              {t("sendAnonymously")}
            </Text>
            <SwitchCustom />
          </div>
          <div className="w-full flex flex-row gap-x-5 xs:flex-col">
            <Input required label={t("senderName")} />
            <MobileInput required label={t("mobileNumber")} />
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
              placeholder={t("pasteALinkToASongOrVideo")}
            />
          </div>
          <div className="w-full max-w-[350px] mt-3 flex flex-row gap-4 mb-[18px]">
            <Button className="flex-1 mx-auto" size="lg" variant="FillBlack">
              {t("continue")}
            </Button>
            <Button
              className="w-auto min-w-[140px] mx-auto xs:min-w-[unset] xs:w-full"
              size="lg"
              variant="OutlineBlack"
              onClick={GiftOpenclick}
            >
              {t("preview")}
            </Button>
          </div>
        </div>
      </div>
      {giftOpen === true ? <Gift closepopup={setgiftOpen} /> : null}
    </>
  );
};

export default SendAsAGift;