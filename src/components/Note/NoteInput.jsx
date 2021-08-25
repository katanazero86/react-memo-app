import React, {useState, useCallback, useRef} from 'react';
import {useAtom} from 'jotai';
import {memoList} from '../../store/atoms';
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

    const handleInitMemoClick = useCallback(() => {
        setTitle('');
        setMemo('');
        setSelectedLabel(null);
    }, []);

    const [selectedLabel, setSelectedLabel] = useState(null);
    const handleSelectLabelClick = targetLabel => {
        setSelectedLabel(targetLabel);
    };

    const inputTitleRef = useRef(null);
    const inputMemoRef = useRef(null);
    const [memoItems, setMemoItems] = useAtom(memoList);
    const handleSubmitClick = () => {

        if (title.trim() === '') {
            alert('제목을 입력해주세요.');
            setTimeout(() => {
                handleFocus(inputTitleRef.current)
            });

            return false;
        }

        if (memo.trim() === '') {
            alert('메모를 입력해주세요.');
            setTimeout(() => {
                handleFocus(inputMemoRef.current)
            }, 1000);
            return false;
        }

        const tempKey = Math.random()
            .toString(32).slice(2);

        const submitObj = {
            id: tempKey,
            selectedLabel,
            title,
            memo,
        };
        setMemoItems([...memoItems, submitObj]);
        handleInitMemoClick();
    }

    const handleFocus = targetEl => {
        targetEl.focus();
    }

    return (
        <div className={`${classes.noteInput} pa-4`}>
            <header className={`${classes.noteInputHeader} row align-items-center justify-contents-between`}>
                <p>
                    Memo Add
                </p>
                {addIsOpen ?
                    <ArrowUp handleClick={handleAddIsOpenClose}/> :
                    <ArrowDown handleClick={handleAddIsOpenOpen}/>}
            </header>
            {addIsOpen && (
                <React.Fragment>
                    <div className={`${classes.noteInputInput}`}>
                        <BasicInput type="text" value={title} placeholder="제목*" handleChange={handleTitleChange}
                                    valueLimit={30} inputRef={inputTitleRef}/>
                    </div>
                    <div className={`${classes.noteInputInput}`}>
                        <TextAreaInput placeholder="메모*" value={memo} handleChange={handleMemoChange} rows={5}
                                       maxLength={100} inputRef={inputMemoRef}/>
                    </div>
                    <div className={`${classes.noteInputLabel} row align-items-center`}>
                        <SelectLabelDropdown handleSelectItemClick={handleSelectLabelClick}/>
                    </div>
                    {selectedLabel &&
                    <div className={classes.selectedLabel} style={{'backgroundColor': `${selectedLabel.hex}`}}
                         onClick={() => setSelectedLabel(null)}></div>}
                    <div className={`${classes.noteInputButtons} row align-items-center justify-contents-between`}>
                        <BasicButton block name="초기화" handleClick={handleInitMemoClick}/>
                        <BasicButton block name="작성" handleClick={handleSubmitClick}/>
                    </div>

                </React.Fragment>
            )}
        </div>
    )
}
