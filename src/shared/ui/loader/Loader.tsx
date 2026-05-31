import styles from './Loader.module.css';
import loader from '@/app/assets/images/loader.svg';

export const Loader = () => {
  return (
      <div className={styles.loader}>
          <div className={styles.item}>
              <img src={loader} alt="loader" />
          </div>
      </div>
  );
};