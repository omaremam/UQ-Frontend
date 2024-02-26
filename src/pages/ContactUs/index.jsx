import { Button, Img, Input, Text } from "components";
import { useTranslation } from "react-i18next";
import Footer from "components/Footer";
import Header from "components/Header";
const ContactUsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mohrroundedaltregular items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header className="bg-white-A700 flex md:flex-col flex-row font-mohrroundedaltmedium md:gap-5 items-center justify-center md:px-5 shadow-bs w-full" />
          <div
            className="flex flex-col items-center justify-start w-full h-[350px] bg-no-repeat min-h-[60px] pt-[108px] sm:!bg-cover"
            style={{
              backgroundImage: "url('images/contact-banner.png')",
              backgroundSize: "100% 100%",
            }}
          >
            <div className="flex flex-col gap-9 items-start justify-start md:w-[80%] w-[1110px] mx-auto">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 rtl:text-right"
                size="txtMohrRoundedAltBold40"
              >
                {t("contactUs")}
              </Text>
              <Text
                className="leading-[24.00px] text-base text-black-900 w-[60%] sm:w-[100%] rtl:text-right"
                size="txtMohrRoundedAltRegular16"
              >
                <>
                  {t(
                    "hereYouWillFindArticlesOnTheLatestWellnessTrendsAndTopicsDeliciousPlantBasedRecipesTipTricksAndMuchMoreExclamationMark"
                  )}
                </>
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-mohrroundedaltmedium gap-[30px] items-center justify-start mx-auto mt-[100px] mb-[100px] md:px-5 w-[1110px] md:w-full">
            <div className="bg-gray-50_02 flex flex-col items-start justify-center p-14 md:px-10 sm:px-5 rounded w-[54%] md:w-full">
              <div className="flex flex-col gap-[42px] items-start justify-start mb-2 mt-1 w-[92%] md:w-full">
                <div className="flex flex-col gap-7 h-[282px] md:h-auto items-start justify-center ltr:ml-1 rtl:mr-1 md:ml-[0] w-auto sm:w-full">
                  <div className="flex flex-col gap-[22px] items-start justify-start w-[388px] sm:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto rtl:text-right"
                      size="txtMohrRoundedAltSemiBold24"
                    >
                      {t("contactInformation")}
                    </Text>
                    <Text
                      className="leading-[24.00px] max-w-[388px] md:max-w-full text-base text-gray-700 rtl:text-right"
                      size="txtMohrRoundedAltRegular16Gray70001"
                    >
                      {t(
                        "bringTheTableWinSurvivalStrategiesEnsureProactiveDominationTheEndOfTheDayGoingRealTimesMultipleTouchPointsDot"
                      )}
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-row gap-3 items-center justify-between w-full">
                        <Button className="bg-red-100 flex h-8 items-center justify-center p-[9px] rounded-[50%] w-8">
                          <Img
                            src="/images/location-red.svg"
                            alt="location_One"
                          />
                        </Button>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-black-900 text-sm"
                            size="txtMohrRoundedAltMedium14"
                          >
                            <>Riverside 25, San Francisco, California</>
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-[71%] md:w-full">
                        <Button className="bg-red-100 flex h-8 items-center justify-center p-[9px] rounded-[50%] w-8">
                          <Img src="/images/message-red.svg" alt="mail" />
                        </Button>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-black-900 text-sm"
                            size="txtMohrRoundedAltMedium14"
                          >
                            evanmattew@mail.com
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-[46%] md:w-full">
                        <Button className="bg-red-100 flex h-8 items-center justify-center p-2.5 rounded-[50%] w-8">
                          <Img
                            className="h-3"
                            src="/images/call-red.svg"
                            alt="call"
                          />
                        </Button>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-black-900 text-sm"
                            size="txtMohrRoundedAltMedium14"
                          >
                            800-234-567
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-5 items-center justify-start w-[49%] md:w-full">
                  <div className="flex flex-col h-[50px] items-center justify-start w-[50px]">
                    <Button className="bg-black-900 flex h-[50px] items-center justify-center p-[11px] rounded-[50%] w-[50px]">
                      <Img
                        src="/images/img_rifacebookfill.svg"
                        alt="rifacebookfill"
                      />
                    </Button>
                  </div>
                  <Button className="bg-black-900 flex h-[50px] items-center justify-center p-[11px] rounded-[50%] w-[50px]">
                    <Img
                      src="/images/img_riinstagramfill.svg"
                      alt="riinstagramfill"
                    />
                  </Button>
                  <div className="flex flex-col h-[50px] items-center justify-start w-[50px]">
                    <Button className="bg-black-900 flex h-[50px] items-center justify-center p-[11px] rounded-[50%] w-[50px]">
                      <Img src="/images/img_mditwitter.svg" alt="mditwitter" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[44%] md:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center mb-8"
                size="txtMohrRoundedAltBold40"
              >
                {t("haveAQuestionQuestionMark")}
              </Text>
              <div className="w-[445px] md:w-[100%]">
                <Input required label={t("name")} />
              </div>
              <div className="w-[445px] md:w-[100%]">
                <Input required label={t("mobile")} />
              </div>
              <div className="w-[445px] md:w-[100%]">
                <Input required multiline minRows={1} label={t("message")} />
              </div>
              <Button className="cursor-pointer font-mohrroundedaltmedium h-12 mt-10 py-2.5 rounded text-base text-center text-white-A700 bg-black-900 w-40">
                {t("submit")}
              </Button>
            </div>
          </div>
          <Footer className="flex font-mohrroundedaltregular items-center justify-center mt-[149px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;