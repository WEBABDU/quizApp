import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { middlewares } from "./middlewares";
import { rootReducer } from "./roodReducer";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

