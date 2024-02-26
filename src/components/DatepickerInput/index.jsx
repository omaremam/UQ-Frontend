import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled } from "@mui/system";

const FormParent = styled(LocalizationProvider)({
  marginBottom: 24,
  width: "100%",
  fieldset: {},
});
const CustomInput = styled(DatePicker)({
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

const DatepickerInput = ({
  views,
  label,
  error,
  onChange,
  format,
  value,
  required,
  disableFuture,
  disablePast,
  errorText,
  min
}) => {
  return (
    <>
      <div className="relative mb-6 w-full datepicker-parent">
        <FormParent
          fullWidth
          inputVariant="filled"
          required={required ? true : false}
          dateAdapter={AdapterDayjs}
        >
          <CustomInput
            label={label}
            onChange={onChange}
            disableFuture={disableFuture}
            disablePast={disablePast}
            value={value ? dayjs(value) : ""}
            views={views} 
            format={format}
            error={error ? true : false}
            // inputProps={{ "aria-label": "Without label" }}
          />
          {errorText && value && (
            <span className="text-[12px] text-red-400 absolute ltr:left-0 rtl:right-0 bottom-[-16px] font-mohrroundedaltregular">
              {errorText}
            </span>
          )}
        </FormParent>
      </div>
    </>
  );
};

export { DatepickerInput };