import Aside from "../../components/Aside/Aside";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Info from "../../components/Info/Info";
import icon from '../../assets/img/loading.png'
import styles from "./Medicines.module.css";

const Medicines = () => {
  return (
    <>
      <Info/>
     
      <Aside/>
      
      <div className={styles.Medicines}>
      <div className={styles.Order}>
        <select name="nome" id="id">
          <option value="valor1">Order</option>
          <option value="valor2">Opção 2</option>
          <option value="valor3">Opção 3</option>
        </select>
      </div>
        <Card />
        <Card />
        <Card />
      <div className={styles.Plus}>

      <Button icon={icon}>carregar mais</Button>
      </div>
      </div>
    </>
  );
};

export default Medicines;
