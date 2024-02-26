import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
// Importing localization strings
import { useTranslation } from "react-i18next";
const DesignMyOwnCake = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="bg-pink-100 flex md:flex-col flex-row font-mohrroundedaltregular md:gap-5 items-center justify-start p-2 w-full" />
          <div className="font-mohrroundedaltbold h-[465px] sm:h-[450px] md:px-5 relative w-full bg-gray-50_02 relative overflow-hidden">
            <div className="absolute top-[0] h-[100%] left-[0] w-[32%] sm:hidden">
              <Img
                className="absolute h-[134px] left-[0] object-cover top-[100px]"
                src="/images/img_clippathgroup_deep_orange_50.png"
                alt="clippathgroup_One"
              />
              <Img
                className="absolute h-[111px] top-[270px] object-cover z-[1]"
                src="/images/img_vector_teal_100.png"
                alt="vector"
              />
              <Img
                className="absolute bottom-[-55px] h-[148px] left-[78px]"
                src="/images/img_clippathgroup_deep_orange_100_01.svg"
                alt="clippathgroup"
              />
              <Img
                className="absolute h-[216px] left-[0] top-[336px] object-cover w-[216px]"
                src="/images/img_cutecake.png"
                alt="cutecake"
              />
              <Img
                className="h-[17px]  w-4 absolute right-[80px] bottom-[162px]"
                src="/images/img_close_deep_orange_100.svg"
                alt="close"
              />
              <Img
                className="h-[17px] w-4 absolute right-[0%] bottom-[51px]"
                src="/images/img_close_blue.svg"
                alt="close_One"
              />
            </div>
            <div className="flex flex-col gap-6 items-center justify-start w-[34%] md:w-[50%] sm:w-[100%] m-auto mt-[110px] relative z-[6]">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtMohrRoundedAltBold40Black900"
              >
                {t("designYourOwnCake")}
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="leading-[20.00px] text-center text-gray-700 text-sm w-full"
                  size="txtMohrRoundedAltRegular14"
                >
                  {t(
                    "weBringToYouOurNewAndUniqueOfferingWhereYouCanDesignYourOwnCakeExactlyAsYouWouldLikeItExclamationMark"
                  )}
                </Text>
                <Button
                  onClick={() => navigate("/designmyowncakequestionone")}
                  hover={true}
                  hoverclass="bg-gray-50_02"
                  className="common-pointer hover:border hover:border-black-900 bg-black-900 cursor-pointer font-mohrroundedaltmedium h-12 min-w-[204px] mx-auto mt-10 py-3.5 rounded text-base text-center text-white-A700"
                >
                  {t("designNow")}
                </Button>
              </div>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-[213px] items-start justify-end left-[28%] p-[13px] top-[40px] w-[194px]"
              style={{
                backgroundImage: "url('images/img_group576.svg')",
              }}
            ></div>
            <div className="absolute top-[0] h-[100%] right-[0] rtl:right-[auto] rtl:left-[0] w-[50%] sm:hidden">
              <Img
                className="absolute h-11 left-[18%] top-[42px] w-11"
                src="/images/img_clock_yellow_700.svg"
                alt="clock"
              />
              <Img
                className="absolute h-[136px] left-[0] top-[30%]"
                src="/images/img_clippathgroup_teal_50.svg"
                alt="clippathgroup_Two"
              />
              <Img
                className="h-[340px] absolute object-cover right-[92px] top-[37px]"
                src="/images/img_birthdaycake.png"
                alt="birthdaycake"
              />
              <Img
                className="absolute bottom-[190%] h-10 right-[44%]"
                src="/images/img_volume_red_300_01.svg"
                alt="volume"
              />
              <Img
                className="h-[186px] absolute object-cover right-[0] rtl:right-[auto] rtl:left-[0] top-[42px]"
                src="/images/img_clippathgroup_orange_50_186x79.png"
                alt="clippathgroup_Three"
              />
            </div>
          </div>
          <div className="max-w-[1400px] w-full mx-auto md:max-w-full md:px-4 overflow-hidden">
            <div className="flex sm:flex-col flex-row font-mohrroundedaltbold sm:gap-5 items-start justify-center mt-[80px]  w-full">
              <Img
                className="h-14 absolute left-[10%]"
                src="/images/yellow-left.svg"
                alt="vector_One"
              />
              <Text
                className="leading-[52.00px] sm:text-4xl xs:text-2xl md:text-[38px] text-[40px] text-black-900 text-center w-full z-50"
                size="txtMohrRoundedAltBold40Black900"
              >
                <>{t("howItWorks")}</>
              </Text>
              <Img
                className="h-[37px] sm:ml-[0] ml-[136px] sm:mt-0 mt-[52px] absolute right-[10%]"
                src="/images/red-right.svg"
                alt="alarm"
              />
            </div>
            <Text
              className="leading-[24.00px] mt-2 text-base text-center text-gray-700 w-[44%] sm:w-[74%] xs:w-full mx-auto relative"
              size="txtMohrRoundedAltMedium16Gray700"
            >
              <>
                {t(
                  "weUnderstandThatEveryCelebrationIsUniqueAndSoAreTheCakePreferencesOfOurCustomersDot"
                )}
              </>
            </Text>
            <div className="mb-[80px]">
              <div className="flex md:flex-col flex-row font-mohrroundedaltsemibold gap-[46px] items-start justify-center mt-10 md:px-5 w-[80%] md:w-full mx-auto relative">
                <Img
                  className="h-[17px] w-4 absolute right-[20%] top-[20px]"
                  src="/images/black_close.svg"
                  alt="close_One"
                />
                <List
                  className="sm:flex-col flex-row gap-[46px] grid xs:grid-cols-1 grid-cols-2 md:mt-0 mt-[23px] w-[48%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex sm:flex-1 flex-col items-center justify-start w-full">
                    <div className="h-[205px] md:h-[205px] relative w-[85%]">
                      <div className="md:h-[200px] h-[205px] m-auto w-full">
                        <div className="absolute bg-yellow-100 bottom-[0] h-[200px] inset-x-[0] mx-auto rounded-[50%] w-[200px]"></div>
                      </div>
                      <div className="absolute bg-orange-50_01 bottom-[12%] flex flex-col h-[150px] inset-x-[0] items-center justify-center mx-auto p-[33px] sm:px-5 rounded-[50%] shadow-bs4 w-[150px]">
                        <Img
                          className="h-[84px] w-[84px]"
                          src="/images/img_1000f21732642.svg"
                          alt="1000f21732642"
                        />
                      </div>
                    </div>
                    <Text
                      className="mt-[22px] text-2xl md:text-[22px] text-black-900 sm:text-xl text-center"
                      size="txtMohrRoundedAltSemiBold24"
                    >
                      {t("uploadImage")}
                    </Text>
                    <Text
                      className="leading-[20.00px] mx-auto  mt-4 text-center text-gray-700 text-sm w-[200px]"
                      size="txtMohrRoundedAltRegular14"
                    >
                      {t("uploadAImageThatYouWouldLikeYourCakeToBeBakedAsDot")}
                    </Text>
                  </div>
                  <div className="flex sm:flex-1 flex-col items-center justify-start mt-[116px] md:mt-4 w-full">
                    <div className="md:h-[216px] h-[205px] relative w-[85%] sm:mt-4">
                      <div className="md:h-[200px] h-[205px] m-auto w-full">
                        <div className="absolute bg-blue-100 h-[200px] inset-[0] justify-center m-auto rounded-[50%] w-[200px]"></div>
                      </div>
                      <div className="absolute bg-light_blue-50 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[33px] sm:px-5 rounded-[50%] shadow-bs4 w-[150px]">
                        <Img
                          className="h-[84px] w-[84px]"
                          src="/images/img_1000f21732642.svg"
                          alt="badge014"
                        />
                      </div>
                    </div>
                    <Text
                      className="text-2xl md:text-[22px] mt-[22px] text-black-900 text-center sm:text-xl md:mt-[22px]"
                      size="txtMohrRoundedAltSemiBold24"
                    >
                      {t("ourTeam")}
                    </Text>
                    <Text
                      className="leading-[20.00px] mt-4 text-center text-gray-700 text-sm md:mt-4 w-[200px]"
                      size="txtMohrRoundedAltRegular14"
                    >
                      {t("ourTeamTakesALookAndRevertsBackToYouDot")}
                    </Text>
                  </div>
                </List>
                <List
                  className="sm:flex-col flex-row gap-[46px] grid xs:grid-cols-1 grid-cols-2 md:mt-0 mt-[23px] w-[48%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="md:h-[200px] h-[205px] relative w-[84%]">
                      <div className="md:h-[200px] h-[205px] m-auto w-full">
                        <div className="absolute bg-teal-50_01 h-[200px] inset-[0] justify-center m-auto rounded-[50%] w-[200px]"></div>
                      </div>
                      <div className="absolute bg-gray-50_01 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[33px] sm:px-5 rounded-[50%] shadow-bs4 w-[150px]">
                        <Img
                          className="h-[84px] w-[84px]"
                          src="/images/img_1000f21732642.svg"
                          alt="badge011"
                        />
                      </div>
                    </div>
                    <Text
                      className="mt-[22px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtMohrRoundedAltSemiBold24"
                    >
                      {t("paymentOnline")}
                    </Text>
                    <Text
                      className="leading-[20.00px] mt-4 text-center text-gray-700 text-sm w-[200px]"
                      size="txtMohrRoundedAltRegular14"
                    >
                      {t("onceApprovedByTheTeamYouHaveToMakePaymentOfThisDot")}
                    </Text>
                  </div>
                  <div className="flex sm:flex-1 flex-col items-center justify-start mt-[116px] md:mt-4 w-full">
                    <div className="md:h-[200px] h-[205px] relative w-[94%]">
                      <div className="md:h-[200px] h-[205px] m-auto w-full">
                        <div className="absolute bg-red-100_01 bottom-[0] h-[200px] inset-x-[0] mx-auto rounded-[50%] w-[200px]"></div>
                      </div>
                      <div className="absolute bg-orange-50_02 bottom-[12%] flex flex-col h-[150px] inset-x-[0] items-center justify-start mx-auto p-[33px] sm:px-5 rounded-[50%] shadow-bs4 w-[150px]">
                        <Img
                          className="h-[84px] w-[84px]"
                          src="/images/img_1000f21732642.svg"
                          alt="rate011"
                        />
                      </div>
                    </div>
                    <Text
                      className="leading-[32.00px] mt-[22px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                      size="txtMohrRoundedAltSemiBold24"
                    >
                      <>{t("customCake")}</>
                    </Text>
                    <Text
                      className="leading-[20.00px] mt-4 text-center text-gray-700 text-sm w-[200px]"
                      size="txtMohrRoundedAltRegular14"
                    >
                      {t(
                        "weDeliverTheCakeToYourDoorstepsOnTheDateChosenByYouExclamationMark"
                      )}
                    </Text>
                  </div>
                </List>
                <Img
                  className="h-[17px] w-4 absolute left-[-20%] bottom-[100px]"
                  src="/images/img_close_blue.svg"
                  alt="close"
                />
                <Img
                  className="h-[17px] w-4 absolute left-[210px] bottom-[0]"
                  src="/images/img_close_red_300.svg"
                  alt="close_One"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-100 flex sm:flex-col flex-row items-center justify-evenly w-full relative overflow-hidden	">
            <div className="bg-gray-100 flex md:flex-1 flex-col items-start justify-center px-24 md:pl-4 py-12  md:px-10 sm:px-4 sm:py-10 xs:py-0 w-1/2 md:w-full">
              <div className="max-w-[460px] w-full md:max-w-full ml-auto rtl:ml-0 rtl:mr-auto">
                <Text
                  className="leading-[56.00px] mt-[22px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtMohrRoundedAltBold40Black900"
                >
                  <>
                    {t("whatAre")}
                    <br />
                    {t("selfDesignCakesExclamationMark")}
                  </>
                </Text>
                <Text
                  className="leading-[24.00px] mt-[30px] text-base text-gray-700 w-full"
                  size="txtMohrRoundedAltMedium16Gray700"
                >
                  {t(
                    "weBringToYouAVeryUniqueCakeDesignConceptDotWeAcknowledgeAndTakeCareThatYouHaveYourOwnIdeaOfHowToCelebrateYourOccasionToMakeItSpecialAndMemorableDot"
                  )}
                </Text>
                <Button
                  hover={true}
                  hoverclass="bg-gray-100"
                  className="bg-black-900 hover:border hover:border-black-900 cursor-pointer font-mohrroundedaltmedium h-12 mb-[45px] mt-[50px] py-2.5 rounded text-base text-center text-white-A700 w-[180px]"
                >
                  {t("discover")}
                </Button>
              </div>
            </div>
            <div className="bg-pink-100_01 h-[657px] w-1/2 relative overflow-hidden sm:w-full">
              <div className="absolute bottom-[1%] flex flex-col items-center justify-start right-[0] rtl:right-[auto] rtl:left-[0] w-[100%] md:h-full">
                <div className="flex flex-col justify-start w-full">
                  <Img
                    className="h-[13px] ml-[60px] mr-[610px] rotate-[141deg] w-[13px]"
                    src="/images/img_star_13x13.svg"
                    alt="star"
                  />
                  <div className="flex flex-row items-start justify-start ml-[205px] w-[23%] md:w-full">
                    <div className="bg-deep_orange-600_72 h-[7px] mb-2 rounded-[3px] w-[7px]"></div>
                    <Img
                      className="h-[17px] ml-3 rtl:ml-0 rtl:mr-3 rotate-[73deg] w-[17px]"
                      src="/images/img_star_17x17.svg"
                      alt="star_One"
                    />
                    <Img
                      className="h-3.5 ml-[103px] mt-0.5 w-3.5"
                      src="/images/img_offer.svg"
                      alt="offer"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start ml-[27px] mt-6 w-[86%] md:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[74%] md:w-full">
                      <Img
                        className="h-[15px] mt-[15px] rotate-[159deg] w-[15px]"
                        src="/images/img_star_15x15.svg"
                        alt="star_Two"
                      />
                      <Img
                        className="h-[9px] mb-0.5 ml-0.5 mt-[18px] rotate-[109deg] w-[9px]"
                        src="/images/img_star_9x9.svg"
                        alt="star_Three"
                      />
                      <div className="bg-light_blue-500_d8 h-[7px] mb-[17px] ml-[155px] mt-[5px] rounded-[3px] w-[7px]"></div>
                      <Img
                        className="h-[23px] mb-[7px] ml-[67px]"
                        src="/images/img_download.svg"
                        alt="download"
                      />
                      <div className="bg-purple-A200_e5 h-[5px] mb-3.5 ml-[155px] mt-2.5 rounded-sm w-[5px]"></div>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-end ml-[25px] mt-0.5 w-[96%] md:w-full">
                      <div className="flex flex-col gap-[5px] items-center justify-start w-[61%] sm:w-full">
                        <div className="flex flex-row items-end justify-start w-full">
                          <Img
                            className="h-[9px] mt-4 rotate-[-57deg] w-[9px]"
                            src="/images/img_star_1.svg"
                            alt="star_Four"
                          />
                          <Img
                            className="h-[22px] ml-[106px] mt-[3px]"
                            src="/images/img_offer_deep_orange_600.svg"
                            alt="offer_One"
                          />
                          <div className="bg-lime-A700_99 h-1 mb-[21px] ml-48 rtl:ml-0 rtl:mr-48 rounded-[50%] w-1"></div>
                        </div>
                        <div className="flex flex-row items-end justify-start w-[93%] md:w-full">
                          <Img
                            className="h-[11px] mb-0.5 mt-[11px] w-[11px]"
                            src="/images/img_map.svg"
                            alt="map"
                          />
                          <Img
                            className="h-[17px] mb-2 ml-[100px] w-[17px]"
                            src="/images/img_offer_yellow_800.svg"
                            alt="offer_Two"
                          />
                          <Img
                            className="h-[9px] ml-[174px] mt-[17px] rotate-[87deg] w-[9px]"
                            src="/images/img_star_2.svg"
                            alt="star_Five"
                          />
                        </div>
                      </div>
                      <Img
                        className="h-[13px] mb-[19px] ml-[27px] mt-[23px] rotate-[-175deg] w-[13px]"
                        src="/images/img_star_3.svg"
                        alt="star_Six"
                      />
                      <Img
                        className="h-[5px] ml-[118px]"
                        src="/images/img_rectangle_yellow_800_5x10.svg"
                        alt="rectangle"
                      />
                      <Img
                        className="h-[17px] ml-[34px] w-[17px]"
                        src="/images/img_computer.svg"
                        alt="computer"
                      />
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-[3px] w-[91%] md:w-full">
                      <div className="flex flex-col gap-[30px] justify-start mb-2.5 w-[49%] sm:w-full">
                        <div className="flex flex-row items-start justify-start w-full">
                          <Img
                            className="h-2 mt-[5px] w-[9px]"
                            src="/images/img_map_purple_a200.svg"
                            alt="map_One"
                          />
                          <Img
                            className="h-[9px] ml-[11px] mt-1 w-[9px]"
                            src="/images/img_settings.svg"
                            alt="settings"
                          />
                          <Img
                            className="h-[22px] ml-[212px]"
                            src="/images/img_edit.svg"
                            alt="edit"
                          />
                        </div>
                        <Img
                          className="h-2.5 ml-[173px] w-2.5"
                          src="/images/img_ticket.svg"
                          alt="ticket"
                        />
                      </div>
                      <div className="bg-purple-900_59 h-1.5 ml-[11px] my-[33px] rounded-[50%] w-1.5"></div>
                      <div className="sm:h-[29px] md:h-[33px] h-[47px] ml-28 rtl:ml-0 rtl:mr-28  mt-1 relative w-[6%] sm:w-full">
                        <Img
                          className="absolute h-[29px] left-[0] top-[0]"
                          src="/images/img_offer_teal_a100.svg"
                          alt="offer_Three"
                        />
                        <Img
                          className="absolute bottom-[0] h-[22px] right-[0] rtl:right-[auto] rtl:left-[0] w-[21px]"
                          src="/images/img_ticket_light_blue_300.svg"
                          alt="ticket_One"
                        />
                      </div>
                      <Img
                        className="h-[13px] ml-[101px] mt-[60px] rotate-[-177deg] w-[13px]"
                        src="/images/img_star_4.svg"
                        alt="star_Seven"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-8 items-start justify-start ml-4 rtl:ml-0 rtl:mr-4 mt-[11px] w-[95%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Img
                        className="h-[13px] mt-[15px] w-[13px]"
                        src="/images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                      <Img
                        className="h-[15px] ml-[34px] w-[15px]"
                        src="/images/img_polygon.svg"
                        alt="polygon"
                      />
                      <Img
                        className="h-4 ml-[68px] my-1.5 w-4"
                        src="/images/img_settings_yellow_800.svg"
                        alt="settings_One"
                      />
                      <Img
                        className="h-4 ml-[316px] mt-[13px] w-4"
                        src="/images/img_location_green_a100.svg"
                        alt="location_One"
                      />
                      <div className="bg-deep_purple-A200_bf h-3 mb-0.5 ml-[155px] mt-[15px] w-[11px]"></div>
                    </div>
                    <div className="flex flex-row items-start justify-start w-[37%] md:w-full">
                      <div className="bg-purple-100_a5 h-[9px] mb-1 rounded w-[9px]"></div>
                      <div className="bg-light_blue-300_e5 h-2.5 mb-1 ml-[145px] rounded-[50%] w-2.5"></div>
                      <div className="bg-green-A100_bf h-[7px] ml-[65px] mt-[7px] rounded-[3px] w-[7px]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[17px] w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
                      <div className="flex md:flex-1 flex-col justify-start w-[92%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-8 items-start justify-end ml-[127px] w-4/5 md:w-full">
                          <div className="flex flex-col justify-start mt-3 w-3/5 sm:w-full">
                            <div className="flex flex-row gap-[71px] items-end justify-end ml-[130px] w-[29%] md:w-full">
                              <Img
                                className="h-2.5 mb-0.5 w-2.5"
                                src="/images/img_location_yellow_800.svg"
                                alt="location_Two"
                              />
                              <div className="bg-deep_orange-600_d8 h-1 mt-2 rounded-[50%] w-1"></div>
                            </div>
                            <div className="flex flex-row items-start justify-start w-full">
                              <Img
                                className="h-[13px] mt-[19px] rotate-[21deg] w-[13px]"
                                src="/images/img_star_5.svg"
                                alt="star_Eight"
                              />
                              <Img
                                className="h-3.5 mb-3.5 mt-1 rotate-[33deg] w-3.5"
                                src="/images/img_star_14x14.svg"
                                alt="star_Nine"
                              />
                              <Img
                                className="h-[18px] mb-[15px] ml-[22px] w-[18px]"
                                src="/images/img_rewind.svg"
                                alt="rewind"
                              />
                              <Img
                                className="h-[15px] ml-[215px] mt-[7px]"
                                src="/images/img_rectangle.svg"
                                alt="rectangle_Two"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col justify-start w-[34%] sm:w-full">
                            <Img
                              className="h-3 ml-[63px] w-3"
                              src="/images/img_settings_lime_a700.svg"
                              alt="settings_Two"
                            />
                            <div className="flex flex-row items-start justify-start mt-[3px] w-full">
                              <div className="bg-deep_orange-900_72 h-[3px] mb-[21px] rounded-[1px] w-[3px]"></div>
                              <Img
                                className="h-[11px] ml-[89px] w-[11px]"
                                src="/images/img_location_purple_100.svg"
                                alt="location_Three"
                              />
                              <Img
                                className="h-[17px] ml-[46px] mt-[7px] w-[17px]"
                                src="/images/img_location_yellow_500.svg"
                                alt="location_Four"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mr-[5px] mt-[9px] w-full">
                          <Img
                            className="h-[9px] mb-[3px] rotate-[-49deg] w-[9px]"
                            src="/images/img_star_6.svg"
                            alt="star_Ten"
                          />
                          <div className="bg-green-A100_e5 h-[9px] ml-[310px] mt-1 rounded w-[9px]"></div>
                          <div className="bg-green-A100_a5 h-1.5 mb-[7px] ml-[282px] rounded-[50%] w-1.5"></div>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start ml-[52px] mt-3.5 w-[87%] md:w-full">
                          <div className="md:h-[18px] h-[30px] relative w-[4%] sm:w-full">
                            <Img
                              className="absolute h-4 left-[0] top-[0] w-[15px]"
                              src="/images/img_location_teal_a100.svg"
                              alt="location_Five"
                            />
                            <Img
                              className="absolute bottom-[0] h-[18px] right-[0] rtl:right-[auto] rtl:left-[0] w-[18px]"
                              src="/images/img_polygon_green_a100.svg"
                              alt="polygon_One"
                            />
                          </div>
                          <div className="bg-teal-A100_e5 h-1 mb-[3px] ml-[114px] mt-[22px] rounded-[50%] w-1"></div>
                          <Img
                            className="h-3 mb-3 ml-[85px] mt-[5px] rotate-[163deg] w-3"
                            src="/images/img_star_12x12.svg"
                            alt="star_Eleven"
                          />
                          <div className="bg-purple-100_72 h-[3px] mb-[19px] ml-[135px] mt-[7px] rounded-[1px] w-[3px]"></div>
                          <Img
                            className="h-4 ml-1.5 w-4"
                            src="/images/img_mail.svg"
                            alt="mail"
                          />
                          <Img
                            className="h-[13px] ml-[124px] my-[7px] rotate-[-131deg] w-[13px]"
                            src="/images/img_star_7.svg"
                            alt="star_Twelve"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-end ml-[90px] mt-[7px] w-[84%] md:w-full">
                          <div className="flex flex-col justify-start w-[66%] sm:w-full">
                            <div className="flex flex-row gap-[130px] items-start justify-end ml-[193px] w-[44%] md:w-full">
                              <Img
                                className="h-2 w-2"
                                src="/images/img_arrowleft.svg"
                                alt="arrowleft"
                              />
                              <Img
                                className="h-[9px] rotate-[141deg] w-[9px]"
                                src="/images/img_star_8.svg"
                                alt="star_Thirteen"
                              />
                            </div>
                            <div className="flex flex-row gap-11 items-start justify-end ml-[275px] mt-0.5 w-[18%] md:w-full">
                              <Img
                                className="h-[7px] mt-1 rotate-[-96deg] w-[7px]"
                                src="/images/img_star_7x7.svg"
                                alt="star_Fourteen"
                              />
                              <div className="bg-lime-A700 h-2 mb-[3px] rounded-[50%] w-2"></div>
                            </div>
                            <div className="flex flex-row items-start justify-start mr-[38px] mt-3.5 w-[89%] md:w-full">
                              <Img
                                className="h-[15px] mt-3 w-[15px]"
                                src="/images/img_play_light_blue_300.svg"
                                alt="play"
                              />
                              <Img
                                className="h-[13px] mb-[3px] ml-24 rtl:ml-0 rtl:mr-24 mt-2.5 rotate-[-17deg] w-[13px]"
                                src="/images/img_star_9.svg"
                                alt="star_Fifteen"
                              />
                              <div className="bg-lime-A700_e5 h-[7px] ml-7 mt-[18px] rounded-[3px] w-[7px]"></div>
                              <Img
                                className="h-4 mb-2.5 ml-[124px] rotate-[-105deg] w-4"
                                src="/images/img_star_16x16.svg"
                                alt="star_Sixteen"
                              />
                            </div>
                          </div>
                          <Img
                            className="h-[11px] ml-[22px] mt-[27px] w-[11px]"
                            src="/images/img_mail_purple_a200.svg"
                            alt="mail_One"
                          />
                          <div className="flex flex-col mt-[13px] relative w-[29px]">
                            <div className="flex flex-col items-center justify-start mx-auto w-full">
                              <div className="flex flex-row items-end justify-evenly w-full">
                                <Img
                                  className="h-[18px] w-[17px]"
                                  src="/images/img_offer_green_a100.svg"
                                  alt="offer_Four"
                                />
                                <Img
                                  className="h-3 mt-[5px]"
                                  src="/images/img_rectangle_yellow_800.svg"
                                  alt="rectangle_Three"
                                />
                              </div>
                            </div>
                            <Img
                              className="h-3 ltr:ml-auto rtl:mr-auto mr-[3px] mt-[-3.11px] rotate-[68deg] w-3 z-[1]"
                              src="/images/img_star_10.svg"
                              alt="star_Seventeen"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start ltr:ml-[83px] rtl:mr-[83px] mt-3 w-[6%] sm:w-full">
                            <Img
                              className="h-[13px] w-[13px]"
                              src="/images/img_arrowdown_pink_a200.svg"
                              alt="arrowdown_One"
                            />
                            <Img
                              className="h-5 ltr:ml-1 rtl:mr-1 mt-1"
                              src="/images/img_offer_light_blue_500.svg"
                              alt="offer_Five"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start mt-[7px] w-[7%] md:w-full">
                        <Img
                          className="h-[21px] w-5"
                          src="/images/img_edit_teal_a100.svg"
                          alt="edit_One"
                        />
                        <Img
                          className="h-[7px] ml-2 rtl:ml-0 rtl:mr-2 mt-[3px] rotate-[84deg] w-[7px]"
                          src="/images/img_star_11.svg"
                          alt="star_Eighteen"
                        />
                        <div className="flex flex-row gap-3.5 items-start justify-between mt-9 w-full">
                          <Img
                            className="h-[11px] mt-3 w-[11px]"
                            src="/images/img_rectangle_deep_purple_a200.svg"
                            alt="rectangle_Four"
                          />
                          <div className="h-3.5 md:h-[23px] mb-[9px] relative w-[15px]">
                            <div className="absolute bg-light_blue-300_d8 h-[7px] right-[0] rtl:right-[auto] rtl:left-[0] rounded-[3px] top-[0] w-[7px]"></div>
                            <Img
                              className="absolute h-3.5 inset-y-[0] left-[0] my-auto w-3.5"
                              src="/images/img_location_deep_purple_a200.svg"
                              alt="location_Six"
                            />
                          </div>
                        </div>
                        <Img
                          className="h-2.5 ml-[3px] mt-2.5 w-2.5"
                          src="/images/img_computer_deep_purple_a200.svg"
                          alt="computer_One"
                        />
                      </div>
                      <Img
                        className="h-2 md:h-auto mt-[60px] object-cover w-2"
                        src="/images/img_ellipse.png"
                        alt="ellipse_Seventeen"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row gap-[31px] items-start justify-between w-[99%] md:w-full">
                      <div className="flex flex-col gap-[9px] items-end justify-start mt-6 w-[3%] md:w-full">
                        <Img
                          className="h-[19px]"
                          src="/images/img_volume.svg"
                          alt="volume"
                        />
                        <div className="bg-yellow-800_d8 h-[7px] rounded-[3px] w-[7px]"></div>
                      </div>
                      <div className="flex flex-col gap-2.5 justify-start w-[93%] md:w-full">
                        <Img
                          className="h-[11px] ml-[596px] mr-3.5 rotate-[140deg] w-[11px]"
                          src="/images/img_star_11x11.svg"
                          alt="star_Nineteen"
                        />
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[85%] md:w-full">
                            <Img
                              className="h-4 mt-[19px]"
                              src="/images/img_computer_purple_100.svg"
                              alt="computer_Two"
                            />
                            <div className="bg-purple-900_72 h-[26px] mb-2.5 ml-3.5 rtl:ml-0 rtl:mr-3.5 rotate-[-90deg] w-[2%]"></div>
                            <div className="flex h-3 justify-end ml-[442px] mt-[3px] relative w-3">
                              <div className="bg-green-A100_bf h-1.5 ltr:ml-auto rtl:mr-auto mt-auto rounded-[50%] w-1.5"></div>
                              <Img
                                className="absolute h-3 inset-[0] justify-center m-auto w-3"
                                src="/images/img_play_pink_a200.svg"
                                alt="play_One"
                              />
                            </div>
                            <Img
                              className="h-[13px] ml-3 rtl:ml-0 rtl:mr-3 mt-[22px] rotate-[-111deg] w-[13px]"
                              src="/images/img_star_12.svg"
                              alt="star_Twenty"
                            />
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-full">
                            <Img
                              className="h-2.5 mb-[7px] mt-6 rotate-[-173deg] w-2.5"
                              src="/images/img_star_10x10.svg"
                              alt="star_TwentyOne"
                            />
                            <div className="bg-purple-100_bf h-[9px] mb-[33px] ml-4 rtl:ml-0 rtl:mr-4 rounded w-[9px]"></div>
                            <div className="bg-yellow-800_59 h-1 mb-[26px] ml-[11px] mt-3 rounded-[50%] w-1"></div>
                            <Img
                              className="h-[21px] mb-3.5 ml-[233px] mt-[7px] w-[22px]"
                              src="/images/img_bookmark.svg"
                              alt="bookmark"
                            />
                            <Img
                              className="h-2 ml-[59px] mt-5 w-2"
                              src="/images/img_arrowup.svg"
                              alt="arrowup"
                            />
                            <Img
                              className="h-4 mb-[22px] ml-[74px] mt-1 rotate-[107deg] w-4"
                              src="/images/img_star_13.svg"
                              alt="star_TwentyTwo"
                            />
                            <div className="bg-green-A100_59 h-[3px] mb-[23px] ml-[76px] mt-4 rounded-[1px] w-[3px]"></div>
                            <Img
                              className="h-[9px] ml-16 mt-[33px] w-2.5"
                              src="/images/img_offer_green_a100_9x10.svg"
                              alt="offer_Six"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute bottom-[0] h-[657px] object-cover right-[0] rtl:right-[auto] rtl:left-[0] left-[0] mx-auto w-full"
                src="/images/img_rectangle19148.png"
                alt="rectangle19148"
              />
            </div>
            <div className="absolute bg-white-A700 top-[7%] sm:top-[50%] flex flex-row gap-8 inset-x-[0] items-center justify-center mx-auto sm:px-5 px-8 py-3 rounded-[12px] shadow-bs3 w-full max-w-[357px]">
              <Text
                className="leading-[24.00px] text-base text-black-900"
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
          </div>
          <Footer className="flex font-mohrroundedaltregular items-center justify-center mt-[65px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default DesignMyOwnCake;