import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const Form = props => {
  const onSubmit = useCallback(e => {
    e.preventDefault();
    props.onSubmit();
    return false;
  }, [ props.onSubmit ]);

  return (
    <form onSubmit={onSubmit}>
      { props.children }
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.any
};

export default Form;
