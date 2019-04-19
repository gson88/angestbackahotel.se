import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { IAppState } from '~/reducers/app-reducer';
import history from '~/store/history';
import routes from '~/routes';
import Header from '~/components/views/Header/Header';
import Footer from '~/components/views/Footer/Footer';
import SplashScreen from '~/components/views/SplashScreen/SplashScreen';
import { initApp } from './actions';

interface IAppContainer {
  initApp: typeof initApp,
  isInitialized: boolean
}

const AppContainer: React.FC<IAppContainer> = props => {
  useEffect(() => {
    props.initApp();
  }, []);

  return (
    <ConnectedRouter history={history}>
      { !props.isInitialized ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          <main role="main">
            <Switch>
              { Object.values(routes).map(route => (
                <Route key={route.path} exact path={route.path} component={route.component} />
              ))}

              <Route render={() => <Redirect to={routes.cabins.path} />} />
            </Switch>
          </main>
          <Footer />
        </>
      )}
    </ConnectedRouter>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ initApp }, dispatch);
};

const mapStateToProps = ({ app }: IAppState) => {
  const { isInitialized } = app;
  return { isInitialized };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
