import { Record, List } from 'immutable';
import AdventureRecord from './AdventureRecord';

const keys = {
  isLoading: false,
  adventureList: List(),
  error: undefined
};

interface IAdventuresContainerStore {
  isLoading: boolean;
  adventureList: List<AdventureRecord>;
  error?: Error;
}

export default class AdventuresContainerStore extends Record<IAdventuresContainerStore>(keys) {
  setAdventureList (adventures) {
    return this.set('adventureList', List(
      adventures.map(adventure => new AdventureRecord(adventure))
    ));
  }
}
