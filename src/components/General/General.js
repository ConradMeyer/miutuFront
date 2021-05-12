import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";
import FetchUser from "../../Hooks/FetchUser";

function General() {
  const history = useHistory();
  const [user, setUser] = useState();
  const [token] = useState(sessionStorage.getItem("token"));

  useEffect(() => {
    const fetch1 =  async () => {
      const result = await FetchUser(token);
      const data = await result.json();
      await setUser(data.result);
    };
    fetch1();
  }, []);

  useEffect(() => {
    const portero = () => {
      if (token === "") {
        history.push("/")
      }
    }
    portero()
  }, [])

  return (
    <div className="main">
      <Menu  data={user}/>
      <Home data={user}/>
    </div>
  );
}

export default General;
