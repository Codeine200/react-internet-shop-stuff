import { useSelector } from 'react-redux';
import type { RootState } from '@/app/store';
import { Loader } from '@/shared/ui/loader';

import styles from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

export const Sidebar = () => {
    const { lists, loading, error } = useSelector(
        (state: RootState) => state.categories
    );

    return (
        <section className={`left block ${styles.sidebar}`}>
                <div>
                    <h1 className="uppercase">Categories</h1>
                    {loading ? (
                        <Loader />
                    ) : (
                    <nav className={styles.menuWrapper}>
                        {lists.map((category) => (
                            <NavLink
                                key={category.id}
                                to={`/categories/${category.id}`}
                                className={({ isActive }) =>
                                    isActive
                                        ? `${styles.menuItem} ${styles.active}`
                                        : styles.menuItem
                                }
                            >
                                {category.name}
                            </NavLink>
                        ))}
                    </nav>
                    )}
                </div>

                <div className={styles.menuFooter}>
                    <div>
                        <a href="/help" className={styles.link}>
                            Help
                        </a>
                    </div>

                    <div>
                        <a href="/help" className={styles.link}>
                            Terms & Conditions
                        </a>
                    </div>
                </div>
        </section>
    );
};