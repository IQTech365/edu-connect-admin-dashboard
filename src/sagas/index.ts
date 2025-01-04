import { all, fork } from "redux-saga/effects";
import { watcherSignInSaga } from "./siginIn.saga";

export function* rootSaga() {
  yield all([fork(watcherSignInSaga)]);
}
