import intl from 'react-intl-universal';

export default (message, values) => {
  if (!message) {
    return '';
  }

  let translatedMessage = intl.get(message, values);
  if (!translatedMessage) {
    translatedMessage = message;
  }

  return translatedMessage;
};
