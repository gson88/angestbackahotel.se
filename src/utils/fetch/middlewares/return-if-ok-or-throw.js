import { ErrorResponseException, NotFoundException } from '../exceptions';

export default ([res, json]) => {
  if (res.ok) {
    return json;
  }

  //If the endpoint did not exist
  if (res.status === 404 && typeof json.errors === 'undefined') {
    throw new NotFoundException({
      errors: [{
        status: 404,
        id: 'web.error.resource_not_found',
        description: 'web.error.resource_not_found'
      }]
    });
  }

  throw new ErrorResponseException(json);
};
