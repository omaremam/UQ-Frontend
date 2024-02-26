import { Img, Text } from "components";
// Importing localization strings
import { useTranslation } from "react-i18next";
const SearchEmptyPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-[150px] border border-gray-300 rounded max-w-[920px] w-full mx-auto py-[50px] px-[50px] px-[16px] mt-10">
        <Img
          className="h-[175px] w-[170px]"
          src="/images/search-icon.svg"
          alt="group33479"
        />
        <Text
          className="leading-[32.00px] mt-8 text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
          size="txtMohrRoundedAltSemiBold24"
        >
          <>
            {t("thereAreOverThousandsOfProducts")} <br className="xs:hidden" />
            {t("onRabbitHoleDot")}
          </>
        </Text>
        <Text
          className="leading-[24.00px] mt-4 text-base text-center text-gray-700 max-w-[320px] w-full"
          size="txtMohrRoundedAltRegular16Gray700"
        >
          {t("enterYourSearchInTheBarAboveAndStartExploringProductsDot")}
        </Text>
      </div>
    </>
  );
};

export default SearchEmptyPage;