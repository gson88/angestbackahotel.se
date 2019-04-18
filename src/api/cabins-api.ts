import fetch from '~utils/fetch/fetch';
import requestsTypes from '~utils/fetch/request-types';

class CabinsAPI {
  endpoint = process.env.REACT_APP_ENDPOINT_URL.concat('/cabins/');

  searchCabins = payload => {
    return fetch(
      requestsTypes.createGetRequest(this.endpoint, { checkIn: payload.checkIn, checkOut: payload.checkOut })
    );
  };
}

export default new CabinsAPI();
