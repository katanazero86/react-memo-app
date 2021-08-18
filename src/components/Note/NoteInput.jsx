import React, {useState, useCallback} from 'react';
import classes from './NoteInput.module.scss';
import ArrowUp from '@/components/Icons/ArrowUp';
import ArrowDown from '@/components/Icons/ArrowDown';
import BasicInput from '@/components/Inputs/BasicInput';
import TextAreaInput from '@/components/Inputs/TextAreaInput';
import SelectLabelDropdown from '@/components/Note/SelectLabelDropdown/SelectLabelDropdown';
import BasicButton from '@/components/Buttons/BasicButton';

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
        if (value.trim().length === 0) {
            setTitle('');
            return false;
        }
        let targetValue = value;
        if (value.length > 50) targetValue = value.slice(0, 50);
        setTitle(targetValue);
    }, []);

    const [memo, setMemo] = useState('');
    const handleMemoChange = useCallback(value => {
        if (value.trim().length === 0) {
            setMemo('');
            return false;
        }
        let targetValue = value;
        if (value.length > 250) targetValue = value.slice(0, 250);
        setMemo(targetValue);
    }, []);

    const [selectLabelIsOpen, setSelectLabelIsOpen] = useState(false);

    return (
        <div className={`${classes.noteInput} pa-4`}>
            <header className={`${classes.noteInputHeader} row align-items-center justify-contents-between`}>
                <p>
                    Note Add
                </p>
                {addIsOpen ?
                    <ArrowUp handleClick={handleAddIsOpenClose}/> :
                    <ArrowDown handleClick={handleAddIsOpenOpen}/>}
            </header>
            {addIsOpen && (
                <React.Fragment>
                    <div className={`${classes.noteInputInput}`}>
                        <BasicInput type="text" value={title} placeholder="제목" handleChange={handleTitleChange}
                                    valueLimit={50}/>
                    </div>
                    <div className={`${classes.noteInputInput}`}>
                        <TextAreaInput placeholder="메모" value={memo} handleChange={handleMemoChange} rows={10}
                                       maxLength={250}/>
                    </div>
                    <div className={`${classes.noteInputLabel} row align-items-center`}>
                        <SelectLabelDropdown/>
                    </div>
                    <div className={`${classes.noteInputButtons} row align-items-center justify-contents-between`}>
                        <BasicButton block name="초기화"/>
                        <BasicButton block name="작성"/>
                    </div>

                </React.Fragment>
            )}
        </div>
    )
}
