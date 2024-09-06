import styles from './registerModal.module.css'
import closeImage from '../../assets/img/close.png'

// eslint-disable-next-line react/prop-types
export function RegisterModal({ closeRegisterModal }) {
  return (
    <div className={styles.modalOverlay}>
    <div className={styles.modalContent}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>
            Cadastra-se
          </h2>
          <button type="button" onClick={closeRegisterModal}>
            <img src={closeImage} alt="Fechar" />
          </button>
        </div>
      </div>
      <form className={styles.modalFormContainer}>
        <div className={styles.modalFormContent}>
          <label>E-mail</label>
          <input
            type="email"
            placeholder="Digite seu melhor email"
            name="email"
          />
        </div>
        <div className={styles.modalFormContent}>
          <label>Senha</label>
          <input
            type="password"
            placeholder="*************"
            name="password"
          />
        </div>
        <button type="submit" className={styles.modalButton}>
          Criar conta
        </button>
      </form>
    </div>
  </div>
  )
}