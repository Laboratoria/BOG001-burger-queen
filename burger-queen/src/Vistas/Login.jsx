import React from 'react';
import { useHistory } from "react-router-dom";
const { Fragment } = require("react");



const Ingreso = () => {
  const history = useHistory();
  return (
    <Fragment>
      <div className="welcome">
        <h2>BURGER</h2>
        <h1>QUEEN</h1>
        <button className="startOrder" onClick={() => history.push("/contacto")}>Iniciar Pedido</button>
      </div>
    </Fragment>
  );
}

function LoginView() {
  return (
    < Fragment className="backgraund">
    <Ingreso/>
    </Fragment>
  )
}

export default LoginView;
