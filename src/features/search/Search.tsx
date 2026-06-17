import styles from './Search.module.css';
import {useAppDispatch} from "@/app/providers/StoreProvider/config/hooks";
import { setSearch } from '@/entities/products/model/productsSlice';
import {useAppSelector} from "@/app/providers/StoreProvider/config/hooks";
import searchImage from '@/app/assets/images/search.png';
import {JSX, memo} from "react";

export const SearchComponent = (): JSX.Element => {
  const search = useAppSelector(
      state => state.products.search
  );
  const dispatch = useAppDispatch();

  return (
      <div className={styles.search}>
        <img src={searchImage} alt="search" className={styles.searchImg}/>
        <label>
          <input type="text" className={styles.searchInput} name="search"
                 value={search}
                 onChange={(e) =>
                     dispatch(setSearch(e.target.value))
                 }
          />
        </label>
      </div>
  );
}

export const Search = memo(SearchComponent);