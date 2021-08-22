import React from 'react';
import {useAtom} from 'jotai';
import {memoList} from '../../store/atoms';
import classes from './NoteList.module.scss';


const NoteItem = ({targetItem}) => {
    return (
        <div>
            <h4>
                {targetItem.title}
            </h4>
            <p>
                {targetItem.memo}
            </p>
        </div>
    )
};

export default function NoteList() {

    const [memoItems] = useAtom(memoList);

    return (
        <React.Fragment>
            {
                memoItems.length > 0 &&
                <div className={`${classes.noteList} pa-4`}>
                    <header className={`${classes.noteListHeader} row align-items-center justify-contents-between`}>
                        <p>
                            Note List
                        </p>
                    </header>
                    {memoItems.length > 0 && (
                        memoItems.map(item => (
                            <NoteItem key={item} targetItem={item}/>
                        ))
                    )}
                </div>
            }
        </React.Fragment>
    )
}
