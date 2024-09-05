/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import styles from './Card.module.css';
import icon from '../../assets/img/carrinho.png';
import Button from '../Button/Button';

const Card = ({ name, price, id,description, img, onBuy ,desc}) => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    if (onBuy) {
      onBuy(id);  // Passa o ID do produto para a função onBuy
    }

    // Navega para a página de detalhes com os dados do produto
    navigate('/detalhes', {
      state: { id, name, price, img,description }
    });
  };

  return (
    <div className={styles.Card} id={id}>
      <span className={styles.Descont}>-10%</span>
      <div className={styles.Capa}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.Controls}>
        <p className={styles.Product}>{name}</p>
        <p className={styles.Description}>{description}</p>
        <p>
          <span className={styles.Desc}>{desc}</span> 
          <span className={styles.Price}>R$ {price.toFixed(2)}</span>
        </p>
        <div className={styles.Buttons}>
          <span>-</span>
          <input
            className={styles.Qtd}
            type="text"
            name="qtd"
            id="qtd"
            value="1"
            readOnly
          />
          <span>+</span>
          {/* Botão de compra que chama a função handleBuyClick ao ser clicado */}
          <Button icon={icon} onClick={handleBuyClick}>Comprar</Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
