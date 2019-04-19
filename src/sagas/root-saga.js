import { all, fork } from 'redux-saga/effects';
import adventuresSagas from './adventures-sagas';
import appSagas from './app-sagas';
import cabinsSagas from '~/sagas/cabins-sagas';

export default function* rootSaga() {
  yield all([
    ...Object.values(adventuresSagas),
    ...Object.values(appSagas),
    ...Object.values(cabinsSagas)
  ].map(fork));
}
