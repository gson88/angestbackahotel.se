import appReducer from './app-reducer';

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
