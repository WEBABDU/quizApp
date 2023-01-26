import React from "react";

import { ControlLabel } from "components/common";

import "./Input.css";

export const Input = ({
  type = "text",
  isDisabled = false,
  placeholder = "",
  inputProps = {},
  value,
  onChange,
  label = "",
}) => {
  return (
    <div className="form-wrapper">
      <ControlLabel label={label} />
      <label className="form-control">
        <input
          type={type}
          disabled={isDisabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="form-control__input"
          {...inputProps}
        />
      </label>
    </div>
  );
};
