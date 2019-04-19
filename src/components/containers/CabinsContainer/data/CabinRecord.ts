import { Record, List } from 'immutable';
import ImageRecord from '~/data/ImageRecord';

const keys = {
  id: '',
  name: '',
  cabinName: '',
  descriptionLangKeys: List(),
  nrOfBeds: -1,
  nrOfRooms: -1,
  pricePerNight: -1,
  totalPrice: -1,
  userRating: -1,
  images: List(),
  booking: {
    available: false
  }
};

export default class CabinRecord extends Record(keys) {
  constructor (values) {
    super(values);

    if (values && values.images) {
      return this.set('images', List(
        values.images.map(image => new ImageRecord(image))
      ));
    }
  }

}
