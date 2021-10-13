import React, { useState } from 'react';

export default function useConfirmModal() {
  const [confirm, setConfirm] = useState({
    msg: '',
    isOpenConfirm: false,
    confirmFunc: null,
  });

  const handleCancelClick = () => {
    setConfirm({
      msg: '',
      isOpenConfirm: false,
      confirmFunc: null,
    });
  };

  const openConfirm = (targetMsg, targetConfirmFunc) => {
    setConfirm({
      msg: targetMsg,
      isOpenConfirm: true,
      confirmFunc: targetConfirmFunc,
    });
  };

  return { confirm, setConfirm, handleCancelClick, openConfirm };
}
