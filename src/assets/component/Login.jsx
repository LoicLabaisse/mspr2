import axios from "axios";
import React, { useState,  } from "react";
import { Link  } from "react-router-dom";
import { useNavigate } from "react-router";
import "../css/Login.css"
import ListePatient from "./ListePatient";

const Login = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState({
    email: null,
    password: null,
  });
  const [data,setData] = useState([])

  const handleChangeLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  
    const handleLogin = (e) => {
      e.preventDefault()
      axios.post("http://localhost:4200/medecin/login", login).then(res => {
        if( res.status === 200 || res.status === 202) {
          console.log("is connected")
         setData(res.data)
          navigate("/listepatient",{state :res.data})
         
        }else {
          console.log(" not connected")
        }
      } 
      ) 
    };

  

  console.log(login);
  return (
    <div className="login">
      <div className="login_content">
        <h1 className="login_title">Clinique Le Châtelet</h1>
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
            <button className="buttonform" onClick={handleLogin} value="Connexion">
              Connexion
            </button>
        
        </form>
      </div>
    </div>
  );
};

export default Login;
