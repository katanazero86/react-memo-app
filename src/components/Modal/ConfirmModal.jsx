import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import classes from './ConfirmModal.module.scss';
import BasicButton from '../Buttons/BasicButton';

export default function ConfirmModal({handleConfirmClick, handleCancelClick, msg = '', isOpenConfirm}) {

    const handleOverlayClick = e => {
        e.preventDefault();
        if (e.target === e.currentTarget) handleCancelClick();
    }

    return (
        <React.Fragment>
        {isOpenConfirm && <div className={`${classes.confirm} modal`}>
            <div className='modal__overlay' onClick={handleOverlayClick}>
                <div className='modal-body'>
                    <h3>
                        {msg}
                    </h3>
                    <div className='modal-buttons row align-items-center justify-contents-between'>
                        <BasicButton name='확인' block handleClick={handleConfirmClick}/>
                        <BasicButton name='취소' block handleClick={handleCancelClick}/>
                    </div>
                </div>
            </div>
        </div>}
        </React.Fragment>
    )

}

ConfirmModal.propTypes = {
    handleConfirmClick: PropTypes.func,
    handleCancelClick: PropTypes.func,
    msg: PropTypes.string
};
