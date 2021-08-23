import React from 'react';
import classes from './Index.module.scss';
import NoteInput from '@/components/Note/NoteInput';
import NoteList from '@/components/Note/NoteList';

export default function Index() {
    return (
        <section className={`${classes.indexWrap} pa-5`}>
            <div className={`${classes.index}`}>
                <div className={`${classes.indexNoteInput}`}>
                    <NoteInput/>
                </div>
                <div className={`${classes.indexNoteList}`}>
                    <NoteList/>
                </div>
            </div>
        </section>
    )
}
