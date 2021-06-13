
import React, { Fragment, useState } from 'react'

const Formulario = () => {
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState('')
  const Validar = (event) => {
    event.preventDefault()
    console.log('Presionado el botón')
    if (!nombre.trim()) {
      console.log('El campo Nombre está vacío')
      return
    }
    if (!edad.trim()) {
      console.log('El campo Edad está vacío')
      return
    }
  }
  return (
    <Fragment>
      <div className="container">
        <form onSubmit={Validar} className="form-group">
          <input
            placeholder="Name"
            className="form-control mb-3"
            type="text"
            onChange={(e) => { setNombre(e.target.value) }}
          />
          <input
            placeholder="Age"
            className="form-control mb-3"
            type="text"
            onChange={(e) => { setEdad(e.target.value) }}
          />
          <input placeholder="Name" className="btn btn-info btn-block" type="submit" />
        </form>
      </div>
    </Fragment>
  )
}
export default Formulario