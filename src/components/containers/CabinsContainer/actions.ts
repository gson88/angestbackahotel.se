import CabinsContainerConstants from './constants';

export interface IsearchCabins {
  checkIn: string,
  checkOut: string
}

export const searchCabins = ({ checkIn, checkOut }: IsearchCabins) => ({
  type: CabinsContainerConstants.SEARCH_CABIN,
  payload: { checkIn, checkOut }
});
