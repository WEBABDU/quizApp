import React from "react";
import ReactSelect from "react-select";
import { ControlLabel } from "../../common/ControlLabel";

import "./Select.css";

export const Select = ({
  isMulti = false,
  value = {},
  options = [],
  className = "",
  classNamePrefix = "select",
  name = "",
  onChange = () => {},
  defaultValue = null,
  label = "",
  placeholder = "",
}) => {
  return (
    <div className="select-wrapper">
      <ControlLabel label={label} />
      <ReactSelect
        defaultValue={defaultValue}
        isMulti={isMulti}
        name={name}
        value={value}
        options={options}
        className={className}
        classNamePrefix={classNamePrefix}
        onChange={(option) => onChange(option)}
        placeholder={placeholder}
      />
    </div>
  );
};
