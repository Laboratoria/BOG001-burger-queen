import React from 'react';
import Style from './clock.module.css';

const Clock = ()=>{

  let dayData = new Date();
  let day = dayData.getDay();
  //console.log(day)

  let stringDay;

  // eslint-disable-next-line default-case
  switch (day) {
    case 0:
    stringDay = 'Sunday';
    break;
    case 1:
    stringDay = 'Monday';
    break;
    case 2:
    stringDay = 'Tuesday';
    break;
    case 3:
    stringDay = 'Wednesday';
    break;
    case 4:
    stringDay = 'Thursday';
    break;
    case 5:
    stringDay = 'Friday';
    break;
    case 6:
    stringDay = 'Saturday';
    break;
  }

  const timestamp = Date.now(); // This would be the timestamp you want to format
  let clock = new Intl.DateTimeFormat('es-CO', {hour: '2-digit', minute: '2-digit'}).format(timestamp);

  return(
    <div className={`${Style.clockBox}`}>
      <p className={`${Style.lightText}`}>{stringDay} {dayData.getDate()}</p>
      <p className={`${Style.lightText}`}>{clock}</p>
    </div>
  )
}

export default Clock;
