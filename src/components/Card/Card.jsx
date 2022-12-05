import React from 'react';
import styles from './card.module.css'
import {Link} from "react-router-dom";

const Card = ({person, isPersonalPage = false}) => {
    const Card = isPersonalPage ? 'div' : Link

    return (
        <Card
            to={`${person.id}`}
            relative='/characters'
            className={styles.card}
        >

            <img className={styles.photo} src={person.image} alt={person.name}/>

            <div className={styles.name}>
                <p>{person.name}</p>
            </div>
        </Card>
    );
};

export default Card;