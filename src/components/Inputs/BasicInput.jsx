import React from 'react';
import PropTypes from 'prop-types';
import classes from './BasicInput.module.scss';
import Limit from './Limit/Limit';

export default function BasicInput({type = 'text', placeholder = '', handleChange, value, valueLimit = 0, inputRef = null}) {
    return (
        <React.Fragment>
            <input className={classes.input} type={type} placeholder={placeholder}
                   onChange={e => handleChange(e.target.value)} value={value} ref={inputRef}/>
            {valueLimit > 0 ? <Limit value={value} valueLimit={valueLimit}/> : ''}
        </React.Fragment>

    )
}

BasicInput.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func,
    value: PropTypes.string,
    valueLimit: PropTypes.number,
    inputRef: PropTypes.object,
}
