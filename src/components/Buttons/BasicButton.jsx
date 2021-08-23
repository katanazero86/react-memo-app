import React from 'react';
import PropTypes from 'prop-types'
import classes from './BasicButton.module.scss';

export default function BasicButton({name = '', block = false, outline = false, handleClick}) {
    return (
        <button className={`${classes.button} ${block && classes.buttonBlock} ${outline && classes.buttonOutline}`}
                type="button"
                onClick={handleClick}>{name}</button>
    )
}

BasicButton.propTypes = {
    name: PropTypes.string,
    block: PropTypes.bool,
    outline: PropTypes.bool,
    handleClick: PropTypes.func,
};
