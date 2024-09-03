import styles from './Info.module.css';
import icon1 from '../../assets/img/icon1.png'
import icon2 from '../../assets/img/icon2.png'
import icon3 from '../../assets/img/icon3.png'
import icon4 from '../../assets/img/icon4.png'
import icon5 from '../../assets/img/icon5.png'
const Info = () => {
  return (
    <div className={styles.Info}>
      <div className={styles.Details}>
        <img src={icon1} alt="" />
        <div className={styles.Text}>
          <p>Frete Gratis</p>
          <p>Acima de R$130,00</p>
        </div>
      </div>
      <div className={styles.Details}>
        <img src={icon2} alt="" />
        <div className={styles.Text}>
          <p>Conpre e retire na loja</p>
          <p>em todas as nossa loja</p>
        </div>
      </div>
      <div className={styles.Details}>
        <img src={icon3} alt="" />
        <div className={styles.Text}>
          <p>Compre em até 4x sem juros</p>
          <p>No cartão de credito</p>
        </div>
      </div >
      <div className={styles.Details}>
        <img src={icon4} alt="" />
        <div className={styles.Text}>
          <p>Entrega expressa</p>
          <p>Veja área de atuação</p>
        </div>
      </div>
      <div className={styles.Details}>
        <img src={icon5} alt="" />
        <div className={styles.Text}>
          <p>Televenda</p>
          <p>(55)9999-9999</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
