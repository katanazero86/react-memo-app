import React from 'react';
import classes from './Header.module.scss';

export default function Header() {

    return (
        <header className={`${classes.header} row align-items-center pa-5`}>
            <div className={`${classes.headerTitle}`}>
                <p>react-memo-app</p>
            </div>
        </header>
    )

}
