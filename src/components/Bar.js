import React, {Fragment} from "react";
import "../App.css";

const Bar = () => {
  return (
    <Fragment>
    <div className="Bar">
      <h1 className="barIcon">icon</h1>
      <h1 className="barTitle">Burger Queen</h1>
      <h1 className="barMenu">menu</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          One of three columns
        </div>
      <div class="col-sm">
          One of three columns
      </div>
      <div class="col-sm">
          One of three columns
    </div>
  </div>
</div>
</Fragment>



  )
};
export default Bar;