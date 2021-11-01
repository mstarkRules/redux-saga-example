import { takeEvery, put, all, delay } from "redux-saga/effects";

function* asyncAddTodo(action) {
  yield delay(2000);

  yield put({ type: "ADD_TODO", payload: { text: action.payload.text } });
}

export default function* root() {
  yield all([takeEvery("ASYNC_ADD_TODO", asyncAddTodo)]);
}
