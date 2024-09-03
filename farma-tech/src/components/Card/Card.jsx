import styles from './Card.module.css';
import capa from '../../assets/img/image-14.png'
import Button from '../Button/Button';
const Card = () => {
  return (
    <div className={styles.Card}>
      <span className={styles.Descont}>-10%</span>
       <div className={styles.Capa}>
        <img  src={capa} alt="" />
       </div>
       <div className={styles.Controls}>
         <p className={styles.Product}>Cime Gripe</p>
         <p><span className={styles.Desc}>19.90</span> <span className={styles.Price}>R$ 15.99</span></p>
       <div className={styles.Buttons}>
         <span >-</span>
         <input
          className={styles.Qtd} 
         type="text" name="qtd" id="qtd" value='1' />
         <span>+</span>
          <Button/>
       </div>
       </div>
       
    </div>
  );
}

export default Card;
