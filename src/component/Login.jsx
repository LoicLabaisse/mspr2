import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Login.css";

const Login = () => {
  const [login, setLogin] = useState({
    email: null,
    password: null,
  });

  const handleChangeLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post("http://83.195.132.70:4200/medecin/login", login);
    console.log(login);
  };

  useEffect(()=> {
      axios.get("http://83.195.132.70:4200/medecin/login").then(response=>console.log(response.data))
  },[])

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
          <input
            type="submit"
            onClick={handleLogin}
            value="Connexion"
            className="buttonform"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
