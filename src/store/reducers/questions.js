import { questionsActions } from "../actions/questions";

const initialState = {
  questions: null,
  loading: false,
  count: null,
  currentAnswer: "",
  currentQuestionIndex: 0,
  showResults: false,
  score: 0,
};

export const questionsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case questionsActions.PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case questionsActions.SUCCESS: {
      return {
        ...state,
        questions: payload,
        loading: false,
        showResults: false,
        currentAnswer: "",
        currentQuestionIndex: 0,
        score: 0,
      };
    }

    case questionsActions.FAILURE: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }

    case questionsActions.SET_CURRENT_ANSWER: {
      return {
        ...state,
        currentAnswer: payload,
      };
    }

    case questionsActions.SET_SCORE: {
      return {
        ...state,
        score: state.score + 1,
      };
    }

    case questionsActions.NEXT_QUESTION: {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      return {
        ...state,
        currentAnswer: "",
        currentQuestionIndex,
        showResults,
      };
    }

    case questionsActions.QUESTION_RESTART: {
      return {
        ...state,
        currentQuestionIndex: 0,
        currentAnswer: "",
        showResults: false,
        score: 0,       
        loading: false 
      };
    }
    default:
      return state;
  }
};
