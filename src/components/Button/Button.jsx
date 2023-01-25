import React from "react";

import "./Button.css";

export const Button = ({
  prepend,
  innerText,
  append,
  onClick = () => {},
  type = "button",
  className = "",
  variant = "default",
  ...buttonProps
}) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      {...buttonProps}
      type={type}
      data-variant={variant}
    >
      <span>{prepend}</span>
      {innerText}
      <span>{append}</span>
    </button>
  );
};
