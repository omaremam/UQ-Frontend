import { Button, Img, MobileInput, Input, Text } from "components";
import { useTranslation } from "react-i18next";
import { InputAdornment } from "@mui/material";
const StepsYourDetail = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="relative flex flex-col w-full">
        <Img
          className="h-[22px] absolute left-0 right-0 mt-[-30px] mx-auto"
          src="/images/img_signal.svg"
          alt="signal"
        />
        {/* login and Sign Up User */}
        <div className="flex flex-row md:gap-5 items-center justify-start w-full">
          <div className="flex flex-col gap-1 items-start justify-start">
            <Text className="text-base text-black-900 font-mohrroundedaltmedium">
              {t("yourDetails")}
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
            <Text className="text-gray-700 text-sm font-mohrroundedaltregular">
              {t("verifyMobileNumberToSubmittingTheDetails")}
            </Text>
          </div>
          <Button
            className="w-auto ltr:ml-auto rtl:mr-auto px-3 py-1.5 text-sm"
            size="sm"
            variant="OutlineBlack"
          >
            {t("change")}
          </Button>
        </div>
        {/* Sign Up User */}
        <div className="w-full max-w-[350px] pt-[30px]">
          <MobileInput required label={t("mobile")} className="w-full" />
        </div>
        <div className="flex flex-row gap-3">
          <div className="w-full max-w-[350px]">
            <Input
              required
              className="w-full mb-0"
              label={t("verificationCode")}
              endAdornment={
                <InputAdornment position="end" className="text-[12px]">
                  0000
                </InputAdornment>
              }
            />
          </div>
          <div className="w-auto">
            <Text className="text-pink-800 whitespace-nowrap font-medium font-mohrroundedaltmedium text-sm leading-6 mt-3.5">
              {t("resendOTP")}
            </Text>
          </div>
        </div>
        <div className="w-full max-w-[350px] mt-3 flex flex-row gap-4 mb-[18px]">
          <div className="w-full max-w-[224px] pt-[10px] flex flex-row gap-4 mb-[18px]">
            <Button
              className="flex-1 mx-auto bg-gray-300 border-gray-300"
              size="lg"
              variant="FillBlack"
              style={{ color: "rgba(0,0,0,0.38)" }}
            >
              {t("verify")}
            </Button>
          </div>
          <div className="w-full max-w-[224px] pt-[10px] flex flex-row gap-4 mb-[18px]">
            <Button className="flex-1 mx-auto" size="lg" variant="FillBlack">
              {t("confirm")}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepsYourDetail;
