import CabinsContainerConstants from './constants';

export const searchCabins = ({ checkIn, checkOut }) => ({
  type: CabinsContainerConstants.SEARCH_CABIN,
  payload: { checkIn, checkOut }
});
