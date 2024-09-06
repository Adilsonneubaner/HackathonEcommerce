import styles from './shopcart.module.css'
import Info from '../../components/Info/Info'
import Footer from '../../components/Footer/Footer'
import { ShopcartCard } from '../../components/ShopcartCard'

export function Shopcart() {
  return (
    <div className={styles.container}>
      <Info />
      <strong className={styles.titlePage}>Sacola de compras</strong>
      <div className={styles.content}>
        <div className={styles.shopcartContainer}>
          <ShopcartCard />
          <ShopcartCard />
          <ShopcartCard />
        </div>
        <div className={styles.finishBuyContainer}>
          <div className={styles.findBuyContent}>
            <div className={styles.findBuyQuantity}>
              <span>Quantidade</span>
              <span>1 item</span>
            </div>
            <div className={styles.findBuyShippingCost}>
              <span>Valor do Frete</span>
              <span>R$ 3,90</span>
            </div>
            <div className={styles.findBuyTotal}>
              <span>Valor Total</span>
              <strong>R$ 79,90</strong>
            </div>
            <button className={styles.findBuyButton}>Finalizar compra</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}