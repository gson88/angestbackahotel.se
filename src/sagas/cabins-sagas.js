import { takeLatest } from 'redux-saga/effects';
import CabinsBookingFormContainerConstants from '/components/containers/CabinsContainer/constants';
import CabinsAPI from '/api/cabins-api';
import requestSaga from './request-saga';

export function* performCabinsSearchSaga ({ payload }) {
  yield requestSaga(CabinsAPI.searchCabins, {
    request: CabinsBookingFormContainerConstants.SEARCH_CABIN_REQUEST,
    success: CabinsBookingFormContainerConstants.SEARCH_CABIN_REQUEST_SUCCESS,
    failure: CabinsBookingFormContainerConstants.SEARCH_CABIN_REQUEST_ERROR,
    payload
  }, payload);
}

export function* performCabinsSearchListenerSaga () {
  yield takeLatest(CabinsBookingFormContainerConstants.SEARCH_CABIN, performCabinsSearchSaga);
}

export default {
  performSearchListenerSaga: performCabinsSearchListenerSaga
};
