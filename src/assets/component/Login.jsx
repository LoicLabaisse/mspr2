import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "../css/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: null,
    password: null,
  });
  const [data, setData] = useState([]);
  const [message, setMessage] = useState(false);

  const handleChangeLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/medecin/login`, login)
      .then((res) => {
        if (res.status === 200 || res.status === 202) {
          console.log("is connected");
          setData(res.data);
          navigate("/listepatient", { state: res.data });
        }
      })
      .catch((err) => {
        if (err) {
          setMessage(true);
        }
      });
  };

  return (
    <div className="login">
      <div className="login_content">
        <h1 className="login_title">Clinique Le Châtelet</h1>
        <p className="login_subtitle">Espace Soignant</p>
        <p className={message ? "active" : "disabled"}>
          Les informations sont incorrect
        </p>
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
          <button
            className="buttonform"
            onClick={handleLogin}
            value="Connexion"
          >
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
