import type { JSX } from 'react';
import styles from './sidebar.module.css';

export const Sidebar = (): JSX.Element => {
  return (
      <section className={`left block ${styles.sidebar}`}>
          <div>
              <h1 className="uppercase">Categories</h1>
              <nav className={styles.menuWrapper}>
                  <a href="#" className={styles.menuItem}>Computers</a>
                  <a href="#" className={styles.menuItem}>Clothes</a>
                  <a href="#" className={`${styles.menuItem} ${styles.active}`}>Shoes</a>
                  <a href="#" className={styles.menuItem}>Furniture</a>
                  <a href="#" className={styles.menuItem}>Cosmetics</a>
                  <a href="#" className={styles.menuItem}>Travel</a>
                  <a href="#" className={styles.menuItem}>Automotive</a>
              </nav>
          </div>
          <div className={styles.menuFooter}>
              <div><a href="/help" className={styles.link}>Help</a></div>
              <div><a href="/help" className={styles.link}>Terms & Conditions</a></div>
          </div>
      </section>
  );
};
