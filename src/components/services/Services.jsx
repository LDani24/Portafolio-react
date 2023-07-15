import React, { useState } from 'react'
import "./services.css"

const Services = () => {
    //Activar Modal
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) =>{
        setToggleState(index);
    }



  return (
    <section className="services section" id="services">
         <h2 className="section__title">Servicios</h2>
        <span className="section__subtitle">Lo que brindo</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">
                        Productos <br /> Diseñador
                    </h3>
                </div>
                <span className="services__button" onClick={()=> toggleTab(1)}>Ver más
                <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 1 ? "services__modal active-modal": "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">Productos Diseñador</h3>
                        <p className="services__modal-description">Comprometidos a ofrecer trabajo de calidad a clientes y empresas.</p>
                        
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>  
                                <p className="services__modal-info">Desarrollo de interfaces de usuario</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>  
                                <p className="services__modal-info">Desarrollo de páginas web</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>  
                                <p className="services__modal-info">Creación de elementos interactivos Ux</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>  
                                <p className="services__modal-info">Servicios de diseño y creación de maquetas de productos para empresas."</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">

                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Diseños <br /> UI/UX</h3>
                </div>
                
                <span className="services__button" onClick={()=> toggleTab(2)}>Ver más
                <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 2 ? "services__modal active-modal": "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">Diseños UI/UX</h3>
                        <p className="services__modal-description">Comprometidos a ofrecer trabajo de calidad a clientes y empresas.</p>
                        
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>  
                                <p className="services__modal-info">Desarrollo de interfaces de usuario</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>  
                                <p className="services__modal-info">Desarrollo de páginas web</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>  
                                <p className="services__modal-info">Creación de elementos interactivos Ux</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>  
                                <p className="services__modal-info">Servicios de diseño y creación de maquetas de productos para empresas."</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Diseñador <br />Visual</h3>
                </div>
                <span className="services__button" onClick={()=> toggleTab(3)}>Ver más
                <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div  className={toggleState === 3 ? "services__modal active-modal": "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">Diseñador Visual</h3>
                        <p className="services__modal-description">Comprometidos a ofrecer trabajo de calidad a clientes y empresas.</p>
                        
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>  
                                <p className="services__modal-info">Desarrollo de interfaces de usuario</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>  
                                <p className="services__modal-info">Desarrollo de páginas web</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>  
                                <p className="services__modal-info">Creación de elementos interactivos Ux</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>  
                                <p className="services__modal-info">Servicios de diseño y creación de maquetas de productos para empresas."</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services