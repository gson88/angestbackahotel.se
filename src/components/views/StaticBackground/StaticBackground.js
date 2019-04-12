import React from 'react';
import PropTypes from 'prop-types';
import './StaticBackground.scss';

const StaticBackground = ({ src, height, children }) => {
  return (
    <article
      className="StaticBackground flex items-center justify-center"
      style={{
        height,
        backgroundImage: `url("${src}")`
      }}
    >
      { children }
    </article>
  );
};

StaticBackground.propTypes = {
  src: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.any
};

export default StaticBackground;
