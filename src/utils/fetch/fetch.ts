import { handleNetworkError, parseJsonOrThrow, returnIfOKOrThrow } from './middlewares/index';

const doFetch = <T>(req: Request): Promise<T> => {
  return fetch(req)
    .catch(handleNetworkError)
    .then(parseJsonOrThrow)
    .then(returnIfOKOrThrow);
};

export default doFetch;
