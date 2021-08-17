import React, {useState, useEffect, useRef} from 'react';
import {useAtom,} from 'jotai';
import {memoLabels} from "../../../store/atoms";
import classes from './SelectLabelDropdown.module.scss';
import AddBox from "../../Icons/AddBox";

export default function SelectLabelDropdown() {

    const [isOpen, setIsOpen] = useState(false);
    const [labels] = useAtom(memoLabels);

    const dropdownRef = useRef(null);
    useEffect(() => {
        function handleOutsideClick(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [dropdownRef]);

    return (
        <div className={`${classes.selectLabelDropdown} row align-items-center`} onClick={() => setIsOpen(!isOpen)}
             ref={dropdownRef}>
            <AddBox/>
            <span>
                    Select Labels
            </span>
            {isOpen ? <ul>
                {labels.map(label => {
                    return (
                        <li key={label.id} onClick={e => e.stopPropagation()}>
                            <p>{label.name}</p> <span style={{'background': label.hex}}></span>
                        </li>
                    )
                })}
            </ul> : ''}
        </div>
    )
}
