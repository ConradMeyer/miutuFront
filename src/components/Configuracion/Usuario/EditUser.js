import React, { useState, useEffect } from "react";
import FetchEditUser from "../../../Hooks/FetchEditUser";
import FetchUser from "../../../Hooks/FetchUser";
import atras from "../../../assets/atras.svg";
import { Link, useHistory, useLocation } from "react-router-dom";

export default function EditUser() {
  const location = useLocation()
  const history = useHistory();
  const [token] = useState(sessionStorage.getItem("token"));
  const [user, setUser] = useState();
  const [nombre, setNombre] = useState(location.state.name);
  const [apellido, setApellido] = useState(location.state.surname);
  const [movil, setMovil] = useState(location.state.movil);
  const [email, setEmail] = useState(location.state.email);

  useEffect(() => {
    const fetch1 = async () => {
      const result = await FetchUser(token);
      const data = await result.json();
      await setUser(data.result);
    };
    fetch1();
  }, []);

  const handleNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleApellido = (e) => {
    setApellido(e.target.value);
  };

  const handleMovil = (e) => {
    setMovil(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const FetchEditar = async () => {
    const user = {
      name: nombre,
      surname: apellido,
      email: email,
      movil: movil,
    };
    const result = await FetchEditUser(user, token);
    const data = await result.json();
    if (data.status === 200) {
      alert(data.data);
      history.push("/configuracion");
    } else if (data.status === 401) {
      alert(data.data);
    } else if (data.status === 500) {
      alert(data.data);
    }
  };

  return (
    <>
      <div className="todo-configuracion">
        <Link to="/configuracion">
          <img src={atras} alt="atras" />
        </Link>
        <h1 className="titulo-configuracion">Editar cuenta</h1>
        <div className="menu-configuracion">
          <img
            className="img-perfil"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHrfYwlcuM60g/profile-displayphoto-shrink_200_200/0/1593101044871?e=1625097600&v=beta&t=X8x7MTDgtBK0RSAnny_bd0t3xP5RVdhmqYrFfSxJiDI"
            alt="foto perfil"
          />
          <div className="config-datos-perfil">
            <h3>
              {user ? user.name : ""} {user ? user.surname : ""}
            </h3>
            <p>+34 {user ? user.movil : ""}</p>
            <p>{user ? user.email : ""}</p>
          </div>
        </div>
        <div className="info-coche">
          <div className="input-coche">
            <input
              type="text"
              onChange={handleNombre}
              className="nombre-usuario"
              placeholder="Edita tu nombre"
              value={nombre}
            />
          </div>
          <input type="text" value={apellido} onChange={handleApellido} placeholder="Apellido" />
          <input type="text" value={movil} onChange={handleMovil} placeholder="Movil" />
          <input type="text" value={email} onChange={handleEmail} placeholder="Correo" />
          <div className="editar-usuario">
            <h3 onClick={FetchEditar}>Editar</h3>
          </div>
        </div>
      </div>
    </>
  );
}
