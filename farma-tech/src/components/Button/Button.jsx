import styles from './Button.module.css'

// eslint-disable-next-line react/prop-types
const Button = ({children,icon,onClick}) => {
  return (
    <button onClick={onClick} className={styles.Button}>
      <img src={icon} alt=""  className={styles.Icon}/>
     {children}
    </button>
  );
}

export default Button;
