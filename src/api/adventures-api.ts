import fetch from '~/utils/fetch/fetch';
import { createGetRequest } from '~/utils/fetch/request-types';

// type IsearchCabinsResponse = CabinRecord[];

class AdventuresAPI {
  endpoint = process.env.REACT_APP_ENDPOINT_URL.concat('/adventures/');

  getAdventures = () => {
    return fetch(createGetRequest(this.endpoint));
  };
}

export default new AdventuresAPI();
