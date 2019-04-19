export const createGetRequest = (endpoint: string, parameters?: any): Request => {
  let url = endpoint;
  if (parameters) {
    url = url.concat('?', objectToGetParameters(parameters));
  }

  return new Request(url, {
    method: 'GET',
    headers: createHeaders(),
    mode: 'cors'
  });
};

export const createPostRequest = (endpoint: string, body: any): Request => {
  return new Request(endpoint, {
    method: 'POST',
    headers: createHeaders(),
    mode: 'cors',
    body: JSON.stringify(body)
  });
};

export const createDeleteRequest = (endpoint: string, body: any): Request => {
  return new Request(endpoint, {
    method: 'DELETE',
    headers: createHeaders(),
    mode: 'cors',
    body: JSON.stringify(body)
  });
};

export const createPutRequest = (endpoint: string, body: any,): Request => {
  return new Request(endpoint, {
    method: 'PUT',
    headers: createHeaders(),
    mode: 'cors',
    body: JSON.stringify(body)
  });
};

export const createPatchRequest = (endpoint: string, body: any): Request => {
  return new Request(endpoint, {
    method: 'PATCH',
    headers: createHeaders(),
    mode: 'cors',
    body: JSON.stringify(body)
  });
};

export const createHeaders = (): Headers => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  return new Headers(headers);
};

const objectToGetParameters = obj => {
  return Object
    .entries(obj)
    .map(([ key, value ]) => `${key}=${value}`)
    .join('&');
};

export default {
  createGetRequest,
  createPostRequest,
  createDeleteRequest,
  createPutRequest,
  createPatchRequest,
  createHeaders,
  objectToGetParameters
};
