import React, { useState } from 'react'
import './header.css'

const Header = () => {
    /*==================== Toggle Menu ====================*/
    const[Toggle, showMenu] = useState(false);
  return (
    <header className="header">
        <nav className="nav container">
            {/* LOGO */}
            <a href="index.html" className="nav__logo">Daniel</a>
            {/* Menu */}
            <div className={Toggle ? "nav__menu show-menu": "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">
                            <i className="uil uil-estate nav__icon"></i> Incio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="uil uil-user nav__icon"></i>Sobre mi
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className="uil uil-file-alt nav__icon"></i>Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <i className="uil uil-briefcase-alt nav__icon"></i>Servicios
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <i className="uil uil-scenery nav__icon"></i>Portafolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className="uil uil-message nav__icon"></i>Contacto
                        </a>
                    </li>
                </ul>

                {/* Icono de cierre del menu */}
                <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>


            {/* Muestra el menu hamburguesa al darle ckick */}
            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header