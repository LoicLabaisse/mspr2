import React from 'react'
import './listePatient.css'

const ListePatient = () => {

    const patient = [{
        firstname:"Charlotte",
        lastname:"Menière"
    },{
        firstname:"Titouan",
        lastname:"Escorneboueu"
    },
    {
        firstname:"François",
        lastname:"Saura"
    },
    {
        firstname:"Loïc",
        lastname:"Labaisse"
    }]
  return (
    <div className='listepatient'>
        <div className="listepatient_content">
            <h1 className='listepatient_title'>Liste de vos patient</h1>

            <ul className='listepatient_list'> 
                {
                    patient && patient.map(p =>  (
                        <li className='listepatient_listitem'>
                            <p>{p.firstname}</p>
                            <p><b>{p.lastname.toUpperCase()}</b></p>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default ListePatient