import { FormControlLabel, Checkbox } from "@mui/material";

const CheckboxCustom = ({
  value,
  html,
  label,
  error,
  labelPlacement,
  className,
  onChange,
  checked,
}) => {
  return (
    <>
      <div className="relative">
        <FormControlLabel
          className={className}
          value={value}
          onChange={onChange}
          control={<Checkbox checked={checked} />}
          label={
            html ? (
              <span dangerouslySetInnerHTML={{ __html: html }}></span>
            ) : (
              label
            )
          }
          labelPlacement={labelPlacement}
        />

        {error && (
          <span className="text-sm text-red-400 absolute ltr:left-0 rtl:right-0 bottom-[7px]">
            {error}
          </span>
        )}
      </div>
    </>
  );
};
export { CheckboxCustom };