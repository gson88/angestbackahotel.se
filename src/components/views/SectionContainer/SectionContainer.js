import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SectionContainer = ({ className, children }) => {
  return (
    <section
      className={
        classnames(className, 'container mx-auto p-8 xssm:p-4 xssm:pt-8')
      }
    >
      { children }
    </section>
  );
};

SectionContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

export default SectionContainer;
