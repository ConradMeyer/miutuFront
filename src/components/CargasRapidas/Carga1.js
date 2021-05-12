import React, { useState } from "react";
import "./UserInfo.css";
import park from "../../assets/park.svg";
import oil from "../../assets/oil.svg";
import toggle from "../../assets/toggle.svg";
import { useHistory } from "react-router-dom";

const UserInfo = () => {
  const history = useHistory();

  return (
    <>
      <div className="todo-onbording">
        <div className="main-saltar" onClick={()=> history.push("/home")}>
          <a>Saltar</a>
        </div>
        <div className="main-generalContainer">
          <h2 className="main-titulo-parent">Cargas Rápidas</h2>
          <div className="carga1-rectangle">
            <h3 className="titulo-carga1">Recarga tu coche dónde quieras</h3>
            <div className="carga1-div1">
              <img src={park} alt="parking" className="park" />
              <div className="carga1-div1p">
                <h3>Aparca</h3>
                <p>Tu coche como siempre</p>
              </div>
            </div>
            <div className="carga1-div1">
              <img src={oil} alt="tapa" className="oil" />
              <div className="carga1-div1p">
                <h3>Abre</h3>
                <p>la tapa de la gasolina</p>
              </div>
            </div>
            <img src={toggle} alt="toggle" className="toggle-onbording"/>
          </div>
          <div className="main-botonera">
            <button className="atras">Atrás</button>
            <button
              className="siguiente"
              onClick={() => history.push("/carga2")}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
