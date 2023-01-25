import { statisticsActions } from "../actions";

const initialState = {
  scores: null,
  leaders: null,
  loading: false,
  error: null,
};

export const statisticsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case statisticsActions.PENDING: {
      return {
        ...state,
        loading: true,
      };
    }

    case statisticsActions.SUCCESS: {
      return {
        ...state,
        loading: false,
        scores: payload,
      };
    }

    case statisticsActions.FAILURE: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }

    case statisticsActions.LEADER_STATISTICS_SUCCESS :{ 
        return {
            ...state,
            loading: false,
            leaders: payload
        }
    }
    default:
      return state;
  }
};
