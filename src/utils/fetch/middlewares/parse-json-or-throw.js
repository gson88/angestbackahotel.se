import { JSONParseErrorException } from '../exceptions';

export default async res => {
  try {
    const json = await res.json();
    return [ res, json ];
  } catch (err) {
    if (res.ok) {
      return [ res, {} ];
    }

    throw new JSONParseErrorException({
      errors: [{
        id: 'web.error.could_not_parse_json',
        description: 'web.error.could_not_parse_json'
      }]
    });
  }
};
