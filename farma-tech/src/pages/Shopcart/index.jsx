import styles from "./shopcart.module.css";
import Info from "../../components/Info/Info";
import Footer from "../../components/Footer/Footer";
import { ShopcartCard } from "../../components/ShopcartCard";
import { useState } from "react";

export function Shopcart() {
  const [quantity, setQuantity] = useState(1);
  const [productPrince] = useState(10.99);
  const shippingCost = 3.9;
  const totalPrice = (productPrince * quantity + shippingCost).toFixed(2);

  function handleIncreaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function handleDecreaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity - 1);
  }

  return (
    <div className={styles.container}>
      <Info />
      <strong className={styles.titlePage}>Sacola de compras</strong>
      <div className={styles.content}>
        <div className={styles.shopcartContainer}>
          <ShopcartCard
            quantity={quantity}
            handleIncreaseQuantity={handleIncreaseQuantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
          />
        </div>
        <div className={styles.finishBuyContainer}>
          <div className={styles.findBuyContent}>
            <div className={styles.findBuyQuantity}>
              <span>Quantidade</span>
              <span>
                {quantity} {quantity === 1 ? "item" : "itens"}
              </span>
            </div>
            <div className={styles.findBuyShippingCost}>
              <span>Valor do Frete</span>
              <span>R$ {shippingCost.toFixed(2)}</span>
            </div>
            <div className={styles.findBuyTotal}>
              <span>Valor Total</span>
              <strong>R$ {totalPrice}</strong>
            </div>
            <button className={styles.findBuyButton}>Finalizar compra</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
