import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import todos from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    todos,
  }),
  applyMiddleware(sagaMiddleware)
);

export default store;
