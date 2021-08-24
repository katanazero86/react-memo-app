import React from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import classes from './Header.module.scss';

const navLinks = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'About',
        url: '/about',
    }
];

export default function Header() {

    const history = useHistory();
    const routerLocation = useLocation();

    const handleNavLinkClick = (e, targetUrl) => {
        e.preventDefault();

        if (routerLocation.pathname === targetUrl) {
            location.reload();
        } else {
            history.push(targetUrl);
        }
    }

    return (
        <header className={`${classes.header} row align-items-center justify-contents-between pa-5`}>
            <div className={`${classes.headerTitle}`}>
                <p>react-memo-app</p>
            </div>
            <div className={`${classes.headerNav}`}>
                {navLinks.map(link => (
                    <Link to={link.url} onClick={e => handleNavLinkClick(e, link.url)} key={link.url}>{link.name}</Link>
                ))}
            </div>
        </header>
    )
}
