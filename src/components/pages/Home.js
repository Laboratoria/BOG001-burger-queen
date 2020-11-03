
import React, {useContext, useState} from 'react'
import Button from '../button'
import { H } from '../Styling'
import './Home.scss'
import logo from "../../assets/Logo.png"
import { AppContext } from "../../AppContext";

export default function Home() {
  let { employee, setEmployee} = useContext(AppContext);
  const [name, setName] = useState(' ');

  const handleEmployee = (e) => {
    setName(e.currentTarget.value)
  }
console.log(name, employee);
  return ( 
    <div id='home'>
      <section className='home-section'>
      <img src={logo} alt="Logo"/>
      <H>"Fresco y autentico"</H>
      </section>
      <section className='home-section'>
        <div>
      <label > <H>Escribe tú nombre</H>   
      <input type="text"  className='name-employee' onChange={(e) => handleEmployee(e)} placeholder="Escribe tú nombre"/>
      </label>
      <H>Escoge tú rol</H>
      <Button cName="btn-home" text="CHEF" onClick={()=> { window.location = "/pedidos"; setEmployee(name)}}></Button>
      <Button cName="btn-home" text="MESERO" onClick={()=> window.location = "/nueva-orden"}/>
      </div>
      </section>
    </div>
  )
}

