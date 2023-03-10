import { doc, getDoc, updateDoc } from "firebase/firestore/lite";
import { functions, QuestionsAPI } from "services";
import { db } from "firebase-config";

const SUCCESS = "QUESTIONS_SUCCESS";
const FAILURE = "QUESTIONS_FAILURE";
const PENDING = "QUESTIONS_PENDING";
const NEXT_QUESTION = "NEXT_QUESTION";
const SET_CURRENT_ANSWER = "SET_CURRENT_ANSWER";
const SET_SCORE = "SET_SCORE";
const QUESTION_RESTART = "QUESTION_RESTART";
const NEW_QUESTION = "NEW_QUESTION";

const pending = () => ({
  type: PENDING,
});

const success = (payload) => ({
  type: SUCCESS,
  payload,
});

const failure = (payload) => ({
  type: FAILURE,
  payload,
});

const nextQuestion = () => ({ type: NEXT_QUESTION });

const setCurrentAnswer = (payload) => ({ type: SET_CURRENT_ANSWER, payload });

const setScore = () => ({ type: SET_SCORE });

const tryAgain = () => ({ type: QUESTION_RESTART });

const newQuestions = () => ({ type: NEW_QUESTION });

const checkAnswerThunk = (answer, correctAnswer) => (dispatch) => {
  dispatch(setCurrentAnswer(answer));
  if (correctAnswer === answer) {
    dispatch(setScore());
  }
};

const getQuestionsThunk = (settings) => async (dispatch) => {
  dispatch(pending());
  try {
    const data = await QuestionsAPI.getQuestions(settings);
    const questions = data.map((question) => ({
      ...question,
      answers: functions.shuffleArray([
        question.correctAnswer,
        ...question.incorrectAnswers,
      ]),
    }));
    dispatch(success(questions));
  } catch (error) {
    dispatch(failure(error.message));
  }
};

const setScoreThunk =
  (score, count, userId, actionType, navigate = () => {}) =>
  async (dispatch) => {
    dispatch(pending());
    try {
      const docRef = doc(db, "scores", userId);
      const userScores = await getDoc(docRef);
      if (userScores.exists()) {
        console.log(userScores.data().scores, "userData");
        const newScores = [...userScores.data().scores, { score, count }];
        await updateDoc(docRef, { scores: newScores });
        if (actionType === QUESTION_RESTART) {
          dispatch(tryAgain());
        } else {
          dispatch(newQuestions());
          navigate("/");
        }
      }
    } catch (error) {
      dispatch(failure(error.message));
    }
  };

export const questionsActions = {
  SUCCESS,
  PENDING,
  FAILURE,
  NEXT_QUESTION,
  SET_CURRENT_ANSWER,
  SET_SCORE,
  QUESTION_RESTART,
  NEW_QUESTION,
  failure,
  success,
  pending,
  nextQuestion,
  newQuestions,
  tryAgain,
  getQuestionsThunk,
  checkAnswerThunk,
  setScoreThunk,
};
