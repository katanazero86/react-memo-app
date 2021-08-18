import React from 'react';
import PropTypes from 'prop-types'
import classes from './BasicButton.module.scss';

export default function BasicButton({name = '', block = false}) {
    return (
        <button className={`${classes.button} ${block && classes.buttonBlock}`} type="button">{name}</button>
    )
}
