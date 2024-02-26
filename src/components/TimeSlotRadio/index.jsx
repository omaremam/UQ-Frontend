import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Img } from "components";

const TimeSlotRadio = React.forwardRef(
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
        <div className={`${className} timeslot relative`}>
          <input
            className={`${inputClassName} invisible absolute top-0 ltr:left-0 rtl:right-0`}
            ref={ref}
            type="radio"
            name={name}
            aria-checked={!!value}
            checked={!!value}
            onChange={handleChange}
            {...restProps}
            id={id}
          />
          <label
            htmlFor={id}
            className={`cursor-pointer border border-solid border-gray-700 flex items-center justify-center w-full px-3 py-[5px] rounded`}
          >
            <Img
              className="h-[18px] mt-px"
              src="/images/img_checkmark_gray_900_01.svg"
              alt="checkmark"
            />
            <div className="text-center text-gray-900_01 text-sm font-mohrroundedaltmedium">
              {label}
            </div>
          </label>
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

TimeSlotRadio.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
};

export { TimeSlotRadio };