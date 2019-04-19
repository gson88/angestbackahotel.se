import AppStore from './data/AppStore';
import AppContainerConstants from './constants';

function getInitialState () {
  return new AppStore();
}

const defaultState = getInitialState();

export default (state: AppStore = defaultState, action: any = {}): AppStore => {
  switch (action.type) {
    case AppContainerConstants.APP_INITIALIZING:
      return state.merge({
        isLoading: true,
        isInitialized: false
      });

    case AppContainerConstants.APP_INITIALIZING_READY:
      return state.merge({
        isLoading: false,
        isInitialized: true
      });

    default:
      return state;
  }
};
