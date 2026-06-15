import type { JSX } from 'react';
import styles from './Header.module.css';
import logo from '@/app/assets/images/logo.png';
import avatar from '@/app/assets/images/avatar.png';
import searchImage from '@/app/assets/images/search.png';
import heart from '@/app/assets/images/heart.png';
import cart from '@/app/assets/images/cart.png';
import {memo, useEffect, useState} from "react";
import {useDebounce} from "@/shared/lib/hooks/useDebounce.ts";
import {useAppDispatch} from "@/app/providers/StoreProvider/config/hooks.ts";
import { setSearch } from '@/entities/products/model/productsSlice';
import {getProducts} from "@/entities/products/model";
import {useAppSelector} from "../../../app/providers/StoreProvider/config/hooks.ts";

const HeaderComponent = (): JSX.Element => {
    const search = useAppSelector(
        state => state.products.search
    );
    const debouncedSearch = useDebounce(search, 500);
    const dispatch = useAppDispatch();+

    useEffect(() => {
        dispatch(
            getProducts({
                search: debouncedSearch,
            })
        );
    }, [debouncedSearch]);

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
                              <img src={searchImage} alt="search" className={styles.searchImg}/>
                              <label>
                                  <input type="text" className={styles.searchInput} name="search"
                                         value={search}
                                         onChange={(e) =>
                                             dispatch(setSearch(e.target.value))
                                         }
                                  />
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

export const Header = memo(HeaderComponent);