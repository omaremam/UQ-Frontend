import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const DesignMyOwnCakeQuestionOneHeader = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row md:gap-5 items-center justify-start mx-auto max-w-[1110px] w-full md:px-4">
          <div className="flex items-center text-gray-700">
            {!!props?.p0 ? (
              <Text
                className="text-black-900 text-right text-sm"
                size="txtMohrRoundedAltRegular14"
              >
                {props?.p0}
              </Text>
            ) : null}
            /
            {!!props?.p13 ? (
              <Text
                className="text-gray-700 text-right text-sm"
                size="txtMohrRoundedAltRegular14"
              >
                {props?.p13}
              </Text>
            ) : null}
          </div>
          <Img
            className="h-[62px] sm:h-auto mx-auto w-[114px] cursor-pointer"
            src="/images/logo.svg"
            alt="rabbitholelogo"
            onClick={() => navigate("/")}
          />
          {!!props?.exittext ? (
            <Text
              className="ml-[0] text-black-900 text-right text-sm cursor-pointer"
              size="txtMohrRoundedAltMedium14Black900"
            >
              {props?.exittext}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

DesignMyOwnCakeQuestionOneHeader.defaultProps = {};

export default DesignMyOwnCakeQuestionOneHeader;
