import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import FetchLogout from "../../Hooks/FetchLogout";
import {useHistory, Link} from "react-router-dom"
import './Menu.css'

function Menu(props) {
  const history = useHistory();
  const dataContext = useContext(AuthContext);

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
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHrfYwlcuM60g/profile-displayphoto-shrink_200_200/0/1593101044871?e=1625097600&v=beta&t=X8x7MTDgtBK0RSAnny_bd0t3xP5RVdhmqYrFfSxJiDI" alt="fotoperfil" />
        <h3>{props.data ? props.data.name : ""}<br/>{props.data ? props.data.surname : ""}</h3>
      </div>
      <ul className="menu-listado">
        <li onClick={dataContext.toggleMenu}><Link to="/tusrecargas">Mis recargas</Link></li>
        <li onClick={dataContext.toggleMenu}><Link to="/pago">Pago</Link></li>
        <li onClick={dataContext.toggleMenu}><Link to="/configuracion">Configuración</Link></li>
        <li onClick={logout}>Logout</li>
        <li onClick={dataContext.toggleMenu}>Atras</li>
      </ul>
    </div>
  );
}

export default Menu;