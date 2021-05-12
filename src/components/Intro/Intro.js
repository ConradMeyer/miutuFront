import React from "react";
import "./Intro.css";
import logo from "../../assets/Logotipo.svg";
import atras from "../../assets/atras.svg";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="todo-intro">
      <Link to="/">
        <img src={atras} alt="atras" id="img-atras" />
      </Link>
      <div className="main-singup">
        <div className="logo">
          <img src={logo} alt="logo-app" id="logo-signup" />
        </div>
        <div className="botones-signup">
          <button>
            <Link to="/registroP2">REGISTRARSE</Link>
          </button>
          <div className="text-redessoci">
            <h3>o conéctate a través de las redes sociales</h3>
          </div>
          <div className="botones-redessoci">
            <button className="btn-facebook">facebook</button>
            <button className="btn-google">Google</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
