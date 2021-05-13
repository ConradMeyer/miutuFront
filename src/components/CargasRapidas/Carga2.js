import React from "react";
import "./UserInfo.css";
import movil from "../../assets/movil.svg";
import tarifa from "../../assets/tarifa.svg";
import tiempo from "../../assets/tiempo.svg";
import toggle from "../../assets/toggle2.svg";
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
          <div className="carga2-rectangle">
            <div className="carga1-div1">
              <img src={movil} alt="movil" className="movil" />
              <div className="carga1-div1p">
                <h3>Marca</h3>
                <p>Tu ubicación.</p>
              </div>
            </div>
            <div className="carga1-div1">
              <img src={tarifa} alt="tarifa" className="tarifa" />
              <div className="carga1-div1p">
                <h3>Selecciona</h3>
                <p>El importe de carga.</p>
              </div>
            </div>
            <div className="carga1-div1">
              <img src={tiempo} alt="tiempo" className="tiempo" />
              <div className="carga1-div1p">
                <h3>Tiempo</h3>
                <p>Indica el tiempo que estarás aparcado.</p>
              </div>
            </div>
          </div>
          <img src={toggle} alt="toggle" className="toggle-onbording" />
          <div className="main-botonera">
            <button className="atras" onClick={() => history.push("/carga1")}>
              Atrás
            </button>
            <button className="siguiente" onClick={() => history.push("/home")}>
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
