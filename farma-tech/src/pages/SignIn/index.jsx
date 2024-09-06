import styles from './signin.module.css'
import Info from '../../components/Info/Info'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react'
import { RegisterModal } from '../../components/RegisterModal'

export function SignIn() {
  const [isOpenRegisterModal, setIsRegisterModal] = useState(false)

  function createAccount() {
    setIsRegisterModal(true)
  }

  function closeRegisterModal() {
    setIsRegisterModal(false)
  }
  
  return (
    <div className={styles.container}>
      <Info />
      <div className={styles.content}>
        <div className={styles.loginContainer}>
          <span className={styles.loginText}>Já sou cliente</span>
          <div className={styles.formContainer}>
            <div className={styles.formContent}>
              <label>E-mail</label>
              <input type='email' placeholder='johndoe@example.com' name='email' />
            </div>
            <div className={styles.formContent}>
              <label>Password</label>
              <input type='password' placeholder='************' name='password' />
            </div>
          </div>
          <div className={styles.subtitleTexts}>
            <a href="#">
              <span>Esqueceu sua senha?</span>
            </a>
            <a href="#">
              <span>Reenviar e-mail?</span>
            </a>
          </div>
          <button className={styles.buttonForm}>faça seu login</button>
        </div>
        <div className={styles.registerContainer}>
          <strong>Ainda não sou cliente</strong>
          <p>Cadastre-se para receber novidades e finalizar sua compra.</p>
          <p>A seguir você informará seus dados para continuar o processo de compra.</p>
          <button onClick={createAccount} className={styles.buttonForm}>cadastra-se</button>
        </div>
      </div>
      <Footer />
      {isOpenRegisterModal && (
        <RegisterModal closeRegisterModal={closeRegisterModal} />
      )}
    </div>
  )
}