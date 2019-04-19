import AdventuresStore from './data/AdventuresContainerStore';
import AdventuresContainerConstants from './constants';

function getInitialState () {
  return new AdventuresStore();
}

const defaultState = getInitialState();

export default (state = defaultState, action: any = {}): AdventuresStore => {
  switch (action.type) {
    case AdventuresContainerConstants.GET_ADVENTURES_REQUEST:
      return state;

    case AdventuresContainerConstants.GET_ADVENTURES_REQUEST_SUCCESS:
      return state;

    case AdventuresContainerConstants.GET_ADVENTURES_REQUEST_ERROR:
      return state;

    default:
      return state;
  }
};
