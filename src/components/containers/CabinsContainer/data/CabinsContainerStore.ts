import { Record, List } from 'immutable';
import CabinRecord from './CabinRecord';

const keys = {
  isSearching: false,
  cabins: List(),
  error: undefined
};

interface ICabinsContainerStore {
  isSearching: boolean;
  cabins: List<CabinRecord>;
  error?: Error;
}

export default class CabinsContainerStore extends Record<ICabinsContainerStore>(keys) {
  setCabins (cabins): CabinsContainerStore {
    return this.set('cabins', cabins.map(cabin => new CabinRecord(cabin)));
  }
}
