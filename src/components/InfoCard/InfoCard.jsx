import React from 'react';
import styles from './infocard.module.css'
import Title from "../Title/Title";
import cn from 'classnames'
import Image from "../Image/Image";

const InfoCard = ({items, type, classes}) => {
    if (!items) {
        return <h1>Loading...</h1>
    }

    return (
        <div className={cn(styles.info_card, classes)}>
            <Title classes={styles.title} level={3}>Related {type}</Title>
            <ul className={cn(styles.list, 'list-reset')}>

                {items.length
                    ? items.map(item => (
                    <li className={styles.item} key={item.id}>
                        <Image className={styles.item_image} src={item.image} alt={item.name}/>
                        {/*<img className={styles.item_image} src={item.image} alt={item.name}/>*/}
                        <span className={styles.item_name}>{item.name}</span>
                    </li>))

                    : <div>There is no related {type.toLowerCase()}</div>
                }

            </ul>
        </div>
    );
};

export default InfoCard;