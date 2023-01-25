import React from "react";
import { Answer } from "../Answer/Answer";
import { Button } from "../Button/Button";

import "./Questionnaire.css";

export const Questionnaire = ({
  data: { question, correctAnswer, answers },
  checkAnswer,
  currentAnswer,
  nextQuestion,
}) => {
  return (
    <div className="questionnaire | flow">
      <h2 className="questionnaire__title">{question}</h2>
      <div className="questionnaire__content">
        {answers.map((el, index) => (
          <Answer
            key={index}
            innerText={el}
            index={index}
            correctAnswer={correctAnswer}
            currentAnswer={currentAnswer}
            checkAnswer={checkAnswer}
          />
        ))}
      </div>
      <img
        src={require("./../../assets/images/undraw_adventure_4hum.svg").default}
        className="questionnaire__image"
        alt="img"
      />
      <div className="questionnaire__nextButton" style={{ textAlign: "end" }}>
        {currentAnswer && <Button innerText="Next" onClick={nextQuestion} />}
      </div>
    </div>
  );
};
