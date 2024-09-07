/* eslint-disable react/prop-types */
import styles from "./shopcartCard.module.css";
import remedioImage from "../../assets/img/remedio.png";

export function ShopcartCard({
  quantity,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
}) {
  return (
    <div className={styles.shopcartContent}>
      <div className={styles.shopcartInfo}>
        <img
          className={styles.shopcartImage}
          src={remedioImage}
          alt="remedio"
        />
        <div className={styles.shopcartDetails}>
          <span className={styles.shopcartName}>
            Cartela com 4 comprimidos benegripe
          </span>
          <span className={styles.shopcartPrice}>R$ 10,90</span>
          <div className={styles.quantityRemove}>
            <div className={styles.quantity}>
              <button
                onClick={handleDecreaseQuantity}
                disabled={quantity === 1}
                className={styles.buttonQuantity}
              >
                -
              </button>
              <span className={styles.quantityText}>{quantity}</span>
              <button
                onClick={handleIncreaseQuantity}
                className={styles.buttonQuantity}
              >
                +
              </button>
            </div>
            <button className={styles.buttonRemove}>Remover</button>
          </div>
        </div>
      </div>
    </div>
  );
}
