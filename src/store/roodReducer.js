import { combineReducers } from "redux";
import { authReducer, questionsReducer, settingsReducer } from "./reducers";
import { statisticsReducer } from "./reducers/statistics";

export const rootReducer = combineReducers({
  auth: authReducer,
  settings: settingsReducer,
  questions: questionsReducer,
  statistics: statisticsReducer
});
