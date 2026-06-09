import type {JSX} from "react";
import styles from "./ProductDetailsPage.module.css";

export const ProductDetailsPage = () => {
  return (
      <div className={styles.itemContainer}>
          <div className={styles.imageContainer}>
              <div className={styles.mainImage}>
                  <img src="/images/img-item-main.png" alt="item"/>
              </div>

              <div className={styles.imageListContainer}>
                  <div className={styles.imageItem}>
                      <img src="/images/img-item.png" alt="item"/>
                  </div>

                  <div className={styles.imageItem}>
                      <img src="/images/img-item.png" alt="item"/>
                  </div>

                  <div className={styles.imageItem}>
                      <img src="/images/img-item.png" alt="item"/>
                  </div>

                  <div className={styles.imageItem}>
                      <img src="/images/img-item.png" alt="item"/>
                  </div>
              </div>
          </div>

          <div className={styles.itemDetailContainer}>
              <section>
                  <h4>Bouncing sneaker Hermès</h4>

                  <div className={styles.price}>
                      599$
                  </div>

                  <div className={styles.itemParamsContainer}>
                      <div className={styles.itemParamsWrapper}>
                          <div className={styles.paramTitle}>
                              Color:
                          </div>

                          <div className={styles.paramValue}>
                              Blanc
                          </div>
                      </div>

                      <div className={styles.itemParamsWrapper}>
                          <div className={styles.paramTitle}>
                              Sizes:
                          </div>

                          <div className={styles.sizes}>
                              <div className={styles.sizeItem}>4.5</div>

                              <div className={`${styles.sizeItem} ${styles.currentSize}`}>
                                  5
                              </div>

                              <div className={styles.sizeItem}>5.5</div>
                          </div>
                      </div>
                  </div>

                  <div className={styles.description}>
                      Sneaker in air mesh and suede goatskin.
                      <br/>
                      Light sole with contrasting design for a versatile and modern look.
                  </div>

                  <div className={styles.actions}>
                      <button className="actions-btn__btn actions-btn__primary">
                          Add to cart
                      </button>

                      <button className="actions-btn__btn actions-btn__favorite">
                          Add to favorites
                      </button>
                  </div>
              </section>

              <footer className={styles.itemFooter}>
                  <div>
                      19 people purchased
                  </div>

                  <div>
                      Find in a store
                  </div>
              </footer>
          </div>
      </div>
  );
}