
import React from 'react'
import Button from '../button'
import { P } from '../Styling'
import './Home.scss'

export default function Home() {
  return ( 
    <div id='home'>
      <section className='home-section'>
      <h1>Burger Queen</h1>
      </section>
      <section className='home-section'>
      <label > <P>Escribe tú nombre</P>   </label>
      <input type="text" placeholder="Escribe tú nombre"/>
    
      <P>Escoge tú rol</P>
      <div>
      <Button cName="btn-default" text="Chef" />
      <Button cName="btn-default" text="Mesero" />
      </div>
      </section>
    </div>
  )
}

