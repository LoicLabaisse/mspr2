import React from 'react'
import "../css/modal.css"
import * as AiIcons from 'react-icons/ai'
const Modal = (props) => {

    if(!props.show){
        return null
    }

   
  return (
    <div className='modal'>
        <div className="modal_content">
        <h1>Ajouter un Patient</h1>

        <div className="modal_global_input">
          <label>Nom de famille :</label>
        <input className='modal_input' name="lastname" onChange={props.handleChange} required />
        <label>Prénom :</label>
        <input className='modal_input' name="firstname" onChange={props.handleChange} required />
        </div>

        <button className='modal_button' onClick={props.addPatient}>Ajouter Patient</button>

        <AiIcons.AiOutlineClose className='modal_close' onClick={props.onClose}/>
        </div>
    </div>
  )
}

export default Modal