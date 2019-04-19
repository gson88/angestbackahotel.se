import { takeLatest } from 'redux-saga/effects';
import AdventuresContainerConstants from '~/components/containers/AdventuresContainer/constants';
import AdventuresAPI from '~/api/adventures-api';
import requestSaga from './request-saga';

export function* getAdventuresSaga () {
  yield requestSaga(AdventuresAPI.getAdventures, {
    request: AdventuresContainerConstants.GET_ADVENTURES_REQUEST,
    success: AdventuresContainerConstants.GET_ADVENTURES_REQUEST_SUCCESS,
    error: AdventuresContainerConstants.GET_ADVENTURES_REQUEST_ERROR
  });
}

export function* getAdventuresListener () {
  yield takeLatest(AdventuresContainerConstants.GET_ADVENTURES, getAdventuresSaga);
}

export default {
  getAdventuresListener
};
