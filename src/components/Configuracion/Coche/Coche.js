import React, { useState } from "react";
import FetchDeleteCar from "../../../Hooks/FetchDeleteCar";
import FetchEditCar from "../../../Hooks/FetchEditCar";

export default function Coche(props) {
  const [token] = useState(sessionStorage.getItem("token"));
  const [coche, setCoche] = useState(props.coche.descripcion);
  const [cargador, setCargador] = useState(props.coche.cargador);
  const [color, setColor] = useState(props.coche.color);

  const handleCoche = (e) => {
    setCoche(e.target.value);
  };

  const handleCargador = (e) => {
    setCargador(e.target.value);
  };

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const FetchDelete = async () => {
    if(window.confirm("¿Estás seguro de que quieres eliminar este coche?")){
      const car = {
        descripcion: coche,
        cargador: cargador,
        color: color,
        matricula: props.coche.matricula,
      };
      const result = await FetchDeleteCar(car, token);
      const data = await result.json();
      if (data.status === 200) {
      } else if (data.status === 401) {
        alert(data.data);
      } else if (data.status === 406) {
        alert(data.data);
      } else if (data.status === 500) {
        alert(data.data);
      }
    }
  };

  const FetchEditar = async () => {
    const car = {
      descripcion: coche,
      cargador: cargador,
      color: color,
      matricula: props.coche.matricula,
    };
    const result = await FetchEditCar(car, token);
    const data = await result.json();
    if (data.status === 200) {
    } else if (data.status === 401) {
      alert(data.data);
    } else if (data.status === 406) {
      alert(data.data);
    } else if (data.status === 500) {
      alert(data.data);
    }
  };

  return (
    <>
      <div className="info-coche" onClick={() => props.select(props.coche)}>
        <div className="input-coche">
          <input type="text" value={props.coche.descripcion} onChange={handleCoche} />
        </div>
        <input type="text" value={cargador} onChange={handleCargador} />
        <input type="text" value={color} onChange={handleColor} />
        <input type="text" value={props.coche.matricula} />
        <div className="editar-eliminar">
          <p onClick={FetchEditar}>Editar</p>
          <p onClick={FetchDelete}>Eliminar</p>
        </div>
      </div>
    </>
  );
}
