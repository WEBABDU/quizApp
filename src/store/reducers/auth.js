import { authActions } from "store/actions";

const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case authActions.PENDING: {
      return { ...state, loading: true };
    }

    case authActions.SUCCESS: {
      return {
        ...state,
        user: payload,
        loading: false,
        isAuth: true,
      };
    }

    case authActions.FAILURE: {
      return {
        ...state,
        loading: false,
        error: payload,
        isAuth: false,
      };
    }

    case authActions.LOGOUT: {
      return {
        ...state,
        loading: false,
        error: null,
        isAuth: false,
        user: null,
      };
    }
    default:
      return state;
  }
};
