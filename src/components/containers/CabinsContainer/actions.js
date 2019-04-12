import CabinsContainerConstants from './constants';

/** @param data {{checkIn: string, checkOut: string}} */
export const searchCabins = ({ checkIn, checkOut }) => ({
  type: CabinsContainerConstants.SEARCH_CABIN,
  payload: { checkIn, checkOut }
});
