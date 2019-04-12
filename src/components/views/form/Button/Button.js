import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SpinningIcon from '/components/views/icons/SpinningIcon/SpinningIcon';

const Button = ({ type, className, onClick, isLoading, children }) => {
  return (
    <button
      className={classnames('Button', className)}
      type={type}
      onClick={onClick}
    >
      { isLoading && <SpinningIcon icon="fa-spinner" className="mr-2" />}
      { children }
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf([ 'submit', 'button' ]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  children: PropTypes.any
};

Button.defaultProps = {
  type: 'button'
};

export default Button;
