import atras from "../../../assets/atras.svg";
import FetchNewCar from "../../../Hooks/FetchNewCar";
import DataProvider from "../../../Data/DataProvider";
import { Autocomplete } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function NuevoCoche() {
  const dataCoches = DataProvider();
  const history = useHistory();
  const [coche, setCoche] = useState("");
  const [cargador, setCargador] = useState("");
  const [color, setColor] = useState("");
  const [matricula, setMatricula] = useState("");
  const [token] = useState(sessionStorage.getItem("token"));

  const handleAutocomplete = (e, newValue) => {
    if (newValue != null) {
      console.log(newValue);
      setCoche(newValue.modelo);
      setCargador(newValue.cargador);
    }
  };

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const handleMatricula = (e) => {
    setMatricula(e.target.value);
  };

  const validarMatricula = (matricula) => {
    let patternEmail = /^[0-9]{1,4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}/;
    return patternEmail.test(matricula);
  };

  const Fetch = async () => {
    if (coche === "" || color === "" || matricula === "") {
      alert("Por favor, añade todos los datos de tu coche");
    } else {
      if (validarMatricula(matricula)) {
        const newCar = {
          descripcion: coche,
          cargador: cargador,
          color: color,
          matricula: matricula,
        };
        const result = await FetchNewCar(newCar, token);
        const data = await result.json();
        if (data.status === 200) {
          history.push("/configuracion");
        } else if (data.status === 401) {
          alert(data.data);
        } else if (data.status === 500) {
          alert(data.data);
        }
      } else {
        alert("La matricula introducida no es válida");
      }
    }
  };

  return (
    <>
      <div className="todo-configuracion">
        <div className="main-configuracion">
          <div className="verde">
            <Link to="/configuracion">
              <img src={atras} alt="atras" />
            </Link>
            <h1 className="titulo-configuracion">Añadir coche</h1>
          </div>
          <div className="buscador">
            <Autocomplete
              id="combo-box-demo"
              options={dataCoches}
              getOptionLabel={(option) => option.modelo}
              style={{
                width: "90%",
                margin: "10px auto",
                borderRadius: "25px",
                backgroundColor: "white",
                textAlign: "center",
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Busca aquí tu coche"
                  variant="standard"
                />
              )}
              onChange={handleAutocomplete}
            />
          </div>
          <div className="info-coche">
            <div className="input-coche">
              <input type="text" value={coche} placeholder="Marca y modelo" />
            </div>
            <input
              type="text"
              value={cargador}
              placeholder="Tipo de cargador"
            />
            <input type="text" onChange={handleColor} placeholder="Color" maxLength="15" />
            <input
              type="text"
              onChange={handleMatricula}
              placeholder="Matricula"
              maxLength="7"
            />
            <div className="guardar-coche" onClick={Fetch}>
              <h3>Guardar</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NuevoCoche;
