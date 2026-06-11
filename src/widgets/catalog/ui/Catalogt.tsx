import type {JSX} from "react";
import {memo, useEffect, useMemo, useState} from "react";
import styles from "./Catalog.module.css";
import type {CatalogProps} from "../model/type.ts";
import {Pagination} from "@/shared/ui/pagination/Pagination";
import {Link, useParams} from "react-router-dom";
import {Loader} from "@/shared/ui/loader";
import {NotFound} from "@/shared/ui/not-found/NotFound";
import {products} from "@/shared/constants/products.ts";
import type {Product} from "@/entities/products/model/type.ts";
import {categories} from "@/shared/constants/categories.ts";
import {ProductFilters} from "@/features/product-filters/ProductFilters";

export const Catalog = memo(function Products({ perPage }: CatalogProps) {
    const [isLoadingItems, setIsLoadingItems] = useState(true);
    const [currPage, setCurrPage] = useState(1);
    const [items, setItems] = useState<Product[]>([]);
    const {categoryId} = useParams<{ categoryId: number }>();
    const [nameFilter, setNameFilter] = useState("");
    const [priceFromFilter, setPriceFromFilter] = useState("");

    const index = Number(categoryId);

    useEffect(() => {
        setIsLoadingItems(true);

        const timer = setTimeout(() => {
            setItems(products[index] ?? []);
            setCurrPage(1);
            setIsLoadingItems(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [categoryId]);

    useEffect(() => {
        setCurrPage(1);
    }, [nameFilter, priceFromFilter]);

    const filteredItems = useMemo(() => {
        return items.filter(({ name, price }: Product) => {
            const isName =
                nameFilter.trim().length > 0
                    ? name.toLowerCase().includes(nameFilter.toLowerCase())
                    : true;

            const isPrice =
                priceFromFilter.length > 0
                    ? price >= Number(priceFromFilter)
                    : true;

            return isName && isPrice;
        });
    }, [items, nameFilter, priceFromFilter]);

    const currentItems = useMemo(() => {
        return filteredItems.slice(
            (currPage - 1) * perPage,
            currPage * perPage
        );
    }, [filteredItems, currPage, perPage]);

    const countPage = useMemo(() => {
        return Math.ceil(filteredItems.length / perPage);
    }, [filteredItems, perPage]);

    const categoryName = useMemo(
        () => categories.find(category => category.id === index)?.name ?? '',
        [categoryId]
    );

    if (!products[index]) {
        return <NotFound title="Category not found" />
    }

    if (isLoadingItems) {
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
