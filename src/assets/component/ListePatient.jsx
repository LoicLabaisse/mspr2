import React, { useEffect, useState } from "react";
import "../css/listePatient.css";
import Modal from "./Modal";
import * as AiIcons from 'react-icons/ai'
import axios from "axios";


const ListePatient = () => {
  const [change, setChange] = useState({
    firstname: null,
    lastname: null,
  });

  const [show,setShow] = useState(false)


//   useEffect(()=> {
//         axios.get(`${process.env.REACT_API}/${medecin.id}/listepatient`).then(res => console.log(res.data))
//   },[])

  const patient = [
    {
      firstname: "Charlotte",
      lastname: "Menière",
    },
    {
      firstname: "Titouan",
      lastname: "Escorneboueu",
    },
    {
      firstname: "François",
      lastname: "Saura",
    },
    {
      firstname: "Loïc",
      lastname: "Labaisse",
    },
  ];

  const [updateList, setUpdateList] = useState(patient);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChange({ ...change, [name]: value });
  };

  const AddPatient = (e) => {

    let copy = [...patient];
    copy = [...copy, change];
    setUpdateList(copy);
    setShow(!show)
    
  };

  const removePatient = (e) => {
    const name = e.target.getAttribute("firstname");
    setUpdateList(patient.filter((item) => item.firstname !== name));
    console.log("ok");
  };

  const showModal = () => {
      setShow(!show)
  }

  return (
    <div className="listepatient">
      <div className="listepatient_content">
        <h1 className="listepatient_title">Liste de vos patient</h1>

        <ul className="listepatient_list">
          {updateList &&
            updateList.map((p) => (
              <li className="listepatient_listitem">
                <p>{p.firstname}</p>
                <p>
                  <b>{p.lastname.toUpperCase()}</b>
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