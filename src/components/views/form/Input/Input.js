import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import IntlMessage from '~components/views/IntlMessage/IntlMessage';
import getTranslation from '~utils/get-translation/get-translation';

const Input = props => {
  const placeholder = getTranslation(props.placeholderLangKey);

  return (
    <section className={classnames('Input', props.className)}>
      { props.labelLangKey && (
        <label htmlFor={props.id} className="block mb-2">
          <IntlMessage message={props.labelLangKey} />
        </label>
      )}
      <input
        type={props.type}
        id={props.id}
        className="w-full"
        name={props.id}
        value={props.value}
        placeholder={placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        disabled={props.disabled}
        min={props.min}
        max={props.max}
      />
    </section>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  placeholderLangKey: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  labelLangKey: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string
};

export default Input;
