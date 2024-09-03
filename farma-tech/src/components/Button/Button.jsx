import styles from './Button.module.css'
const Button = () => {
  return (
    <button className={styles.Button}>
      <i className="bi bi-basket-fill"></i>
      comprar
    </button>
  );
}

export default Button;
