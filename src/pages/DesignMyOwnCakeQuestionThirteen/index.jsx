import { useState } from "react";
import { Img, Input, List, Text } from "components";
import DesignMyOwnCakeQuestionOneHeader from "components/DesignMyOwnCakeQuestionOneHeader";
import Footer1 from "components/Footer1";
import { useTranslation } from "react-i18next";
import StepProgress from "components/StepProgress";
import { InputAdornment } from "@mui/material";
const DesignMyOwnCakeQuestionThirteenPage = () => {
  const { t } = useTranslation();
  const [selectedFile, setSelectedFile] = useState(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
  };
  return (
    <>
      <div className="bg-gray-50_02 flex flex-col items-center justify-start mx-auto w-full">
        <DesignMyOwnCakeQuestionOneHeader
          className="bg-white-A700 flex flex-row items-center justify-start p-1.5 shadow-bs w-full"
          p0="13"
          p13="13"
          exittext={t("exit")}
        />
        <div className="h-1 overflow-hidden relative w-full">
          <StepProgress totalSteps={13} activeStep={13} />
        </div>
        <div className="min-height-question sm:px-4">
          <Text
            className="mt-[37px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
            size="txtMohrRoundedAltSemiBold24"
          >
            {t("whatKindOfCakeWouldYouLikeItToResembleQuestionMark")}
          </Text>
          <div className="flex flex-row font-mohrroundedaltregular gap-2 items-start justify-center mt-[5px] w-full">
            <Text
              className="text-gray-700 text-sm"
              size="txtMohrRoundedAltRegular14"
            >
              {t("youCanSearchCakesOn")}
            </Text>
            <Img
              className="h-5 w-5"
              src="/images/img_pinterestsvg.svg"
              alt="pinterestsvg"
            />
            <a
              href="https://in.pinterest.com/search/pins/?q=custom%20cake&rs=typed"
              className="text-gray-700 text-sm underline"
              target="_blank"
              rel="noreferrer"
            >
              <Text>{t("pinterestDot")}</Text>
            </a>
          </div>
          <label className="bg-red-50_01 flex flex-col font-mohrroundedaltregular items-center justify-start mt-7 p-5 rounded max-w-[540px] w-full cursor-pointer ">
            <Img className="h-9 w-9" src="/images/img_upload.svg" alt="upload" />
            <Text
              className="mt-2.5 text-base text-black-900"
              size="txtMohrRoundedAltRegular16"
            >
              {t("uploadImage")}
            </Text>
            <Text
              className="my-[7px] text-center text-gray-700 text-xs"
              size="txtMohrRoundedAltRegular12Gray700"
            >
              {t("uploadCakeImagesInPNGSlashJPGSlashJPEGFormatDot")}
            </Text>
            <input
              type="file"
              accept="image/jpeg, image/jpg, image/png"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </label>
          <List
            className="flex-wrap flex-row gap-4 flex justify-start mt-3 max-w-[540px] w-full"
            orientation="horizontal"
          >
            <div className="h-[100px] w-[100px] relative w-full">
              <Img
                className="h-[100px] m-auto object-cover rounded-lg w-full"
                src="/images/img_rectangle17564_11.png"
                alt="rectangle19120"
              />
              <Img
                className="absolute h-5 right-[2%] top-[4%] w-5 cursor-pointer"
                src="/images/img_close_gray_900_02.svg"
                alt="close"
              />
            </div>
            <div className="h-[100px] w-[100px] relative w-full">
              <Img
                className="h-[100px] m-auto object-cover rounded-lg w-full"
                src="/images/img_rectangle17564_7.png"
                alt="rectangle19121"
              />
              <Img
                className="absolute h-5 right-[2%] top-[4%] w-5 cursor-pointer"
                src="/images/img_close_gray_900_02.svg"
                alt="close"
              />
            </div>
            <div className="h-[100px] w-[100px] relative w-full">
              <Img
                className="h-[100px] m-auto object-cover rounded-lg w-full"
                src="/images/img_rectangle17564_3.png"
                alt="rectangle19122"
              />
              <Img
                className="absolute h-5 right-[2%] top-[4%] w-5 cursor-pointer"
                src="/images/img_close_gray_900_02.svg"
                alt="close"
              />
            </div>
          </List>
          <Text
            className="mt-[33px] text-gray-700 text-sm"
            size="txtMohrRoundedAltRegular14"
          >
            {t("orPasteAReferenceLinkForYourCustomCake")}
          </Text>
          <div className="mt-5 max-w-[540px] w-full mx-auto">
            <Input
              placeholder="Paste a reference link"
              startAdornment={
                <InputAdornment position="start">
                  <Img
                    className="h-6 w-6 cursor-pointer"
                    src="/images/insert_link.svg"
                    alt="play"
                  />
                </InputAdornment>
              }
            ></Input>
          </div>
        </div>
        <Footer1 className="bg-white-A700 flex font-mohrroundedaltmedium items-center justify-center mt-[32px] md:px-4 shadow-bs w-full" />
      </div>
    </>
  );
};

export default DesignMyOwnCakeQuestionThirteenPage;