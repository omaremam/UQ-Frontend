import { TextField, FormControl } from "@mui/material";
import { styled } from "@mui/system";
const FormParent = styled(FormControl)({
  marginBottom: 24,
  fieldset: {},
  "& .MuiFormLabel-asterisk": {
    color: "#000000",
  },
  "& .MuiInputBase-input": {
    borderRadius: "0px",
  },
  "& .MuiFormLabel-root": {
    color: "#666666",
    "&.Mui-focused": {
      color: "#3BB8E0",
    },
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "0px",
    "&.Mui-disabled": {
      opacity: 0.5,
      "& fieldset": {
        borderColor: "#666666",
        opacity: ".5",
      },
      "&:hover fieldset": {
        opacity: ".5",
        borderColor: "#666666",
      },
      "& img": {
        opacity: ".5",
        cursor: "default",
      },
    },
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
const CustomInput = styled(TextField)({});
const MobileInput = ({
  label,
  className,
  error,
  required,
  placeholder,
  disabled,
  readOnly=false,
  multiline,
  minRows,
  startAdornment = null,
  endAdornment = null,
  onChange,
  value
}) => {
  return (
    <>
      <FormParent fullWidth>
        <CustomInput
          id="outlined-basic"
          className={`mobile-input ${className} ${value?'is-value-exist':''}`}
          required={required}
          disabled={disabled}
          label={label}
          placeholder={placeholder}
          multiline={multiline}
          minRows={minRows}
          variant="outlined"
          value={value}
          InputProps={{
            readOnly:readOnly,
            ...(startAdornment && { startAdornment }),
            ...(endAdornment && { endAdornment }),
          }}
          onChange={onChange}
        />
        <span className="contry-code">+966</span>
        {error ? (
          <span className="text-[12px] text-red-400 absolute ltr:left-0 rtl:right-0 bottom-[-16px] font-mohrroundedaltregular">
            {error}
          </span>
        ):null}
      </FormParent>
    </>
  );
};

export { MobileInput };
