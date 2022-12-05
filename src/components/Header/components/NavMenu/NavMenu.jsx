import React from 'react';
import cn from "classnames";
import styles from "../../header.module.css";
import MenuLink from "../../../UI/MenuLink/MenuLink";

const NavMenu = ({links}) => {
    return (
        <nav className={cn('list-reset', styles.nav_menu)}>

            {links.map((item, index) => (
                <MenuLink
                    key={index}
                    classes={styles.menu__item}
                    href={item.href}
                >
                    {item.text}
                </MenuLink>
            ))}

        </nav>
    );
};

export default NavMenu;