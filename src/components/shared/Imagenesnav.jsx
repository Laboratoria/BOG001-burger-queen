import React from 'react'

const Imagenesnav = (props) => {
    return (
        <li>
            <img src={props.srcImg} alt={props.altImg} />
            <p>{props.txtLabel}</p>
        </li> 
    )
}

export default Imagenesnav
