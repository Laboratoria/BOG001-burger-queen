import React from 'react'

const Imagenesnav = (props) => {
    return (
        <div className="btnNav">
                <img src={props.srcImg} alt={props.altImg} />
                <p>{props.txtLabel}</p>
            </div>
    )
}

export default Imagenesnav
