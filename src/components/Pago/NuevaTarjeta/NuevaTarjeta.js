import React, { useState } from "react";
import atras from "../../../assets/atras.svg";
import FetchNewCard from "../../../Hooks/FetchCard";
import { Link, useHistory } from "react-router-dom";

function NuevaTarjeta() {
  const history = useHistory();
  const [titular, setTitular] = useState("");
  const [numero, setNumero] = useState("");
  const [fecha, setFecha] = useState({ mes: "", año: "" });
  const [codigo, setCodigo] = useState("");
  const [token] = useState(sessionStorage.getItem("token"));

  const handleTitular = (e) => {
    setTitular(e.target.value);
  };

  const handleNumero = (e) => {
    setNumero(e.target.value);
  };

  const handleFecha = (e) => {
    setFecha({ mes: e.target.value });
  };
  const handleFecha2 = (e) => {
    setFecha({ mes: fecha.mes, año: e.target.value });
  };

  const handleCodigo = (e) => {
    setCodigo(e.target.value);
  };

  function validateCard(card) {
    let patternCard =
      /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$/;
    return patternCard.test(card);
  }

  const Fetch = async () => {
    if (numero === "" || codigo === "") {
      alert("Por favor, introduce todos los datos de la tarjeta");
    } else {
      if (validateCard(numero)) {
        const newCard = {
          titular: titular,
          numero: numero,
          fecha: `${fecha.mes}/${fecha.año}`,
          codigo: codigo,
          token: token,
        };
        const result = await FetchNewCard(newCard, token);
        const data = await result.json();
        if (data.status === 200) {
          history.push("/pago");
        } else if (data.status === 401) {
          alert(data.data);
        } else if (data.status === 500) {
          alert(data.data);
        } else {
          alert(data.data);
        }
      } else {
        alert("El número de tarjeta no es válido");
      }
    }
  };

  return (
    <div className="todo-pago">
      <div className="main-pago">
        <div className="verde">
          <Link to="/pago">
            <img src={atras} alt="atras" />
          </Link>
          <h1 className="titulo-pago">Añadir tarjeta</h1>
        </div>
        <div className="info-tarjeta">
          <div className="input-titular">
            <input
              type="text"
              onChange={handleTitular}
              placeholder="Titular"
              maxLength="35"
            />
          </div>
          <input
            type="text"
            onChange={handleNumero}
            placeholder="Número de tarjeta"
            maxLength="16"
          />
          <div className="añadir-inputs">
            <select name="mes-tarjeta" onChange={handleFecha}>
              <option value="#">Mes</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <select name="año-tarjeta" onChange={handleFecha2}>
              <option value="0">Año</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
            </select>
          </div>
          <input
            type="text"
            onChange={handleCodigo}
            placeholder="CCV"
            maxLength="3"
          />
          <div className="guardar-tarjeta" onClick={Fetch}>
            <h3>Guardar</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NuevaTarjeta;
