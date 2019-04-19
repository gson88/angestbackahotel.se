import { Record } from 'immutable';

const keys = {
  isLoading: false
};

interface IAdventuresContainerStore {
  isLoading: boolean;
}

export default class AdventuresContainerStore extends Record<IAdventuresContainerStore>(keys) {}
