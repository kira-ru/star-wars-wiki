import React, {useMemo} from 'react';
import {Link} from "react-router-dom";
import {createPageList, getTotalPages} from "../../helpers";
import darkNext from './assets/dark-next.png'
import prevNext from './assets/dark-prev.png'
import styles from './paginator.module.css'
import PageLink from "../UI/PageLink/PageLink";
import cn from 'classnames'

const Paginator = ({next, prev, total, currentPage}) => {
    const totalPages = getTotalPages(total)
    const pageList = useMemo( () => createPageList(totalPages), [totalPages] )


    return (
        <div className={styles.paginator}>
            <Link  to={`?page=${+currentPage-1}`}>
                <button className={styles.btn} disabled={!prev} >
                    <img src={prevNext} alt="previous page"/>
                </button>
            </Link>

            <ul className={cn(styles.pages, 'list-reset')}>
                {pageList.map(page => (
                    <PageLink key={page} currentPage={currentPage} page={page} classes={styles.pageLink}/>
                ))}
            </ul>

            <Link  to={`?page=${+currentPage+1}`}>
                <button className={styles.btn} disabled={!next} >
                    <img src={darkNext} alt="next page"/>
                </button>
            </Link>

        </div>
    );
};

export default React.memo(Paginator);