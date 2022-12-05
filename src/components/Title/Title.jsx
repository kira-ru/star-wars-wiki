import React from 'react';
import styles from './title.module.css'
import cn from "classnames";

const Title = ({children, classes, level=2}) => {
    const Title = `h${level}`

    return (
        <Title className={cn(styles.title, classes)}>
            {children}
        </Title>
    );
};

export default Title;