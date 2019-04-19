import { Record } from 'immutable';

const keys = {
  url: ''
};

interface IImageRecord {
  url: string;
}

export default class ImageRecord extends Record<IImageRecord>(keys) {}
