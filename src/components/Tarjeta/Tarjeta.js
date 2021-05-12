import React, {useState} from "react";
import "./Tarjeta.css";
import { Link, useHistory } from "react-router-dom";
import logoTarjeta from "../../assets/Tarjeta.svg";
import FetchCard from "../../Hooks/FetchCard"

function Tarjeta(props) {
  const history = useHistory()
  const [titular, setTitular] =useState("")
  const [tarjeta, setTarjeta] =useState("")
  const [codigo, setCodigo] =useState("")
  const [fecha, setFecha] =useState({mes: "", año: ""})

  const handleTitular = (e) => {
    setTitular(e.target.value)
  }
  const handleTarjeta = (e) => {
    setTarjeta(e.target.value)
  }
  const handleCodigo = (e) => {
    setCodigo(e.target.value)
  }
  const handleFecha = (e) => {
    setFecha({mes: e.target.value, año: fecha.año})
  }
  const handleFecha2 = (e) => {
    setFecha({mes: fecha.mes, año: e.target.value})
  }

  const card = {
    titular: titular,
    numero: tarjeta,
    fecha: `${fecha.mes}/${fecha.año}`,
    codigo: codigo,
    token: sessionStorage.getItem("token")
  }
  const addCard = async () => {
    const result = await FetchCard(card)
    const data = await result.json()
    if(data.status === 406) {
      alert(data.data)
    }
    else if(data.status === 401) {
      alert(data.data)
    }
    else if(data.status === 200) {
      history.push("/carga1")
    }
    else if(data.status === 500) {
      alert(data.data)
    }
  }

  return (
    <div className="todo-tarjeta">
      <div className="omitir">
        <Link to="/home">
          <p className="text-omitir">Omitir por ahora</p>
        </Link>
      </div>
      <div className="main-tarjeta">
        <div className="img-tarjeta">
          <h3>Introduzca los datos de su tarjeta</h3>
          <div className="tarjeta">
            <img src={logoTarjeta} alt="tarjeta-credito" id="tarjeta-credito"></img>
            <h4>Tarjeta de crédito o débito</h4>
          </div>
        </div>
        <div className="inputs">
          <input type="text" name="nombre-titular" id="nombre-titular" placeholder="Nombre del titular" onChange={handleTitular}/>
          <input type="text" name="numero-tarjeta" id="numero-tarjeta" placeholder="Numero de tarjeta" onChange={handleTarjeta} />
          <div className="inputs2">
            <select name="mes-tarjeta" id="mes-tarjeta" onChange={handleFecha}>
              <option value="0">Mes</option>
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
            <select name="año-tarjeta" id="año-tarjeta" onChange={handleFecha2}>
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
            <input type="text" name="codigo" id="codigo" placeholder="codigo" onChange={handleCodigo} />
          </div>
        </div>
        <div className="botones-tarjeta">
          <button onClick={addCard}>SIGUIENTE</button>
        </div>
      </div>
    </div>
  );
}

export default Tarjeta;
