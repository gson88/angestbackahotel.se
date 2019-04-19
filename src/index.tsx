import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '~/store/Store';
import AppContainer from '~/components/containers/AppContainer/AppContainer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// import * as serviceWorker from './serviceWorker';
// serviceWorker.unregister();
