import type { JSX } from 'react';
import styles from './header.module.css';
import logo from '@/app/assets/images/logo.png';
import avatar from '@/app/assets/images/avatar.png';
import search from '@/app/assets/images/search.png';
import heart from '@/app/assets/images/heart.png';
import cart from '@/app/assets/images/cart.png';

export const Header = (): JSX.Element => {
  return (
      <>
          <div className={`container ${styles.header}`}>
              <section className={styles.leftColumn}>
                  <header className={styles.header}>
                      <div className={styles.logo}>
                          <a href="#"><img src={logo} alt="Stuff logo" width="78" height="32"/></a>
                      </div>
                  </header>
              </section>

              <section className={styles.rightColumn}>
                  <header className={styles.header}>
                      <div className={styles.top}>
                          <div className={styles.user}>
                              <div className={styles.avatar}>
                                  <img src={avatar} alt="avatar" className={styles.avatarPhoto}/>
                              </div>
                              <div className={styles.userName}>Vasiliy Golovko</div>
                          </div>

                          <div className={styles.search}>
                              <img src={search} alt="search" className={styles.searchImg}/>
                              <label>
                                  <input type="text" className={styles.searchInput} name="search"/>
                              </label>
                          </div>

                          <div className={styles.shopIconsContainer}>
                              <img src={heart} alt="heart"/>
                              <div className={styles.shopIcons}><img src={cart} alt="cart"/>
                                  <div className={styles.count}>8</div>
                              </div>
                          </div>
                      </div>
                  </header>
              </section>
          </div>
      </>
  )
};
