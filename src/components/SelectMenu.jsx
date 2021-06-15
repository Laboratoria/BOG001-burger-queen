import React, { useState } from 'react';
import MenuBreakfast from './MenuBreakfast';
import MenuSupper from './MenuSupper';

const SelectMenu = () => {

  const [menu, setMenu] = useState('false');

  const Breakfast = () =>{
    setMenu(true);
  }

  const Supper = () =>{
    setMenu(false);
  }

  return (
    <div>
      <div>
        <h1>Selecciona el Menú</h1>
        <button className="button" onClick={Breakfast}>
          Desayunos
        </button>
        <button className="button" onClick={Supper}>
          Almuerzos y Cenas
        </button>
      </div>

      <div>{menu
        ? <MenuBreakfast />
        : <MenuSupper />
      }</div>

    </div>
  );
}
export default SelectMenu