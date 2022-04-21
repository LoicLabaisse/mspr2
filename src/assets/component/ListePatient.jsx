import React, { useEffect, useState } from "react";
import "../css/listePatient.css";
import Modal from "./Modal";
import * as AiIcons from "react-icons/ai";
import axios from "axios";
import { useLocation } from "react-router";

const ListePatient = () => {
  const { state } = useLocation();
  console.log(state.id);
  const [change, setChange] = useState({
    id_medecin: state.id,
    first_name: null,
    last_name: null,
  });

  const [show, setShow] = useState(false);
  const [patient, setPatient] = useState([]);

  useEffect(() => {

    async function callData() {
      await axios
      .get(`${process.env.REACT_APP_API}/${state.id}/listePatient`)
      .then((res) => setPatient(res.data));
    }
    setPatient(patient)
    callData()
    
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setChange({ ...change, [name]: value });
  };

  const AddPatient = (e) => {
    e.preventDefault();
    let copy = [...patient, change];
    setPatient(copy);
    
    axios
      .post(`${process.env.REACT_APP_API}/patients/create`, change)
      .then((res) => console.log(res.data));
    setShow(!show);
  };

  const showModal = () => {
    setShow(!show);
  };
  console.log(state);

  return (
    <div className="listepatient">
      <div className="listepatient_content">
        <h1>Bonjour Mr {state.last_name}</h1>
        <h1 className="listepatient_title">Liste de vos patient</h1>

        <ul className="listepatient_list">
          {patient &&
            patient.map((p) => (
              <li key={p.id} className="listepatient_listitem">
                <p>{p.first_name}</p>
                <p>
                  <b>{p.last_name.toUpperCase()}</b>
                </p>
              </li>
            ))}
        </ul>

        <button className="listepatient_button" onClick={showModal}>
          Ajouter un patient
        </button>
        {show ? (
          <Modal
            show={show}
            addPatient={AddPatient}
            handleChange={handleChange}
            setShow={setShow}
            onClose={() => setShow(!show)}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ListePatient;
