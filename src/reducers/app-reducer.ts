import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '~/store/history';
import adventures from '~/components/containers/AdventuresContainer/reducer';
import app from '~/components/containers/AppContainer/reducer';
import cabins from '~/components/containers/CabinsContainer/reducer';
import AdventuresContainerStore from '~/components/containers/AdventuresContainer/data/AdventuresContainerStore';
import AppStore from '~/components/containers/AppContainer/data/AppStore';
import CabinsContainerStore from '~/components/containers/CabinsContainer/data/CabinsContainerStore';

export interface IAppState {
  adventures: AdventuresContainerStore;
  app: AppStore;
  cabins: CabinsContainerStore;
}

export default combineReducers({
  adventures,
  app,
  cabins,
  router: connectRouter(history)
});
