import type { JSX } from 'react';
import styles from './NotFoundPage.module.css';
import not_found from '@/app/assets/images/404.svg';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <img src={not_found} alt="not found"/>
            <h1 className={styles.title}>Oops! Page not found</h1>
            <button className="actions-btn__btn actions-btn__primary" onClick={() => navigate('/')}>Go Home</button>
        </div>
    );
};
