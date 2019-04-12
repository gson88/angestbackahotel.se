import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import IntlMessage from '/components/views/IntlMessage/IntlMessage';

const FooterItem = ({ className, titleLangKey, content }) => {
  return (
    <section className={classnames(className, 'flex flex-col items-center')}>
      <h4 className="mb-1">
        <IntlMessage message={titleLangKey} />
      </h4>
      { content }
    </section>
  );
};

FooterItem.propTypes = {
  className: PropTypes.string,
  titleLangKey: PropTypes.string,
  content: PropTypes.any
};

export default FooterItem;
