import React, { useState, useEffect } from 'react'
import { P } from './Styling'
import Button from './button'
import { updateOrder } from '../firebaseConfig'
import './Stopwatch.scss'

export default function Stopwatch({ timeStart, idDoc }) {
  const [time, setTime] = useState(0);

  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  useEffect(() => {
    const x = setInterval(() => {
      setTime(() => Date.now() - timeStart);
    }, 1000);
    return () => clearInterval(x);
  }, [timeStart]);

  const handleStop = () => {
    updateOrder(idDoc, {
      isDone: true,
      time: `${hours}h ${minutes}m ${seconds}s`,
    })
  }

  return (
    <>
      <div className="stopwatch">
        <P>
          {hours}
          {' '}
          :
          {minutes}
          {' '}
          :
          {seconds}
        </P>
      </div>
      <Button cName="btn-default send" text="TERMINAR" onClick={handleStop} />
    </>
  )
}
