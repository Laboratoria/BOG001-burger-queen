
import React from 'react'
import {H3} from './Styling'

export default function Item() {
  return (
    <div className="bill-box">
       <H3 className="bill-box-quantities">10</H3>
      <H3>Hamburguesa simple</H3>
      <H3 className="bill-box-price">$10</H3>
      <img src="src/assets/delete .svg" alt="delete" className="bill-box-delete"></img>
    </div>
  )
}



