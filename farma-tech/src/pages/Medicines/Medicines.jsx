import  { useState, useEffect } from 'react';
import axios from 'axios';
import Aside from "../../components/Aside/Aside";
import Button from "../../components/Button/Button";
import Info from "../../components/Info/Info";
import icon from '../../assets/img/loading.png';
import styles from "./Medicines.module.css";
import Card from "../../components/Card/Card";
import capa1 from '../../assets/img/remedio.png'; // Imagem padrão caso não tenha imagem na API

const Medicines = () => {
  const [medicines, setMedicines] = useState([]);
  const [allMedicines, setAllMedicines] = useState([]);  // Armazena todos os medicamentos recebidos
  const [visibleCount, setVisibleCount] = useState(3);   // Número de itens visíveis
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Substitua o URL abaixo pelo endpoint do seu JSON Server
    const url = 'http://localhost:3000/medicines';

    // Fetch data from JSON Server
    axios.get(url)
      .then(response => {
        setAllMedicines(response.data);
        setMedicines(response.data.slice(0, visibleCount));  // Inicialmente mostra os primeiros 3 itens
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [visibleCount]);  // Atualiza quando visibleCount muda

  const handleBuy = (id) => {
    console.log("Produto comprado, ID:", id);
    // Aqui você pode adicionar o produto ao carrinho, chamar uma API, etc.
  };

  const handleLoadMore = () => {
    setVisibleCount(prevCount => {
      const newCount = prevCount + 3;  // Adiciona mais 3 itens
      setMedicines(allMedicines.slice(0, newCount));  // Atualiza os itens visíveis
      return newCount;
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <Info />
      <Aside title={'Medicamentos'} />
      <div className={styles.Medicines}>
        <div className={styles.Order}>
          <select name="nome" id="id">
            <option value="valor1">Order</option>
            <option value="valor2">Opção 2</option>
            <option value="valor3">Opção 3</option>
          </select>
        </div>
        <div className={styles.Container}>

        {medicines.map((p) => (
          <Card
            key={p.id}
            name={p.name}
            price={p.price}
            img={p.img || capa1} 
            description={p.description} // Usa a imagem da API ou uma imagem padrão
            desc={ p.price}  // Usa a descrição da API ou o preço como fallback
            onBuy={handleBuy}
          />
        ))}
        </div>
        <div className={styles.Plus}>
          <Button icon={icon} onClick={handleLoadMore}>Carregar mais</Button>
        </div>
      </div>
    </>
  );
};

export default Medicines;
