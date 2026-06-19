import styles from './Products.module.css'
import {JSX, memo, useMemo, useState} from "react";
import type {ProductsProps} from "../model/type.ts";
import {Link} from "react-router-dom";

export const Products = memo(function Products({ list, perPage, title }: ProductsProps) {
    const [currPage, setCurrPage] = useState(1);
    const countPage = Math.ceil(list.length / perPage);
    const visibleItems = useMemo(() => {
        return list.slice(0, currPage * perPage);
    }, [list, currPage]);

    const showMore = () => {
        setCurrPage(currPage + 1);
    }

  return (
      <div className={`${styles.products}`}>
          <section className={`container block`}>
              <div className={styles.cards}>
                  <h1 className="center">{title}</h1>
                  <div className={styles.wrapper} style={{gridTemplateColumns: `repeat(${perPage}, 1fr)`,
                  }}>
                      {visibleItems.map(product => {
                          return (
                              <div key={product.id} className={styles.item}>
                                  <div>
                                      <div className={styles.imageWrapper}>
                                          <img
                                              className={styles.image}
                                              src={product.imgSrc}
                                              alt="related"
                                          />
                                      </div>
                                      <div className={styles.desc}>
                                          <Link
                                              to={`categories/${product.categoryId}/products/${product.id}`}
                                              rel="noopener noreferrer"
                                              className={styles.name}
                                          >
                                              {product.name}
                                          </Link>
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