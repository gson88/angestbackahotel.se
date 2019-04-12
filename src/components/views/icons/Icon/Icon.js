import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Icon = ({ icon, className, solid }) => {
  return (
    <i
      className={classnames({
        'fas': solid,
        'far': !solid
      }, icon, className)} />
  );
};

Icon.propTypes = {
  solid: PropTypes.bool,
  icon: PropTypes.string,
  className: PropTypes.string
};

Icon.defaultProps = {
  solid: true
};

export default Icon;
