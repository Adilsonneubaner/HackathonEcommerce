import styles from './shopcart.module.css'
import Info from '../../components/Info/Info'
import Footer from '../../components/Footer/Footer'
import remedioImage from '../../assets/img/remedio.png' 


export function Shopcart() {
  return (
    <div className={styles.container}>
      <Info />
      <strong className={styles.titlePage}>Sacola de compras</strong>
      <div className={styles.content}>
        <div className={styles.shopcartContainer}>
          <div className={styles.shopcartContent}>
            <div className={styles.shopcartInfo}>
              <img className={styles.shopcartImage} src={remedioImage} alt='remedio' />
              <div className={styles.shopcartDetails}>
                <span className={styles.shopcartName}>Cartela com 4 comprimidos benegripe</span>
                <span className={styles.shopcartPrice}>R$ 10,90</span>
                <div className={styles.quantityRemove}>
                  <div className={styles.quantity}>
                    <button className={styles.buttonQuantity}>-</button>
                    <span className={styles.quantityText}>1</span>
                    <button className={styles.buttonQuantity}>+</button>
                  </div>
                  <button className={styles.buttonRemove}>Remover</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.shopcartContent}>
            <div className={styles.shopcartInfo}>
              <img className={styles.shopcartImage} src={remedioImage} alt='remedio' />
              <div className={styles.shopcartDetails}>
                <span className={styles.shopcartName}>Cartela com 4 comprimidos benegripe</span>
                <span className={styles.shopcartPrice}>R$ 10,90</span>
                <div className={styles.quantityRemove}>
                  <div className={styles.quantity}>
                    <button className={styles.buttonQuantity}>-</button>
                    <span className={styles.quantityText}>1</span>
                    <button className={styles.buttonQuantity}>+</button>
                  </div>
                  <button className={styles.buttonRemove}>Remover</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.shopcartContent}>
            <div className={styles.shopcartInfo}>
              <img className={styles.shopcartImage} src={remedioImage} alt='remedio' />
              <div className={styles.shopcartDetails}>
                <span className={styles.shopcartName}>Cartela com 4 comprimidos benegripe</span>
                <span className={styles.shopcartPrice}>R$ 10,90</span>
                <div className={styles.quantityRemove}>
                  <div className={styles.quantity}>
                    <button className={styles.buttonQuantity}>-</button>
                    <span className={styles.quantityText}>1</span>
                    <button className={styles.buttonQuantity}>+</button>
                  </div>
                  <button className={styles.buttonRemove}>Remover</button>
                </div>
              </div>
            </div>
          </div>
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