import React from "react";
import icon from '../img/icon.png';




function notFound() {
    return (
       
            <div className="body-notfound">
                <div className="icon">
                <img src={icon} alt="icon" />
                <h1>404</h1>
                <h2>Page not found</h2>
        </div>
        </div>
       
    );
}

export default notFound;