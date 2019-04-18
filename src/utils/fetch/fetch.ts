import { handleNetworkError, parseJsonOrThrow, returnIfOKOrThrow } from './middlewares/index';

const doFetch = (req: Request) => {
  return fetch(req)
    .catch(handleNetworkError)
    .then(parseJsonOrThrow)
    .then(returnIfOKOrThrow);
};

export default doFetch;
