import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './menulink.module.css';
import cn from 'classnames'

const MenuLink = ({href, classes, children}) => {
    return (
        <NavLink
            className={({ isActive }) => isActive
                ? cn(styles.link, styles.active, classes)
                : cn(styles.link, classes) }
            to={href}
        >
            <span>
                <span>
                  <span>{children}</span>
                </span>
            </span>
        </NavLink>
    );
};

export default MenuLink;