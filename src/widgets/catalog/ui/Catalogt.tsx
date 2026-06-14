import type {JSX} from "react";
import {memo, useEffect, useMemo, useState} from "react";
import styles from "./Catalog.module.css";
import type {CatalogProps} from "../model/type.ts";
import {Pagination} from "@/shared/ui/pagination/Pagination";
import {Link, useParams} from "react-router-dom";
import {Loader} from "@/shared/ui/loader";
import {NotFound} from "@/shared/ui/not-found/NotFound";
import {products} from "@/shared/constants/products.ts";

import {ProductFilters} from "@/features/product-filters/ProductFilters";

import {getProducts} from "@/entities/products/model";
import {useAppDispatch, useAppSelector} from "@/app/providers/StoreProvider/config/hooks.ts";

export const Catalog = memo(function Products({ perPage }: CatalogProps) {
    const dispatch = useAppDispatch();

    const { items, isLoading } = useAppSelector(
        state => state.products
    );
    const categories = useAppSelector(state => state.categories.lists);

    const [currPage, setCurrPage] = useState(1);

    const { categoryId } = useParams();
    const [nameFilter, setNameFilter] = useState("");
    const [priceFromFilter, setPriceFromFilter] = useState("");

    const index = Number(categoryId);

    useEffect(() => {
        dispatch(
            getProducts({
                categoryId: index,
                name: nameFilter,
                minPrice: priceFromFilter
                    ? Number(priceFromFilter)
                    : undefined,
            })
        );

        setCurrPage(1);
    }, [dispatch, index, nameFilter, priceFromFilter]);

    const currentItems = useMemo(() => {
        return items.slice(
            (currPage - 1) * perPage,
            currPage * perPage
        );
    }, [items, currPage, perPage]);

    const countPage = useMemo(() => {
        return Math.ceil(items.length / perPage);
    }, [items, perPage]);

    const categoryName = useMemo(
        () => categories.find(category => category.id === index)?.name ?? '',
        [categoryId]
    );

    if (!products[index]) {
        return <NotFound title="Category not found" />
    }

    if (isLoading) {
        return (
            <div className={`${styles.products}`}>
                <section className={`container block`}>
                    <Loader />
                </section>
            </div>
        );
    }

    return (
        <div className={`${styles.products}`}>
            <section className={`container block`}>
                <div className={styles.cards}>
                    <h1 className="center">{categoryName}</h1>
                    <ProductFilters  name={nameFilter}
                                     priceFrom={priceFromFilter}
                                     onNameChange={setNameFilter}
                                     onPriceFromChange={setPriceFromFilter}
                    />
                    <div className={styles.wrapper} style={{gridTemplateColumns: `repeat(${perPage}, 1fr)`,
                    }}>
                        {currentItems.map(product => {
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
                                            <a className={styles.name}></a>
                                            <Link
                                                to={`/products/${product.id}`}
                                                target="_blank"
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
                    <Pagination currPage={currPage} totalSizePage={countPage} onChange={(page) => setCurrPage(page)} />
                </div>
            </section>
        </div>
    );
});
