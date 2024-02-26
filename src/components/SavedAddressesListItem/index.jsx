import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";
import { useTranslation } from "react-i18next";
import * as CUSTOM from "../../utils/helper/custom";
import { useDispatch, useSelector } from "react-redux";
import { updateOrderData,getOrderData } from "../../redux/reducers/orderData";
const SavedAddressesListItem = (props) => {
  const dispatch=useDispatch();
  const orderData=useSelector(getOrderData);
  const navigate = useNavigate();
  const { t } = useTranslation();
 
  /**
   * set address data
   */
  const deliverHear=(data)=>{  
       let homeAddress={
          address:CUSTOM.buildFullAddress(data),
          itemDetail:data
       }
       dispatch(updateOrderData({...orderData,pageStep:3,delivery_mode_show:"hide",home_office:homeAddress,delivery_mode:'home_office'}))
  }

  return (
    <div className="flex flex-1 xs:flex-col xs:gap-3 flex-row items-center justify-between w-full">
      <div className="flex flex-1 flex-row items-center justify-start w-full gap-3">
        <Img className="h-6 w-6" src="/images/img_location.svg" alt="location" />
        <Text className="text-sm text-black-900 font-mohrroundedaltregular">
          {CUSTOM.buildFullAddress(props?.items)}
        </Text>
      </div>
      <div className="flex-1 flex flex-row items-end justify-end w-full xs:justify-start xs:pl-9">
        <Button className="common-pointer text-center text-pink-800 text-sm w-auto font-mohrroundedaltmedium"
        onClick={(e)=>{
            deliverHear(props?.items);
        }}
        >
          {t("deliverHere")}
        </Button>
      </div>
    </div>
  );
};
export { SavedAddressesListItem };