import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/Logotipo.svg";
import "./PagError.css";

function PagError() {
    const history = useHistory();

    const redirect = () => history.push("/home")
  return (
    <div className="main-error">
      <div className="logo">
        <img src={logo} alt="logo-app" id="logo-error" />
      </div>
      <h1 className="mensaje-error">
        Lo sentimos, no hemos encontrado la página que buscas.
      </h1>
      <div className="botones-error">
        <hr />
        <button className="volver" onClick={redirect}>VOLVER</button>
      </div>
    </div>
  );
}

export default PagError;
