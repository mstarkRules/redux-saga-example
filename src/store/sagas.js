import {
  takeEvery,
  takeLatest,
  call,
  put,
  all,
  delay,
  select,
} from "redux-saga/effects";

function apiGet(text, length) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text + " topissimo" + length);
    }, 2000);
  });
}

function* asyncAddTodo(action) {
  try {
    const todos = yield select((state) => state.todos);

    const response = yield call(apiGet, action.payload.text, todos.length);

    yield put({ type: "ADD_TODO", payload: { text: response } });
  } catch (err) {
    yield put({ type: "ERROR" });
  }
}

export default function* root() {
  yield all([takeLatest("ASYNC_ADD_TODO", asyncAddTodo)]);
}
