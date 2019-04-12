import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SpinningIcon = ({ icon, className }) => {
  return (
    <i className={classnames('fa', 'fa-spin', icon, className)} />
  );
};

SpinningIcon.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string
};

export default SpinningIcon;
