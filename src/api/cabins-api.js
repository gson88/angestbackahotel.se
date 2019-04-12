import fetch from '/utils/fetch/fetch';
import requestsTypes from '/utils/fetch/request-types';

class CabinsApi {
  endpoint = process.env.REACT_APP_ENDPOINT_URL.concat('/cabins/');

  searchCabins = ({ checkin, checkout }) => {
    return fetch(
      requestsTypes.createGetRequest(this.endpoint, { checkin, checkout })
    );
  };
}

export default new CabinsApi();
