import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Answer, Button, PageHeading, Result, Spinner } from "components";
import { questionsActions } from "store/actions";

import "./Quiz.css";
import { useNavigate } from "react-router-dom";

export const Quiz = () => {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const user = useSelector((state) => state.auth.user);
  const {
    questions,
    loading,
    currentQuestionIndex,
    currentAnswer,
    showResults,
    score,
  } = useSelector((state) => state.questions);
  const navigate = useNavigate();

  const checkAnswer = (answer, correctAnswer) => {
    dispatch(questionsActions.checkAnswerThunk(answer, correctAnswer));
  };

  const nextQuestion = () => {
    dispatch(questionsActions.nextQuestion());
  };

  const tryAgain = () => {
    dispatch(
      questionsActions.setScoreThunk(
        score,
        settings.limit,
        user.uid,
        questionsActions.QUESTION_RESTART
      )
    );
  };

  const newQuestion = () => {
    dispatch(
      questionsActions.setScoreThunk(
        score,
        settings.limit,
        user.uid,
        questionsActions.NEW_QUESTION,
        navigate
      )
    );
  };

  useEffect(() => {
    dispatch(questionsActions.getQuestionsThunk(settings));
  }, [dispatch, settings]);

  if (loading || !questions) return <Spinner />;

  return (
    <div className="container">
      {!showResults ? (
        <div className="questionnaire-wrapper">
          <PageHeading text="Quiz"/>
          <div className="questionnaire | flow">
            <h2 className="questionnaire__title">
              {questions[currentQuestionIndex]?.question}
            </h2>
            <div className="questionnaire__content">
              {questions[currentQuestionIndex]?.answers.map((el, index) => (
                <Answer
                  key={index}
                  innerText={el}
                  index={index}
                  correctAnswer={questions[currentQuestionIndex]?.correctAnswer}
                  currentAnswer={currentAnswer}
                  checkAnswer={checkAnswer}
                />
              ))}
            </div>
            <img
              src={
                require("./../../assets/images/undraw_adventure_4hum.svg")
                  .default
              }
              className="questionnaire__image"
              alt="img"
            />
            <div
              className="questionnaire__nextButton"
              style={{ textAlign: "end" }}
            >
              {currentAnswer && (
                <Button innerText="Next" onClick={nextQuestion} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <Result score={score} tryAgain={tryAgain} newQuestion={newQuestion} />
      )}
    </div>
  );
};
