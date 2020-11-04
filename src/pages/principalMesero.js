import React from "react";
import Header from "../componentes/header";
import "../style/principalMesero.css";

class PrincipalMesero extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="card-body">
          <div className="form-group">
            <textarea
              name="description"
              rows="8"
              cols="98"
              id="miid"
              class="form-control"
              placeholder="____________________________________________________________"
            ></textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default PrincipalMesero;
