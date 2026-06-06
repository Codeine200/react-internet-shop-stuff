import type {JSX} from "react";
import {memo, useEffect, useState} from "react";
import styles from "./Catalog.module.css";
import type {CatalogProps} from "../model/type.ts";
import {Pagination} from "@/shared/ui/pagination/Pagination.tsx";
import {useParams} from "react-router-dom";
import {Loader} from "@/shared/ui/loader";
import {NotFound} from "@/shared/ui/not-found/NotFound.tsx";
import {products} from "@/shared/constants/products.ts";
import type {Product} from "@/entities/products/model/type.ts";

export const Catalog = memo(function Products({ perPage }: CatalogProps) {
    const [isLoadingItems, setIsLoadingItems] = useState(true);
    const [currPage, setCurrPage] = useState(1);
    const [items, setItems] = useState<Product[]>([]);
    const { categoryId } = useParams<{ categoryId: number }>();

    const index = Number(categoryId);
    const countPage = Math.ceil(items.length / perPage);

    useEffect(() => {
        setIsLoadingItems(true);

        const timer = setTimeout(() => {
            setItems(products[index] ?? []);
            setIsLoadingItems(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [categoryId]);

    if (!products[index]) {
        return <NotFound title="Category not found" />
    }

    if (isLoadingItems) {
        return <Loader />;
    }

    return (
        <div className={`${styles.products}`}>
            <section className={`container block`}>
                <div className={styles.cards}>
                    <h1 className="center">*******</h1>
                    <div className={styles.wrapper} style={{gridTemplateColumns: `repeat(${perPage}, 1fr)`,
                    }}>
                        {items.map(product => {
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

            <Pagination currPage={currPage} totalSizePage={countPage} onChange={(page) => setCurrPage(page)} />
        </div>
    );
});
