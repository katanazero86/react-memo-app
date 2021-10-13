import React, { useState, useEffect, useRef } from 'react';

export default function useDragAndDrop(targetRef) {
  const [isDraggable, setIsDraggable] = useState(true);
  const currentRef = useRef(null);
  useEffect(() => {
    currentRef.current = targetRef.current;
  }, [targetRef]);

  const initDragAndDrop = ({ handleDragStart, handleDragEnd, handleDrop, handleDragOver }) => {
    const targetEl = currentRef.current;
    if (targetEl) {
      targetEl.setAttribute('draggable', isDraggable);
      targetEl.addEventListener('dragstart', handleDragStart);
      targetEl.addEventListener('dragover', handleDragOver);
      targetEl.addEventListener('drop', handleDrop);
      targetEl.addEventListener('dragend', handleDragEnd);
    } else {
      alert('엘리먼트가 존재하지 않습니다.');
      return false;
    }
  };

  const removeDragAndDrop = ({ handleDragStart, handleDragEnd, handleDrop, handleDragOver }) => {
    const targetEl = currentRef.current;
    if (targetEl) {
      targetEl.removeAttribute('draggable');
      targetEl.removeEventListener('dragstart', handleDragStart);
      targetEl.removeEventListener('dragover', handleDragOver);
      targetEl.removeEventListener('drop', handleDrop);
      targetEl.removeEventListener('dragend', handleDragEnd);
    } else {
      alert('엘리먼트가 존재하지 않습니다.');
      return false;
    }
  };

  return { isDraggable, setIsDraggable, initDragAndDrop, removeDragAndDrop };
}
