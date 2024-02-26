import React from "react";
import { Img, Slider } from "components";
// Importing localization strings
import { useTranslation } from "react-i18next";
const ViewImage = ({ closepopup }) => {
  const { t } = useTranslation();
  const closepopupout = () => {
    closepopup(false);
    document.body.classList.remove("overflow-hidden");
    document.getElementById("header-box").classList.remove("relative");
  };
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-auto w-fit h-fit xs:px-4">
        <div className="relative w-auto my-6 mx-auto max-w-[900px] min-w-[900px] sm:min-w-full xs:max-w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white-A700 outline-none focus:outline-none overflow-hidden">
            {/*header*/}
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-row items-start justify-end w-auto pt-4 pr-4 rtl:pr-0 rtl:pl-4 absolute right-0 rtl:right-auto rtl:left-0">
                  <Img
                    src="/images/modal-close.svg"
                    className="common-pointer h-6 w-6"
                    alt="close"
                    onClick={() => closepopupout()}
                  />
                </div>
              </div>
            </div>
            {/*body*/}
            <div className="bg-white-A700 flex flex-col items-center justify-start px-[30px] py-11 rounded-lg w-full">
              <div className="flex flex-col items-center justify-center w-full relative z-[5]">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  activeIndex={sliderState}
                  disableButtonsControls={false}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 1 },
                    768: { items: 1 },
                    992: { items: 1 },
                    1050: { items: 1 },
                  }}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  ref={sliderRef}
                  className="image-slider flex gap-[30px] mt-[0px] mx-auto -mx-2.5 xs:mx-0 w-full sm:w-auto"
                  items={[
                    <Img
                      className="cursor-pointer h-[488px] w-[488px] xs:w-full xs:h-auto object-cover rounded-lg"
                      src="/images/img_rectangle17564_11.png"
                      alt="rectangle19120"
                      loading="lazy"
                    />,
                    <Img
                      className="cursor-pointer h-[488px] w-[488px] xs:w-full xs:h-auto object-cover rounded-lg"
                      src="/images/img_rectangle17564_7.png"
                      alt="rectangle19121"
                      loading="lazy"
                    />,
                    <Img
                      className="cursor-pointer h-[488px] w-[488px] xs:w-full xs:h-auto object-cover rounded-lg"
                      src="/images/img_rectangle17564_3.png"
                      alt="rectangle19122"
                      loading="lazy"
                    />,
                    <Img
                      className="cursor-pointer h-[488px] w-[488px] xs:w-full xs:h-auto object-cover rounded-lg"
                      src="/images/img_rectangle17564_5.png"
                      alt="rectangle19122"
                      loading="lazy"
                    />,
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="opacity-75 fixed inset-0 z-40 bg-black-900"
        onClick={() => closepopupout()}
      ></div>
    </>
  );
};
export { ViewImage };