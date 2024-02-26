import PropTypes from "prop-types";

const variants = {
  FillBlack:
    "bg-black-900 text-white-A700 border-[1px] border-black-900 border-solid rounded-[4px] cursor-pointer font-mohrroundedaltmedium",
  OutlineBlack:
    "text-black-900 border-[1px] border-black-900 border-solid rounded-[4px] cursor-pointer font-mohrroundedaltmedium",
  OutlineRed:
    "text-red-900 border-[1px] border-red-900 border-solid rounded-[4px] cursor-pointer font-mohrroundedaltmedium",
};
const sizes = {
  sm: "p-1.5",
  md: "p-2.5 leading-[26px]",
  lg: "p-3",
  xl: "p-[18px]",
  smIcn: "p-2.5",
};

const disables = {
  FillBlack: "bg-black-900_7c cursor-no-drop",
};

const Button = ({
  children,
  hover,
  className = "",
  leftIcon,
  hoverclass = "",
  rightIcon,
  variant,
  size,
  disabled = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]) || ""
      } ${(disabled && disables[disabled]) || ""}
      ${hover === true ? "hover-animation" : null} relative overflow-hidden`}
      disabled={disabled ? true : undefined}
      {...restProps}
    >
      {hover === true ? (
        <span
          className={`${hoverclass} absolute right-full w-full h-full top-0`}
        ></span>
      ) : null}
      {!!leftIcon && leftIcon}
      <div className="relative text-btn h-full flex items-center justify-center">
        {children}
      </div>
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = { className: "", variant: "", size: "", disabled: "" };
export { Button };
