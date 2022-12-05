import React from 'react';
import styles from './description.module.css'
import cn from 'classnames'
import Title from "../Title/Title";

const Description = ({person}) => {
    const fields = [
        {param: 'Height', value: person.height},
        {param: 'Mass', value: person.mass},
        {param: 'Hair color', value: person.hair_color},
        {param: 'Skin color', value: person.skin_color},
        {param: 'Eye color', value: person.eye_color},
        {param: 'Birth year', value: person.birth_year},
        {param: 'Gender', value: person.gender},
        {param: 'Homeworld', value: 'link'},
        {param: 'Species', value: 'link'},
    ]


    return (
        <div className={styles.desc}>
            <Title classes={styles.title} level={3}>Personal info</Title>
            <ul className={cn(styles.list, 'list-reset')}>

                {fields.map(field => (
                    <li key={field.param} className={styles.item}>
                        <span className={styles.item_name}>{field.param}: </span>
                        <span className={styles.item_value}> {field.value}</span>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default Description;

