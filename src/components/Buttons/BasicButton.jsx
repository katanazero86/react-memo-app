import React from 'react';
import PropTypes from 'prop-types';
import classes from './BasicButton.module.scss';

export default function BasicButton({
  name = '',
  block = false,
  outline = false,
  small = false,
  secondary = false,
  handleClick,
}) {
  return (
    <button
      className={`${classes.button} 
            ${outline && classes.buttonOutline} 
            ${block && classes.buttonBlock} 
            ${small && classes.buttonSmall}
            ${secondary && classes.buttonSecondary}`}
      type='button'
      onClick={handleClick}>
      {name}
    </button>
  );
}

BasicButton.propTypes = {
  name: PropTypes.string,
  block: PropTypes.bool,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  secondary: PropTypes.bool,
  handleClick: PropTypes.func,
};
