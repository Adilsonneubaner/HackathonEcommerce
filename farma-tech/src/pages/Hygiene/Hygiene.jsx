import Aside from "../../components/Aside/Aside"
import Card from "../../components/Card/Card"
import Info from "../../components/Info/Info"
import icon from '../../assets/img/loading.png'
import styles from "./Hygiene.module.css";
import Button from "../../components/Button/Button";
import capa1 from '../../assets/img/image-14.png'
const Hygiene = () => {
  const products = [
    { id: 1,
      name: 'gimegripe', 
      price: 15.99,
      img:capa1 
    },
    { id: 2,
      name: 'Plasil', 
      price: 30.99,
      img:capa1 
    },
    { id: 3,
      name: 'amoxicilina', 
      price: 47.50,
      img:capa1 
    },
   
  ];
  
  const handleBuy = (id) => {
    console.log("Produto comprado, ID:", id);
    // Aqui você pode adicionar o produto ao carrinho, chamar uma API, etc.
  };
  return (
    <>
    <Info/>
     
     <Aside title={'higiene'}/>
     
     <div className={styles.Hygiene}>
     <div className={styles.Order}>
       <select name="nome" id="id">
         <option value="valor1">Order</option>
         <option value="valor2">Opção 2</option>
         <option value="valor3">Opção 3</option>
       </select>
     </div>
      {products.map((p) => (
       <Card key={p.id}
        name={p.name}
        price={p.price}
        img={p.img}
        desc={p.price}
        onBuy={handleBuy}
       />
      ))}
     <div className={styles.Plus}>

     <Button icon={icon}>carregar mais</Button>
     </div>
     </div>
    </>
  )
}

export default Hygiene