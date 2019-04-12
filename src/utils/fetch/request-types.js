export function createGetRequest(endpoint, parameters, token, provider, includeVersionHeaders = false) {
  let url = endpoint;
  if (parameters) {
    url = url.concat('?', objectToGetParameters(parameters));
  }

  return new Request(url, {
    method: 'GET',
    headers: createHeaders(token, provider, includeVersionHeaders),
    mode: 'cors'
  });
}

export function createNoTokenGetRequest(endpoint, parameters, includeVersionHeaders = false) {
  return createGetRequest(endpoint, parameters, false, false, includeVersionHeaders);
}

export function createPostRequest(endpoint, body, token, provider, includeVersionHeaders = false) {
  return new Request(endpoint, {
    method: 'POST',
    headers: createHeaders(token, provider, includeVersionHeaders),
    mode: 'cors',
    body: JSON.stringify(body)
  });
}

export function createNoTokenPostRequest(endpoint, body, includeVersionHeaders = false) {
  return createPostRequest(endpoint, body, false, false, includeVersionHeaders);
}

export function createDeleteRequest(endpoint, body, token, provider, includeVersionHeaders = false) {
  return new Request(endpoint, {
    method: 'DELETE',
    headers: createHeaders(token, provider, includeVersionHeaders),
    mode: 'cors',
    body: JSON.stringify(body)
  });
}

export function createNoTokenDeleteRequest(endpoint, body, includeVersionHeaders = false) {
  return createDeleteRequest(endpoint, body, false, false, includeVersionHeaders);
}

export function createPutRequest(endpoint, body, token, provider, includeVersionHeaders = false) {
  return new Request(endpoint, {
    method: 'PUT',
    headers: createHeaders(token, provider, includeVersionHeaders),
    mode: 'cors',
    body: JSON.stringify(body)
  });
}

export function createNoTokenPutRequest(endpoint, body, includeVersionHeaders = false) {
  return createPutRequest(endpoint, body, false, false, includeVersionHeaders);
}

export function createPatchRequest(endpoint, body, token, provider, includeVersionHeaders = false) {
  return new Request(endpoint, {
    method: 'PATCH',
    headers: createHeaders(token, provider, includeVersionHeaders),
    mode: 'cors',
    body: JSON.stringify(body)
  });
}

export function createNoTokenPatchRequest(endpoint, body, includeVersionHeaders = false) {
  return createPatchRequest(endpoint, body, false, false, includeVersionHeaders);
}

export function createFetchError(response) {
  return new Error(`${response.status} ${response.statusText}`);
}

export function isStatusError(httpStatus) {
  const statusSuccess = new RegExp('\\b2[0-9][0-9]\\b', 'g');
  return !statusSuccess.test(httpStatus);
}

export function createHeaders(
  /*token = store.getState().authentication.token,
  provider = store.getState().authentication.provider,*/ includeVersionHeaders) {

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  if (includeVersionHeaders /*&& featureToggleHelper.enabled('CHECK_APP_VERSION')*/) {
    // const appStateRecord = store.getState().app;
    // if (appStateRecord.hasAppVersion()) {
    //   headers['x-app-timestamp'] = appStateRecord.timestamp;
    //   headers['x-app-hash'] = appStateRecord.hash;
    // }
  }

  // if (token) {
  //   headers['Authorization'] = `Bearer ${token}`;
  // }
  //
  // if (provider) {
  //   headers['Authorization-Provider'] = provider;
  // }

  return new Headers(headers);
}

function objectToGetParameters(obj) {
  return Object
  .entries(obj)
  .map(([ key, value ]) => `${key}=${value}`)
  .join('&');
}

export default {
  createGetRequest,
  createNoTokenGetRequest,
  createPostRequest,
  createNoTokenPostRequest,
  createDeleteRequest,
  createNoTokenDeleteRequest,
  createPutRequest,
  createNoTokenPutRequest,
  createPatchRequest,
  createNoTokenPatchRequest,
  createFetchError,
  isStatusError,
  createHeaders,
  objectToGetParameters
};
