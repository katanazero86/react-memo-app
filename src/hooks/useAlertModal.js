import React, {useState} from 'react';

export default function useAlertModal() {

    const [alert, setAlert] = useState({
        msg: '',
        isOpenAlert: false,
        confirmFunc: null,
    });

    const handleAlertConfirmClick = () => {
        setAlert({
            msg: '',
            isOpenAlert: false,
            confirmFunc: null,
        });
    };

    const openAlert = (targetMsg, targetConfirmFunc) => {
        setAlert({
            msg: targetMsg,
            isOpenAlert: true,
            confirmFunc: targetConfirmFunc,
        });
    };

    return {alert, setAlert, handleAlertConfirmClick, openAlert}
}
