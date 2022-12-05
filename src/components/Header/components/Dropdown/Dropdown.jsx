import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './dropdown.module.css';
import cn from 'classnames'

const Dropdown = ({links, active, setActive}) => {
    return (
        <div
            className={active ? cn(styles.burger, styles.active) : styles.burger}
        >

            <div
                className={styles.catcher}
                onClick={() => setActive(false)}
            />

            <div className={styles.burger__content} onClick={event => event.stopPropagation()}>

                <ul className='list-reset'>
                        {links.map( (link, index) => (
                            <li key={index} onClick={() => setActive(false)} className={styles.link}>
                                <NavLink to={link.href}>{link.text}</NavLink>
                            </li>
                        ))}
                </ul>

            </div>

        </div>
    );
};

export default Dropdown;