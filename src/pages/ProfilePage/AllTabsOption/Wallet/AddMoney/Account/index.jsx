import { useNavigate } from "react-router-dom";
import { Button, Input, Text } from "components";
import { useTranslation } from "react-i18next";
import { DefaultMoney } from "./DefaultMoney";
const Account = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <div className="relative flex flex-col w-full">
        <div className="flex flex-col gap-1 items-start justify-start">
          <Text className="text-base text-black-900 font-mohrroundedaltmedium">
            {t("addMoneyToWallet")}
          </Text>
          <Text className="text-gray-700 text-sm font-mohrroundedaltregular w-[80%] xs:w-full">
            {t("enterTheAmountYouWantToAddToYourWallet")}
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start w-full mt-7 mb-[0px]">
          <div className="w-full max-w-[340px] start-padding">
            <Input
              className="w-full"
              placeholder="100.00"
              startAdornment={
                <Text className="text-black-900 text-sm font-mohrroundedaltregular mr-2 rtl:mr-0 rtl:ml-2">
                  {t("sar")}
                </Text>
              }
            />
          </div>
          <div className="flex w-full gap-3 flex-wrap -mt-2">
            <DefaultMoney
              label="+100"
              name="default"
              className="w-auto"
              id="money-1"
            />
            <DefaultMoney
              label="+200"
              name="default"
              className="w-auto"
              id="money-2"
            />
            <DefaultMoney
              label="+300"
              name="default"
              className="w-auto"
              id="money-3"
            />
            <DefaultMoney
              label="+400"
              name="default"
              className="w-auto"
              id="money-4"
            />
            <DefaultMoney
              label="+500"
              name="default"
              className="w-auto"
              id="money-5"
            />
          </div>
        </div>
        <div className="flex items-start justify-start xs:justify-center pt-[30px] gap-4 mb-[18px] xs:flex-wrap">
          <Button
            className="flex-1 max-w-[280px] xs:text-sm xs:whitespace-nowrap"
            size="md"
            variant="FillBlack"
            hover={true}
            hoverclass="bg-white-A700"
          >
            {t("proceedToAdd")}({t("sar")} 100.00)
          </Button>
          <Button
            className="w-auto min-w-[92px] xs:text-sm"
            size="md"
            variant="OutlineBlack"
            hover={true}
            hoverclass="bg-black-900"
          >
            {t("cancel")}
          </Button>
        </div>
        <div className="flex flex-col gap-4 items-center justify-start w-full mb-[0px]">
          <div className="flex flex-row md:gap-5 items-center justify-center w-full">
            <div className="flex flex-col gap-1 items-start justify-start flex-1">
              <Text className="text-base text-black-900 font-mohrroundedaltmedium">
                {t("addMoneyToWallet")}
              </Text>
              <Text className="text-black-900 text-sm font-mohrroundedaltregular w-[80%] xs:w-full">
                {t("sar")} 100.00
              </Text>
            </div>
            <Button
              className="w-auto mx-auto px-3 py-1.5 text-sm"
              size="sm"
              variant="OutlineBlack"
              hover={true}
              hoverclass="bg-black-900"
            >
              {t("change")}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;