import CabinsContainerStore from './data/CabinsContainerStore';
import CabinsContainerConstants from 'components/containers/CabinsContainer/constants';

function getInitialState () {
  return new CabinsContainerStore();
}

const defaultState = getInitialState();

/** @param state {CabinsContainerStore} */
export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case CabinsContainerConstants.SEARCH_CABIN_REQUEST:
      return state.merge({
        isSearching: true
      });

    case CabinsContainerConstants.SEARCH_CABIN_REQUEST_SUCCESS:
      return state.merge({
        isSearching: false
      }).setCabins(action.response);

    case CabinsContainerConstants.SEARCH_CABIN_REQUEST_ERROR:
      return state.merge({
        isSearching: false,
        error: new Error(action.error.description)
      });

    default:
      return state;
  }
};
