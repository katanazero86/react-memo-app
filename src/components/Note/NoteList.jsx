import React, {useCallback} from 'react';
import {useAtom} from 'jotai';
import {memoList} from '../../store/atoms';
import classes from './NoteList.module.scss';
import Delete from '../Icons/Delete';

const NoteItem = ({targetItem, handleDeleteClick}) => {
    return (
        <div className={`${classes.noteListItem} pa-4`}>
            <div className={`row align-items-center justify-contents-between`}>
                <h4>
                    {targetItem.title}
                </h4>
                <Delete width={16} height={16} handleClick={() => handleDeleteClick(targetItem)}/>
            </div>
            <div className={`row align-items-center justify-contents-end`}>
                {targetItem.selectedLabel &&
                <div className={classes.selectedLabel} style={{'backgroundColor': `${targetItem.selectedLabel.hex}`}}>
                    {targetItem.selectedLabel.name}
                </div>
                }
            </div>
            <p>
                {targetItem.memo}
            </p>
        </div>
    )
};

export default function NoteList() {

    const [memoItems] = useAtom(memoList);

    const handleDeleteClick = useCallback(targetItem => {
        console.log(targetItem)
    }, []);

    return (
        <React.Fragment>
            {
                memoItems.length > 0 &&
                <div className={`${classes.noteList}`}>
                    {memoItems.length > 0 && (
                        memoItems.map(item => (
                            <NoteItem key={item} targetItem={item} handleDeleteClick={handleDeleteClick}/>
                        ))
                    )}
                </div>
            }
        </React.Fragment>
    )
}
