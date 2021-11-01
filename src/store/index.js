import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import todos from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    todos,
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
