import React, { useEffect, useState } from "react";
import "../css/listePatient.css";
import Modal from "./Modal";
import * as AiIcons from 'react-icons/ai'
import axios from "axios";
import { useLocation } from "react-router";


const ListePatient = () => {
  const [change, setChange] = useState({
    first_name: null,
    last_name: null,
  });

  const [show,setShow] = useState(false)

  const {state} = useLocation()
  console.log(state.id);

  useEffect(()=> {
   
        axios.get(`${process.env.REACT_APP_API}/${state.id}/listePatient`).then(res => setPatient(res.data))
  },[state.id])

  const [patient,setPatient] = useState([])

  const [updateList, setUpdateList] = useState(patient);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChange({ ...change, [name]: value });
  };

  const AddPatient = (e) => {

    
    let copy = [...patient, change];
    setPatient(copy);
    setShow(!show)
    
  };

  const removePatient = (e) => {
    const name = e.target.getAttribute("last_name");
    setPatient(...patient.filter(i => i.last_name !== name ));
    console.log("ok");
  };

  const showModal = () => {
      setShow(!show)
  }
  console.log()

  return (
    <div className="listepatient">
      <div className="listepatient_content">
        <h1>Bonjour Mr {state.last_name}</h1>
        <h1 className="listepatient_title">Liste de vos patient</h1>

        <ul className="listepatient_list">
          {patient &&
            patient.map((p) => (
              <li key={p.first_name} className="listepatient_listitem">
                <p>{p.first_name}</p>
                <p>
                  <b>{p.last_name.toUpperCase()}</b>
                </p>
                <AiIcons.AiFillCloseSquare className="listepatient_delete" name={p.firstname} onClick={removePatient}/>
               
              </li>
            ))}
        </ul>

        
        <button className="listepatient_button" onClick={showModal}>Ajouter un patient</button>
        {
            show ? <Modal show={show} addPatient={AddPatient} handleChange={handleChange} setShow={setShow} onClose={()=> setShow(!show)}/> : ""
        }
      </div>
    </div>
  );
};

export default ListePatient;