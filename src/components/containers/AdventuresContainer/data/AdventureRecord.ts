import { Record, List } from 'immutable';
import ImageRecord from '~/data/ImageRecord';

const keys = {
  id: '',
  descriptionKey: '',
  images: List()
};

interface IAdventureRecord {
  id: string;
  descriptionKey: string;
  images: List<ImageRecord>
}

export default class AdventureRecord extends Record<IAdventureRecord>(keys) {}
