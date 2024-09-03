import styles from './Button.module.css'
import icon from '../../assets/img/icon-cart.png'
const Button = () => {
  return (
    <button className={styles.Button}>
      <img src={icon} alt="" className={styles.Icon}/>
      comprar
    </button>
  );
}

export default Button;
