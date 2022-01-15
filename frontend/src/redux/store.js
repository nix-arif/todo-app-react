import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import itemReducer from "./item/itemReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  itemReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
