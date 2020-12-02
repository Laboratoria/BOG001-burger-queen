import React from "react";
import "./styles/botonesOpciones.css";
import items from '../items';

class BotonesOpciones extends React.Component {
    render() {
        const list = [];
        const data = items
        Object.values(data.data).forEach((e) => {
            if (e.additions.includes('yes')) {
                list.push(
                    <React.Fragment key={e.id} >
                        <div className='botones' type="button">
                            <img className='imgPrincipal' src={e.img} alt='imagen' />
                            <div><center>{e.name}</center></div>
                        </div>
                    </React.Fragment>)
            }
        })
        console.log(list)
            return (
                <div>{list}</div>
            )
        
    }
}
    export default BotonesOpciones;