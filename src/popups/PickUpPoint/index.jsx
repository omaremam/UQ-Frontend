import { Img, Input, Text } from "components";
import { PickUpPointsListItem } from "components/PickUpPointsListItem";
import { useEffect, useState } from "react";
// Importing localization strings
import * as CUSTOM from "../../utils/helper/custom";
import { useTranslation } from "react-i18next";
const PickUpPoint = (props) => {
  const { closepopup, zoneList } = props;
  const [searchList,setSearchList]=useState([]);
  const [search,setSearch]=useState("");
  const { t } = useTranslation();
  const closepopupout = () => {
    closepopup(false);
    document.body.classList.remove("overflow-hidden");
    document.getElementById("header-box").classList.remove("relative");
  };

  useEffect(()=>{
    if(searchList.length==0){
      setSearchList(zoneList);
    } 
  },[])

  useEffect(()=>{
         if(search){
          const matchingItems = zoneList.filter(item => item.localName.includes(search));
          setSearchList(matchingItems);
         }else{
          setSearchList(zoneList);
         }
  },[search])

  return (
    <>
      <div className="justify-center items-center xs:items-start xs:m-0 xs:h-full flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-auto w-fit h-fit xs:px-4">
        <div className="relative w-full my-6 mx-auto max-w-[580px] xs:max-w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white-A700 outline-none focus:outline-none overflow-hidden">
            {/*header*/}
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-row items-start justify-end w-auto pt-4 pr-4 rtl:pr-0 rtl:pl-4 absolute right-0 rtl:right-auto rtl:left-0">
                  <Img
                    src="/images/img_close_gray_700.svg"
                    className="common-pointer h-3 w-3"
                    alt="close"
                    onClick={() => closepopupout()}
                  />
                </div>
              </div>
            </div>
            {/*body*/}
            <div className="bg-white-A700 flex flex-col items-start justify-start px-[30px] py-[28px] rounded-lg w-full">
              <Text className="text-2xl md:text-[22px] text-black-900 mb-5 sm:text-xl font-mohrroundedaltsemibold">
                Choose Pick Up Point
              </Text>
              <Input
                placeholder={t("enterYourPickUpPoint")}
                value={search}
                onChange={(e)=>{
                      setSearch(CUSTOM.strFormat(e.target.value,'max:41111'));
                }}
                startAdornment={
                  <Img
                    className="h-6 mr-3 mt-1"
                    src="/images/img_search_black_900.svg"
                    alt="search"
                  />
                }
                endAdornment={<>
                  {search?(<Img
                    className="h-6 mt-1 cursor-pointer"
                    src="/images/img_close_black_900.svg"
                    alt="search"
                    onClick={(e)=>{
                      setSearch("");
                    }}
                  />):''}</>
                }
              />
              <div className="flex flex-col gap-4">
                {searchList?.length > 0 ? (
                  <>
                    {searchList.map((zoneItem, index) => {
                      return (
                        <>
                          <PickUpPointsListItem zoneItem={zoneItem} />
                          {zoneList?.length != index - 1 ? (
                            <div className="w-full h-px bg-gray-300" key={`pikitem${index}`}></div>
                          ) : (
                            <span key={`pikitem${index}`}></span>
                          )}
                        </>
                      );
                    })}
                  </>
                ) : <div>{t("data_not_found")}</div>}
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
export { PickUpPoint };
