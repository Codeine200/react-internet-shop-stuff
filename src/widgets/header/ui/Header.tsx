import styles from './Header.module.css';
import logo from '@/app/assets/images/logo.png';

import {memo} from "react";
import {Link} from "react-router-dom";
import {Search} from "@/features/search";
import {UserProfile} from "@/widgets/user-profile";
import { ShoppingIndicators } from '@/widgets/shopping-indicators';

const HeaderComponent = () => {

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
                          <ShoppingIndicators />
                      </div>
                  </header>
              </section>
          </div>
      </>
  )
};

export const Header = memo(HeaderComponent);