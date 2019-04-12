import { takeLatest, put, select } from 'redux-saga/effects';
import AppContainerConstants from '/components/containers/AppContainer/constants';
import intl from 'react-intl-universal';
import enUS from '/i18n/messages.18n';

const fakeTimeout = msec => new Promise(resolve => {
  setTimeout(resolve, msec);
});

export function* initApp () {
  yield put({ type: AppContainerConstants.APP_INITIALIZING });
  const { locale } = yield select(state => state.app);

  yield fakeTimeout(500);

  const locales = { 'en-US': enUS };

  yield intl.init({
    locales,
    currentLocale: locale
  });

  yield put({ type: AppContainerConstants.APP_INITIALIZING_READY });
}

export function* initAppSaga () {
  yield takeLatest(AppContainerConstants.INIT_APP, initApp);
}

export default {
  initAppSaga
};
