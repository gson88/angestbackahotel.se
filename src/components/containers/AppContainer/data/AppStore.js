import { Record } from 'immutable';

const keys = {
  isLoading: false,
  isInitialized: false,
  locale: 'en-US'
};

export default class AppStore extends Record(keys) {}
