import { Button, Img, Line, List, Text } from "components";
import DesignMyOwnCakeQuestionOneHeader from "components/DesignMyOwnCakeQuestionOneHeader";
import { useTranslation } from "react-i18next";
const DesignMyOwnCakeSummaryPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-gray-50_02 flex flex-col font-mohrroundedaltmedium gap-9 items-start justify-start mx-auto pb-6 w-full">
        <div className="flex flex-col items-center w-full">
          <DesignMyOwnCakeQuestionOneHeader
            className="bg-white-A700 flex flex-row items-center justify-start p-1.5 shadow-bs w-full"
            p0105=""
            exittext={t("exit")}
          />
          <div className="h-1 md:px-5 relative w-full">
            <Line className="bg-gray-300 h-1 m-auto w-full" />
            <Line className="absolute bg-pink-800 h-1 inset-[0] justify-center m-auto w-full" />
          </div>
        </div>
        <div className="flex flex-col items-end md:px-10 sm:px-5 px-[153px] w-full">
          <div className="sm:h-auto md:h-[867px] h-[921px] relative w-[84%] md:w-full">
            <div className="absolute sm:relative bg-white-A700 border border-gray-300 border-solid flex flex-col h-max inset-y-[0] items-center justify-start left-[3%] my-auto p-[33px] sm:px-5 rounded w-3/4 sm:w-[94%]">
              <div className="flex flex-col items-center justify-start mb-2 w-[95%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtMohrRoundedAltSemiBold24"
                >
                  {t("customCakeSummary")}
                </Text>
                <Text
                  className="leading-[20.00px] mt-[13px] text-black-900 text-center text-sm w-[86%] sm:w-full"
                  size="txtMohrRoundedAltRegular14Black900"
                >
                  {t(
                    "youCanEitherSubmitAndPlaceTheOrderByDoingThePaymentOrElseSaveYourCakeForFuturePurposeDot"
                  )}
                </Text>
                <div className="flex flex-col font-mohrroundedaltmedium items-start justify-start mt-[30px] w-full">
                  <List
                    className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 grid-cols-2 justify-center w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-light_blue-50 flex flex-1 flex-row gap-4 items-center justify-start sm:ml-[0] p-5 rounded w-full">
                      <Img
                        className="h-8 w-8"
                        src="/images/img_clock_black_900.svg"
                        alt="clock"
                      />
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <Text
                          className="text-base text-black-900 w-auto"
                          size="txtMohrRoundedAltMedium16"
                        >
                          {t("estimatedPrepDotTimeColon")}
                        </Text>
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtMohrRoundedAltRegular16Gray700"
                        >
                          2 {t("hrsLowerCase")}
                        </Text>
                      </div>
                    </div>
                    <div className="bg-light_blue-50 flex flex-1 flex-row gap-4 items-center justify-start sm:ml-[0] p-5 rounded w-full">
                      <Img
                        className="h-8 w-8"
                        src="/images/img_television.svg"
                        alt="television"
                      />
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <Text
                          className="text-base text-black-900 w-auto"
                          size="txtMohrRoundedAltMedium16"
                        >
                          {t("stimatedPriceColon")}
                        </Text>
                        <Text
                          className="text-base text-gray-700 w-auto"
                          size="txtMohrRoundedAltRegular16Gray700"
                        >
                          {t("sar")} 300.00
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-col gap-6 h-[304px] md:h-auto items-start justify-between mt-8 w-auto sm:w-full">
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtMohrRoundedAltMedium16"
                      >
                        {t("choiceOfFlavorColon")}
                      </Text>
                      <Text
                        className="text-base text-gray-700 w-auto"
                        size="txtMohrRoundedAltRegular16Gray700"
                      >
                        {t("truffleCake")}
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtMohrRoundedAltMedium16"
                      >
                        {t("weightOfCakeColon")}
                      </Text>
                      <Text
                        className="text-base text-gray-700 w-auto"
                        size="txtMohrRoundedAltRegular16Gray700"
                      >
                        1 {t("kg")}
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtMohrRoundedAltMedium16"
                      >
                        {t("choiceOfIngredientsColon")}
                      </Text>
                      <Text
                        className="text-base text-gray-700 w-auto"
                        size="txtMohrRoundedAltRegular16Gray700"
                      >
                        {t("confectioneryFondantSugarPasteGelsAndGlazes")}
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtMohrRoundedAltMedium16"
                      >
                        {t("choiceOfChocolatesColon")}
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[415px] md:max-w-full text-base text-gray-700"
                        size="txtMohrRoundedAltRegular16Gray700"
                      >
                        {t("chocoChipsChocolateAdditivesCocoaPowderCouverture")}
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray-300 h-px mt-7 w-full" />
                  <div className="flex flex-col gap-3.5 items-start justify-start mt-[30px] w-[97%] md:w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtMohrRoundedAltMedium16"
                    >
                      {t("referenceImageSlashLink")}
                    </Text>
                    <div className="flex flex-row gap-4 items-start justify-start w-auto sm:w-full">
                      <Img
                        className="h-[100px] md:h-auto object-cover rounded-lg w-[100px] sm:w-[75px] sm:h-[75px]"
                        src="/images/img_rectangle17564_11.png"
                        alt="rectangle19120"
                      />
                      <Img
                        className="h-[100px] md:h-auto object-cover rounded-lg w-[100px] sm:w-[75px] sm:h-[75px]"
                        src="/images/img_rectangle17564_7.png"
                        alt="rectangle19121"
                      />
                      <Img
                        className="h-[100px] md:h-auto object-cover rounded-lg w-[100px] sm:w-[75px] sm:h-[75px]"
                        src="/images/img_rectangle17564_3.png"
                        alt="rectangle19122"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-center md:ml-[0] ml-[70px] mt-12 w-3/4 md:w-full">
                    <Button className="border border-black-900 border-solid cursor-pointer h-12 py-2.5 rounded text-base text-black-900 text-center w-[200px]">
                      {t("saveForLater")}
                    </Button>
                    <Button className="bg-black-900 cursor-pointer h-12 py-2.5 rounded text-base text-center text-white-A700 w-[200px]">
                      {t("placeOrder")}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute bottom-[0] h-[270px] object-cover right-[0] rtl:right-[auto] rtl:left-[0] w-[27%] sm:w-[20%] sm:h-auto"
              src="/images/img_birthdaycake.png"
              alt="birthdaycake"
            />
            <Img
              className="absolute h-11 right-[20%] sm:right-[-2%] top-[3%] w-11"
              src="/images/img_clock_yellow_700.svg"
              alt="clock"
            />
            <Img
              className="absolute h-14 left-[0] top-[10%]"
              src="/images/img_vector.svg"
              alt="vector"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignMyOwnCakeSummaryPage;
