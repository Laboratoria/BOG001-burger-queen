
import React, { Fragment, useState } from 'react'
import uniqid from 'uniqid'

const Listadonombres = () => {

  //States area
  const [nombre, setNombre] = useState('')
  const [listanombres, setListaNombres] = useState([])
  const [modoEdicion, setModoEdicion] = useState(false)
  const [id, setId] = useState('')
  const [error, setError] = useState(null)

  //Functions area
  const addNombre = (e) => {
    e.preventDefault()
    if(!nombre.trim()){
      setError('El campo Nombre está vacío')
      return
    }
    const nuevoNombre = {
      id: uniqid(),
      tituloNombre: nombre
    }
    setListaNombres([...listanombres, nuevoNombre])
    setNombre('')
    setError(null)
  }

  const deleteNombre = (id) => {
    const nuevaArray = listanombres.filter(item => (item.id !== id))
    setListaNombres(nuevaArray)
  }

  const editar = (item) => {
    setModoEdicion(true)
    setNombre(item.tituloNombre)
    setId(item.id)
  }

  const editarNombre = (e) => {
    e.preventDefault()
    const nuevoArray = listanombres.map(item => item.id === id ? { id: id, tituloNombre: nombre } : item)
    setListaNombres(nuevoArray)
    setModoEdicion(false)
    setNombre('')
  }

  //Render area
  return (
    <Fragment>
      <div>
        <h2>Aplicación CRUD Básica</h2>
        <div className="row">

          <div className="col">
            <h2>Formulario para añadir nombres</h2>
            <form
              onSubmit={modoEdicion ? editarNombre : addNombre}
              className="form-group">
              <input
                onChange={(e) => { setNombre(e.target.value) }}
                className="form-control mb-3"
                type="text"
                placeholder="introduce el nombre"
                value={nombre}
              />
              <input className="btn btn-info btn-block"
                type="submit"
                value={modoEdicion ? "Editar nombre" : "Registrar nombre"}
              />
            </form>
            {
              error != null ? (
                <div className="alert alert-danger">
                  {error}
                </div>
              ) :
              (
                <div></div>
              )
            }
          </div>
          <div className="col">
            <h2>Listado de Nombres</h2>
            <ul className="list-group">
              {
                listanombres.map(item =>
                  <li key="{item.id}" className="list-group-item">
                    {item.tituloNombre}
                    <button
                      onClick={() => { editar(item) }}
                      className="btn btn-info float-right">
                      Editar
                    </button>
                    <button
                      onClick={() => { deleteNombre(item.id) }}
                      className="btn btn-danger float-right">
                      Borrar
                    </button>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Listadonombres;