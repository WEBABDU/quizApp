import React from "react";

import "./Spinner.css"

import { ReactComponent as Loader } from "./../../assets/images/loader.svg";

export const Spinner = () => {
  return (
    <div className="loader">
      <Loader />
    </div>
  );
};
