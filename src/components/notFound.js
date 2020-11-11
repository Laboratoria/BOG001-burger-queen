import React from "react";
import icon from '../img/icon.png';




function notFound() {
    return (
       
            <div className="body-notfound">
                <div className="icon">
                <img src={icon} alt="icon" />
                <p>404 - Not Found</p>
        </div>
        </div>
       
    );
}

export default notFound;