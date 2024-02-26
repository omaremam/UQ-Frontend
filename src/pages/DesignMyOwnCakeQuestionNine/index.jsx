import { useState } from "react";
import { CheckboxCustom, List, Text } from "components";
import DesignMyOwnCakeQuestionOneHeader from "components/DesignMyOwnCakeQuestionOneHeader";
import Footer1 from "components/Footer1";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import StepProgress from "components/StepProgress";
const DesignMyOwnCakeQuestionNinePage = () => {
  const { t } = useTranslation();
  const Box = styled.div`
    /* Add the selected styles when the component is selected */
    ${({ isSelected }) =>
      isSelected &&
      ` 
    border-color: #BD0043 !important;
`}
  `;
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const handleTabClick = (boxNumber) => {
    if (selectedBoxes.includes(boxNumber)) {
      setSelectedBoxes(selectedBoxes.filter((box) => box !== boxNumber));
    } else {
      setSelectedBoxes([...selectedBoxes, boxNumber]);
    }
  };
  return (
    <>
      <div className="bg-gray-50_02 flex flex-col items-center justify-start mx-auto w-full">
        <DesignMyOwnCakeQuestionOneHeader
          className="bg-white-A700 flex flex-row items-center justify-start p-1.5 shadow-bs w-full"
          p0="09"
          p13="13"
          exittext={t("exit")}
        />
        <div className="h-1 overflow-hidden relative w-full">
          <StepProgress totalSteps={13} activeStep={9} />
        </div>
        <div className="min-height-question">
          <Text
            className="mt-9 text-2xl md:text-[22px] text-black-900 sm:text-xl"
            size="txtMohrRoundedAltSemiBold24"
          >
            {t("chooseFromChoiceOfSauce")}
          </Text>
          <Text
            className="mt-[7px] text-gray-700 text-sm"
            size="txtMohrRoundedAltRegular14"
          >
            {t("chooseUpTo")} 2 {t("optionSmallLetter")}
          </Text>
          <List
            className="flex flex-col font-mohrroundedaltregular gap-4 items-start mt-[29px] md:px-4 xs:w-[100%] w-full max-w-[540px] min-h-[54vh]"
            orientation="vertical"
          >
            <Box
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between p-4 rounded w-full cursor-pointer"
              isSelected={selectedBoxes.includes(0)}
              onClick={() => handleTabClick(0)}
            >
              <div className="flex items-center checkstyle">
                <CheckboxCustom
                  checked={selectedBoxes.includes(0)}
                  onChange={() => handleTabClick(0)}
                />
                <Text
                  className="text-base text-black-900"
                  size="txtMohrRoundedAltRegular16"
                >
                  {t("chocolate")}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center mr-[3px]">
                <Text
                  className="line-through text-gray-700 text-right text-sm"
                  size="txtMohrRoundedAltRegular14"
                >
                  70.00
                </Text>
                <Text
                  className="text-base text-black-900 text-right"
                  size="txtMohrRoundedAltRegular16"
                >
                  {t("sar")} 90.00
                </Text>
              </div>
            </Box>
            <Box
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between p-4 rounded w-full cursor-pointer"
              isSelected={selectedBoxes.includes(1)}
              onClick={() => handleTabClick(1)}
            >
              <div className="flex items-center checkstyle">
                <CheckboxCustom
                  checked={selectedBoxes.includes(1)}
                  onChange={() => handleTabClick(1)}
                />
                <Text
                  className="text-base text-black-900"
                  size="txtMohrRoundedAltRegular16"
                >
                  {t("strawberry")}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center mr-[3px]">
                <Text
                  className="line-through text-gray-700 text-right text-sm"
                  size="txtMohrRoundedAltRegular14"
                >
                  90.00
                </Text>
                <Text
                  className="text-base text-black-900 text-right"
                  size="txtMohrRoundedAltRegular16"
                >
                  {t("sar")} 70.00
                </Text>
              </div>
            </Box>
            <Box
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between p-4 rounded w-full cursor-pointer"
              isSelected={selectedBoxes.includes(2)}
              onClick={() => handleTabClick(2)}
            >
              <div className="flex items-center checkstyle">
                <CheckboxCustom
                  checked={selectedBoxes.includes(2)}
                  onChange={() => handleTabClick(2)}
                />
                <Text
                  className="text-base text-black-900"
                  size="txtMohrRoundedAltRegular16"
                >
                  {t("caramel")}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center mr-[3px]">
                <Text
                  className="line-through text-gray-700 text-right text-sm"
                  size="txtMohrRoundedAltRegular14"
                >
                  110.00
                </Text>
                <Text
                  className="text-base text-black-900 text-right"
                  size="txtMohrRoundedAltRegular16"
                >
                  {t("sar")} 90.00
                </Text>
              </div>
            </Box>
            <Box
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between p-4 rounded w-full cursor-pointer"
              isSelected={selectedBoxes.includes(3)}
              onClick={() => handleTabClick(3)}
            >
              <div className="flex items-center checkstyle">
                <CheckboxCustom
                  checked={selectedBoxes.includes(3)}
                  onChange={() => handleTabClick(3)}
                />
                <Text
                  className="text-base text-black-900"
                  size="txtMohrRoundedAltRegular16"
                >
                  {t("caramelCrunch")}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center mr-[3px]">
                <Text
                  className="line-through text-gray-700 text-right text-sm"
                  size="txtMohrRoundedAltRegular14"
                >
                  110.00
                </Text>
                <Text
                  className="text-base text-black-900 text-right"
                  size="txtMohrRoundedAltRegular16"
                >
                  {t("sar")} 90.00
                </Text>
              </div>
            </Box>
          </List>
        </div>
        <Footer1 className="bg-white-A700 flex font-mohrroundedaltmedium items-center justify-center mt-[32px] md:px-4 shadow-bs w-full" />
      </div>
    </>
  );
};

export default DesignMyOwnCakeQuestionNinePage;