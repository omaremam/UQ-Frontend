import React from "react";
import { Img, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import HomeBlog from "components/HomeBlog";
import styled from "styled-components";
// Importing localization strings
import { useTranslation } from "react-i18next";
const BlogListPage = () => {
  const { t } = useTranslation();
  const Button = styled.div`
    /* Add the selected styles when the component is selected */
    ${({ isSelected }) =>
      isSelected &&
      `
border-bottom: 2px solid;  
border-color: #bd0043 !important;
border-radius: 0px;
`}
  `;
  const [tabs, setTabs] = React.useState(1);
  const handleButtonClick = (tab) => {
    setTabs(tab);
  };
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mohrroundedaltregular items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="bg-white-A700 flex md:flex-col flex-row font-mohrroundedaltmedium md:gap-5 items-center justify-center md:px-5 shadow-bs w-full" />
          <div className="bg-teal-50 flex flex-col items-start justify-start w-full overflow-hidden	">
            <div className="relative flex flex-row gap-[42px] items-center justify-start md:px-5 w-full">
              <div className="flex flex-col md:gap-10 gap-[100px] items-end justify-start w-[7%] absolute ltr:left-0 rtl:right-0">
                <Img
                  className="h-[134px] md:h-auto object-cover"
                  src="/images/img_clippathgroup_gray_100.png"
                  alt="clippathgroup"
                />
                <Img
                  className="h-[17px] w-4"
                  src="/images/img_close_red_300.svg"
                  alt="close"
                />
              </div>
              <div className="h-[350px] sm:h-[300px] xs:h-[250px] relative max-w-[1110px] w-full mx-auto flex flex-col items-start justify-center">
                <div className="absolute h-[350px] sm:h-[300px] inset-y-[0] my-auto right-[2%] w-[89%] md:w-full">
                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[93%]">
                    <div className="flex flex-row items-start justify-start w-full">
                      <Img
                        className="h-[116px] mt-[233px]"
                        src="/images/img_clippathgroup_orange_50.svg"
                        alt="clippathgroup_One"
                      />
                      <Img
                        className="h-[133px] ml-[116px] sm:mt-0 mt-[138px]"
                        src="/images/img_clippathgroup_black_900.svg"
                        alt="clippathgroup_Two"
                      />
                      <Img
                        className="h-[292px] mb-[57px] ml-[91px]"
                        src="/images/img_clippathgroup_black_900_292x344.svg"
                        alt="clippathgroup_Three"
                      />
                    </div>
                  </div>
                  <Img
                    className="absolute h-[278px] inset-y-[0] my-auto object-cover right-[0] rtl:right-[auto] rtl:left-[0] w-[278px] sm:right-[-12%] xs:right-[-20%] xs:top-[80%]"
                    src="/images/img_image64.png"
                    alt="imageSixtyFour"
                  />
                </div>
                <Img
                  className="absolute h-[37px] right-[0] rtl:right-[auto] rtl:left-[0] top-[39%]"
                  src="/images/img_alarm.svg"
                  alt="alarm"
                />
                <Img
                  className="absolute bottom-[14%] h-14 right-[35%]"
                  src="/images/img_vector.svg"
                  alt="vector"
                />
                <Img
                  className="absolute h-[17px] right-[43%] top-[18%] w-4"
                  src="/images/img_close_deep_orange_100.svg"
                  alt="close_One"
                />
                <Img
                  className="absolute h-[22px] left-[20%] top-[9%]"
                  src="/images/img_signal.svg"
                  alt="signal"
                />
                <Text
                  className="leading-[56.00px] sm:text-4xl xs:text-xl md:text-[38px] text-[40px] text-black-900 mt-auto z-[20] rtl:text-right"
                  size="txtMohrRoundedAltBold40Black900"
                >
                  <>
                    {t("wePostTrendsAndTutorials")}
                    <br />
                    {t("forModernCakesMakingProcess")}
                  </>
                </Text>
                <Text
                  className="leading-[24.00px] text-base text-black-900 w-[56%] sm:w-full mb-auto z-[20] mt-4 rtl:text-right"
                  size="txtMohrRoundedAltRegular16"
                >
                  <>
                    {t(
                      "hereYouAndWillFindArticlesOnTheLatestWellnessTrendsAndTopicsDeliciousPlantBasedRecipesTipTricksAndMuchMoreExclamationMark"
                    )}
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-light_blue-50 flex flex-col items-start justify-start w-full">
            <div className="gap-1 flex items-start justify-start max-w-[745px] w-full mx-auto xs:flex-wrap">
              <Button
                className="cursor-pointer flex-1 font-bold text-center text-gray_600 tracking-[0.32px] w-full p-3 min-w-[100px] text-sm border-b-[2px] rounded-none border-transparent"
                isSelected={tabs === 1}
                onClick={() => handleButtonClick(1)}
              >
                {t("occasion")}
              </Button>
              <Button
                className="cursor-pointer flex-1 font-bold text-center text-gray_600 tracking-[0.32px] w-full p-3 min-w-[120px] text-sm border-b-[2px] rounded-none border-transparent"
                shape="RoundedBorder4"
                size="2xl"
                variant="FillBluegray50"
                isSelected={tabs === 2}
                onClick={() => handleButtonClick(2)}
              >
                {t("relationship")}
              </Button>
              <Button
                className="cursor-pointer flex-1 font-bold text-center text-gray_600 tracking-[0.32px] w-full p-3 min-w-[100px] text-sm border-b-[2px] rounded-none border-transparent"
                shape="RoundedBorder4"
                size="2xl"
                variant="FillBluegray50"
                isSelected={tabs === 3}
                onClick={() => handleButtonClick(3)}
              >
                {t("giftIdeas")}
              </Button>
              <Button
                className="cursor-pointer flex-1 font-bold text-center text-gray_600 tracking-[0.32px] min-w-[100px] text-sm border-b-[2px] rounded-none border-transparent w-full p-3"
                shape="RoundedBorder4"
                size="2xl"
                variant="FillBluegray50"
                isSelected={tabs === 4}
                onClick={() => handleButtonClick(4)}
              >
                {t("flowers")}
              </Button>
              <Button
                className="cursor-pointer flex-1 font-bold text-center text-gray_600 tracking-[0.32px] min-w-[100px] text-sm border-b-[2px] rounded-none border-transparent w-full p-3"
                shape="RoundedBorder4"
                size="2xl"
                variant="FillBluegray50"
                isSelected={tabs === 5}
                onClick={() => handleButtonClick(5)}
              >
                {t("plants")}
              </Button>
              <Button
                className="cursor-pointer flex-1 font-bold text-center text-gray_600 tracking-[0.32px] min-w-[100px] text-sm border-b-[2px] rounded-none border-transparent w-full p-3"
                shape="RoundedBorder4"
                size="2xl"
                variant="FillBluegray50"
                isSelected={tabs === 6}
                onClick={() => handleButtonClick(6)}
              >
                {t("cakes")}
              </Button>
              <Button
                className="cursor-pointer flex-1 font-bold text-center text-gray_600 tracking-[0.32px] min-w-[100px] text-sm border-b-[2px] rounded-none border-transparent w-full p-3"
                shape="RoundedBorder4"
                size="2xl"
                variant="FillBluegray50"
                isSelected={tabs === 7}
                onClick={() => handleButtonClick(7)}
              >
                {t("others")}
              </Button>
            </div>
          </div>
          {tabs === 1 && (
            <>
              <List
                className="sm:flex-col flex-row gap-[30px] grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-cols-4 justify-center max-w-[1110px] mt-[31px] mx-auto md:px-5 w-full mb-8"
                orientation="horizontal"
              >
                <HomeBlog />
                <HomeBlog />
                <HomeBlog />
                <HomeBlog />
                <HomeBlog />
                <HomeBlog />
                <HomeBlog />
                <HomeBlog />
              </List>
            </>
          )}
          {tabs === 2 && (
            <>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1110px] mt-[31px] mx-auto md:px-5 w-full mb-8"
                orientation="horizontal"
              >
                <HomeBlog />
                <HomeBlog />
                <HomeBlog />
              </List>
            </>
          )}
          {tabs === 3 && (
            <>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1110px] mt-[31px] mx-auto md:px-5 w-full mb-8"
                orientation="horizontal"
              >
                <HomeBlog />
                <HomeBlog />
              </List>
            </>
          )}
          {tabs === 4 && (
            <>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1110px] mt-[31px] mx-auto md:px-5 w-full mb-8"
                orientation="horizontal"
              >
                <HomeBlog />
                <HomeBlog />
              </List>
            </>
          )}
          {tabs === 4 && (
            <>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1110px] mt-[31px] mx-auto md:px-5 w-full mb-8"
                orientation="horizontal"
              >
                <HomeBlog />
                <HomeBlog />
                <HomeBlog />
                <HomeBlog />
              </List>
            </>
          )}
          {tabs === 5 && (
            <>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1110px] mt-[31px] mx-auto md:px-5 w-full mb-8"
                orientation="horizontal"
              >
                <HomeBlog />
              </List>
            </>
          )}
          {tabs === 6 && (
            <>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1110px] mt-[31px] mx-auto md:px-5 w-full mb-8"
                orientation="horizontal"
              >
                <HomeBlog />
                <HomeBlog />
              </List>
            </>
          )}
          {tabs === 7 && (
            <>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1110px] mt-[31px] mx-auto md:px-5 w-full mb-8"
                orientation="horizontal"
              >
                <HomeBlog />
                <HomeBlog />
                <HomeBlog />
                <HomeBlog />
              </List>
            </>
          )}

          <div className="flex h-12 items-center justify-center mt-4 mb-10 rounded-[50%] w-full">
            <Img
              src="/images/Loaderanim.png"
              className="animate-spin"
              alt="loaderanim"
            />
          </div>
          <Footer className="flex font-mohrroundedaltregular items-center justify-center mt-[97px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default BlogListPage;
