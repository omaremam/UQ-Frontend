import React, { useEffect, useState } from "react";
import { Button, Img, Text } from "components";
import Footer3 from "components/Footer3";
import LandingHeader from "components/LandingHeader";
import { RegisterAsCustomer } from "popups/RegisterAsCustomer";
import { RegisterAsVendor } from "popups/RegisterAsVendor";
import { RegisterAsDriver } from "popups/RegisterAsDriver";
// Importing localization strings
import { useTranslation } from "react-i18next";
const LandingPage = (props) => {
  const { t } = useTranslation();
  const [RegisterAsCustomerOpen, setRegisterAsCustomerOpen] =
    React.useState(false);
  const [RegisterAsVendorOpen, setRegisterAsVendorOpen] = React.useState(false);
  const [RegisterAsDriverOpen, setRegisterAsDriverOpen] = React.useState(false);
  const [headerStyle, setheaderStyle] = useState("hidden");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;
        if (isIntersecting) {
          const myElements = target.querySelectorAll(".my-element");
          myElements.forEach((myElement) => {
            myElement.classList.add("animation");
          });
        }
      });
    });
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });
    const handleScroll = () => {
      const div = document.getElementById("section-1");
      if (div) {
        const rect = div.getBoundingClientRect();
        const isVisible =
          rect.top + 20 <= window.innerHeight && rect.bottom >= 0;
        if (window.scrollY === 0) {
          // At the top of the page
          setheaderStyle("hidden");
        } else if (isVisible) {
          // Scrolling and div is visible
          setheaderStyle("sticky top-0 z-30 block");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handelRegisterAsCustomer = () => {
    setRegisterAsCustomerOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handelRegisterAsVendor = () => {
    setRegisterAsVendorOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handelRegisterAsDriver = () => {
    setRegisterAsDriverOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
          <LandingHeader
            className={`bg-white-A700 py-1.5 shadow-md w-full md:px-4 ${headerStyle}`}
          />
          <div className="flex flex-col items-center justify-start w-full">
            <section
              id="section-1"
              className="flex sm:flex-col flex-row items-center h-[657px] sm:h-auto justify-evenly w-full relative overflow-hidden	"
            >
              <div
                className="bg-no-repeat bg-center bg-cover bg-blue-100_03 flex md:flex-1 h-full flex-col items-start justify-center px-24 md:pl-4 py-24  md:px-10 sm:px-4 sm:py-10 w-1/2 md:w-full"
                style={{ backgroundImage: "url('images/landing-left-bg.svg')" }}
              >
                <div className="max-w-[460px] w-full md:max-w-full ml-auto rtl:ml-0 rtl:mr-auto">
                  <Img
                    className="h-[94px]"
                    src="/images/jolly-logo.png"
                    alt="jolly"
                  />
                  <Text
                    className="mt-9 text-base text-black-900"
                    size="txtMohrRoundedAltMedium16"
                  >
                    <>{t("welcomeToJolly")}</>
                  </Text>
                  <div className="flex items-center justify-start -mt-3">
                    <div className="relative">
                      <Text
                        className="md:text-5xl sm:text-[42px] text-[56px] text-black-900 text-center leading-[56px]"
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
                  <Text
                    className="leading-[24.00px] mt-[30px] text-base text-black-900 w-full"
                    size="txtMohrRoundedAltMedium16Gray700"
                  >
                    {t("thereIsNoBetterGiftThanThatOfCakeDot")}
                  </Text>
                </div>
              </div>
              <div
                className="bg-fixed h-full pt-[100%] bg-[length:50%_100%] sm:bg-[length:170%_100%] bg-[top_right] rtl:bg-[top_left] sm:bg-[center] bg-no-repeat bg-blue-100_03 w-1/2 relative overflow-hidden sm:w-full"
                style={{ backgroundImage: "url('images/landing-s1-img.png')" }}
              ></div>
            </section>
            <section id="section-2" className="w-full md:overflow-hidden">
              <div
                className="bg-fixed bg-no-repeat bg-white-A700 w-full py-[120px] sm:py-20"
                style={{
                  backgroundImage: "url('images/landing-s2-bg.svg')",
                  backgroundSize: "100%",
                  backgroundPosition: "top right",
                }}
              >
                <div className="grid gap-x-12 gap-y-24 sm:gap-y-12 grid-cols-2 sm:grid-cols-1 max-w-[1100px] mx-auto md:px-4 w-full relative">
                  <div className="bg-blue-100_04 p-10 pr-28 sm:pr-10 xs:p-8 rounded-xl my-element left-animation">
                    <Text className="text-lg text-pink-800 w-full rtl:text-right font-mohrroundedaltmedium uppercase mb-3">
                      {t("becomeAVendor")}
                    </Text>
                    <Text
                      className="leading-[52.00px] sm:text-3xl md:text-[38px] text-[40px] text-black-900 rtl:text-right"
                      size="txtMohrRoundedAltBold40Black900"
                    >
                      <>{t("addProductModifiersOrders")}</>
                    </Text>
                    <Text
                      className="leading-[24.00px] mt-[30px] text-base text-black-900 w-full rtl:text-right"
                      size="txtMohrRoundedAltMedium16Gray700"
                    >
                      {t(
                        "joinUsAndBenefitFromCakeOptimizedDeliveryHigherClientSatisfactionAndMoreReturns"
                      )}
                    </Text>
                    <Button
                      className="bg-black-900 hover:border hover:border-black-900 cursor-pointer font-mohrroundedaltmedium h-12 mt-[50px] py-2.5 rounded text-base text-center text-white-A700 w-[180px]"
                      hover={true}
                      hoverclass="bg-blue-100_04"
                      onClick={() => {
                        handelRegisterAsVendor();
                      }}
                    >
                      {t("registerNow")}
                    </Button>
                  </div>
                  <div className="bg-red-50_02 p-10 pr-11 sm:pr-10 xs:p-8 rounded-xl relative top-[60%] sm:top-[unset] bottom-[60%] sm:bottom-[unset] my-element right-animation">
                    <Text className="text-lg text-pink-800 w-full rtl:text-right font-mohrroundedaltmedium uppercase mb-3">
                      {t("becomeACustomer")}
                    </Text>
                    <Text
                      className="leading-[52.00px] sm:text-3xl sm:text-4xl md:text-[38px] text-[40px] text-black-900 rtl:text-right"
                      size="txtMohrRoundedAltBold40Black900"
                    >
                      <>{t("customizeAndScheduleTheCake")}</>
                    </Text>
                    <Text
                      className="leading-[24.00px] mt-[30px] text-base text-black-900 w-full rtl:text-right"
                      size="txtMohrRoundedAltMedium16Gray700"
                    >
                      {t(
                        "thereIsNoBetterGiftThanThatOfCakeSendYourLovedOnesTheirFavoriteCakeAndGiftThemTheirVeryHappyOccasion"
                      )}
                    </Text>
                    <Button
                      className="bg-black-900 hover:border hover:border-black-900 cursor-pointer font-mohrroundedaltmedium h-12 mt-[50px] py-2.5 rounded text-base text-center text-white-A700 w-[180px]"
                      hover={true}
                      hoverclass="bg-red-50_02"
                      onClick={() => {
                        handelRegisterAsCustomer();
                      }}
                    >
                      {t("registerNow")}
                    </Button>
                  </div>
                  <div className="bg-light_blue-50 p-10 pr-16 sm:pr-10 xs:p-8 rounded-xl my-element left-animation">
                    <Text className="text-lg text-pink-800 w-full rtl:text-right font-mohrroundedaltmedium uppercase mb-3">
                      {t("becomeADriver")}
                    </Text>
                    <Text
                      className="leading-[52.00px] sm:text-3xl sm:text-4xl md:text-[38px] text-[40px] text-black-900 rtl:text-right"
                      size="txtMohrRoundedAltBold40Black900"
                    >
                      <>{t("becomeADriverToDeliverTheCake")}</>
                    </Text>
                    <Text
                      className="leading-[24.00px] mt-[30px] text-base text-black-900 w-full rtl:text-right"
                      size="txtMohrRoundedAltMedium16Gray700"
                    >
                      {t(
                        "joinUsAndEnjoyOurHappyWorkEnvironmentAndOurHappierPayoutsWeeklyPayoutsBonusOnAchievedTargetsPartyEveryday"
                      )}
                    </Text>
                    <Button
                      className="bg-black-900 hover:border hover:border-black-900 cursor-pointer font-mohrroundedaltmedium h-12 mt-[50px] py-2.5 rounded text-base text-center text-white-A700 w-[180px]"
                      hover={true}
                      hoverclass="bg-light_blue-50"
                      onClick={() => {
                        handelRegisterAsDriver();
                      }}
                    >
                      {t("registerNow")}
                    </Button>
                  </div>
                </div>
              </div>
            </section>
            <section
              id="section-3"
              className="flex sm:flex-col flex-row items-center justify-evenly w-full relative overflow-hidden	"
            >
              <div
                className="bg-fixed bg-[length:50%_100%] sm:bg-[length:100%_100%] bg-[top_left] rtl:bg-[top_right] bg-no-repeat bg-blue-100_03 h-[587px] w-1/2 relative overflow-hidden sm:w-full"
                style={{ backgroundImage: "url('images/landing-s3-img.png')" }}
              ></div>
              <div className="bg-gray-100 flex md:flex-1 min-h-[587px] sm:min-h-[unset] flex-col items-start justify-center px-24 md:pr-4 pt-[100px] pb-20 md:px-10 sm:px-4 sm:py-10 w-1/2 md:w-full">
                <div className="flex flex-col items-start justify-start max-w-[460px] w-full md:max-w-full mr-auto  rtl:mr-0 rtl:ml-auto">
                  <Text
                    className="leading-[52.00px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 rtl:text-right"
                    size="txtMohrRoundedAltBold40Black900"
                  >
                    <>{t("missionToChangeYourBusiness")}</>
                  </Text>
                  <Text
                    className="leading-[24.00px] mt-5 text-base text-gray-700 w-full rtl:text-right"
                    size="txtMohrRoundedAltMedium16Gray700"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's t,
                    when an unknown printer took.
                  </Text>
                  <ul className="mt-5 mb-10 w-full flex flex-col gap-3">
                    <li className="flex items-center justify-start gap-3">
                      <Img
                        className="h-6"
                        src="/images/check_circle.svg"
                        alt="check_circle"
                      />
                      <Text
                        className="leading-[24.00px] text-sm text-gray-700 w-full rtl:text-right"
                        size="txtMohrRoundedAltMedium16Gray700"
                      >
                        Lorem Ipsum has been the industry's
                      </Text>
                    </li>
                    <li className="flex items-center justify-start gap-3">
                      <Img
                        className="h-6"
                        src="/images/check_circle.svg"
                        alt="check_circle"
                      />
                      <Text
                        className="leading-[24.00px] text-sm text-gray-700 w-full rtl:text-right"
                        size="txtMohrRoundedAltMedium16Gray700"
                      >
                        Lorem Ipsum scrambled it to make a type
                      </Text>
                    </li>
                    <li className="flex items-center justify-start gap-3">
                      <Img
                        className="h-6"
                        src="/images/check_circle.svg"
                        alt="check_circle"
                      />
                      <Text
                        className="leading-[24.00px] text-sm text-gray-700 w-full rtl:text-right"
                        size="txtMohrRoundedAltMedium16Gray700"
                      >
                        Standard dummy text ever since the 1500s
                      </Text>
                    </li>
                  </ul>
                  <Button
                    className="bg-black-900 hover:border hover:border-black-900 cursor-pointer font-mohrroundedaltmedium h-12 py-2.5 rounded text-base text-center text-white-A700 w-[180px]"
                    hover={true}
                    hoverclass="bg-gray-100"
                  >
                    {t("discover")}
                  </Button>
                </div>
              </div>
              <div className="absolute shadow-2xl bg-white-A700 top-[25px] flex flex-row gap-8 inset-x-[0] items-center justify-center mx-auto sm:px-5 px-8 py-3 rounded-[12px] shadow-bs3 w-[357px] my-element bottom-animation">
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
            <section
              id="section-4"
              className="bg-cover bg-no-repeat flex flex-col font-mohrroundedaltmedium h-[480px] md:h-auto md:py-16 items-center justify-center md:px-4 w-full landing-s4"
              style={{ backgroundImage: "url('images/landing-s4-bg.jpg')" }}
            >
              <div className="flex flex-col gap-8 items-start justify-start max-w-[1110px] w-full mx-auto landing-s4-inner">
                <div className="flex flex-col gap-2 items-start justify-start w-full max-w-[421px] my-element left-animation">
                  <Img
                    className="h-[110px]"
                    src="/images/jolly-logo.png"
                    alt="jolly"
                  />
                  <Text
                    className="leading-[24.00px] text-base text-black-900 mt-8 w-full rtl:text-right"
                    size="txtMohrRoundedAltMedium16Gray700"
                  >
                    {t("thereIsNoBetterGiftThanThatOfCakeDot")}
                  </Text>
                </div>
              </div>
            </section>
            <Footer3 className="flex font-mohrroundedaltregular items-center justify-center md:px-5 w-full" />
          </div>
        </div>
      </div>
      {RegisterAsCustomerOpen === true ? (
        <RegisterAsCustomer closepopup={setRegisterAsCustomerOpen} />
      ) : null}
      {RegisterAsVendorOpen === true ? (
        <RegisterAsVendor closepopup={setRegisterAsVendorOpen} />
      ) : null}
      {RegisterAsDriverOpen === true ? (
        <RegisterAsDriver closepopup={setRegisterAsDriverOpen} />
      ) : null}
    </>
  );
};

export default LandingPage;