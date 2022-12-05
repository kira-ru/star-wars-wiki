import React from 'react';
import styles from './error.module.css'

const Error = () => {
    return (
        <div className={styles.error}>
            <div className={styles.box}></div>
            <h3>Data error</h3>
            <p>An error occurred while receiving <span>data</span></p>
            <p>I suggest come back later</p>
        </div>
    );
};

export default Error;