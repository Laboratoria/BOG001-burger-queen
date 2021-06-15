import React, {useState} from 'react'

const Item = (props) => {
    const [qty, setQty] = useState(0);
    return (
        <div>
            <h1>{props.qty} + '' + {props.item}S</h1>
        </div>
    )
}

export default Item
