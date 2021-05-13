import "./Tusrecargas.css";
import atras from "../../assets/atras.svg";
import FetchUser from "../../Hooks/FetchUser";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Factura from "../Tusrecargas/Factura/Factura";

function Tusrecargas() {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetch1 = async () => {
      const result = await FetchUser(sessionStorage.getItem("token"));
      const data = await result.json();
      await setUser(data.result);
    };
    fetch1();
  }, []);

  const drawTusrecargas = () => {
    if (user) {
      if (user.facturas.length > 0) {
        return user.facturas.map((item, index) => (
          <Factura factura={item} index={index} key={index} />
        ));
      } else {
        return <h3 className="sin-recargas">Aún no tienes recargas</h3>;
      }
    }
  };

  return (
    <>
      <div className="todo-tusrecargas">
        <div className="main-recargas">
          <div className="verde">
            <Link to="/home">
              <img src={atras} alt="atras" />
            </Link>
            <h1 className="titulo-tusrecargas">Mis Recargas</h1>
          </div>
        </div>
        <div className="tusrecargas">{drawTusrecargas()}</div>
      </div>
    </>
  );
}

export default Tusrecargas;
