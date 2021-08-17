import React, {useState, useCallback} from 'react';
import classes from './NoteInput.module.scss';
import ArrowUp from "../Icons/ArrowUp";
import ArrowDown from "../Icons/ArrowDown";
import BasicInput from "../Inputs/BasicInput";
import TextAreaInput from "../Inputs/TextAreaInput";

export default function NoteInput() {

    const [addIsOpen, setAddIsOpen] = useState(true);
    const handleAddIsOpenOpen = useCallback(() => {
        setAddIsOpen(true);
    }, []);
    const handleAddIsOpenClose = useCallback(() => {
        setAddIsOpen(false);
    }, []);

    const [title, setTitle] = useState('');
    const handleTitleChange = useCallback(value => {
        if(value.trim().length === 0) {
            setTitle('');
            return false;
        }
        let targetValue = value;
        if (value.length > 50) targetValue = value.slice(0, 50);
        setTitle(targetValue);
    }, []);

    const [memo, setMemo] = useState('');
    const handleMemoChange = useCallback(value => {
        if(value.trim().length === 0) {
            setMemo('');
            return false;
        }
        let targetValue = value;
        if (value.length > 250) targetValue = value.slice(0, 250);
        setMemo(targetValue);
    },[]);

    return (
        <div className={`${classes.noteInput} pa-4`}>
            <header className={`${classes.noteInputHeader} row align-items-center justify-contents-between`}>
                <p>
                    Note Add
                </p>
                {addIsOpen ? <ArrowUp handleClick={handleAddIsOpenClose}/> :
                    <ArrowDown handleClick={handleAddIsOpenOpen}/>}
            </header>
            {addIsOpen && (
                <React.Fragment>
                    <div className={`${classes.noteInputInput}`}>
                        <BasicInput type="text" value={title} placeholder="제목" handleChange={handleTitleChange}
                                    valueLimit={50}/>
                    </div>
                    <div className={`${classes.noteInputInput}`}>
                        <TextAreaInput placeholder="메모" value={memo} handleChange={handleMemoChange} rows={10} maxLength={250} />
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}
