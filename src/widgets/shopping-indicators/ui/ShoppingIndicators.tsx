import heart from '@/app/assets/images/heart.png';
import cart from '@/app/assets/images/cart.png';
import styles from "./ShoppingIndicators.module.css";
import { useAppSelector } from '@/app/providers/StoreProvider/config/hooks';
import { selectFavoriteProductIds } from '@/features/favorites/model/selectors';
import { getIsAuthenticated } from "@/features/auth/model/selectors";

export const ShoppingIndicators = () => {
  const user = useAppSelector(state => state.auth.user);

  const favoriteProductIds = useAppSelector(state =>
      user ? selectFavoriteProductIds(state, user.id) : [],
  );

  const isAuthenticated = useAppSelector(getIsAuthenticated);  

  if (!isAuthenticated) { 
    return;
  }
  
  return (
        <div className={styles.shopIconsContainer}>
          <div className={styles.shopIcons}>
              <img src={heart} alt="Favorites" />
          <div className={styles.count}>{ favoriteProductIds.length }</div>
          </div>        

            <div className={styles.shopIcons}>
                <img src={cart} alt="Shopping cart" />
                <div className={styles.count}>8</div>
            </div>
        </div>
    );
};
