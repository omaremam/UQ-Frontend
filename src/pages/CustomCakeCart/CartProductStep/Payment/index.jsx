import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text } from "components";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
const Payment = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const Tab = styled.div`
    /* Add the selected styles when the component is selected */
    ${({ isSelected }) => isSelected && ` `}
  `;
  const Panal = styled.div`
    /* Add the selected styles when the component is selected */
    ${({ isSelected }) => isSelected && ` display: flex;`}
  `;
  const [activeTab, setActiveTab] = useState(null);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="relative flex flex-col w-full">
        <div className="flex flex-row xs:flex-col xs:items-start gap-4 items-center justify-between w-full">
          <div className="flex flex-col gap-1 items-start justify-start flex-1">
            <Text className="text-base text-black-900 font-mohrroundedaltmedium">
              {t("payment")}
            </Text>
            <div className="flex gap-1 flex-row items-center">
              <Text className="text-black-900 text-sm font-mohrroundedaltregular">
                {t("selectAnOptionToPay")}
              </Text>
            </div>
          </div>
          <Text className="w-auto text-base text-black-900 font-mohrroundedaltmedium whitespace-nowrap">
            {t("sar")} 799.50
          </Text>
        </div>
      </div>
      <div className="common-pointer bg-light_blue-50 flex flex-col items-center justify-start py-3 px-6 xs:px-3 w-full mb-[22px] mt-6">
        <div className="flex flex-row xs:flex-col xs:items-start items-center justify-between w-full gap-x-12 xs:gap-y-6">
          <div className="flex flex-col gap-1 items-start justify-start">
            <Text className="text-black-900 text-base font-mohrroundedaltregular">
              {t(
                "thePaymentWillBeRequestedByThePlatformOnceTheAdminApproveTheCustomCakeRequestYouWillBeNotifiedForTheSame"
              )}
            </Text>
          </div>
          <Button
            className="flex-1 mx-auto min-w-[160px] xs:ml-0"
            size="lg"
            variant="FillBlack"
          >
            {t("continue")}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Payment;
