import React from "react";
import "./styles/botonesOpciones.css";
import items from '../items';

class BotonesOpciones extends React.Component {
    render() {
        const list = [];
        const listType = [];
        const listAdditions = [];
        const listSauces = []
        const data = items

        Object.values(data.data).forEach((e) => {

            if (e.type.includes('Tipo')) {
                list.push(
                    <React.Fragment key={e.id} >
                        <div className='botones' type="button">
                            <img className='imgPrincipal' src={e.img} alt='imagen' />
                            <div><center>{e.name}</center></div>
                        </div>
                    </React.Fragment>)
            }
        })
            return (
                <div>{list}</div>
                    
            )
        
    }
}

    export default BotonesOpciones;