import React from 'react';
import styles from './loader.module.css'

const Loader = () => {
    return (
        <div className={styles.content}>
            <div className={styles.planet}>
                <div className={styles.ring}></div>
                <div className={styles.coverRing}></div>
                <div className={styles.spots}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>
            </div>
            <p>loading</p>
        </div>
    );
};

export default Loader;