import styles from "./Pagination.module.css";

export type Pageable = {
    currPage: number;
    totalSizePage: number;
    onChange: (page: number) => void;
}

const getPages = (currPage: number, total: number, delta: number = 2) => {
    let from = Math.max(1, currPage - delta);
    const rest = (currPage - (delta + 1) < 0) ? Math.abs(currPage - (delta + 1)) : 0;
    let to = Math.min(currPage + delta + rest, total);
    if (currPage + delta > total) {
        const rest2 = Math.abs(total - (currPage + delta));
        from = Math.max(1, from - rest2);
        to = total;
    }

    const range: number[] = [];

    for (let i = from; i <= to; i++) {
        range.push(i);
    }

    return range;
};

export const Pagination = ({currPage, totalSizePage, onChange}: Pageable) => {
    const pages = getPages(currPage, totalSizePage);

    return (
        <div className={styles.pagination}>

            {currPage === 1
                ? <div className={`${styles.prev} ${styles.inactive}`}>Prev</div>
                : <button className={styles.prev} onClick={() => {onChange(currPage - 1);}}>Prev</button>
            }

            {pages.map((page) => (
                <button
                    key={page}
                    className={
                        page === currPage
                            ? `${styles.page} ${styles.current}`
                            : styles.page
                    }
                    onClick={() => onChange(page)}
                >
                    {page}
                </button>
            ))}

            {currPage === totalSizePage || totalSizePage == 0
                ? <div className={`${styles.next} ${styles.inactive}`}>Next</div>
                : <button className={styles.next} onClick={() => {
                    onChange(currPage + 1);
                  }}>Next</button>
            }

        </div>
    );
}