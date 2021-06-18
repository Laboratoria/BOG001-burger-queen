import React from 'react'

const ListItem = (props) => {

    return (
        <div>
            <h3>{props.id} + '' + {props.qty} + '' + {props.item} + '' + '$' + {props.price} + '' + '$' + {props.price * props.qty}</h3>
        </div>
    )
}

export default ListItem
