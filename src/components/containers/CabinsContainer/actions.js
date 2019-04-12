import CabinsContainerConstants from './constants';

/** @param data {{checkin: string, checkout: string}} */
export const searchCabins = data => ({
  type: CabinsContainerConstants.SEARCH_CABIN,
  payload: { ...data }
});
