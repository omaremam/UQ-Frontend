import React, { useEffect, useState } from "react";
import { Button, Img, Text } from "components";
import Footer3 from "components/Footer3";
import LandingHeader from "components/LandingHeader";
// Importing localization strings
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: `1px solid #000`,
  backgroundColor: "transparent",
  borderRadius: 8,
  border: "none",
  overflow: "hidden",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  "&.Mui-expanded": {
    backgroundColor: "#fff",
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    // expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(() => ({
  flexDirection: "row-reverse",
  padding: "10px 20px",

  backgroundColor: "transparent",
  border: "none",
  "&.Mui-expanded": {
    paddingTop: 20,
  },
  "& .MuiAccordionSummary-content": {
    margin: 0,
    marginLeft: 15,
  },
}));
const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: "0px 85px 54px 70px",
}));
const BecomeACustomer = () => {
  const { t } = useTranslation();
  const [headerStyle, setheaderStyle] = useState("hidden");
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
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
          setheaderStyle('sticky top-0 z-30 block');
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

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <LandingHeader
          className={`bg-white-A700 py-1.5 shadow-md w-full md:px-4 ${headerStyle}`}
        />
        <div className="flex flex-col items-center justify-start w-full">
          <section
            id="section-1"
            className="bg-fixed bg-cover bg-center bg-no-repeat w-full relative overflow-hidden"
            style={{ backgroundImage: "url('images/become-s1-bg.jpg')" }}
          >
            <div
              className="bg-center bg-no-repeat w-full mx-auto pt-[184px] pb-[135px]"
              style={{ backgroundImage: "url('images/become-s1-2-bg.svg')" }}
            >
              <div className="max-w-[1110px] w-full mx-auto my-element top-animation md:px-4">
                <Text
                  className="md:text-5xl sm:text-[42px] text-[56px] text-black-900 text-center leading-[56px]"
                  size="txtMohrRoundedAltBold56"
                >
                  {t("customizeGift")} <br className="xs:hidden" />
                  {t("andScheduleThe")}{" "}
                  <span className="text-pink-800">{t("cake")}</span>
                </Text>
                <Text
                  className="leading-[24.00px] mt-5 text-base text-black-900 max-w-[730px] w-full mx-auto text-center"
                  size="txtMohrRoundedAltMedium16Gray700"
                >
                  {t(
                    "jollyPlatformIsSpecializedToCoverAllInventoryManagementRetailStoresNeedsSuchAsAddingProductsStockCountSuppliersPurchaseOrdersInventoryReturnAndStockTransfer"
                  )}
                </Text>
                <Button
                  className="bg-black-900 hover:border hover:border-black-900 cursor-pointer font-mohrroundedaltmedium h-12 mt-[50px] py-2.5 rounded text-base text-center block text-white-A700 w-[180px] mx-auto"
                  hover={true}
                  hoverclass="bg-light_blue-50"
                >
                  {t("registerNow")}
                </Button>
              </div>
            </div>
          </section>
          <section
            id="section-2"
            className="bg-gray-50_02 bg-center bg-contain bg-no-repeat w-full relative overflow-hidden py-32 md:py-20"
            style={{ backgroundImage: "url('images/become-s2-bg.svg')" }}
          >
            <div className="max-w-[1110px] w-full mx-auto grid gap-16 md:gap-10 sm:gap-6 grid-cols-2 sm:grid-cols-1 items-center sm:justify-center md:max-w-[921px] sm:px-4">
              <div className="w-full relative flex gap-3.5 sm:w-[50%] xs:w-[100%] sm:mx-auto sm:pb-[58px]">
                <div className="h-full md:w-full md:h-auto my-element top-animation relative z-[2]">
                  <Img
                    className="w-full"
                    src="/images/become-s2-img1.png"
                    alt=""
                  />
                </div>
                <div className="h-full md:w-full md:h-auto my-element top-animation relative z-[2] top-[58px]">
                  <Img
                    className="w-full"
                    src="/images/become-s2-img2.png"
                    alt=""
                  />
                </div>
                <div className="h-full md:w-full md:h-auto my-element top-animation relative z-[2]">
                  <Img
                    className="w-full"
                    src="/images/become-s2-img3.png"
                    alt=""
                  />
                </div>
                {/* <Img
                  className="h-full md:w-full md:h-auto  my-element bottom-animation relative z-[2]"
                  src="/images/become-s2-img2.png"
                  alt=""
                />
                <Img
                  className="h-full md:w-full md:h-auto my-element top-animation relative z-[2]"
                  src="/images/become-s2-img3.png"
                  alt=""
                /> */}
                <Img
                  className="w-[202px] h-[197px] absolute right-[70px] -top-[30px] z-[1]"
                  src="/images/dot-bg.svg"
                  alt=""
                />
              </div>
              <div className="w-full">
                <Text
                  className="leading-[52.00px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 rtl:text-right"
                  size="txtMohrRoundedAltBold40Black900"
                >
                  <>{t("whatWeOffer")}</>
                </Text>
                <Text className="mt-6 text-sm text-gray-700 w-full rtl:text-right font-mohrroundedaltregular">
                  {t(
                    "jollyPlatformIsSpecializedToCoverAllInventoryManagementRetailStoresNeedsSuchAsAddingProductsStockCountSuppliersPurchaseOrdersInventoryReturnAndStockTransferAdditionallyJollyEnablesFollowingUpOnSalesManagementDetailsThroughSalesReportsSortedByTimePeriodProductTypeBranchesAndMore"
                  )}
                </Text>
                <ul className="mt-6 w-full flex flex-col gap-3">
                  <li className="flex items-center justify-start gap-3">
                    <Img
                      className="h-6"
                      src="/images/check_circle.svg"
                      alt="check_circle"
                    />
                    <Text className="text-sm text-gray-700 w-full rtl:text-right font-mohrroundedaltregular">
                      {t("makeTravelEasierForFamilies")}
                    </Text>
                  </li>
                  <li className="flex items-center justify-start gap-3">
                    <Img
                      className="h-6"
                      src="/images/check_circle.svg"
                      alt="check_circle"
                    />
                    <Text className="text-sm text-gray-700 w-full rtl:text-right font-mohrroundedaltregular">
                      {t("giveASecondLifeToYourProductsForKids")}
                    </Text>
                  </li>
                  <li className="flex items-center justify-start gap-3">
                    <Img
                      className="h-6"
                      src="/images/check_circle.svg"
                      alt="check_circle"
                    />
                    <Text className="text-sm text-gray-700 w-full rtl:text-right font-mohrroundedaltregular">
                      {t(
                        "rentOutYourUnusedProductsForKidsAndEarnMoneyFromThat"
                      )}
                    </Text>
                  </li>
                  <li className="flex items-center justify-start gap-3">
                    <Img
                      className="h-6"
                      src="/images/check_circle.svg"
                      alt="check_circle"
                    />
                    <Text className="text-sm text-gray-700 w-full rtl:text-right font-mohrroundedaltregular">
                      {t("reduceSizeAndWeightOfYourTravelingBaggage")}
                    </Text>
                  </li>
                  <li className="flex items-center justify-start gap-3">
                    <Img
                      className="h-6"
                      src="/images/check_circle.svg"
                      alt="check_circle"
                    />
                    <Text className="text-sm text-gray-700 w-full rtl:text-right font-mohrroundedaltregular">
                      {t(
                        "saveFuelAndTrunkSpaceOfYourCarAndReduceCO2EmissionsForFlights"
                      )}
                    </Text>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section
            id="section-3"
            className="bg-white-A700 bg-center bg-contain bg-no-repeat w-full relative overflow-hidden pt-[100px] pb-[150px] md:py-20"
            style={{ backgroundImage: "url('images/become-s3-bg.svg')" }}
          >
            <div className="max-w-[1110px] w-full mx-auto text-center">
              <Text
                className="leading-[52.00px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 rtl:text-center"
                size="txtMohrRoundedAltBold40Black900"
              >
                <>{t("whatJolly")}</>
              </Text>
              <Text className="mt-5 text-sm text-gray-700 w-full rtl:text-center font-mohrroundedaltregular max-w-[600px] mx-auto">
                {t(
                  "weHaveCreatedACakeOptimizedOrderingExperienceForYouCommaWhereYourNotesAndWishesAreAlwaysFirstUppercaseDot"
                )}
              </Text>
            </div>
            <div className="max-w-[921px] w-full mx-auto flex gap-y-20 flex-col items-center mt-[60px] sm:px-4">
              <div className="flex xs:flex-col gap-8 items-center">
                <div className="w-full relative">
                  <Img
                    className="w-full rounded-xl my-element left-animation relative z-[2]"
                    src="/images/become-s3-img1.png"
                    alt=""
                  />
                  <Img
                    className="w-[202px] h-[197px] absolute -left-[70px] -bottom-[30px] z-[1]"
                    src="/images/dot-bg.svg"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <Text className="text-2xl text-black-900 rtl:text-right font-mohrroundedaltsemibold">
                    <>{t("whatWeOffer")}</>
                  </Text>
                  <Text className="mt-6 text-sm text-gray-700 w-full rtl:text-right font-mohrroundedaltregular">
                    {t(
                      "jollyPlatformIsSpecializedToCoverAllInventoryManagementRetailStoresNeedsSuchAsAddingProductsStockCountSuppliersPurchaseOrdersInventoryReturnAndStockTransferAdditionallyJollyEnablesFollowingUpOnSalesManagementDetailsThroughSalesReportsSortedByTimePeriodProductTypeBranchesAndMore"
                    )}
                  </Text>
                </div>
              </div>
              <div className="flex xs:flex-col-reverse gap-8 items-center">
                <div className="w-full">
                  <Text className="text-2xl text-black-900 rtl:text-right font-mohrroundedaltsemibold">
                    <>{t("customizedForAllYourInventoryManagementNeeds")}</>
                  </Text>
                  <Text className="mt-6 text-sm text-gray-700 w-full rtl:text-right font-mohrroundedaltregular">
                    {t(
                      "jollyPlatformIsSpecializedToCoverAllInventoryManagementRetailStoresNeedsSuchAsAddingProductsStockCountSuppliersPurchaseOrdersInventoryReturnAndStockTransferAdditionallyJollyEnablesFollowingUpOnSalesManagementDetailsThroughSalesReportsSortedByTimePeriodProductTypeBranchesAndMore"
                    )}
                  </Text>
                </div>
                <div className="w-full relative">
                  <Img
                    className="w-full rounded-xl my-element right-animation relative z-[2]"
                    src="/images/become-s3-img2.png"
                    alt=""
                  />
                  <Img
                    className="w-[202px] h-[197px] absolute -right-[70px] -bottom-[30px] z-[1]"
                    src="/images/dot-bg.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex xs:flex-col gap-8 items-center">
                <div className="w-full relative">
                  <Img
                    className="w-full rounded-xl my-element left-animation relative z-[2]"
                    src="/images/become-s3-img3.png"
                    alt=""
                  />
                  <Img
                    className="w-[202px] h-[197px] absolute -left-[70px] -bottom-[30px] z-[1]"
                    src="/images/dot-bg.svg"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <Text className="text-2xl text-black-900 rtl:text-right font-mohrroundedaltsemibold">
                    <>{t("reduceOperationalCosts")}</>
                  </Text>
                  <Text className="mt-6 text-sm text-gray-700 w-full rtl:text-right font-mohrroundedaltregular">
                    {t(
                      "jollyPlatformIsSpecializedToCoverAllInventoryManagementRetailStoresNeedsSuchAsAddingProductsStockCountSuppliersPurchaseOrdersInventoryReturnAndStockTransferAdditionallyJollyEnablesFollowingUpOnSalesManagementDetailsThroughSalesReportsSortedByTimePeriodProductTypeBranchesAndMore"
                    )}
                  </Text>
                </div>
              </div>
            </div>
          </section>
          <section
            id="section-4"
            className="bg-light_blue-50 w-full relative overflow-hidden"
          >
            <div
              className="bg-center bg-no-repeat xs:bg-repeat w-full mx-auto pt-[80px] pb-[60px] md:py-20"
              style={{ backgroundImage: "url('images/become-s4-bg.svg')" }}
            >
              <div className="max-w-[1110px] w-full mx-auto text-center">
                <Text
                  className="leading-[52.00px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 rtl:text-center"
                  size="txtMohrRoundedAltBold40Black900"
                >
                  <>{t("DoYouHaveAnyQuestions")}</>
                </Text>
                <Text className="mt-5 text-sm text-gray-700 w-full rtl:text-center font-mohrroundedaltregular max-w-[600px] mx-auto">
                  {t(
                    "readTheAnswersToTheMostFrequentlyAskedQuestionsHereThroughOrSimplyCallUsDirectly"
                  )}
                </Text>
              </div>
              <div className="max-w-[960px] w-full mx-auto mt-[60px] flex flex-col gap-4 accordion-ui">
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel1" ? (
                        <Img
                          className="w-9 min-w-[36px] h-9"
                          src="/images/remove_circle.svg"
                          alt=""
                        />
                      ) : (
                        <Img
                          className="w-9 min-w-[36px] h-9"
                          src="/images/add_circle.svg"
                          alt=""
                        />
                      )
                    }
                    IconButtonProps={{ onClick: handleChange }}
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Text className="text-base text-black-900 w-full rtl:text-right font-mohrroundedaltmedium">
                      I get a call, why do I need one Online shop?
                    </Text>
                  </AccordionSummary>
                  <AccordionDetails className="sm:pr-10">
                    <Text className="text-sm text-gray-600 w-full rtl:text-right font-mohrroundedaltregular">
                      That's why we take care of it for you complete
                      installation of the technology and also yours Menu. Then
                      you can start your online shop get bigger over time and
                      with too many Order your account from the big portals
                      pause. Because you make more profit with yours own online
                      shop.
                    </Text>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel2" ? (
                        <Img
                          className="w-9 min-w-[36px] h-9"
                          src="/images/remove_circle.svg"
                          alt=""
                        />
                      ) : (
                        <Img
                          className="w-9 min-w-[36px] h-9"
                          src="/images/add_circle.svg"
                          alt=""
                        />
                      )
                    }
                    IconButtonProps={{ onClick: handleChange }}
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Text className="text-base text-black-900 w-full rtl:text-right font-mohrroundedaltmedium">
                      I have little time. How complicated is it? Set up online
                      shop and get it up and running bring?
                    </Text>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Text className="text-sm text-gray-600 w-full rtl:text-right font-mohrroundedaltregular">
                      That's why we take care of it for you complete
                      installation of the technology and also yours Menu. Then
                      you can start your online shop get bigger over time and
                      with too many Order your account from the big portals
                      pause. Because you make more profit with yours own online
                      shop.
                    </Text>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel3" ? (
                        <Img
                          className="w-9 min-w-[36px] h-9"
                          src="/images/remove_circle.svg"
                          alt=""
                        />
                      ) : (
                        <Img
                          className="w-9 min-w-[36px] h-9"
                          src="/images/add_circle.svg"
                          alt=""
                        />
                      )
                    }
                    IconButtonProps={{ onClick: handleChange }}
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Text className="text-base text-black-900 w-full rtl:text-right font-mohrroundedaltmedium">
                      I have little time. How complicated is it? Set up online
                      shop and get it up and running bring?
                    </Text>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Text className="text-sm text-gray-600 w-full rtl:text-right font-mohrroundedaltregular">
                      That's why we take care of it for you complete
                      installation of the technology and also yours Menu. Then
                      you can start your online shop get bigger over time and
                      with too many Order your account from the big portals
                      pause. Because you make more profit with yours own online
                      shop.
                    </Text>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel5" ? (
                        <Img
                          className="w-9 min-w-[36px] h-9"
                          src="/images/remove_circle.svg"
                          alt=""
                        />
                      ) : (
                        <Img
                          className="w-9 min-w-[36px] h-9"
                          src="/images/add_circle.svg"
                          alt=""
                        />
                      )
                    }
                    IconButtonProps={{ onClick: handleChange }}
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Text className="text-base text-black-900 w-full rtl:text-right font-mohrroundedaltmedium">
                      I don't have a lot of money at the moment. How much does
                      that cost Online shop?
                    </Text>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Text className="text-sm text-gray-600 w-full rtl:text-right font-mohrroundedaltregular">
                      That's why we take care of it for you complete
                      installation of the technology and also yours Menu. Then
                      you can start your online shop get bigger over time and
                      with too many Order your account from the big portals
                      pause. Because you make more profit with yours own online
                      shop.
                    </Text>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel5" ? (
                        <Img
                          className="w-9 min-w-[36px] h-9"
                          src="/images/remove_circle.svg"
                          alt=""
                        />
                      ) : (
                        <Img
                          className="w-9 min-w-[36px] h-9"
                          src="/images/add_circle.svg"
                          alt=""
                        />
                      )
                    }
                    IconButtonProps={{ onClick: handleChange }}
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Text className="text-base text-black-900 w-full rtl:text-right font-mohrroundedaltmedium">
                      Should I still wait for Corona to be over is?
                    </Text>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Text className="text-sm text-gray-600 w-full rtl:text-right font-mohrroundedaltregular">
                      That's why we take care of it for you complete
                      installation of the technology and also yours Menu. Then
                      you can start your online shop get bigger over time and
                      with too many Order your account from the big portals
                      pause. Because you make more profit with yours own online
                      shop.
                    </Text>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel6"}
                  onChange={handleChange("panel6")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel6" ? (
                        <Img
                          className="w-9 min-w-[36px] h-9"
                          src="/images/remove_circle.svg"
                          alt=""
                        />
                      ) : (
                        <Img
                          className="w-9 min-w-[36px] h-9"
                          src="/images/add_circle.svg"
                          alt=""
                        />
                      )
                    }
                    IconButtonProps={{ onClick: handleChange }}
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Text className="text-base text-black-900 w-full rtl:text-right font-mohrroundedaltmedium">
                      How long does it take for the online shop to be ready?
                    </Text>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Text className="text-sm text-gray-600 w-full rtl:text-right font-mohrroundedaltregular">
                      That's why we take care of it for you complete
                      installation of the technology and also yours Menu. Then
                      you can start your online shop get bigger over time and
                      with too many Order your account from the big portals
                      pause. Because you make more profit with yours own online
                      shop.
                    </Text>
                  </AccordionDetails>
                </Accordion>
                <Button
                  className="common-pointer border border-black-900 border-solid cursor-pointer py-3.5 rounded text-base text-black-900 text-center w-[164px] xs:flex-1 mt-8 mx-auto"
                  hover={true}
                  hoverclass="bg-black-900"
                >
                  {t("showMore")}
                </Button>
              </div>
            </div>
          </section>
          <Footer3 className="flex font-mohrroundedaltregular items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default BecomeACustomer;