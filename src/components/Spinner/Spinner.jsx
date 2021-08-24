import React from 'react';
import PropTypes from 'prop-types';
import classes from './Spinner.module.scss';

export default function Spinner({small = false, large = false}) {
    return (
        <div className={`${classes.spinner} row align-items-center justify-contents-center`}>
            <div className={`${classes.spinnerCircle} 
            ${small && classes.spinnerCircleSmall} 
            ${large && classes.spinnerCircleLarge}`}/>
        </div>
    )
}

Spinner.propTypes = {
    small: PropTypes.bool,
    large: PropTypes.bool,
}
