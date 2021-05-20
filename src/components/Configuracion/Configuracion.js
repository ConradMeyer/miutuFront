import "./Configuracion.css";
import atras from "../../assets/atras.svg";
import avanza from "../../assets/avanza.svg";
import añadir from "../../assets/añadir-coche.svg";
import usuario from "../../assets/usuario.svg";
import Coche from "./Coche/Coche";
import FetchUser from "../../Hooks/FetchUser";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function Config() {
  const history = useHistory();
  const [select, setSelect] = useState({});
  const [user, setUser] = useState();


  useEffect(() => {
    const fetch1 = async () => {
      const result = await FetchUser(sessionStorage.getItem("token"));
      const data = await result.json();
      await setUser(data.result);
    };
    fetch1();
  });

  const selectCar = (car) => {
    setSelect(car);
  };

  const drawCoches = () => {
    if (user) {
      if (user.coches.length > 0) {
        return user.coches.map((item, index) => (
          <Coche select={selectCar} coche={item} index={index} key={index} />
        ));
      } else {
        return <h3>Añade tu primer coche</h3>;
      }
    }
  };

  return (
    <>
      <div className="todo-configuracion">
        <div className="main-configuracion">
          <div className="verde">
            <Link to="/home">
              <img src={atras} alt="atras" />
            </Link>
            <h1 className="titulo-configuracion">Configuración</h1>
          </div>
          <div className="menu-configuracion">
            <img
              className="img-perfil"
              src={user && user.img !== "" ? user.img : usuario}
              alt="foto perfil"
            />
            <div className="config-datos-perfil">
              <h3>
                {user ? user.name : ""} {user ? user.surname : ""}{" "}
              </h3>
              <p>+34 {user ? user.movil : ""}</p>
              <p>{user ? user.email : ""}</p>
            </div>
            <img
              src={avanza}
              alt="avanza"
              onClick={() =>
                history.push({
                  pathname: "/editarUsuario",
                  state: user,
                })
              }
            />
          </div>
          <div className="coches-usuario">
            <h2>Coches</h2>
            <Link to="/nuevoCoche">
              <img src={añadir} alt="añadir-coche" />
            </Link>
          </div>
          {drawCoches()}
        </div>
      </div>
    </>
  );
}

export default Config;
