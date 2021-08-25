import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import '../Modal.scss';
import classes from './ConfirmModal.module.scss';
import BasicButton from '@/components/Buttons/BasicButton';

const CLOSE_MS = 200; // 0.2s

export default function ConfirmModal({handleConfirmFunc = null, handleCancelClick, msg = ''}) {

    const modalRef = useRef(null);

    useEffect(() => {
        const confirmModalEl = modalRef.current;
        confirmModalEl.classList.toggle(classes.confirmActive);
    }, []);

    const giveFadeOut = () => {
        const confirmModalEl = modalRef.current;
        confirmModalEl.classList.toggle(classes.confirmActive);
    };

    const handleOverlayClick = e => {
        if (e.target === e.currentTarget) {
            giveFadeOut();
            setTimeout(() => {
                handleCancelClick();
            }, CLOSE_MS);
        }
    };

    const handleCancel = () => {
        giveFadeOut();
        setTimeout(() => {
            handleCancelClick();
        }, CLOSE_MS);
    };

    const handleConfirm = () => {
        giveFadeOut();
        setTimeout(() => {
            if (handleConfirmFunc) handleConfirmFunc();
            handleCancelClick();
        }, CLOSE_MS);
    };

    return (
        <div className={`${classes.confirm} modal`} ref={modalRef}>
            <div className='modal__overlay' onClick={handleOverlayClick}>
                <div className='modal-body'>
                    <h3>
                        {msg}
                    </h3>
                    <div className='modal-buttons row align-items-center justify-contents-between'>
                        <BasicButton name='확인' block outline small handleClick={handleConfirm}/>
                        <BasicButton name='취소' block outline small handleClick={handleCancel}/>
                    </div>
                </div>
            </div>
        </div>
    )

}

ConfirmModal.propTypes = {
    handleConfirmFunc: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    handleCancelClick: PropTypes.func,
    msg: PropTypes.string,
};
