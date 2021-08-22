import React from 'react';
import PropTypes from 'prop-types'
import classes from './BasicButton.module.scss';

export default function BasicButton({name = '', block = false, handleClick}) {
    return (
        <button className={`${classes.button} ${block && classes.buttonBlock}`} type="button"
                onClick={handleClick}>{name}</button>
    )
}

BasicButton.propTypes = {
    name: PropTypes.string,
    block: PropTypes.bool,
    handleClick: PropTypes.func,
};
