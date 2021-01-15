import React from 'react';

const StockReport = (props) => {

  console.log(props.menuItems)
  return (
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
              <td>{menuItem.name}</td>
              <td>{menuItem.quantity}</td>
              <td>{menuItem.price}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan={4}>Select items to send to kitchen</td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default StockReport;
