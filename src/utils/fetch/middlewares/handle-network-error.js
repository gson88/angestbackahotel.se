import { NetworkException } from '../exceptions';

//The request was not possible to make (No internet connection / Service is down)
export default () => {
  throw new NetworkException({
    errors: [{
      id: 'web.error.network_error',
      description: 'web.error.network_error'
    }]
  });
};
