import React from "react";
import Header from "../componentes/header";
import "../style/principalMesero.css";

class PrincipalMesero extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="card-body">
          <div className="form-group">
            <textarea
              name="description"
              rows="8"
              cols="98"
              id="miid"
              className="form-control"
              placeholder="____________________________________________________________"
            ></textarea>
          </div>
        </div>
        <div className='container'>
        </div>
      </React.Fragment>
    );
  }
}

export default PrincipalMesero;


