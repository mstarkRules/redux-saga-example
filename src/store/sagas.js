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
      resolve([
        {
          id: 1,
          text: "Fazendo café",
        },
        {
          id: 2,
          text: "Fazendo café açucar",
        },
        {
          id: 3,
          text: "Fazendo café e leite",
        },
        {
          id: 4,
          text: "Fazendo café preto",
        },
      ]);
    }, 2000);
  });
}

function* getTodoList() {
  try {
    const response = yield call(apiGet);

    yield put({ type: "SUCCESS_TODO_LIST", payload: { data: response } });
  } catch (err) {
    yield put({ type: "FAILURE_TODO_LIST" });
  }
}

export default function* root() {
  yield all([takeLatest("REQUEST_TODO_LIST", getTodoList)]);
}
