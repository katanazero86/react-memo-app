import React from 'react';
import classes from './Index.module.scss';
import NoteInput from "../components/Note/NoteInput";

export default function Index() {
    return (
        <section className={`${classes.indexWrap} pa-5`}>
            <div className={`${classes.index}`}>
                <NoteInput />
            </div>
        </section>
    )
}
