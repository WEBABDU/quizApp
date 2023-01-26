import { combineReducers } from "redux";
import { authReducer, questionsReducer, settingsReducer, statisticsReducer } from "./reducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  settings: settingsReducer,
  questions: questionsReducer,
  statistics: statisticsReducer
});
