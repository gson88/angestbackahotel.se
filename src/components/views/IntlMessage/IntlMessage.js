import React from 'react';
import PropTypes from 'prop-types';
import getTranslation from '~/utils/get-translation/get-translation';

const IntlMessage = ({ message, values, wrapper }) => {
  const translation = getTranslation(message, values);
  return !wrapper ? <>{ translation }</> : React.cloneElement(wrapper, {}, [ translation ]);
};

IntlMessage.propTypes = {
  message: PropTypes.string,
  wrapper: PropTypes.any,
  values: PropTypes.object
};

export default IntlMessage;
