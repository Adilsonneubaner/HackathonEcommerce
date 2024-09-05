import style from './OffCanvas.module.css'

import { useRef } from 'react'

import { NavLink } from 'react-router-dom'
const OffCanvas = ({offCanvas, setOffCanvas}) => {
    if(offCanvas === true){
      const canvas = useRef()
      const closeCanvas = useRef()
      const handleCloseCanvas = (e) => {
          if(canvas.current && !canvas.current.contains(e.target)){
              setOffCanvas()
          }
      }
      const handleSubmit = () => {
  
      }
      return (
          <div className={style.offCanvas} onClick={handleCloseCanvas}>
              <div className={style.offCanvasMenu} ref={canvas}>
                    <div className={style.containerMenu}>
                        <i class="bi bi-list" id={style.menuCanvas} onClick={setOffCanvas} ref={closeCanvas}></i>
                    </div>
                    <div className={style.contentOffCanvas}>
                        <div className={style.containerTitle}>
                            <h1 className={style.title}>PharmaTech</h1>
                            <form>
                                <div className={style.labelSearch}>
                                    <label>
                                        <i className="bi bi-search"></i>
                                        <input type="text" placeholder='O que você precisa?' className={style.inputSearch}/>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>

                    <ul className={style.list}>
                        <li >
                            <a href="/" className={style.itemList}>
                                <i className="bi bi-chat"></i>
                                <p>atendimento</p>
                            </a>
                        </li>
                        <li>
                            <a href="/" className={style.itemList}>
                                <i className="bi bi-person-fill"></i>
                                <p>entrar</p>
                            </a>
                        </li>
                        <li>
                            <a href="/" className={style.itemList}>
                                <i className="bi bi-basket-fill"></i>
                                <p> ( 1 )</p>
                            </a>
                        </li>
                    </ul>

                    <ul className={style.navigation}>
                        <li>
                            <NavLink to='/' className={({isActive}) => (isActive? style.active : style.noActive)}>Página Inicial</NavLink>
                        </li>
                        <li>
                            <NavLink to='/medicamentos' className={({isActive}) => (isActive? style.active : style.noActive)}>Medicamentos</NavLink>
                        </li>
                        <li>
                            <NavLink to='/beleza' className={({isActive}) => (isActive? style.active : style.noActive)}>Beleza</NavLink>
                        </li>
                        <li>
                            <NavLink to='/higiene' className={({isActive}) => (isActive? style.active : style.noActive)}>Higiene</NavLink>
                        </li>
                        <li>
                            <NavLink to='/nutricao' className={({isActive}) => (isActive? style.active : style.noActive)}>Nutrição</NavLink>
                        </li>
                    </ul>
              </div>
          </div>
        )
    }
    return null
  }

export default OffCanvas