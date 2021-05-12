import "./Recarga1.css";
import React from "react";
import motocarga from "../../../assets/motocarga.svg";
import deposito from "../../../assets/deposito.svg";
import { Link, useHistory, useLocation } from "react-router-dom";

function Recarga1() {
  const history = useHistory();
  const location = useLocation();

  setTimeout(() => {
    history.push({
      pathname: "/recarga2",
      state: location.state.importe
    })
  }, 6000);

  return (
    <div className="main-recarga1">
      <h1 className="text-recarga">¡Recarga en camino!</h1>
      <img src={motocarga} alt="motocarga" id="imagen-moto"></img>
      <div className="text-tapa">
        <h3>Recuerde dejar abierta la tapa del depósito</h3>
        <img src={deposito} alt="deposito" id="imagen-deposito"></img>
      </div>
      <div className="modelo-matricula">
        <div className="modelo-row">
          <p className="modelo">Modelo:</p>
          <h4>{location.state.coches[0].descripcion}</h4>
        </div>
        <div className="modelo-row">
          <p className="color">Color:</p>
          <h4>{location.state.coches[0].color}</h4>
        </div>
        <div className="modelo-row">
          <p className="conector">Cargador:</p>
          <h4> {location.state.coches[0].cargador}</h4>
        </div>
        <div className="modelo-row">
          <p className="matricula">Matricula:</p>
          <h4>{location.state.coches[0].matricula}</h4>
        </div>
      </div>
      <hr />
      <div className="distancia-tiempo">
        <div className="distancia-column">
          <p>Distancia</p>
          <h4>1,2 km</h4>
        </div>
        <div className="distancia-column">
          <p>Tiempo</p>
          <h4>15 min</h4>
        </div>
        <div className="distancia-column">
          <p>Precio</p>
          <h4>{location.state.importe}</h4>
        </div>
      </div>
      <hr />
      <Link to="/home">
        <div className="boton-cancelar">Cancelar</div>
      </Link>
    </div>
  );
}

export default Recarga1;
