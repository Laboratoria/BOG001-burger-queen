import React from 'react'
const { Fragment } = require("react")

const Ingreso = () => {
  return (
    <Fragment>
      <div className="welcome">
        <h2>BURGER</h2>
        <h1>QUEEN</h1>
        <button className="startOrder">Iniciar Pedido</button>
      </div>
    </Fragment>
  );
}

function LoginView() {
  return (
    <div className="backgraund">
    <Ingreso/>
    </div>
  )
}

export default LoginView;
