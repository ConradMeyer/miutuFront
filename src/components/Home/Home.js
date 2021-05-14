import React, { useContext, useState, useEffect } from "react";
import { Popper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MapView from "../Mapa/react-leaflet";
import square from "../../assets/Menu.svg";
import coche from "../../assets/coche-home.svg";
import cargador from "../../assets/enchufe-home.svg";
import location from "../../assets/Localizador.svg";
import AuthContext from "../../contexts/AuthContext";
import FetchUser from "../../Hooks/FetchUser";
import FetchNewInvoice from "../../Hooks/FetchNewInvoice";
import SearchLocationInput from "../Direccion/SearchLocationInput";
import { useHistory } from "react-router-dom";
import "./Home.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

function Home(props) {
  const history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [position, setPosition] = useState({});
  const [usuario, setUsuario] = useState({});
  const [coches, setCoches] = useState([]);
  const [tarjetas, setTarjetas] = useState([]);
  const [recarga, setRecarga] = useState(true);
  const [direccion, setDireccion] = useState();
  const [importe, setImporte] = useState("€ 5,99");
  const dataContext = useContext(AuthContext);

  const handlePosition = (position) => {
    setPosition(position)
  }

  const handleAddress = (address) => {
    setDireccion(address)
  }

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(anchorEl2 ? null : event.currentTarget);
  };
  const handleRecarga = () => {
    if (!recarga) {
      setImporte("€ 5,99");
    } else {
      setImporte("€ 9,99");
    }
    setRecarga(!recarga);
  };

  const solicitar = async () => {
    if (coches.length < 1) {
      alert("Aun no tienes coches añadidos");
    } else if (tarjetas.length < 1) {
      alert("Aun no tienes tarjetas añadidas");
    } else {
      const newInvoice = {
        nombre: `${usuario.name} ${usuario.surname}`,
        concepto: `Recarga de ${coches[0].descripcion}`,
        importe: importe,
        direccion: direccion,
        email: usuario.email,
      };
      const result = await FetchNewInvoice(
        newInvoice,
        sessionStorage.getItem("token")
      );
      const data = await result.json();
      console.log(data);
      if (data.status === 200) {
        history.push({
          pathname: "/recarga1",
          state: {
            coches,
            importe,
          },
        });
      } else if (data.status === 401) {
        alert(data.status);
      } else if (data.status === 500) {
        alert(data.status);
      }
    }
  };

  useEffect(() => {
    if (
      sessionStorage.getItem("token") &&
      sessionStorage.getItem("token") !== ""
    ) {
      const fetch1 = async () => {
        const result = await FetchUser(sessionStorage.getItem("token"));
        const data = await result.json();
        setCoches(data.result.coches);
        setTarjetas(data.result.tarjetas);
        setUsuario(data.result);
      };
      fetch1();
    } else {
      history.push("/");
    }
  }, []);

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  const id = open ? "simple-popper" : undefined;
  const id2 = open ? "simple-popper" : undefined;

  const localizacion = async () => {
    await navigator.geolocation.getCurrentPosition((position) => {
      setPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });

      fetch(
        `http://nominatim.openstreetmap.org/reverse?format=json&addressdetails=0&zoom=18&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
      )
        .then((res) => res.json())
        .then((data) => data.display_name.split(","))
        .then((adress) => {
          setDireccion(adress);
        });
    });
  };

  useEffect(() => {
    localizacion();
  }, []);

  return (
    <div className="main-home">
      <header className="home-header">
        <img
          src={square}
          alt="menu"
          id="hamburguesa"
          onClick={dataContext.toggleMenu}
        />
        <h3>Indica tu localizacion</h3>
        <img src={location} alt="menu" id="ubicacion" onClick={localizacion} />
      </header>
      <main>
        <div className="caja-adress">
          <SearchLocationInput onChange={() => null} handlePosition={handlePosition} handleAddress={handleAddress} />
        </div>
        <MapView data={position} />
      </main>
      <footer className="home-footer">
        <div className="info-recarga">
          <img
            src={coche}
            alt="coche"
            aria-describedby={id}
            onClick={handleClick}
          />
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <div className={classes.paper}>
              {coches.length > 0
                ? coches[0].descripcion
                : "Aun no hay coches añadidos"}
            </div>
          </Popper>
          <div className="recarga" onClick={handleRecarga}>
            <h2>{importe}</h2>
            <p>{recarga ? "por 1/2h de recarga" : "por 1h de recarga"}</p>
          </div>

          <img
            src={cargador}
            alt="cargador"
            aria-describedby={id2}
            onClick={handleClick2}
          />
          <Popper id={id2} open={open2} anchorEl={anchorEl2}>
            <div className={classes.paper}>
              {coches.length > 0
                ? coches[0].cargador
                : "Aun no hay coches añadidos"}
            </div>
          </Popper>
        </div>
        <hr />
        <div className="select">
          <label htmlFor="#">TIEMPO APARCADO</label>
          <select name="aparcamiento" id="aparcamiento">
            <option value="">- -</option>
            <option value="">7:00</option>
            <option value="">7:30</option>
            <option value="">8:00</option>
            <option value="">8:30</option>
            <option value="">9:00</option>
            <option value="">9:30</option>
            <option value="">10:00</option>
            <option value="">10:30</option>
            <option value="">11:00</option>
            <option value="">11:30</option>
            <option value="">12:00</option>
            <option value="">12:30</option>
            <option value="">13:00</option>
            <option value="">13:30</option>
            <option value="">14:00</option>
            <option value="">14:30</option>
            <option value="">15:00</option>
            <option value="">15:30</option>
            <option value="">16:00</option>
            <option value="">16:30</option>
            <option value="">17:00</option>
            <option value="">17:30</option>
            <option value="">18:00</option>
            <option value="">18:30</option>
            <option value="">19:00</option>
            <option value="">19:30</option>
            <option value="">20:00</option>
            <option value="">20:30</option>
            <option value="">21:00</option>
            <option value="">21:30</option>
            <option value="">22:00</option>
            <option value="">22:30</option>
            <option value="">23:00</option>
            <option value="">23:30</option>
            <option value="">00:00</option>
            <option value="">00:30</option>
          </select>
          <label htmlFor="#">HASTA</label>
          <select name="aparcamiento" id="aparcamiento">
            <option value="">- -</option>
            <option value="">7:00</option>
            <option value="">7:30</option>
            <option value="">8:00</option>
            <option value="">8:30</option>
            <option value="">9:00</option>
            <option value="">9:30</option>
            <option value="">10:00</option>
            <option value="">10:30</option>
            <option value="">11:00</option>
            <option value="">11:30</option>
            <option value="">12:00</option>
            <option value="">12:30</option>
            <option value="">13:00</option>
            <option value="">13:30</option>
            <option value="">14:00</option>
            <option value="">14:30</option>
            <option value="">15:00</option>
            <option value="">15:30</option>
            <option value="">16:00</option>
            <option value="">16:30</option>
            <option value="">17:00</option>
            <option value="">17:30</option>
            <option value="">18:00</option>
            <option value="">18:30</option>
            <option value="">19:00</option>
            <option value="">19:30</option>
            <option value="">20:00</option>
            <option value="">20:30</option>
            <option value="">21:00</option>
            <option value="">21:30</option>
            <option value="">22:00</option>
            <option value="">22:30</option>
            <option value="">23:00</option>
            <option value="">23:30</option>
            <option value="">00:00</option>
            <option value="">00:30</option>
          </select>
        </div>
        <hr />
        <div className="btn-recarga" onClick={solicitar}>
          <h3>Solicitar</h3>
        </div>
      </footer>
    </div>
  );
}

export default Home;
