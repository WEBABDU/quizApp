import { Button } from "components/Button/Button";
import React from "react";

import "./Result.css";

export const Result = ({ score, tryAgain, newQuestion }) => {
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

      <div className="result__btns">
        <Button innerText="Try again" onClick={tryAgain} variant="login"/>
        <Button innerText="New quiz" onClick={newQuestion} variant="register"/>
      </div>
    </div>
  );
};
