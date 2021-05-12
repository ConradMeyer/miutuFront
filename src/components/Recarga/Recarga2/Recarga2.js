import React from "react";
import "./Recarga2.css";
import logotipo from "../../../assets/Logotipo.svg";
import vector from "../../../assets/vector.svg";
import { Link, useLocation } from "react-router-dom";

function Recarga2() {
  const location = useLocation()

  return (
    <div className="main-recarga2">
      <div className="imagen-recarga">
        <img src={logotipo} alt="logotipo" id="imagen-logotipo"></img>
      </div>

      <div className="text-vector">
        <h1>¡Recarga lista!</h1>
        <img src={vector} alt="vector" id="imagen-vector"></img>
      </div>

      <div className="hora-precio">
        <div className="hora-column">
          <p className="hora">HORA</p> <h3>11:15</h3>
        </div>
        <div className="hora-column">
          <p className="hora">PRECIO</p> <h3>{location.state}</h3>
        </div>
      </div>
      <div className="valoracion">
        <button>
          <i className="fas fa-star"></i>
        </button>

        <button>
          <i className="fas fa-star"></i>
        </button>

        <button>
          <i className="fas fa-star"></i>
        </button>

        <button>
          <i className="fas fa-star"></i>
        </button>

        <button>
          <i className="fas fa-star"></i>
        </button>
      </div>
      <Link className="link" to="/home">
        <div className="boton-cancelar">Gracias</div>
      </Link>
    </div>
  );
}

export default Recarga2;
