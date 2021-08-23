import React, {useCallback, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {useAtom} from 'jotai';
import {memoList} from '../../store/atoms';
import useConfirmModal from '../../hooks/useConfirmModal';
import useDragAndDrop from '../../hooks/useDragAndDrop';
import classes from './NoteList.module.scss';
import Delete from '../Icons/Delete';
import DragHandler from '../Icons/DragHandler';
import ConfirmModal from '../Modal/ConfirmModal';

const NoteItem = ({targetItem, handleDeleteClick, handleDragStart, handleDragEnd, handleDrop, handleDragOver}) => {

    const [memoItems,] = useAtom(memoList);
    const dragRef = useRef(null);
    const {initDragAndDrop, removeDragAndDrop} = useDragAndDrop(dragRef)

    useEffect(() => {
        initDragAndDrop({handleDragStart, handleDragEnd, handleDrop, handleDragOver});
        return () => removeDragAndDrop({handleDragStart, handleDragEnd, handleDrop, handleDragOver});
    }, [dragRef, memoItems]);

    return (
        <div className={`${classes.noteListItem} pa-4`}
             ref={dragRef}
             data-idx={targetItem.idx}>
            <div className={`row align-items-center justify-contents-between`}>
                <DragHandler/>
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

NoteItem.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
};

export default function NoteList() {

    const [memoItems, setMemoItems] = useAtom(memoList);
    const {confirm, setConfirm, handleCancelClick, openConfirm} = useConfirmModal();

    const handleDeleteClick = useCallback(targetItem => {
        const msg = '해당 메모를 삭제 하시겠습니까?';
        const confirmFunc = () => {
            setMemoItems(memoItems.filter(item => item.idx !== targetItem.idx));
            setConfirm({
                msg: '',
                isOpenConfirm: false,
                confirmFunc: null,
            });
        };
        openConfirm(msg, confirmFunc);

    }, [memoItems]);

    const handleDragStart = e => {
        e.dataTransfer.setData('idx', e.target.dataset.idx);
        e.target.style.opacity = '0.5';
    };

    const handleDrop = e => {
        const targetIdx = e.dataTransfer.getData('idx');
        const dropElIdx = e.currentTarget.dataset.idx;
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
            <ConfirmModal isOpenConfirm={confirm.isOpenConfirm}
                          msg={confirm.msg}
                          handleCancelClick={handleCancelClick}
                          handleConfirmClick={confirm.confirmFunc}/>
        </React.Fragment>
    )
}
