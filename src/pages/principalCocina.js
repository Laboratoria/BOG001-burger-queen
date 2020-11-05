import React from "react";
import HeaderCocina from "../componentes/HeaderCocina";
import '../style/principalCocina.css';

class PrincipalCocina extends React.Component {
    render() {
        return (
            <div>
                <div className= "Container"> 
                <HeaderCocina/>
                <div className="grid"> </div>
                </div>
            </div>
        )
    }
};

export default PrincipalCocina