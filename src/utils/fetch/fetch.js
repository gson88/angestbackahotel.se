import { handleNetworkError, parseJsonOrThrow, returnIfOKOrThrow } from './middlewares/index';

const http = req => {
  return fetch(req)
    .catch(handleNetworkError)
    .then(parseJsonOrThrow)
    .then(returnIfOKOrThrow);
};

export default http;
