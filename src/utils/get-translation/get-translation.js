import intl from 'react-intl-universal';

export default (message, values) => {
  if (!message) {
    return '';
  }

  const translatedMessage = intl.get(message, values) || message;
  
  return translatedMessage;
};
