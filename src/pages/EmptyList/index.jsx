import { Button, Img, Text } from "components";
import { t } from "i18next";

const EmptyAll = (props) => {

  let list={
    "occasion":{
      "image":"",
      "content":t("emptyOccasion"),
    }
  }

  let data=list[props?.type];

  return (
    <>
      <div className="border border-gray-300 border-solid flex flex-col items-center justify-end p-[57px] md:px-10 sm:px-5 rounded w-full">
        <div className="flex flex-col items-center justify-start w-80 md:w-full">
          <Img
            className="h-[175px]"
            src={data?.image || "images/img_order-empty.svg"}
            alt="order-empty"
          />
          <Text className="font-mohrroundedaltregular leading-[24.00px] mt-5 mb-7 text-base text-center text-gray-700 w-full">
            {data?.content}
          </Text>
          {/* <Button
            variant={"OutlineBlack"}
            size={"md"}
            className="min-w-[125px] flex items-center justify-center"
            hover={true}
            hoverclass="bg-black-900"
            leftIcon={
              <Img
                className="h-5 mt-px btn-icon"
                src="/images/img_plus_black_900_20x20.svg"
                alt="plus"
              />
            }
            onClick={(e) => {
              props?.addAddressTrigger(0);
            }}
          >
            <Text className="mx-2" as="span">
              {props?.emptyBtn}
            </Text>
          </Button> */}
        </div>
      </div>
    </>
  );
};

export default EmptyAll;