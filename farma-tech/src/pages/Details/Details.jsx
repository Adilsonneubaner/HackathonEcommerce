import { useLocation } from 'react-router-dom';
import styles from './Details.module.css'
import Button from '../../components/Button/Button';
import icon from '../../assets/img/carrinho.png'
const Details = () => {
  const location = useLocation();
  const product = location.state;  // Captura todo o objeto state passado pelo navigate

  // Verifica se o produto foi recebido
  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  const { id, name, price, img, description } = product;

  return (
    <div className={styles.Details}>
      <h1>Detalhes do Produto</h1>
      <div id={id} className={styles.Box}>
      {img && <img className={styles.Remedio} src={img} alt={name} />}
      <div className={styles.Descriptions}>

        <h2>{name}</h2>
        <p>Preço: R$ {price.toFixed(2)}</p>
        <p>Descrição: {description}</p>
        <Button icon={icon}>Comprar</Button>
      </div>
      </div>
    </div>
  );
};

export default Details;
