import React from 'react';
import cn from 'classnames'
import styles from './pagelink.module.css'
import {NavLink} from "react-router-dom";

const PageLink = ({page, currentPage, classes}) => {

    return (
        <NavLink
            className={() =>
                currentPage == page
                    ? cn(styles.page, styles.active, classes)
                    : cn(styles.page, classes)}
            to={`?page=${page}`}
            end
        >
            {page}
        </NavLink>
    );
};

export default PageLink;