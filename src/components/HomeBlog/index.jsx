import { Img, Text } from "components";

const HomeBlog = (props) => {
  return (
    <>
      <div className={`${props.className} blog-card`}>
        <div className="h-[285px] sm:h-auto object-cover rounded-bl-lg rounded-br-lg w-full overflow-hidden">
          <Img
            className="h-[285px] sm:h-auto object-cover rounded-bl-lg rounded-br-lg w-full blog-card-image"
            alt="rectangle17564"
            src={props?.userimage}
          />
        </div>
        <div className="flex flex-row items-center rtl:flex-row-reverse justify-start rtl:justify-end ltr:ml-1 rtl:mr-1 rtl:md:mx-[0] md:mx-[0] mt-4 w-auto ">
          <Img
            className="h-4 md:h-auto object-cover w-4"
            src="/images/img_notofire.png"
            alt="notofire"
          />
          <Text
            className="ltr:ml-1 rtl:mr-1 text-black-900 text-xs"
            size="txtMohrRoundedAltRegular12"
          >
            {props?.viewcount}
          </Text>
          <Text
            className="ltr:ml-1 rtl:mr-1 text-gray-700 text-xs"
            size="txtMohrRoundedAltRegular12Gray700"
          >
            {props?.separator}
          </Text>
          <Img
            className="h-4 ltr:ml-1 rtl:mr-1 w-4"
            src="/images/img_mdiheart.svg"
            alt="mdiheart"
          />
          <Text
            className="ltr:ml-1 rtl:mr-1 text-black-900 text-xs"
            size="txtMohrRoundedAltRegular12"
          >
            {props?.likecount}
          </Text>
        </div>
        <Text
          className="ltr:ml-1 rtl:mr-1 md:ml-[0] mt-3.5 text-base text-black-900 rtl:text-right"
          size="txtMohrRoundedAltMedium16"
        >
          {props?.title}
        </Text>
        <Text
          className="leading-[20.00px] ltr:ml-1 rtl:mr-1 md:ml-[0] mt-2.5 text-gray-700 text-sm w-[91%] sm:w-full rtl:text-right"
          size="txtMohrRoundedAltRegular14"
        >
          {props?.description}
        </Text>
      </div>
    </>
  );
};

HomeBlog.defaultProps = {
  userimage: "images/img_rectangle17564.png",
  viewcount: "2.6k Views",
  separator: "|",
  likecount: "1k Likes",
  title: "Find Your Cake Inspiration",
  description:
    "A cake blog with cake inspiration, cake tutorials, baker interviews...",
};

export default HomeBlog;