import Card from "../../components/Card/Card";

import styles from "./Medicines.module.css";

const Medicines = () => {
  return (
    <>
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
