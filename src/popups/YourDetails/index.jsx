import React, { useEffect, useState } from "react";
import { Button, Img, Text, MobileInput, Input } from "components";
import { useTranslation } from "react-i18next";
import * as CUSTOM from "../../utils/helper/custom";
import {
  updateOrderData,
  getOrderData,
} from "../../redux/reducers/orderData";
import { useDispatch, useSelector } from "react-redux";
const YourDetails = (props) => {
  const dispatch=useDispatch();
  const { closepopup, userDetails, setUserDetails } = props;
  const [userInput, setUserInput] = useState(userDetails); 
  const [errors, setErrors] = useState({});
  const [disabledBtn, setDisabledBtn] = useState(true);
  const { t } = useTranslation();

  const closepopupout = () => {
    closepopup(false);
    document.body.classList.remove("overflow-hidden");
    document.getElementById("header-box").classList.remove("relative");
  };

  useEffect(() => {
    const validationErrors = validateForm(userInput);
    setErrors(validationErrors);
    setDisabledBtn(Object.keys(validationErrors).length > 0);
  }, [userInput]);

  const validateForm = (data) => {
    let errors = {};
    if (!data.first_name) {
      errors.first_name = t("first_name_required");
    }
    if (!data.last_name) {
      errors.last_name = t("last_name_required");
    }
    if (!data.email || !CUSTOM.isValidField(data.email)) {
      errors.email = t("email_name_required");
    }
    if (data.mobile_no && data.mobile_no.length !== 9) {
      errors.mobile_no = t("mobile_no_length_error");
    }
    if (!data.mobile_no) {
      errors.mobile_no = t("mobile_no_required");
    }
    return errors;
  };

  const saveData = () => {
    const validationErrors = validateForm(userInput);
    if (Object.keys(validationErrors).length === 0) {
      setUserDetails(userInput);
      dispatch(updateOrderData({...getOrderData,userDetails:userInput,pageStep:2}))
      closepopupout();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-auto w-fit h-fit xs:px-4">
        <div className="relative w-auto my-6 mx-auto max-w-[400px] min-w-[400px] xs:min-w-full xs:max-w-full">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white-A700 outline-none focus:outline-none overflow-hidden">
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
            <div className="bg-white-A700 flex flex-col items-center justify-start px-[30px] pt-3 pb-8 rounded-lg w-full">
              <div className="flex flex-col justify-start w-full relative z-[5]">
                <div className="relative flex flex-row items-center justify-center w-full">
                  <Img
                    className="h-auto w-[122px] cursor-pointer"
                    src="/images/your-details-icon.svg"
                    alt="icon"
                  />
                </div>
                <div className="flex flex-row items-center justify-start w-full mt-3">
                  <Text
                    className="leading-[32.00px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-full text-center"
                    size="txtMohrRoundedAltSemiBold24"
                  >
                    {t("yourDetails")}
                  </Text>
                </div>
                <div className="flex flex-col items-center mt-2 justify-start w-full">
                  <Text
                    className="text-gray-700 text-base w-full mb-6 text-center"
                    size="txtMohrRoundedAltRegular14"
                  >
                    {t("yourPersonalInformationIsListedBelowYouMayChangeIt")}
                  </Text>
                  <div className="w-full flex flex-row gap-x-5 xs:flex-col">
                    <Input
                      required
                      label={t("firstName")}
                      value={userInput.first_name}
                      onChange={(e) =>
                        setUserInput({
                          ...userInput,
                          first_name: CUSTOM.strFormat(e.target.value, "max:50"),
                        })
                      }
                      error={errors.first_name}
                    />
                    <Input
                      required
                      label={t("lastName")}
                      value={userInput.last_name}
                      onChange={(e) =>
                        setUserInput({
                          ...userInput,
                          last_name: CUSTOM.strFormat(e.target.value, "max:50"),
                        })
                      }
                      error={errors.last_name}
                    />
                  </div>
                  <div className="w-full flex flex-row gap-x-5">
                    <MobileInput
                      required
                      label={t("mobileNumber")}
                      value={CUSTOM.getMobileNo(userInput.mobile_no, "No")}
                      onChange={(e) =>
                        setUserInput({
                          ...userInput,
                          mobile_no: CUSTOM.strFormat(e.target.value, "number|max:9"),
                        })
                      }
                      error={errors.mobile_no}
                    />
                  </div>
                  <div className="w-full flex flex-row gap-x-5 xs:flex-col">
                    <Input
                      required
                      label={t("email")}
                      value={userInput.email}
                      onChange={(e) =>
                        setUserInput({
                          ...userInput,
                          email: CUSTOM.strFormat(e.target.value, "max:501"),
                        })
                      }
                      error={errors.email}
                    />
                  </div>
                  <div className="flex flex-row font-mohrroundedaltmedium gap-3 items-center justify-start w-full mt-2 ">
                    <Button
                      className="bg-black-900 border border-black-900 cursor-pointer py-3.5 rounded text-base text-center text-white-A700 w-full"
                      hover={true}
                      hoverclass="bg-white-A700"
                      disabled={disabledBtn}
                      onClick={(e) => saveData()}
                    >
                      {t("Save")}
                    </Button>
                  </div>
                </div>
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

export { YourDetails };
