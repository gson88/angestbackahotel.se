import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
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
      <div className="w-full h-full">
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
      </div>
    </ConnectedRouter>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ initApp }, dispatch);
};

const mapStateToProps = ({ app }) => {
  const { isInitialized } = app;
  return { isInitialized };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
