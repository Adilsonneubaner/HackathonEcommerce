import Aside from "../../components/Aside/Aside";
import Card from "../../components/Card/Card";
import Info from "../../components/Info/Info";

import styles from "./Medicines.module.css";

const Medicines = () => {
  return (
    <>
      <Info/>
     
      <Aside/>
      <div className={styles.Medicines}>
       
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Medicines;
