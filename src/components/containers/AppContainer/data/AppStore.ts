import { Record } from 'immutable';

const keys = {
  isLoading: false,
  isInitialized: false,
  locale: 'en-US'
};

interface IAppStore {
  isLoading: boolean;
  isInitialized: boolean;
  locale: string;
}

export default class AppStore extends Record<IAppStore>(keys) {}
