import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useAtom } from 'jotai';
import { memoLabels } from '../../../store/atoms';
import classes from './SelectLabelDropdown.module.scss';
import BasicButton from '../../Buttons/BasicButton';

export default function SelectLabelDropdown({ handleSelectItemClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [labels] = useAtom(memoLabels);

  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleOutsideClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [dropdownRef]);

  const handleClick = (e, targetLabel) => {
    e.preventDefault();
    handleSelectItemClick({ ...targetLabel });
  };

  return (
    <div
      className={`${classes.selectLabelDropdown} row align-items-center`}
      onClick={() => setIsOpen(!isOpen)}
      ref={dropdownRef}>
      <BasicButton name='Select Labels' secondary outline />
      {isOpen ? (
        <ul>
          {labels.map((label) => {
            return (
              <li key={label.id} onClick={(e) => handleClick(e, label)}>
                <p>{label.name}</p> <span style={{ background: label.hex }}></span>
              </li>
            );
          })}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
}

SelectLabelDropdown.propTypes = {
  handleSelectItemClick: PropTypes.func,
};
