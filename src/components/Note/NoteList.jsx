import React, {useState, useCallback} from 'react';
import {useAtom} from 'jotai';
import {memoList} from '../../store/atoms';
import classes from './NoteList.module.scss';
import Delete from '../Icons/Delete';
import ConfirmModal from '../Modal/ConfirmModal';

const NoteItem = ({targetItem, handleDeleteClick}) => {
    return (
        <div className={`${classes.noteListItem} pa-4`}>
            <div className={`row align-items-center ${targetItem.selectedLabel ? `justify-contents-between` : `justify-contents-end`}`}>
                {targetItem.selectedLabel &&
                <div className={classes.selectedLabel} style={{'backgroundColor': `${targetItem.selectedLabel.hex}`}}>
                    {targetItem.selectedLabel.name}
                </div>
                }
                <Delete width={16} height={16} handleClick={() => handleDeleteClick(targetItem)}/>
            </div>
            <div className={classes.title}>
                <h4>
                    {targetItem.title}
                </h4>
            </div>
            <p>
                {targetItem.memo}
            </p>
        </div>
    )
};

export default function NoteList() {

    const [memoItems, setMemoItems] = useAtom(memoList);
    const [confirm, setConfirm] = useState({
        msg: '해당 메모를 삭제 하시겠습니까?',
        isOpenConfirm: false,
        confirmFunc: null,
    })

    const handleDeleteClick = useCallback(targetItem => {
        const confirmCallback = () => {
            setMemoItems(memoItems.filter(item => item.idx !== targetItem.idx));
            setConfirm({
                ...confirm,
                isOpenConfirm: false,
                confirmFunc: null,
            });
        };
        setConfirm({
            ...confirm,
            isOpenConfirm: true,
            confirmFunc: confirmCallback,
        });

    }, [memoItems]);

    return (
        <React.Fragment>
            {
                memoItems.length > 0 &&
                <div className={`${classes.noteList}`}>
                    {memoItems.length > 0 && (
                        memoItems.map(item => (
                            <NoteItem key={item.idx} targetItem={item} handleDeleteClick={handleDeleteClick}/>
                        ))
                    )}
                </div>
            }
            <ConfirmModal isOpenConfirm={confirm.isOpenConfirm} msg="해당 메모를 삭제 하시겠습니까?"
                          handleCancelClick={() => setConfirm({...confirm, isOpenConfirm: false,})}
                          handleConfirmClick={confirm.confirmFunc}/>
        </React.Fragment>
    )
}
