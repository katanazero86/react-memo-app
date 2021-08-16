import React from 'react';
import classes from './Footer.module.scss';

const links = [
    {name: 'GitHub', url: 'https://github.com/katanazero86/vue-weather-v3'}
];

export default function Footer() {

    const handleLinkClick = targetUrl => {
        if (!targetUrl) return false;
        window.open(targetUrl, '_blank');
    }

    return (
        <footer className={`${classes.footer} row-wrap align-items-center justify-contents-between pa-5`}>
            <section className={`${classes.footerDescription} col-12 col-md-6 my-5`}>
                <p>© 2021 react-memo-app ® All rights reserved.</p>
                <p>Powered by katanazero86</p>
            </section>
            <section className={`${classes.footerLink} col-12 col-md-6 my-5`}>
                {links.map(item => (
                    <span onClick={() => handleLinkClick(item.url)} key={item}>{item.name}</span>
                ))}
            </section>
        </footer>
    )
}
