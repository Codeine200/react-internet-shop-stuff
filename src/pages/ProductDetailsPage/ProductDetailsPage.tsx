import type { JSX } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./ProductDetailsPage.module.css";
import type { Product } from "@/entities/products/model/type";
import { Loader } from "@/shared/ui/loader";
import {products} from "@/shared/constants/products.ts";
import {NotFound} from "@/shared/ui/not-found/NotFound";

export const ProductDetailsPage = (): JSX.Element => {
    const { productId } = useParams();

    const [product, setProduct] = useState<Product | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        const timer = setTimeout(() => {
            const foundProduct = products
                .flat()
                .find((item) => item.id === Number(productId));

            setProduct(foundProduct ?? null);
            setIsLoading(false);
        }, 200);

        return () => clearTimeout(timer);
    }, [productId]);

    if (isLoading) {
        return <Loader />;
    }

    if (!product) {
        return <NotFound title="Product not found" />
    }

    return (
        <div className={styles.itemContainer}>
            <div className={styles.imageContainer}>
                <div className={styles.mainImage}>
                    <img
                        src={product.imgSrc}
                        alt={product.name}
                    />
                </div>
            </div>

            <div className={styles.itemDetailContainer}>
                <section>
                    <h4>{product.name}</h4>

                    <div className={styles.price}>
                        ${product.price}
                    </div>

                    <div className={styles.itemParamsContainer}>
                        <div className={styles.itemParamsWrapper}>
                            <div className={styles.paramTitle}>
                                Type:
                            </div>

                            <div className={styles.paramValue}>
                                {product.type}
                            </div>
                        </div>
                    </div>

                    <div className={styles.description}>
                        {product.description}
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
                        {product.purchasedCount} people purchased
                    </div>

                    <div>
                        Find in a store
                    </div>
                </footer>
            </div>
        </div>
    );
};