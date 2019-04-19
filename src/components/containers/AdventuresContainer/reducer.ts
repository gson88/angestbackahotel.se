import AdventuresStore from './data/AdventuresContainerStore';
import AdventuresContainerConstants from './constants';

function getInitialState () {
  return new AdventuresStore();
}

const defaultState = getInitialState();

export default (state = defaultState, action: any = {}): AdventuresStore => {
  switch (action.type) {
    case AdventuresContainerConstants.GET_ADVENTURES_REQUEST:
      return state.merge({
        isLoading: true,
        error: undefined
      });

    case AdventuresContainerConstants.GET_ADVENTURES_REQUEST_SUCCESS:
      return state.merge({
        isLoading: false
      }).setAdventureList(action.response);

    case AdventuresContainerConstants.GET_ADVENTURES_REQUEST_ERROR:
      return state.merge({
        isLoading: false,
        error: new Error(action.error.description)
      });

    default:
      return state;
  }
};
