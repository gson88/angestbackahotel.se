import { takeLatest } from 'redux-saga/effects';
import CabinsBookingFormContainerConstants from 'components/containers/CabinsContainer/constants';
import CabinsAPI from 'api/cabins-api';
import requestSaga from './request-saga';
import { IsearchCabins } from 'components/containers/CabinsContainer/actions';

interface IperformCabinsSearchSaga {
  payload: IsearchCabins
}

export function* performCabinsSearchSaga ({ payload: { checkIn, checkOut } }: IperformCabinsSearchSaga) {
  yield requestSaga (CabinsAPI.searchCabins, {
    request: CabinsBookingFormContainerConstants.SEARCH_CABIN_REQUEST,
    success: CabinsBookingFormContainerConstants.SEARCH_CABIN_REQUEST_SUCCESS,
    error: CabinsBookingFormContainerConstants.SEARCH_CABIN_REQUEST_ERROR,
    checkIn,
    checkOut
  }, { checkIn, checkOut });
}

export function* performCabinsSearchListenerSaga () {
  yield takeLatest(CabinsBookingFormContainerConstants.SEARCH_CABIN as any, performCabinsSearchSaga);
}

export default {
  performSearchListenerSaga: performCabinsSearchListenerSaga
};
