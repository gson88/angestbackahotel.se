import { call, put } from 'redux-saga/effects';

export default function* requestSaga(api, { request=null, success=null, failure, ...action }, ...values) {
  try {
    if (request !== null) {
      yield put({ type: request, ...action });
    }
    const response = yield call(api, ...values);
    if (success !== null) {
      yield put({ type: success, response, ...action });
    }
    return response;
  } catch (exception) {
    console.error(exception);
    const { errors } = exception;
    if (errors) {
      yield put({
        type: failure,
        error: errors[0],
        errors,
        exception,
        ...action
      });
    }

    return exception;
  }
}
