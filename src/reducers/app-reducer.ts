import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '~/store/history';
import app from '~/components/containers/AppContainer/reducer';
import cabins from '~/components/containers/CabinsContainer/reducer';
import AppStore from '~/components/containers/AppContainer/data/AppStore';
import CabinsContainerStore from '~/components/containers/CabinsContainer/data/CabinsContainerStore';

export interface IAppState {
  app: AppStore;
  cabins: CabinsContainerStore;
}

export default combineReducers({
  app,
  cabins,
  router: connectRouter(history)
});
