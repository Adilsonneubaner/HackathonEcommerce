import styles from '../components/Navbar.module.css'

import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <nav className={styles.navbar}>
            <div className={styles.containerTitle}>
                <h1 className={styles.title}>PharmaTech</h1>
                <form>
                  <div className={styles.search}>
                    <label>
                      <i className="bi bi-search"></i>
                      <input type="text" placeholder='O que você precisa?' className={styles.inputSearch}/>
                    </label>
                  </div>
                </form>
                <ul className={styles.userInteraction}>
                  <li className={styles.userInteractionOptions}>
                    <a href="/" className={styles.linksInteractionOptions}>
                      <i className="bi bi-chat"></i>
                      <p className={styles.pLinks}>atendimento</p>
                    </a>
                  </li>
                  <li className={styles.userInteractionOptions}>
                    <a href="/" className={styles.linksInteractionOptions}>
                      <i className="bi bi-person-fill"></i>
                      <p className={styles.pLinks}>entrar</p>
                    </a>
                  </li>
                  <li className={styles.userInteractionOptions}>
                    <a href="/" className={styles.linksInteractionOptions}>
                      <i className="bi bi-basket-fill"></i>
                      <p className={styles.pLinks}> ( 1 )</p>
                    </a>
                  </li>
                </ul>
            </div>

            <div>
              <ul className={styles.linksNavigation}>
                <li>
                  <NavLink to='/' className={({isActive}) => (isActive? styles.active : styles.noActive)}>Página Inicial</NavLink>
                </li>
                <li>
                  <NavLink to='/medicamentos' className={({isActive}) => (isActive? styles.active : styles.noActive)}>Medicamentos</NavLink>
                </li>
                <li>
                  <NavLink to='/beleza' className={({isActive}) => (isActive? styles.active : styles.noActive)}>Beleza</NavLink>
                </li>
                <li>
                  <NavLink to='/higiene' className={({isActive}) => (isActive? styles.active : styles.noActive)}>Higiene</NavLink>
                </li>
                <li>
                  <NavLink to='/nutricao' className={({isActive}) => (isActive? styles.active : styles.noActive)}>Nutrição</NavLink>
                </li>
              </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar