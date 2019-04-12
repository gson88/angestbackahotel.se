import { all, fork } from 'redux-saga/effects';
import appSagas from './app-sagas';
import cabinsSagas from './cabins-sagas';

export default function* rootSaga() {
  yield all([
    ...Object.values(appSagas),
    ...Object.values(cabinsSagas)
  ].map(fork));
}
