import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import history from './history';
import rootReducer from '~/reducers/root-reducer';
import rootSaga from '~/sagas/root-saga';

const checkLoggingVar = () => true;

export function makeStore(useLogger = true, initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const middleWares = [
    sagaMiddleware,
    routerMiddleware(history)
  ];

  if (useLogger && checkLoggingVar()) {
    middleWares.push(createLogger({
      collapsed: true,
      duration: true
    }));
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleWares))
  );

  sagaMiddleware.run(rootSaga);
  return store;
}

export default makeStore();
