import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/system";
import { Img } from "components";

const FormParent = styled(FormControl)({
  marginBottom: 24,
  fieldset: {},
  "& .MuiFormLabel-asterisk": {
    color: "#000000",
  },
  "& .MuiFormLabel-root": {
    color: "#666666",
    "&.Mui-focused": {
      color: "#3BB8E0",
    },
  },
  "& .MuiInputBase-input": {
    borderRadius: "0px",
    backgroundColor: "transparent",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "0px",
    "& fieldset": {
      borderRadius: "4px",
      border: "1px solid #666666",
    },
    "&:hover fieldset": {
      borderColor: "#3BB8E0",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#3BB8E0",
    },
  },
});
const FloatingLabel = styled(InputLabel)({
  backgroundColor: "transparent",
});

const CustomInput = styled(Select)({
  borderRadius: "0px",
  "& .MuiInputBase-input": {
    borderRadius: "0px",
  },
});
function CustomSvgIcon(props) {
  return (
    <Img
      {...props}
      src="/images/img_arrowdown_black_900.svg"
      className="h-6 w-6 absolute ltr:right-4 rtl:left-4"
      alt="arrow_down"
    />
  );
}
const SelectBoxNew = ({ options, multiple, label, error, onChange, value }) => {
  return (
    <FormParent variant="outlined" fullWidth>
      <FloatingLabel id="demo-simple-select-label">{label}</FloatingLabel>
      <CustomInput
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        multiple={multiple}
        value={value || ""}
        label={label}
        IconComponent={CustomSvgIcon}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </CustomInput>
      {error && (
        <span className="text-sm text-red_500 absolute ltr:left-0 rtl:right-0 bottom-[-18px]">
          {error}
        </span>
      )}
    </FormParent>
  );
};

export { SelectBoxNew };