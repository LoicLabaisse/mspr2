import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Login.css"

const Login = () => {
  const [login, setLogin] = useState({
    email: null,
    password: null,
  });

  const handleChangeLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  
    const handleLogin = (e) => {

      axios.post("http://localhost:4200/medecin/login", login);
      console.log(login);
    };

  

  console.log(login);
  return (
    <div className="login">
      <div className="login_content">
        <h1 className="login_title">Connexion</h1>
        <form className="login_form">
          <label className="labelform">Email</label>
          <input
            onChange={handleChangeLogin}
            type="email"
            name="email"
            className="inputform"
          />
          <label className="labelform">Mot de passe</label>
          <input
            type="password"
            onChange={handleChangeLogin}
            name="password"
            className="inputform"
          />
           <Link  to="/listepatient">
            <button className="buttonform" type="submit" onClick={handleLogin} value="Connexion">
              Connexion
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
