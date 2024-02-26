import { Img, Text } from "components";
import * as CUSTOM from "../../../../utils/helper/custom";
const OccasionDetailBox = (props) => { 

  return (
    <>
      <div
        className={
          "bg-white-A700 border border-gray-300 border-solid flex flex-col gap-2 items-start justify-start p-1 rounded-lg max-w-[112px]"
        }
      >
        <div className="h-[92px] relative w-full">
          <Img
            className="absolute bottom-[0] top-[0] left-[0] right-[0] rtl:right-[auto] rtl:left-[0] object-cantain  h-25 w-full"
            src={`${props.image?CUSTOM.getImage(props.image):''}`}
            alt="rectangle19009"
          />
          <Img
            className="absolute h-4 right-[0] rtl:right-[auto] rtl:left-[0] top-[0] w-4 cursor-pointer"
            src="/images/img_close_black_900.svg"
            alt="close_One"
            onClick={(e)=>{
                if(props?.itemId){
                  props.delete(props?.itemId);
                }
            }}
          />
        </div>
        <Text
          className="leading-[20.00px] text-black-900 text-center text-sm w-full"
          size="txtMohrRoundedAltRegular14Black900"
        >
          {props?.caketext}
        </Text>
      </div>
    </>
  );
};

OccasionDetailBox.defaultProps = { caketext: "Fruit Vanilla Cake..." };

export default OccasionDetailBox;