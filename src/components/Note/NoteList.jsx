import React, {useState, useCallback} from 'react';
import {useAtom} from 'jotai';
import {memoList} from '../../store/atoms';
import classes from './NoteList.module.scss';
import Delete from '../Icons/Delete';
import DragHandler from '../Icons/DragHandler';
import ConfirmModal from '../Modal/ConfirmModal';

const NoteItem = ({targetItem, handleDeleteClick, handleDragStart, handleDragEnd, handleDrop, handleDragOver}) => {
    return (
        <div className={`${classes.noteListItem} pa-4`}
             draggable={true}
             onDragStart={handleDragStart}
             onDragEnd={handleDragEnd}
             onDrop={handleDrop}
             onDragOver={handleDragOver}
             data-idx={targetItem.idx}>
            <div className={`row align-items-center justify-contents-between`}>
                <DragHandler handleDrag={handleDragStart}/>
                <Delete width={18} height={18} handleClick={() => handleDeleteClick(targetItem)}/>
            </div>
            <div onMouseDown={e => e.preventDefault()}>
                {targetItem.selectedLabel &&
                <div className={classes.selectedLabel} style={{'backgroundColor': `${targetItem.selectedLabel.hex}`}}>
                    {targetItem.selectedLabel.name}
                </div>
                }
                <div className={classes.title}>
                    <h3>
                        {targetItem.title}
                    </h3>
                </div>
                <p className={classes.memo}>
                    {targetItem.memo}
                </p>
            </div>
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

    const handleDragStart = e => {
        e.dataTransfer.setData('idx', e.target.dataset.idx);
        e.target.style.opacity = '0.6';
    };

    const handleDrop = e => {
        const targetIdx = e.dataTransfer.getData('idx');
        const dropElIdx = e.currentTarget.dataset.idx;
        console.log(targetIdx);
        console.log(dropElIdx);
        if (targetIdx !== dropElIdx) {
            const targetItemIndex = memoItems.findIndex(item => item.idx == targetIdx);
            const dropItemIndex = memoItems.findIndex(item => item.idx == dropElIdx);
            const memoItemsArr = [...memoItems];
            const temp = memoItemsArr[dropItemIndex];
            memoItemsArr[dropItemIndex] = memoItemsArr[targetItemIndex];
            memoItemsArr[targetItemIndex] = temp;
            setMemoItems(memoItemsArr);
        }
    }

    const handleDragEnd = e => {
        e.target.style.opacity = '1';
    }

    const handelDragOver = e => {
        e.preventDefault();
    }

    return (
        <React.Fragment>
            {
                memoItems.length > 0 &&
                <div className={`${classes.noteList}`}>
                    <p>
                        {memoItems.length} Memos
                    </p>
                    {memoItems.length > 0 && (
                        memoItems.map(item => (
                            <NoteItem key={item.idx}
                                      targetItem={item}
                                      handleDeleteClick={handleDeleteClick}
                                      handleDragStart={handleDragStart}
                                      handleDragEnd={handleDragEnd}
                                      handleDrop={handleDrop}
                                      handleDragOver={handelDragOver}
                            />
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
