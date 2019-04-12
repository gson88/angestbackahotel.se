import { Record, List } from 'immutable';
import CabinRecord from './CabinRecord';

const keys = {
  isSearching: false,
  cabins: List(),
  error: undefined
};

export default class CabinsContainerStore extends Record(keys) {
  setCabins (cabins) {
    return this.set('cabins', cabins.map(cabin => new CabinRecord(cabin)));
  }
}
