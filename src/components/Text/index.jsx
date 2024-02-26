import React from "react";

const sizeClasses = {
  txtMohrRoundedAltMedium14: "font-mohrroundedaltmedium font-normal",
  txtMohrRoundedAltMedium14Black900: "font-mohrroundedaltmedium font-normal",
  txtMohrRoundedAltRegular12Teal400: "font-mohrroundedaltregular font-normal",
  txtMohrRoundedAltMedium16: "font-mohrroundedaltmedium font-normal",
  txtRobotoMedium14Black900: "font-medium",
  txtRobotoRegular16Deeppurple500: "font-normal",
  txtMohrRoundedAltRegular14Teal400: "font-mohrroundedaltregular font-normal",
  txtMohrRoundedAltRegular14Black900:
    "font-mohrroundedaltregular font-normal text-[14px]",
  txtGochiHandRegular16: "font-gochihand font-normal",
  txtMohrRoundedAltSemiBold24: "font-mohrroundedaltsemibold font-normal",
  txtMohrRoundedAltMedium16WhiteA700: "font-mohrroundedaltmedium font-normal",
  txtMohrRoundedAltBold40Black900: "font-mohrroundedaltbold font-normal",
  txtMohrRoundedAltRegular12WhiteA700: "font-mohrroundedaltregular font-normal",
  txtMohrRoundedAltBold40: "font-mohrroundedaltbold font-normal",
  txtMohrRoundedAltRegular12Red900: "font-mohrroundedaltregular font-normal",
  txtMohrRoundedAltMedium16Gray700: "font-mohrroundedaltmedium font-normal",
  txtMohrRoundedAltRegular16Gray700:
    "font-mohrroundedaltregular font-normal text-[16px] text-gray-700 sm:text-base",
  txtRobotoRegular16Gray300: "font-normal",
  txtMohrRoundedAltMedium14Black9007c: "font-mohrroundedaltmedium font-normal",
  txtRobotoRegular16: "font-normal",
  txtMohrRoundedAltMedium14Gray700: "font-mohrroundedaltmedium font-normal",
  txtMohrRoundedAltRegular16: "font-mohrroundedaltregular font-normal",
  txtMohrRoundedAltMedium16Black9007c: "font-mohrroundedaltmedium font-normal",
  txtMohrRoundedAltRegular14: "font-mohrroundedaltregular font-normal",
  txtMohrRoundedAltRegular12Gray90001: "font-mohrroundedaltregular font-normal",
  txtMohrRoundedAltRegular12Gray700: "font-mohrroundedaltregular font-normal",
  txtJosefinSansRomanMedium16: "font-josefinsans font-medium",
  txtMohrRoundedAltRegular12:
    "font-mohrroundedaltregular font-normal text-[12px]",
  txtMohrRoundedAltBold56: "font-mohrroundedaltbold font-normal",
  txtRobotoMedium11: "font-medium",
  txtMohrRoundedAltBold34: "font-mohrroundedaltbold font-normal",
  txtRobotoRegular16WhiteA700: "font-normal",
  txtRobotoMedium14: "font-medium",
  txtMohrRoundedAltRegular12Pink800: "font-mohrroundedaltregular font-normal",
  txtMohrRoundedAltRegular12RedA700: "font-mohrroundedaltregular font-normal",
  txtMohrRoundedAltRegular14RedA700: "font-mohrroundedaltregular font-normal",
  txtMohrRoundedAltRegular14Pink800: "font-mohrroundedaltregular font-normal",
  txtRobotoRegular16Gray700: "font-normal",
  txtMohrRoundedAltRegular16WhiteA700: "font-mohrroundedaltregular font-normal",
  txtMohrRoundedAltRegular16RedA700: "font-mohrroundedaltregular font-normal",
};

const Text = ({ children, className = "", size = "", as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };