import React from 'react';
import styles from './grid.module.css'
import cn from 'classnames'

const Grid = ({classes, children}) => {
    return (
        <div className={cn(styles.grid, classes)}>
            {children}
        </div>
    );
};

export default Grid;