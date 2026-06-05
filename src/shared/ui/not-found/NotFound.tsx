import type { JSX } from 'react';
import styles from './NotFound.module.css';
import {memo} from "react";

type NotFoundProps = {
    title?: string;
};

export const NotFound = memo(({title} : NotFoundProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                {title ? title : 'Not Found'}
            </div>
        </div>
    );
});