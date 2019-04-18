import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '~/store/history';
import app from '~/components/containers/AppContainer/reducer';
import cabins from '~/components/containers/CabinsContainer/reducer';

export default combineReducers({
  app,
  cabins,
  router: connectRouter(history)
});
