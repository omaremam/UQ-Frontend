import * as React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 52,
  height: 32,
  padding: 0,
  margin: "0 !important",
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 0,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "var(--white_A700)",
      "& + .MuiSwitch-track": {
        backgroundColor:
          theme.palette.mode === "dark" ? "#fff" : "var(--pink_800)",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid var(--white_A700)",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 16,
    height: 16,
    margin: 8,
    backgroundColor:
      theme.palette.mode === "light" ? "var(--gray_700)" : "var(--white_A700)",
    boxShadow: "none",
  },
  "& .Mui-checked": {
    color: "var(--white_A700) !important",
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 24,
      height: 24,
      margin: 4,
      backgroundColor:
        theme.palette.mode === "light"
          ? "var(--white_A700)"
          : "var(--gray_700)",
      boxShadow: "none",
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 32 / 2,
    backgroundColor:
      theme.palette.mode === "light" ? "var(--white_A700)" : "#39393D",
    border:
      theme.palette.mode === "light"
        ? "2px solid #666666"
        : "2px solid var(--pink_800)",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const SwitchCustom = React.forwardRef(
  (
    {
      inputClassName = "",
      className = "",
      name = "",
      children,
      label = "",
      checked = false,
      errors = [],
      onChange,
      id = "radio_id",
      ...restProps
    },
    ref
  ) => {
    const [value, setValue] = React.useState(checked);
    const handleChange = (event) => {
      setValue(event.target.checked);
      if (onChange) onChange(!!event?.target?.checked);
    };

    return (
      <>
        <IOSSwitch />
      </>
    );
  }
);

export { SwitchCustom };