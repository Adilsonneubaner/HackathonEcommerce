import Card from "../../components/Card/Card";
import Info from "../../components/Info/Info";

import styles from "./Medicines.module.css";

const Medicines = () => {
  return (
    <>
      <Info/>
      <h2>
      Medicines
      </h2>
      <div className={styles.Medicines}>
       
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Medicines;
