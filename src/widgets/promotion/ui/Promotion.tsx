import styles from './Promotion.module.css';
import type { PromotionProps } from '../model/types';
import type { promotions } from '../model/promotions';

export const Promotion = ({
                              id,
                              productName,
                              title1,
                              title2,
                              image,
                          }: PromotionProps) => {
    return (
        <div className={styles.promotion} data-id={id}>
            {title1 && (
                <h1 className={styles.title1}>
                    {title1}
                </h1>
            )}

            {title2 && (
                <h2 className={styles.title2}>
                    {title2}
                </h2>
            )}

            <h3 className={styles.product_name}>
                {productName}
            </h3>

            <div className={styles.btn}>
                <button className="actions-btn__btn actions-btn__primary">
                    Shop Now
                </button>
            </div>

            {image && (
                <div className={styles.image}>
                    <img src={image} alt={productName} />
                </div>
            )}
        </div>
    );
};