import React from 'react';
import PropTypes from 'prop-types';
import classes from './Icon.module.scss';

export default function Delete({handleClick, width = 24, height = 24, color = '#151515'}) {
    return (
        <div className={classes.icon} onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 24 24" width={width} fill={color}>
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
            </svg>
        </div>
    )
}

Delete.propTypes = {
    handleClick: PropTypes.func,
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
};
