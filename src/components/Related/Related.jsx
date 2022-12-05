import React from 'react';
import cn from "classnames";
import styles from './related.module.css'
import InfoCard from "../InfoCard/InfoCard";


const Related = (props) => {
    const relatedItems = Object.entries(props)

    return (
        <div className={styles.related}>
            {
                relatedItems.map((item, index) => <InfoCard key={index} items={item[1]} type={item[0]}/>)
            }
        </div>
    );
};

export default Related;

/// order of related items:
//         starships,
//         vehicles,
//         pilots,
//         species,
//         people,
//         planets,
//         residents,
