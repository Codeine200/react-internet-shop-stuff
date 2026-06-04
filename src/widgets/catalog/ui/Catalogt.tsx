import type {JSX} from "react";
import {memo, useMemo, useState} from "react";
import styles from "./Catalog.module.css";
import type {CatalogProps} from "../model/type.ts";

export const Catalog = memo(function Products({ list, perPage, title }: CatalogProps) {
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


                </div>
            </section>
        </div>
    );
});
