import React from 'react';
import 'firebase/firestore'

const CommandMenu = (props) => {

  console.log(props.menuItems)

  return (
    <div>
      <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Qty.</th>
          <th>Price</th>
          <th>Opt.</th>
        </tr>
      </thead>
      <tbody>
        {
          //Message to indicate empty command
          props.menuItems.length > 0 ?
          props.menuItems.map(menuItem => (
            <tr key={menuItem.id}>
              <td>{menuItem.item}</td>
              <td>1</td>
              <td>$ {menuItem.price} USD</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan={3}>Select items to send to kitchen</td>
            </tr>
          )
        }
      </tbody>
    </table>
    <button>Send to kitchen</button>
    </div>

  )
}

export default CommandMenu;
