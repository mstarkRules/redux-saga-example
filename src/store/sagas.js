import {
  takeEvery,
  takeLatest,
  call,
  put,
  all,
  delay,
} from "redux-saga/effects";

function apiGet(text) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text + " topissimo");
    }, 2000);
  });
}

function* asyncAddTodo(action) {
  const response = yield call(apiGet, action.payload.text);

  yield put({ type: "ADD_TODO", payload: { text: response } });
}

export default function* root() {
  yield all([takeLatest("ASYNC_ADD_TODO", asyncAddTodo)]);
}
