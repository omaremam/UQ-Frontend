import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import HomeBlog from "components/HomeBlog";
import { useNavigate } from "react-router-dom";
// Importing localization strings
import { useTranslation } from "react-i18next";
const HomePage = () => {
  const { t } = useTranslation();
  const sliderRef = React.useRef(null);
  const navigate=useNavigate();
  const [sliderState, setsliderState] = React.useState(0);
  const [offset, setOffset] = useState(0);
  const [offsethome1, setOffsethome1] = useState(0);
  const [offsethome2, setOffsethome2] = useState(0);
  const [offset2, setOffset2] = useState(0);
  const [offset3, setOffset3] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX / 80, y: clientY / 80 });
  };
  const handleScroll = () => {
    setOffset(window.scrollY * 0.05);
    setOffsethome1(window.scrollY * 0.1);
    setOffsethome2(window.scrollY * -0.1);
    setOffset2(window.scrollY * -0.2);
    setOffset3(window.scrollY * 0.2); // Adjust the multiplier to control the parallax effect
    setScrollY(window.scrollY);
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const observer = useRef(null);
  const [animatedSections, setAnimatedSections] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [countdownValue, setCountdownValue] = useState(100); // Initial value

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const animatedElements = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target);

      setAnimatedSections((prevSections) => [...prevSections, ...animatedElements]);
    });

    const sections = document.querySelectorAll('.my-element');
    sections.forEach((section) => {
      observer.current.observe(section);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);
  useEffect(() => {
    // Calculate the new countdown value based on scroll position
    const newCountdownValue = 100 - (scrollPosition / 10); // Adjust divisor for desired sensitivity
    setCountdownValue(newCountdownValue);
  }, [scrollPosition]);
  useEffect(() => {
    animatedSections.forEach((animatedSection) => {
      animatedSection.classList.add('animation');
    });
  }, [animatedSections]);
  // const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="bg-pink-100 flex md:flex-col flex-row font-mohrroundedaltregular md:gap-5 items-center justify-start p-2 w-full" />
          <section id="section-1" onMouseMove={handleMouseMove}
            className="bg-no-repeat flex md:flex-col flex-row gap-[46px] items-center justify-center w-full h-[547px] xs:h-auto xs:py-16 relative image-section"
          > 
            <Img className="absolute h-[100%] left-0 top-0 w-[100%] object-contain z-[0] pulse" src="/images/banner-home.svg" alt="waves" 
                />
            <Img className="absolute h-[100%] left-0 top-0 w-[100%] object-contain z-[0] moving-image" src="/images/banner-home2.svg" alt="waves" 
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              }}
             />
            <Img className="absolute h-[100%] left-0 top-0 w-[100%] object-contain z-[0] moving-image" src="/images/banner-home3.svg" alt="waves" 
              style={{
                transform: `translate(${mousePosition.y}px, ${mousePosition.x}px)`,
              }}
             />
            <Img className="absolute h-[100%] left-0 top-0 w-[100%] object-contain z-[0] moving-image" src="/images/banner-home5.svg" alt="waves" 
              style={{
                transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)`,
              }}
             />
            <Img className="absolute h-[100%] left-0 top-0 w-[100%] object-contain z-[0] moving-image pulse" src="/images/banner-home4.svg" alt="waves" 
             />
             <Img className="absolute h-[100%] left-0 top-0 w-[100%] object-contain z-[0] moving-image" src="/images/banner-home6.svg" alt="waves" 
              style={{
                transform: `translate(${mousePosition.y}px, ${mousePosition.x}px)`,
              }}
             />
             <Img className="absolute h-[100%] left-0 top-0 w-[100%] object-contain z-[0] moving-image" src="/images/banner-home7.svg" alt="waves" 
              style={{
                transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)`,
              }}
             />
             <div className="w-[646px] mx-auto xs:w-full">
              <div className="flex items-center justify-center my-element fade-animation">
                <div className="relative">
                  <Img
                    className="absolute h-[52px] left-[-4%] top-[-12%] w-[51px]"
                    src="/images/img_reply.svg"
                    alt="reply"
                  />
                  <Text
                    className="md:text-5xl sm:text-[42px] text-[56px] text-black-900 text-center"
                    size="txtMohrRoundedAltBold56"
                  >
                    <span className="text-pink-800">{t("cakes")}</span>{" "}
                    {t("withLove")}
                  </Text>
                  <Img
                    className="md:ml-[0] ml-[-10px]"
                    src="/images/img_waves.svg"
                    alt="waves"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center mt-[32px] my-element fade-animation">
                <Line className="bg-black-900 h-px w-full" />
                <div className="flex items-center xs:flex-col justify-center xs:w-full">
                  <div className="flex flex-col gap-3.5 items-center justify-start px-[30px] py-[20px] xs:w-full">
                    <Text
                      className="text-base text-black-900 text-center"
                      size="txtMohrRoundedAltMedium16"
                    >
                      {t("yourPerfectCake")}
                    </Text>
                    <Text
                      className="text-center text-pink-800 text-xs"
                      size="txtMohrRoundedAltRegular12Pink800"
                    >
                      <>{t("learnHow")} &gt;</>
                    </Text>
                  </div>
                  <div className="flex xs:flex-col xs:w-full">
                    <Line className="bg-black-900 h-[94px] w-px xs:h-px xs:w-full" />
                    <div className="flex flex-col gap-3.5 items-center justify-start px-[30px] py-[20px]">
                      <Text
                        className="text-base text-black-900 text-center"
                        size="txtMohrRoundedAltMedium16"
                      >
                        {t("sameDashDayDelivery")}
                      </Text>
                      <Text
                        className="text-center text-pink-800 text-xs"
                        size="txtMohrRoundedAltRegular12Pink800"
                      >
                        <>{t("learnHow")} &gt;</>
                      </Text>
                    </div>
                    <Line className="bg-black-900 h-[94px] w-px xs:h-px xs:w-full" />
                  </div>
                  <div className="flex flex-col gap-3.5 items-center justify-start px-[30px] py-[20px] xs:w-full">
                    <Text
                      className="text-base text-black-900 text-center"
                      size="txtMohrRoundedAltMedium16"
                    >
                      {t("customizedCakes")}
                    </Text>
                    <Text
                      className="text-center text-pink-800 text-xs"
                      size="txtMohrRoundedAltRegular12Pink800"
                    >
                      <>{t("learnHow")} &gt;</>
                    </Text>
                  </div>
                </div>
                <Line className="bg-black-900 h-px w-full" />
              </div>
              <div className="mt-[64px] flex items-center justify-center my-element fade-animation">
                <Button
                  className="bg-black-900 hover:border hover:border-black-900 cursor-pointer font-mohrroundedaltmedium h-12 py-2.5 rounded text-base text-center text-white-A700 w-[180px]"
                  hover={true}
                  hoverclass="bg-white-A700"
                  onClick={(e)=>{
                    navigate('/');
                  }}
                >
                  {t("shopNow")}
                </Button>
              </div>
            </div>
          </section>
          <section
            id="section-2"
            className="bg-teal-50 flex sm:flex-col flex-row items-center justify-evenly w-full relative overflow-hidden	"
          >
            <div className="bg-teal-50 flex md:flex-1 flex-col items-start justify-center px-24 md:pl-4 py-24  md:px-10 sm:px-4 sm:py-10 xs:py-0 w-1/2 md:w-full">
              <div className="max-w-[460px] w-full md:max-w-full ml-auto rtl:ml-0 rtl:mr-auto">
                <Text
                  className="leading-[56.00px] mt-11 sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtMohrRoundedAltBold40Black900"
                >
                  <>
                    {t("showYourLoveComma")}
                    <br />
                    {t("sendThemCakeExclamationMark")}
                  </>
                </Text>
                <Text
                  className="leading-[24.00px] mt-[30px] text-base text-gray-700 w-full"
                  size="txtMohrRoundedAltMedium16Gray700"
                >
                  {t("thereIsNoBetterGiftThanThatOfCakeDot")}
                </Text>
                <Button
                  className="bg-black-900 hover:border hover:border-black-900 cursor-pointer font-mohrroundedaltmedium h-12 mb-[45px] mt-[50px] py-2.5 rounded text-base text-center text-white-A700 w-[180px]"
                  hover={true}
                  hoverclass="bg-teal-50"
                >
                  {t("discover")}
                </Button>
              </div>
            </div>
            <div className="bg-teal-A200 h-[657px] w-1/2 relative overflow-hidden sm:w-full">
              <Img
                className="h-full w-full mx-auto object-cover"
                src="/images/home-s2-img.jpg"
                alt="rectangle19148"
              />
            </div>
            <div
              id="box-animation"
              className={`absolute shadow-2xl bg-white-A700 bottom-[7%] flex flex-row gap-8 inset-x-[0] items-center justify-center mx-auto sm:px-5 px-8 py-3 rounded-[12px] shadow-bs3 w-[357px] my-element fade-animation`}
            >
              <Text
                className="leading-[24.00px] text-base text-black-900 rtl:text-right"
                size="txtMohrRoundedAltMedium16"
              >
                <>
                  {t("everyoneDeservesLove")}
                  <br />
                  {t("andHappinessDotIncludeYou")}
                </>
              </Text>
              <Img
                className="h-[38px]"
                src="/images/img_favorite.svg"
                alt="favorite"
              />
            </div>
          </section>
          <section id="section-3" className="md:overflow-hidden">
             <div className="flex sm:flex-col flex-row font-mohrroundedaltbold sm:gap-10 items-center justify-center max-w-[1100px] mt-[100px] sm:mt-[80px] mx-auto md:px-4 w-full relative">
              <Text
                className="leading-[52.00px] sm:text-3xl xs:text-2xl md:text-[38px] text-[40px] text-black-900 text-center font-mohrroundedaltsemibold rtl:text-center z-[1]"
                size="txtMohrRoundedAltBold40Black900"
              >
                <>
                  {t("firstOfItsKind")} <br className="sm:hidden" />
                  {t("streamlinedOrderingExperienceDot")}
                </>
              </Text>
              <Img
                className="h-[126px] absolute right-0 z-[0]"
                src="/images/img_vector_pink_200.svg"
                alt="vector"
              />
            </div>
            <Text
              className="leading-[24.00px] mt-2 text-base text-center text-gray-700 w-[44%] sm:w-[74%] xs:w-full mx-auto relative"
              size="txtMohrRoundedAltMedium16Gray700"
            >
              {t(
                "weHaveCreatedACakeOptimizedOrderingExperienceForYouCommaWhereYourNotesAndWishesAreAlwaysFirstUppercaseDot"
              )}
            </Text>
            <div className="flex md:flex-col flex-row font-mohrroundedaltsemibold lg:gap-[26px] gap-[46px] items-start justify-center mt-10 md:px-5 w-[1080px] md:w-full mx-auto relative z-[3]">
              <Img
                className="h-[17px] w-4 absolute ltr:left-0 rtl:right-0 top-0"
                src="/images/img_close_blue.svg"
                alt="close"
              />
              <List
                className="sm:flex-col flex-row lg:gap-[26px] gap-[46px] grid xs:grid-cols-1 grid-cols-2 md:mt-0 mt-[23px] w-[48%] md:w-full"
                orientation="horizontal"
              >
                <div className="hover-box flex flex-col items-center justify-start w-full my-element fade-animation">
                  <div className="mt-4 h-[200px] relative w-[200px] always-ltr">
                    <div className=" h-[200px] m-auto w-full">
                      <div className="absolute bg-yellow-100 bottom-[0] h-[200px]  inset-x-[0] mx-auto rounded-[50%] w-[200px]"></div>
                      <div className="hover-line text-xs bg-white-A700 flex flex-row h-[52px] items-end justify-between p-2.5 pt-0 whitespace-nowrap">
                        <Text className="text rotate-[-45deg] font-mohrroundedaltregular">
                          Lorem Ipsum is simply dummy text of
                          <br /> the printing and typesetting
                        </Text>
                        <Img
                          className="h-9 w-9 rotate-[45deg]"
                          src="/images/img_mdicake.svg"
                          alt="mdicake"
                        />
                      </div>
                    </div>
                    <div className="absolute bg-orange-50_01 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[33px] sm:px-5 rounded-[50%] shadow-bs4 w-[150px] z-[999]">
                      <Img
                        className="h-[84px] w-[84px]"
                        src="/images/img_1000f21732642.svg"
                        alt="1000f21732642"
                      />
                    </div>
                  </div>
                  <Text
                    className="mt-[25px] text-black-900 sm:text-xl text-center text-[24px]"
                    size="txtMohrRoundedAltSemiBold24"
                  >
                    {t("customizedCakes")}
                  </Text>
                  <Text
                    className="leading-[20.00px] mx-auto mt-4 text-center text-gray-700 text-sm w-full"
                    size="txtMohrRoundedAltRegular14"
                  >
                    {t("weBringYourCakeDreamsToRealityDot")}
                  </Text>
                </div>
                <div className="hover-box flex sm:flex-1 flex-col items-center justify-start sm:mt-0 mt-[116px] md:mt-4 md:gap-0 w-full my-element fade-animation">
                  <div className=" h-[200px] relative w-[200px] always-ltr">
                    <div className=" h-[200px] m-auto w-full">
                      <div className="absolute bg-blue-100 h-[200px]  inset-[0] justify-center m-auto rounded-[50%] w-[200px]"></div>
                      <div className="hover-line text-xs bg-white-A700 flex flex-row h-[52px] items-end justify-between p-2.5 pt-0 whitespace-nowrap">
                        <Text className="text rotate-[-45deg] font-mohrroundedaltregular">
                          Lorem Ipsum is simply dummy text of
                          <br /> the printing and typesetting
                        </Text>
                        <Img
                          className="h-9 w-9 rotate-[45deg]"
                          src="/images/img_mdicake.svg"
                          alt="mdicake"
                        />
                      </div>
                    </div>
                    <div className="absolute bg-light_blue-50 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[33px] sm:px-5 rounded-[50%] shadow-bs4 w-[150px] z-[999]">
                      <Img
                        className="h-[84px] w-[84px]"
                        src="/images/img_badge014.svg"
                        alt="badge014"
                      />
                    </div>
                  </div>
                  <Text
                    className="mt-[25px] text-black-900 sm:text-xl text-center text-[24px]"
                    size="txtMohrRoundedAltSemiBold24"
                  >
                    {t("sameDayDelivery")}
                  </Text>
                  <Text
                    className="leading-[20.00px] text-center text-gray-700 text-sm mt-4"
                    size="txtMohrRoundedAltRegular14"
                  >
                    {t("weOfferMultipleModulesOfDelivery")}...
                    {t("alwaysUppercase")}
                  </Text>
                </div>
              </List>
              <List
                className="sm:flex-col flex-row lg:gap-[26px] gap-[46px] grid xs:grid-cols-1 grid-cols-2 md:mt-0 mt-[23px] w-[48%] md:w-full"
                orientation="horizontal"
              >
                <div className="hover-box flex flex-col items-center justify-start w-full my-element fade-animation">
                  <div className=" h-[200px] relative w-[200px] always-ltr">
                    <div className=" h-[200px] m-auto w-full">
                      <div className="absolute bg-teal-50_01 h-[200px]  inset-[0] justify-center m-auto rounded-[50%] w-[200px]"></div>
                      <div className="hover-line text-xs bg-white-A700 flex flex-row h-[52px] items-end justify-between p-2.5 pt-0 whitespace-nowrap">
                        <Text className="text rotate-[-45deg] font-mohrroundedaltregular">
                          Lorem Ipsum is simply dummy text of
                          <br /> the printing and typesetting
                        </Text>
                        <Img
                          className="h-9 w-9 rotate-[45deg]"
                          src="/images/img_mdicake.svg"
                          alt="mdicake"
                        />
                      </div>
                    </div>
                    <div className="absolute bg-gray-50_01 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[33px] sm:px-5 rounded-[50%] shadow-bs4 w-[150px] z-[999]">
                      <Img
                        className="h-[84px] w-[84px]"
                        src="/images/img_badge011.svg"
                        alt="badge011"
                      />
                    </div>
                  </div>
                  <Text
                    className="mt-[25px] text-black-900 sm:text-xl text-center text-[24px]"
                    size="txtMohrRoundedAltSemiBold24"
                  >
                    {t("qualityControl")}
                  </Text>
                  <Text
                    className="leading-[20.00px] text-center text-gray-700 text-sm mt-4"
                    size="txtMohrRoundedAltRegular14"
                  >
                    {t(
                      "weEquippedOurProcessWithMultipleDeliveryCheckpointsToMakeSureYouReceiveYourCakeExactlyAsYouWantItExclamationMark"
                    )}
                  </Text>
                </div>
                <div className="hover-box flex sm:flex-1 flex-col items-center justify-start sm:mt-0 mt-[116px] md:mt-4 md:gap-0 w-full my-element fade-animation">
                  <div className="h-[200px] relative w-[200px] always-ltr">
                    <div className=" h-[200px] m-auto w-full">
                      <div className="absolute bg-red-100_01 bottom-[0] h-[200px]  inset-x-[0] mx-auto rounded-[50%] w-[200px]"></div>
                      <div className="hover-line text-xs bg-white-A700 flex flex-row h-[52px] items-end justify-between p-2.5 pt-0 whitespace-nowrap">
                        <Text className="text rotate-[-45deg] font-mohrroundedaltregular">
                          Lorem Ipsum is simply dummy text of
                          <br /> the printing and typesetting
                        </Text>
                        <Img
                          className="h-9 w-9 rotate-[45deg]"
                          src="/images/img_mdicake.svg"
                          alt="mdicake"
                        />
                      </div>
                    </div>
                    <div className="absolute bg-orange-50_02 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[33px] sm:px-5 rounded-[50%] shadow-bs4 w-[150px] z-[999]">
                      <Img
                        className="h-[84px] w-[84px]"
                        src="/images/img_rate011.svg"
                        alt="rate011"
                      />
                    </div>
                  </div>
                  <Text
                    className="mt-[25px] text-black-900 sm:text-xl text-center text-[24px]"
                    size="txtMohrRoundedAltSemiBold24"
                  >
                    <>
                      {t("superb")} <br className="md:hidden" />
                      {t("customerService")}
                    </>
                  </Text>
                  <Text
                    className="leading-[20.00px] text-center text-gray-700 text-sm mt-4"
                    size="txtMohrRoundedAltRegular14"
                  >
                    {t(
                      "ourCustomerServiceAgentsAreThereForYouAllYouHaveToDoIsContactUs"
                    )}
                  </Text>
                </div>
              </List>
              <Img
                className="h-[17px] w-4 absolute left-[0] bottom-[0]"
                src="/images/img_close_red_300.svg"
                alt="close_One"
              />
            </div>
          </section>
          <section
            id="section-4"
            className="font-mohrroundedaltmedium sm:h-auto h-[657px] mt-[100px] relative w-full overflow-hidden"
          >
            <div className="sm:h-auto h-[657px] m-auto w-full">
              <div className="sm:h-auto h-[657px] m-auto w-full">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <div className="flex flex-row sm:flex-col items-center justify-evenly w-full">
                    <div className="bg-pink-100_01 h-[657px] w-1/2 sm:w-full relative">
                      <Img
                        className="h-full w-full mx-auto object-cover"
                        src="/images/landing-s1-img.png"
                        alt="rectangle19148"
                      />
                    </div>
                    <div className="bg-gray-100 flex md:flex-1 flex-col items-start justify-center py-[55px] px-[80px] md:pr-4 md:px-10 sm:px-5 w-1/2 md:w-full h-full">
                      <div className="flex flex-col items-start justify-start max-w-[460px] w-full md:max-w-full mr-auto  rtl:mr-0 rtl:ml-auto">
                        <Text
                          className="leading-[52.00px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 rtl:text-right"
                          size="txtMohrRoundedAltBold40Black900"
                        >
                          <>
                            {t("highlyEfficient")}
                            <br />
                            {t("deliverySolution")}
                          </>
                        </Text>
                        <Text
                          className="leading-[24.00px] mt-[30px] text-base text-gray-700 w-full rtl:text-right"
                          size="txtMohrRoundedAltMedium16Gray700"
                        >
                          {t(
                            "fromMidNightDeliveriesToPickupPointsAndMultipleDeliveryOptionsWeHaveBroughtTogetherTheDeliverySolutionBuiltToGiveYouTheBestCustomerExperienceDot"
                          )}
                        </Text>
                        <Button
                          className="bg-black-900 hover:border hover:border-black-900 cursor-pointer font-mohrroundedaltmedium h-12 mt-[50px] py-2.5 rounded text-base text-center text-white-A700 w-[180px]"
                          hover={true}
                          hoverclass="bg-gray-100"
                        >
                          {t("discover")}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute shadow-2xl bg-white-A700 top-[7%] flex flex-row gap-8 inset-x-[0] items-center justify-center mx-auto sm:px-5 px-8 py-3 rounded-[12px] shadow-bs3 w-[357px] my-element fade-animation"
            >
              <Text
                className="leading-[24.00px] text-base text-black-900 rtl:text-right"
                size="txtMohrRoundedAltMedium16"
              >
                <>
                  {t("everyoneDeservesLove")}
                  <br />
                  {t("andHappinessDotIncludeYou")}
                </>
              </Text>
              <Img
                className="h-[38px]"
                src="/images/img_favorite.svg"
                alt="favorite_One"
              />
            </div>
          </section>
          <section id="section-5" className="max-w-[1100px] relative w-full mx-auto md:max-w-full md:px-4">
            <div className="flex sm:flex-col flex-row font-mohrroundedaltbold sm:gap-5 items-start justify-center mt-[100px]  w-full">
              <Img
                className="h-14 absolute left-0"
                src="/images/img_vector.svg"
                alt="vector_One"
              />
              <Text
                className="leading-[52.00px] sm:text-4xl xs:text-2xl md:text-[38px] text-[40px] text-black-900 text-center w-full"
                size="txtMohrRoundedAltBold40Black900"
              >
                <>
                  {t("wePostTrendsAndTutorials")}
                  <br />
                  {t("forModernCakesMakingProcess")}
                </>
              </Text>
              <Img
                className="h-[37px] sm:ml-[0] ml-[136px] sm:mt-0 mt-[52px] absolute right-0"
                src="/images/img_alarm.svg"
                alt="alarm"
              />
            </div>
            <Text
              className="mt-5 text-base text-center text-gray-700 w-[54%] sm:w-[74%] xs:w-full mx-auto"
              size="txtMohrRoundedAltMedium16Gray700"
            >
              <>
                {t(
                  "hereYouAndWillFindArticlesOnTheLatestWellnessTrendsAndTopicsDeliciousPlantBasedRecipesTipTricksAndMuchMoreExclamationMark"
                )}
              </>
            </Text>
            <div className="">
              <List
                className="w-full"
                orientation="horizontal"
              >
                <div className="">
                  <Slider
                    autoPlay
                    disableButtonsControls
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
                    className="flex gap-[30px] max-w-[1110px] mt-[50px] mx-auto  xs:mx-0 w-full"
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
          </section>
          <section
            id="section-6"
            className="bg-cover bg-no-repeat flex flex-col font-mohrroundedaltmedium h-[344px] md:h-auto items-start rtl:items-end justify-start max-w-[1110px] mt-[73px] mb-[64px] mx-auto p-[52px] md:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group186.svg')" }}
          >
            <div className="flex flex-col gap-8 items-start justify-start ml-7 md:ml-[0] w-[44%] md:w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="leading-[52.00px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full rtl:text-right"
                  size="txtMohrRoundedAltBold40Black900"
                >
                  {t("sendYourGiftToLovedOnes")}
                </Text>
                <Text
                  className="leading-[24.00px] text-base text-gray-700 w-[96%] sm:w-full rtl:text-right"
                  size="txtMohrRoundedAltMedium16Gray700"
                >
                  {t(
                    "addAPersonalizedMessageOrSongAlongWithTheGiftToMakeItMoreSpecial"
                  )}
                </Text>
              </div>
              <Button
                className="bg-black-900 hover:border hover:border-black-900 cursor-pointer h-12 py-2.5 rounded text-base text-center text-white-A700 w-40"
                hover={true}
                hoverclass="bg-light_blue-50"
              >
                {t("sendGift")}
              </Button>
            </div>
          </section>
          <Footer className="flex font-mohrroundedaltregular items-center justify-center mt-[65px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HomePage;