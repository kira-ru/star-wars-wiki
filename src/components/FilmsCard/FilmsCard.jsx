import React from 'react';
import styles from './filmscard.module.css'

const FilmsCard = () => {
    const films = [
        1,
        2,
        3,
        4
    ]


    return (
        <div className={styles.films}>
            <ul className={styles.list}>
                {films.map(film => (
                    <li>{film}</li>
                ))}
            </ul>
        </div>
    );
};

export default FilmsCard;