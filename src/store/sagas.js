import { takeEvery, takeLatest, put, all, delay } from "redux-saga/effects";

function apiGet(text) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text + " topissimo");
    }, 2000);
  });
}

function* asyncAddTodo(action) {
  yield delay(2000);

  yield put({ type: "ADD_TODO", payload: { text: action.payload.text } });
}

export default function* root() {
  yield all([takeLatest("ASYNC_ADD_TODO", asyncAddTodo)]);
}
