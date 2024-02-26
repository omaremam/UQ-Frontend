import React from "react";
import { Img, List, PagerIndicator, Slider, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import HomeBlog from "components/HomeBlog";
// Importing localization strings
import { useTranslation } from "react-i18next";
import Breadcrumb from "components/Breadcrumb";
const BlogDetailPage = () => {
  const { t } = useTranslation();
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col justify-start w-full">
          <Header className="bg-white-A700 flex md:flex-col flex-row font-mohrroundedaltmedium md:gap-5 items-center justify-center md:px-5 shadow-bs w-full" />
          <div className="flex flex-col items-center justify-start w-full max-w-[1110px] mx-auto">
            <Breadcrumb />
          </div>
          <div className="relative flex sm:flex-col flex-row font-mohrroundedaltregular gap-[30px] items-start justify-start max-w-[1110px] mx-auto mt-[30px] md:px-4 w-full">
            <div className="flex flex-col items-start justify-start w-auto top-[30px] md:w-[40%] xs:w-full">
              <Img
                className="h-[604px] md:h-auto md:w-full object-cover rounded-tl-lg rounded-tr-lg w-full"
                src="/images/img_rectangle17564_17.png"
                alt="rectangle17564"
              />
            </div>
            <div className="flex flex-1 flex-col items-start justify-start md:mt-0 w-full">
              <Text
                className="leading-[32.00px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-full rtl:text-right"
                size="txtMohrRoundedAltSemiBold24"
              >
                {t("howToChooseFlowersAccordingToTheBirthdayMonth")}
              </Text>
              <div className="flex flex-row font-mohrroundedaltregular items-start rtl:flex-row-reverse justify-start mt-5 w-[38%] md:w-full">
                <Img
                  className="h-6 md:h-auto object-cover w-6"
                  src="/images/img_notofire.png"
                  alt="notofire"
                />
                <Text
                  className="ltr:ml-1 rtl:mr-1 mt-0.5 text-black-900 text-sm"
                  size="txtMohrRoundedAltRegular14Black900"
                >
                  2.6k {t("views")}
                </Text>
                <Text
                  className="ml-2 rtl:ml-0 rtl:mr-2 mt-[3px] text-gray-700 text-sm"
                  size="txtMohrRoundedAltRegular14"
                >
                  |
                </Text>
                <Img
                  className="h-6 ml-[9px] w-6"
                  src="/images/img_mdiheart.svg"
                  alt="mdiheart"
                />
                <Text
                  className="ltr:ml-1 rtl:mr-1 mt-0.5 text-black-900 text-sm"
                  size="txtMohrRoundedAltRegular14Black900"
                >
                  1k {t("likes")}
                </Text>
              </div>
              <Text
                className="leading-[24.00px] mt-8 text-gray-700 text-sm w-full rtl:text-right"
                size="txtMohrRoundedAltRegular14"
              >
                {t(
                  "choosingAScintillatingBunchOfFreshBloomsAsABirthdaySurpriseIsABafflingTaskEitherYouSelectARandomBunchOrYouCanChooseTheOneThatConveysYourSentimentsAndWillDropJawsDot"
                )}
              </Text>
              <Text
                className="mt-[42px] text-base text-black-900 rtl:text-right"
                size="txtMohrRoundedAltMedium16"
              >
                {t("JanuaryDashCarnations")}
              </Text>
              <Text
                className="leading-[24.00px] mt-3.5 text-gray-700 text-sm w-full rtl:text-right"
                size="txtMohrRoundedAltRegular14"
              >
                <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                  {t("theBirthFlowerForThoseWhoAreBornInJanuaryIs")}
                </span>
                <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                  {t("carnations")}.
                </span>
                <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                  {t(
                    "theyRepresentAdmirationDeepLoveAndAffectionDitTheyBlossomInWintersAndHenceMakeForTheBestFlowersAccordingToTheBirthDateOrMonthOfTheRecipientDot"
                  )}
                </span>
              </Text>
              <Text
                className="mt-[42px] text-base text-black-900 rtl:text-right"
                size="txtMohrRoundedAltMedium16"
              >
                {t("february")} - {t("violet")}
              </Text>
              <Text
                className="leading-[24.00px] mt-3.5 text-gray-700 text-sm w-full rtl:text-right"
                size="txtMohrRoundedAltRegular14"
              >
                <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                  {t("violetsAreTheMostBeautifulBloomsAndAreOfficiallyThe")}
                </span>
                <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                  {t("birthdayFlowers")}
                </span>
                <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                  {t(
                    "forFebruaryBornsDotTheySymboliseModestyAndFaithfulnessDotYouCanSurpriseTheBirthdayGirlOrBoyWithTheseGorgeousPurpleHuedFlowersAndConveyYourLoveDot"
                  )}
                </span>
              </Text>
              <Text
                className="mt-[42px] text-base text-black-900 rtl:text-right"
                size="txtMohrRoundedAltMedium16"
              >
                {t("march")}- {t("daffodil")}
              </Text>
              <Text
                className="leading-[24.00px]  mt-3.5 text-gray-700 text-sm w-full rtl:text-right"
                size="txtMohrRoundedAltRegular14"
              >
                {t(
                  "daffodilsAreASymbolOfNewBeginningsAndTheyRepresentTheBeginningOfSpringIfYouAreOnAHuntForThePerfectFlowerArrangementsForMarchBornsThenPickTheOneWhichIsMadeOfDaffodilsDot"
                )}
              </Text>
              <Text
                className=" mt-[42px] text-base text-black-900 rtl:text-right"
                size="txtMohrRoundedAltMedium16"
              >
                {t("april")}- {t("daisy")}
              </Text>
              <Text
                className="leading-[24.00px]  mt-3.5 text-gray-700 text-sm w-full rtl:text-right"
                size="txtMohrRoundedAltRegular14"
              >
                {t(
                  "forAllThePeopleWhoAreBornInAprilYouMustGetABunchOfDaisiesTheseBloomsRepresentInnocencePurityAndLoveDot"
                )}
              </Text>
              <Text
                className=" mt-[42px] text-base text-black-900 rtl:text-right"
                size="txtMohrRoundedAltMedium16"
              >
                {t("May")}- {t("lily")}
              </Text>
              <Text
                className="leading-[24.00px]  mt-3.5 text-gray-700 text-sm w-full rtl:text-right"
                size="txtMohrRoundedAltRegular14"
              >
                <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                  {t(
                    "liliesAreTheBirthdayFlowersForTheMayBornsLiliesStandForMotherlyLoveAndSweetnessTheseWillMakeForTheBestBirthdaySurpriseOrMotherIsDayGiftForYourMotherAsTheyAreAlsoTheMostPopular"
                  )}
                </span>
                <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                  {t("flowersForMotherIsDay")}
                </span>
                <span className="text-gray-700 font-mohrroundedaltregular text-left font-normal rtl:text-right">
                  .
                </span>
              </Text>
              <Text
                className=" mt-10 text-base text-black-900 rtl:text-right"
                size="txtMohrRoundedAltMedium16"
              >
                {t("june")}- {t("rose")}
              </Text>
              <Text
                className="leading-[24.00px]  mt-4 text-gray-700 text-sm w-full rtl:text-right"
                size="txtMohrRoundedAltRegular14"
              >
                {t(
                  "rosesAreFascinatingFlowersAndAreLikedByAllTheJuneBornsAreLuckyAsTheirBirthdayFlowerIsTheUniversalFavouriteLoveBeautyFaithAndHonourAreRepresentedByRosesDot"
                )}
              </Text>
            </div>
          </div>
          <div className="bg-gray-50_02 flex flex-col font-mohrroundedaltsemibold items-center justify-end mt-[107px] p-[60px] md:px-4 w-full">
            <div className="flex flex-col gap-[31px] items-center justify-start max-w-[1110px] mx-auto w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtMohrRoundedAltSemiBold24"
                >
                  {t("relatedBlogs")}
                </Text>
                <Img
                  className="h-6 mr-6 rtl:mr-0 rtl:ml-6 xs:mx-0 rtl:xs:mx-0"
                  src="/images/img_reply_black_900.svg"
                  alt="reply"
                />
              </div>
              <List className="w-full" orientation="horizontal">
                <div className="indicator-hide blog-indicator">
                  <Slider
                    autoPlay
                    arrows={false}
                    disableButtonsControls={false}
                    autoPlayInterval={2000}
                    activeIndex={sliderState}
                    responsive={{
                      0: { items: 1 },
                      550: { items: 2 },
                      768: { items: 2 },
                      992: { items: 3 },
                      1050: { items: 4 },
                    }}
                    onSlideChanged={(e) => {
                      setsliderState(e?.item);
                    }}
                    ref={sliderRef}
                    className="flex gap-[30px] max-w-[1110px] mt-[0px] mx-auto -mx-2.5 xs:mx-0 w-full"
                    items={[...Array(20)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <HomeBlog
                          className="flex flex-col items-start rtl:items-end justify-start mx-2.5 pb-1"
                          userimage="images/img_rectangle17564.png"
                        />
                      </React.Fragment>
                    ))}
                    renderDotsItem={({ isActive }) => {
                      if (isActive) {
                        return (
                          <div className="inline-block cursor-pointer h-2 bg-black-900 w-4 rounded" />
                        );
                      }
                      return (
                        <div
                          className="inline-block cursor-pointer rounded-[50%] h-2 bg-gray-300 w-2"
                          role="button"
                          tabIndex={0}
                        />
                      );
                    }}
                  />
                  <PagerIndicator
                    className="flex h-2 justify-center mt-[50px] mx-auto w-20"
                    count={5}
                    activeCss="inline-block cursor-pointer h-2 bg-black-900 w-4 rounded"
                    activeIndex={sliderState}
                    inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-gray-300 w-2"
                    sliderRef={sliderRef}
                    selectedWrapperCss="inline-block md:ml-[0] mx-[4.00px] sm:ml-[0]"
                    unselectedWrapperCss="inline-block md:ml-[0] mx-[4.00px] sm:ml-[0]"
                  />
                </div>
              </List>
            </div>
          </div>
          <Footer className="flex font-mohrroundedaltregular items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default BlogDetailPage;