import React from 'react';
import PropTypes from 'prop-types';
import classes from './Limit.module.scss';

export default function Limit({ value, valueLimit }) {
  return <p className={classes.limit}>{`${value.length}/${valueLimit}`}</p>;
}

Limit.propTypes = {
  value: PropTypes.string,
  valueLimit: PropTypes.number,
};
