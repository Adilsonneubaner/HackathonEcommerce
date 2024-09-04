import styles from './Title.module.css'
// eslint-disable-next-line react/prop-types
const Title = ({nome}) => {
  return (
    <h2 className={styles.Title}>
      {nome}
    </h2>
  );
}

export default Title;
