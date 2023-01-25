import React from "react";

import { ReactComponent as CheckIcon } from "./../../assets/images/check.svg";
import { ReactComponent as WrongIcon } from "./../../assets/images/wrong.svg";

import "./Answer.css";

export const Answer = ({
  innerText,
  index,
  correctAnswer,
  currentAnswer,
  checkAnswer,
}) => {
  const letterMapping = ["A.", "B.", "C.", "D."];
  const isCorrectAnswer = currentAnswer && innerText === correctAnswer;
  const isWrongAnswer =
    currentAnswer === innerText && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? "correct" : "";
  const wrongAnswerClass = isWrongAnswer ? "wrong" : "";

  return (
    <button
      className={`answer ${correctAnswerClass} ${wrongAnswerClass}`}
      onClick={() => checkAnswer(innerText, correctAnswer)}
      disabled={currentAnswer}
    >
      <span>{letterMapping[index]}</span>
      {innerText}
      <span className="answer__right">
        {isCorrectAnswer && (
          <CheckIcon fill="#fff" width="20px" height="20px" />
        )}
        {isWrongAnswer && <WrongIcon fill="#fff" width="20px" height="20px"/>}
      </span>
    </button>
  );
};
