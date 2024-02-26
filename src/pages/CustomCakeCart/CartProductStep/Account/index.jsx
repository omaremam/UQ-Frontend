import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";
import { useTranslation } from "react-i18next";
import { ReplaceItems } from "popups/ReplaceItems";
const Account = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [ReplaceItemsOpen, setReplaceItemsOpen] = React.useState(false);
  const handelsetReplaceItemsOpen = () => {
    setReplaceItemsOpen(true);
    document.body.classList.add("overflow-hidden");
    document.getElementById("header-box").classList.add("relative");
  };

  return (
    <>
      <div className="relative flex flex-col w-full">
        {/* After login Up User */}
        <div className="flex flex-col gap-4 items-center justify-start w-full mb-[18px]">
          <div className="flex flex-row md:gap-5 items-center justify-start w-full">
            <div className="flex flex-col gap-1 items-start justify-start flex-1">
              <Text className="text-base text-black-900 font-mohrroundedaltmedium">
                {t("account")}
              </Text>
              <div className="flex gap-1 flex-row items-center">
                <Text className="text-black-900 text-sm mohrroundedaltregular">
                  +966 9876543210
                </Text>
                <Img
                  className="h-6 w-6"
                  src="/images/img_checkmark_teal_400.svg"
                  alt="checkmark"
                />
              </div>
            </div>
            <Button
              className="w-auto mx-auto px-3 py-1.5 text-sm"
              size="sm"
              variant="OutlineBlack"
            >
              {t("change")}
            </Button>
          </div>
          <div className="common-pointer bg-light_blue-50 flex flex-col items-center justify-start py-3 px-6 xs:px-3 w-full">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-col gap-1 items-start justify-start">
                <Text
                  className="text-base text-black-900 font-mohrroundedaltmedium"
                  size="txtMohrRoundedAltMedium16"
                >
                  {t("yourDetails")}
                </Text>
                <Text className="text-black-900 text-sm mohrroundedaltregular">
                  Jacob James | +966 9876543210
                </Text>
              </div>
              <Img
                className="h-6 w-6 rtl:rotate-180"
                src="/images/img_arrowright.svg"
                alt="arrowright"
              />
            </div>
          </div>
        </div>
        {/* After login Up User */}
      </div>
      {ReplaceItemsOpen === true ? (
        <ReplaceItems closepopup={setReplaceItemsOpen} />
      ) : null}
    </>
  );
};

export default Account;