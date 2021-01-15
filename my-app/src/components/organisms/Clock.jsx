import React from 'react';

const Clock = ()=>{

  let dayData = new Date();

  return(
    <div>
      <p>{dayData.getDate()}{dayData.getDay()}</p>
      <p>{dayData.getHours()}:{dayData.getMinutes()}</p>
    </div>
  )
}

export default Clock;
