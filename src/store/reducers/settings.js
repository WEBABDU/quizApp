import { settingsActions } from "../actions";

const initialState = {
  category: ["general_knowledge"],
  difficulty: "easy",
  limit: 10,
};

export const settingsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case settingsActions.SET_CATERGORY: {
      return {
        ...state,
        category: payload,
      };
    }

    case settingsActions.SET_DIFFICULTY: {
      return {
        ...state,
        difficulty: payload,
      };
    }

    case settingsActions.SET_LIMIT: {
      return {
        ...state,
        limit: payload,
      };
    }
    default:
      return state;
  }
};
