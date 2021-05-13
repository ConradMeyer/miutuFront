import React, { useState } from "react";
import "./RegistroP3.css";
import { Link } from "react-router-dom";
import atras from "../../assets/atras.svg";
import FetchSignup from "../../Hooks/FetchSignup";
import FetchSignupFB from "../../Hooks/FetchFB";
import { useHistory, useLocation } from "react-router-dom";

function Registrop3(props) {
  const location = useLocation()
  const history = useHistory();
  const [nombre] = useState(props.data.nombre);
  const [apellido] = useState(props.data.apellido);
  const [email] = useState(props.data.email);
  const [pass] = useState(props.data.pass);
  const [movil, setMovil] = useState("");

  const handleMovil = (e) => {
    setMovil(e.target.value);
  };

  const signup = async () => {
    if (pass !== "") {
      const result = await FetchSignup(nombre, apellido, email, pass, movil);
      const data = await result.json();
      if (data.status === 200) {
        await props.data.signin(data.token);
        history.push("/tarjeta");
      } else if (data.status === 500) {
        alert(data.data);
      } else if (data.status === 500) {
        alert(data.data);
      } else if (data.status === 406) {
        alert(data.data);
        history.push("/registroP2");
      } else {
        console.log(data);
      }
    } else {
      const user = {
        name: location.state.name,
        email: location.state.email,
        pass: "Facebook92",
        movil: movil
      }
      const result = await FetchSignupFB(user);
      const data = await result.json();
      if (data.status === 200) {
        await props.data.signin(data.token);
        history.push("/tarjeta");
      } else if (data.status === 500) {
        alert(data.data);
      } else if (data.status === 500) {
        alert(data.data);
      } else if (data.status === 406) {
        alert(data.data);
        history.push("/registroP2");
      } else {
        console.log(data);
      }
    }
  };

  return (
    <div className="todo-registrop3">
      <div className="atras">
        <Link to="/registrop2">
          <img src={atras} alt="atras" id="imagen-atras"></img>
        </Link>
      </div>
      <div className="main-registro3">
        <div className="form-registrop3">
          <h2 className="texto-registrop3">Introduce tu móvil</h2>
          <input
            type="text"
            className="input"
            placeholder="+34 __ __ __  __ __ __  __ __ __ "
            onChange={handleMovil}
          />
        </div>

        <div className="text-condiciones">
          <h3 className="text-condiciones">
            Al pulsar siguiente, aceptas las Condiciones de uso y la Política de
            privacidad de ...
          </h3>
          <p className="text-condiones2">
            Marca la casilla para indicar que eres mayor de 18 años y que
            aceptas las Condiciones y la Política de privacidad.
          </p>
          <input type="checkbox" name="terminos" id="terminos" />
        </div>

        <div className="botones-registrop3">
          <button onClick={signup}>SIGUIENTE</button>
        </div>
      </div>
    </div>
  );
}

export default Registrop3;
