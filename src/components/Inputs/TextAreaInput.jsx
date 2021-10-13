import React from 'react';
import PropTypes from 'prop-types';
import classes from './TextAreaInput.module.scss';
import Limit from './Limit/Limit';

export default function TextAreaInput({
  id = '',
  name = '',
  placeholder = '',
  rows = 3,
  cols = 3,
  maxLength = 120,
  value,
  handleChange,
  inputRef = null,
}) {
  return (
    <React.Fragment>
      <textarea
        className={classes.textarea}
        id={id}
        name={name}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        maxLength={maxLength}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        ref={inputRef}
      />
      {maxLength > 0 ? <Limit value={value} valueLimit={maxLength} /> : ''}
    </React.Fragment>
  );
}

TextAreaInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  maxLength: PropTypes.number,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  inputRef: PropTypes.object,
};
