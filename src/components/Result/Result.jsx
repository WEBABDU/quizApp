import React from "react";

import "./Result.css";

export const Result = ({ score, tryAgain }) => {
  return (
    <div className="result | flow">
      <div className="result__image">
        <img
          src={require("./../../assets/images/undraw_winners_ao2o.svg").default}
          alt="winner"
        />
      </div>

      <h2 className="result__title">Results</h2>
      <p className="result__info">
        You got <span>{score}</span> correct answers
      </p>

      <button className="result__button" onClick={tryAgain}>Try again</button>
    </div>
  );
};
