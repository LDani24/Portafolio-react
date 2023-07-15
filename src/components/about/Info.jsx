import React from "react";

const info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">

        <i className="bx bxs-award about__icon"></i>
        <h3 className="about__title">Institución</h3>
        <span className="about__subtitle">CTP Aserrí</span>
      </div>

      <div className="about__box">
        <i className="bx bxs-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completado</h3>
        <span className="about__subtitle">20 + proyectos</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Soporte</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
      
    </div>
  );
};

export default info;
