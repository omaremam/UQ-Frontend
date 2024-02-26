import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Line, Text } from "components";
import { InputAdornment } from "@mui/material";

const Footer = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <footer className="flex font-mohrroundedaltregular  items-center justify-center mx-auto w-full">
        <div className="flex flex-col items-center justify-center mx-auto max-w-[1110px] w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <Line className="bg-black-900 h-px w-full" />
            <div className="flex xs:flex-col sm:flex-wrap flex-row sm:gap-x-10 sm:gap-y-6 xs:gap-y-4 items-start justify-between mt-12 w-full md:px-4">
              <div className="flex xs:flex-1 flex-col items-start justify-start w-auto sm:w-full">
                <Text
                  className="sm:text-3xl md:text-[32px] text-[34px] text-black-900"
                  size="txtMohrRoundedAltBold34"
                >
                  RabbitHole
                </Text>
                <Text
                  className="mt-[0px] text-base text-black-900"
                  size="txtMohrRoundedAltMedium16"
                >
                  Party Everyday!
                </Text>
                <div className="footer-input-row flex flex-col h-14 md:h-auto items-start justify-start mt-[29px] rounded-tl rounded-tr max-w-[364px] w-full">
                  <Input
                    placeholder="Enter Email"
                    className="footer-input"
                    endAdornment={
                      <InputAdornment position="end">
                        <Img
                          className="h-6 w-6 cursor-pointer rtl:rotate-180"
                          src="/images/img_play.svg"
                          alt="play"
                        />
                      </InputAdornment>
                    }
                  ></Input>
                </div>
                <Text
                  className="leading-[20.00px] sm:mt-0 mt-3 text-gray-700 text-sm w-[77%] sm:w-full rtl:text-right"
                  size="txtMohrRoundedAltRegular14"
                >
                  Subscribe to our newsletter to find out about all our news.
                </Text>
              </div>
              <div className="flex xs:flex-1 flex-col gap-[20px] items-start justify-start sm:mt-0 xs:mt-3 mt-[11px] w-auto xs:w-full">
                <Text
                  className="text-base text-gray-700"
                  size="txtMohrRoundedAltRegular16Gray700"
                >
                  Quick Links
                </Text>
                <ul className="flex flex-col gap-[16px] items-start justify-start w-full common-column-list">
                  <li>
                    <Text
                      className="text-base text-black-900 rtl:text-right footer-link w-fit"
                      size="txtMohrRoundedAltMedium16"
                      onClick={() => navigate("/contactus")}
                    >
                      Contact Us
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-black-900 rtl:text-right footer-link w-fit"
                      size="txtMohrRoundedAltMedium16"
                      onClick={() => navigate("/blog-list")}
                    >
                      Blog
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-black-900 rtl:text-right footer-link w-fit"
                      size="txtMohrRoundedAltMedium16"
                      onClick={() => navigate("/terms-and-conditions")}
                    >
                      Terms & Conditions
                    </Text>
                  </li>
                </ul>
              </div>
              <div className="flex xs:flex-1 flex-col gap-[20px] items-start justify-start sm:mt-0 mt-[11px] w-auto xs:w-full">
                <Text
                  className="text-base text-gray-700 xs:hidden"
                  size="txtMohrRoundedAltRegular16Gray700"
                >
                  <br />
                </Text>
                <ul className="flex flex-col gap-[16px] items-start justify-start w-full common-column-list">
                  <li>
                    <Text
                      className="text-base text-black-900 rtl:text-right footer-link w-fit"
                      size="txtMohrRoundedAltMedium16"
                      onClick={() => navigate("/privacy-policy")}
                    >
                      Privacy Policy
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-black-900 rtl:text-right footer-link w-fit"
                      size="txtMohrRoundedAltMedium16"
                      onClick={() => navigate("/return-policy")}
                    >
                      Return Policy
                    </Text>
                  </li>
                </ul>
              </div>
              <div className="flex xs:flex-1 flex-col gap-6 items-start justify-start xs:mt-3 mt-[11px] w-auto xs:w-full">
                <Text
                  className="text-base text-gray-700"
                  size="txtMohrRoundedAltRegular16Gray700"
                >
                  Follow Us
                </Text>
                <ul className="flex flex-col gap-3 items-start justify-start w-full common-column-list">
                  <li>
                    <div className="flex flex-row gap-2 items-center justify-start">
                      <Button className="bg-black-900 flex h-8 items-center justify-center p-2 rounded-[50%] w-8">
                        <Img
                          className="h-4"
                          src="/images/img_rifacebookfill.svg"
                          alt="rifacebookfill"
                        />
                      </Button>
                      <Text
                        className="text-base text-black-900"
                        size="txtMohrRoundedAltMedium16"
                      >
                        Facebook
                      </Text>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-2 items-center justify-start">
                      <Button className="bg-black-900 flex h-8 items-center justify-center p-2 rounded-[50%] w-8">
                        <Img
                          className="h-4"
                          src="/images/img_riinstagramfill.svg"
                          alt="riinstagramfill"
                        />
                      </Button>
                      <Text
                        className="text-base text-black-900"
                        size="txtMohrRoundedAltMedium16"
                      >
                        Instagram
                      </Text>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-2 items-center justify-start">
                      <Button className="bg-black-900 flex h-8 items-center justify-center p-2 rounded-[50%] w-8">
                        <Img
                          className="h-4"
                          src="/images/img_mditwitter.svg"
                          alt="mditwitter"
                        />
                      </Button>
                      <Text
                        className="text-base text-black-900"
                        size="txtMohrRoundedAltMedium16"
                      >
                        Twitter
                      </Text>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <Line className="bg-black-900_75 h-px mt-12 w-full" />
            <div className="flex flex-row items-center justify-center py-[24px] sm:py-[16px] w-full md:px-4">
              <Text
                className="text-black-900 text-xs"
                size="txtMohrRoundedAltRegular12"
              >
                ©copyright 2023 RabbitHole. All rights reserved.
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;