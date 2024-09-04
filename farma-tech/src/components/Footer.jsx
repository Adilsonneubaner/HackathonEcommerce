import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

// imagens
import logo from '../images/logo.jpg'
import masterCard from '../images/mastercard.svg'
import visa from '../images/visa.svg'
import elo from '../images/elo.svg'
import pix from '../images/pix.svg'
const Footer = () => {
  return (
   <footer>
        <div className={styles.containerNewsletter}>
            <div className={styles.containerLogo}>
                <img src={logo} alt="Logo" className={styles.logo}/>
                <p className={styles.pNewsletter}>Assine nossas Newsletter</p>
            </div>
            <form>
                <div className={styles.formNewsletter}>
                    <label className={styles.labelNewsletter}>
                        @
                        <input type="text" placeholder='Digite seu e-mail' className={styles.inputNewsletter}/>  
                    </label>
                    <input type="submit" value="Assinar" className={styles.submitNewsletter} />
                </div>
            </form>
        </div>

        <div className={styles.footerPart2}>
            <div className={styles.containerService}>
                <p className={styles.titleService}>Nosso Atendimento</p>
                <p>Nosso atendimento ao cliente está sempre pronto para esclarecer suas dúvidas e resolver qualquer problema. Sinta-se à vontade para nos contatar sempre que precisar.</p>
            </div>
            
            <div>
                <p className={styles.titleImportantLinks}>Links Importantes</p>
                <ul className={styles.listImportantLinks}>
                    <li>
                        <Link className={styles.importantLinks} to='/'>Página Inicial</Link>
                    </li>
                    <li>
                        <Link className={styles.importantLinks} to='/medicamentos'>Medicamentos</Link>
                    </li>
                    <li>
                        <Link className={styles.importantLinks} to='/beleza'>Beleza</Link>
                    </li>
                    <li>
                        <Link className={styles.importantLinks} to='/higiene'>Higiene</Link>
                    </li>
                    <li>
                        <Link className={styles.importantLinks} to='/nutricao'>Nutrição</Link>
                    </li>
                </ul>
            </div>
            
            <div className={styles.containerPayment}>
                <p className={styles.titlePayment}>Formas de pagamento</p>
                <div>
                    <img className={styles.paymentImage} src={visa} alt="cartão visa" />
                    <img className={styles.paymentImage} src={masterCard} alt="cartão mastercard" />
                    <img className={styles.paymentImage} src={elo} alt="cartão elo" />
                    <img className={styles.paymentImage} src={pix} alt="pix" />
                </div>
            </div>
            <p className={styles.copy}>2024 &copy; Todos os direitos reservados</p>
        </div>
   </footer>
  )
}

export default Footer