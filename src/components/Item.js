
import React from 'react'
import {P2} from './Styling'
import './Item.scss'

export default function Item() {
  return (
    <div className="bill-box">
       <P2 className="bill-box-quantities">10</P2>
      <P2>Hamburguesa simple</P2>
      <P2 className="bill-box-price">$10</P2>
      <img src="https://firebasestorage.googleapis.com/v0/b/burger-queen-ad2b2.appspot.com/o/delete%201.png?alt=media&token=5f147f45-3ed0-472a-b691-5134bc213a7a" alt="delete" className="bill-box-delete"></img>
    </div>
  )
}



