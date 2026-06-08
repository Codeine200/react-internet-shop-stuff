import styles from './ProductFilters.module.css';
import {useState} from "react";

type ProductFiltersProps = {
    name: string;
    priceFrom: string;
    onNameChange: (value: string) => void;
    onPriceFromChange: (value: string) => void;
};

export const ProductFilters = ({
        name,
        priceFrom,
        onNameChange,
        onPriceFromChange,
  }: ProductFiltersProps) => {

    return (
      <div className={styles.filters}>
        <div className={styles.inputWrapper}>
          <input
              value={name}
              className={styles.input}
              type="text"
              placeholder="Product name"
              onChange={(e) => onNameChange(e.target.value)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <input
              className={styles.input}
              type="text"
              placeholder="Price from"
              value={priceFrom}
              onChange={(e) => {
                  let val = e.target.value;
                  val = val.replace(/^0+/, "");
                  if (/^\d*$/.test(val)) {
                      onPriceFromChange(val);
                  }
              }}
          />
        </div>
      </div>
    );
}