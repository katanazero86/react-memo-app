import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import classes from './AlertModal.module.scss';
import BasicButton from '@/components/Buttons/BasicButton';

const CLOSE_MS = 150; // 0.15s

export default function ConfirmModal({handleAlertConfirmClick, handleAlertConfirmFunc = null, msg = ''}) {

    const modalRef = useRef(null);

    useEffect(() => {
        const alertModalEl = modalRef.current;
        if (alertModalEl) {
            alertModalEl.classList.toggle(classes.alertActive);
        }
    }, []);

    const giveFadeOut = () => {
        const alertModalEl = modalRef.current;
        if (alertModalEl) {
            alertModalEl.classList.toggle(classes.alertActive);
        }
    };

    const handleOverlayClick = e => {
        if (e.target === e.currentTarget) {
            giveFadeOut();
            setTimeout(() => {
                handleConfirm();
            }, CLOSE_MS);
        }
    };

    const handleConfirm = () => {
        giveFadeOut();
        setTimeout(() => {
            if (handleAlertConfirmFunc) handleAlertConfirmFunc();
            handleAlertConfirmClick();
        }, CLOSE_MS);
    };

    return (
        <div className={`${classes.confirm} modal`} ref={modalRef}>
            <div className='modal__overlay' onClick={handleOverlayClick}>
                <div className='modal-body'>
                    <h3>
                        {msg}
                    </h3>
                    <div className='modal-button row align-items-center justify-contents-between'>
                        <BasicButton name='확인' block outline small handleClick={handleConfirm}/>
                    </div>
                </div>
            </div>
        </div>
    )

}

ConfirmModal.propTypes = {
    handleAlertConfirmClick: PropTypes.func,
    handleAlertConfirmFunc: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    msg: PropTypes.string,
};
