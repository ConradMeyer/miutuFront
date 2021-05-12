import "./Pago.css";
import atras from "../../assets/atras.svg";
import añadir from "../../assets/añadir-coche.svg";
import FetchUser from "../../Hooks/FetchUser";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tarjeta from "./Tarjeta/Tarjeta";

function Pago() {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetch1 = async () => {
      const result = await FetchUser(sessionStorage.getItem("token"));
      const data = await result.json();
      await setUser(data.result);
    };
    fetch1();
  });

  const drawTarjetas = () => {
    if (user) {
      if (user.tarjetas.length > 0) {
        return user.tarjetas.map((item, index) => (
          <Tarjeta tarjeta={item} index={index} key={index} />
        ));
      } else {
        return <h3>Añade tu primera tarjeta</h3>;
      }
    }
  };

  return (
    <>
      <div className="todo-pago">
        <Link to="/home">
          <img src={atras} alt="atras" />
        </Link>
        <div className="main-pago">
          <h1 className="titulo-pago">Formas de Pago</h1>
          <div className="menu-pago">
            <img
              className="img-perfil"
              src="https://media-exp1.licdn.com/dms/image/C4E03AQHrfYwlcuM60g/profile-displayphoto-shrink_200_200/0/1593101044871?e=1625097600&v=beta&t=X8x7MTDgtBK0RSAnny_bd0t3xP5RVdhmqYrFfSxJiDI"
              alt="foto perfil"
            />
            <div className="config-datos-perfil">
              <h3>
                {user ? user.name : ""} {user ? user.surname : ""}{" "}
              </h3>
              <p>+34 {user ? user.movil : ""}</p>
              <p>{user ? user.email : ""}</p>
            </div>
          </div>

          <div className="tarjetas-usuario">
            <h2>Tarjetas</h2>
            <Link to="/nuevaTarjeta">
              <img src={añadir} alt="añadir-tarjeta" />
            </Link>
          </div>
          {drawTarjetas()}
        </div>
      </div>
    </>
  );
}

export default Pago;
