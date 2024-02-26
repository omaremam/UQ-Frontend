import { Button, Img, Line, Text } from "components";
import { useTranslation } from "react-i18next";
const Footer3 = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-[23px] mx-auto w-[1110px]">
          <div className="flex flex-col gap-[20px] items-center justify-center w-full">
            <Line className="bg-black-900 h-px w-full" />
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <Text
                className="text-black-900 text-sm"
                size="txtMohrRoundedAltRegular14"
              >
                {t("copyright2023RabbitHoleDotAllRightsReservedDot")}
              </Text>
              <div className="flex flex-row gap-3 items-start justify-start w-auto">
                <div className="flex flex-col h-8 items-center justify-start w-8">
                  <Button className="bg-black-900 flex h-8 items-center justify-center p-2 rounded-[50%] w-8">
                    <Img
                      className="h-4"
                      src="/images/img_rifacebookfill.svg"
                      alt="rifacebookfill"
                    />
                  </Button>
                </div>
                <Button className="bg-black-900 flex h-8 items-center justify-center p-2 rounded-[50%] w-8">
                  <Img
                    className="h-4"
                    src="/images/img_riinstagramfill.svg"
                    alt="riinstagramfill"
                  />
                </Button>
                <div className="flex flex-col h-8 items-center justify-start w-8">
                  <Button className="bg-black-900 flex h-8 items-center justify-center p-2 rounded-[50%] w-8">
                    <Img
                      className="h-4"
                      src="/images/img_mditwitter.svg"
                      alt="mditwitter"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer3.defaultProps = {};

export default Footer3;