import styles from './ProductFilters.module.css';
import {useAppDispatch} from "@/app/providers/StoreProvider/config/hooks.ts";
import {useAppSelector} from "@/app/providers/StoreProvider/config/hooks.ts";
import {setMinPrice, setName} from "@/entities/products/model/productsSlice.ts";

export const ProductFilters = () => {
    const dispatch = useAppDispatch();

    const { name, minPrice } = useAppSelector(
        state => state.products
    );

    return (
      <div className={styles.filters}>
        <div className={styles.inputWrapper}>
          <input
              value={name}
              className={styles.input}
              type="text"
              placeholder="Product name"
              onChange={(e) =>  dispatch(setName(e.target.value))}
          />
        </div>
        <div className={styles.inputWrapper}>
          <input
              className={styles.input}
              type="text"
              placeholder="Price from"
              value={minPrice ?? ""}
              onChange={(e) => {
                  let val = e.target.value;
                  val = val.replace(/^0+/, "");
                  if (/^\d*$/.test(val)) {
                      dispatch(setMinPrice(Number(e.target.value)));
                  }
              }}
          />
        </div>
      </div>
    );
}