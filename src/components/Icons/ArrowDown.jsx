import React from 'react';
import PropTypes from 'prop-types';
import classes from './Icon.module.scss';

export default function ArrowDown({ handleClick, width = 24, height = 24, color = '#151515' }) {
  return (
    <div className={classes.icon} onClick={handleClick}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={width} height={height} fill={color}>
        <path d='M0 0h24v24H0V0z' fill='none' />
        <path d='M7 10l5 5 5-5H7z' />
      </svg>
    </div>
  );
}

ArrowDown.propTypes = {
  handleClick: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
