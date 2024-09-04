import styles from "./Aside.module.css";

const Aside = () => {
  return (
    <aside className={styles.Aside}>
      <h2>Medicamentos</h2>
      <p>
        <span>152</span> produtos encontrados
      </p>
     
      <div className={styles.Category}>
        <h3>Category</h3>
        <ul>
          <li>
            <a href="#">opcao</a>
          </li>
          <li>
            <a href="#">opcao</a>
          </li>
          <li>
            <a href="#">opcao</a>
          </li>
          <li>
            <a href="#">opcao</a>
          </li>
          <li>
            <a href="#">opcao</a>
          </li>
          <li>
            <a href="#">opcao</a>
          </li>
          <li>
            <a href="#">opcao</a>
          </li>
          <li>
            <a href="#">opcao</a>
          </li>
          <li>
            <a href="#">opcao</a>
          </li>
        </ul>

        <h3>Faixa de preço</h3>
        <ul>
          <li>
            <a href="#">opcao</a>
          </li>
          <li>
            <a href="#">opcao</a>
          </li>
          <li>
            <a href="#">opcao</a>
          </li>
          <li>
            <a href="#">opcao</a>
          </li>
          <li>
            <a href="#">opcao</a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
