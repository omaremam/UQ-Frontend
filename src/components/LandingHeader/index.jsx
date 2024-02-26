import { Img } from "components";
import { useNavigate } from "react-router-dom";

const LandingHeader = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row md:gap-5 items-center justify-center mx-auto max-w-[1110px] w-full md:px-4">
          <Img
            className="h-[58px]"
            src="/images/jolly-logo.png"
            alt="jollylogo"
            onClick={() => navigate("/landing")}
          />
        </div>
      </div>
    </>
  );
};

LandingHeader.defaultProps = {};

export default LandingHeader;
