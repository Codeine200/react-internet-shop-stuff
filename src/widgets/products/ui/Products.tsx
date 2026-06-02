import styles from './Products.module.css'
import {JSX, memo, useMemo, useState} from "react";
import type {ProductsProps} from "../model/type.ts";

const PER_PAGE = 5;

export const Products = memo(function Products({ lists }: ProductsProps) {
    const [currPage, setCurrPage] = useState(1);
    const countPage = Math.ceil(lists.length / PER_PAGE);
    const visibleItems = useMemo(() => {
        return lists.slice(0, currPage * PER_PAGE);
    }, [lists, currPage]);

    const showMore = () => {
        setCurrPage(currPage + 1);
    }

  return (
      <div className={`${styles.products}`}>
          <section className={`container block`}>
              <div className={styles.cards}>
                  <h1 className="center">Related products</h1>
                  <div className={styles.wrapper}>
                      {visibleItems.map(product => {
                          return (
                              <div key={product.id} className={styles.item}>
                                  <div>
                                      <div className={styles.imageWrapper}>
                                          <img
                                              className={styles.image}
                                              src={`/images/shoes/${product.id}.png`}
                                              alt="related"
                                          />
                                      </div>
                                      <div className={styles.desc}>
                                          <h2>{product.name}</h2>
                                          <h5>{product.type}</h5>
                                      </div>
                                  </div>

                                  <footer className={styles.footer}>
                                      <div className={styles.priceWrapper}>
                                          <div className={styles.price}>{product.price}$</div>
                                          <div className={styles.discount}>{product.discount ? `${Math.round(product.price * (1 - product.discount))}$` : ''}</div>
                                      </div>
                                      <div className={styles.countPeople}>
                                              {product.purchasedCount} people purchased
                                      </div>
                                  </footer>
                              </div>
                          )
                      })}

                  </div>

                  {currPage < countPage && (
                      <div className={styles.moreContainer}>
                          <button className="actions-btn__btn actions-btn__primary" onClick={showMore}>See more</button>
                      </div>
                  )}

              </div>
          </section>
      </div>
  );
});