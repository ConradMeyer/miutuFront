import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import FetchLogout from "../../Hooks/FetchLogout";
import usuario from '../../assets/usuario.svg'
import {useHistory, Link} from "react-router-dom"
import './Menu.css'

function Menu(props) {
  const history = useHistory();
  const dataContext = useContext(AuthContext);
  console.log(props.data);

  const logout = async () => {
    const result = await FetchLogout(sessionStorage.getItem('token'));
    const data = await result.json();
    dataContext.toggleMenu()

    if (data.status === 200) {
      dataContext.logout()
      history.push("/")
    } else if (data.status === 401) {
      alert(data.data);
    } else if (data.status === 500) {
      alert(data.data);
    } else {
      alert(data.data);
    }
  };

  return (
    <div className={`menu-desplegable ${dataContext.menu}`}>
      <div className="perfil">
        <img src={props.data && props.data.img !== "" ? props.data.img : usuario} alt="fotoperfil" />
        <h3>{props.data ? props.data.name : ""}<br/>{props.data ? props.data.surname : ""}</h3>
      </div>
      <ul className="menu-listado">
        <li onClick={dataContext.toggleMenu}><Link to="/tusrecargas">Mis recargas</Link></li>
        <li onClick={dataContext.toggleMenu}><Link to="/pago">Pago</Link></li>
        <li onClick={dataContext.toggleMenu}><Link to="/configuracion">Configuración</Link></li>
        <li onClick={dataContext.toggleMenu}>Atras</li>
        <li onClick={logout} className="cerrar-sesion">Cerrar Sesión</li>
      </ul>
    </div>
  );
}

export default Menu;