import React from "react";
import HeaderCocina from "../componentes/HeaderCocina";

import '../style/Layout.css';

class Layout extends React.Component {
    render() {
        return (
            <div>
                <div className= "Container"> 
                <HeaderCocina/>
                <div className="grid"> 
                </div>
                </div>
            </div>
        )
    }
};

export default Layout