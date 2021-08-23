import React from 'react';
import PropTypes from 'prop-types';
import classes from './Icon.module.scss';

export default function DragHandler({ width = 24, height = 24, color = '#151515'}) {

    return (
        <div className={classes.iconDrag}>
            <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 24 24" width={width} fill={color}>
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z"/>
            </svg>
        </div>
    )

}

DragHandler.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
};
