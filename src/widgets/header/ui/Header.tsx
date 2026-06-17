import type { JSX } from 'react';
import styles from './Header.module.css';
import logo from '@/app/assets/images/logo.png';

import heart from '@/app/assets/images/heart.png';
import cart from '@/app/assets/images/cart.png';
import {memo} from "react";
import {Link} from "react-router-dom";
import {Search} from "@/features/search/Search";
import {UserProfile} from "../../../entities/users/ui/UserProfile.tsx";

const HeaderComponent = (): JSX.Element => {

  return (
      <>
          <div className={`container ${styles.header}`}>
              <section className={styles.leftColumn}>
                  <header className={styles.header}>
                      <div className={styles.logo}>
                          <Link to="/">
                              <img src={logo} alt="Stuff logo" width="78" height="32"/>
                          </Link>
                      </div>
                  </header>
              </section>

              <section className={styles.rightColumn}>
                  <header className={styles.header}>
                      <div className={styles.top}>
                          <UserProfile />
                          <Search />
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

export const Header = memo(HeaderComponent);