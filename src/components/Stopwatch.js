import React, {useState, useEffect} from 'react'
import{ P } from './Styling'
import Button from './button'
import {updateOrder} from '../firebaseConfig'



export default function Stopwatch({timeStart, idDoc}) {
    const [time, setTime] = useState(0);


   let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time % (1000 * 60)) / 1000);


    useEffect(()=>{
      let x = setInterval(() => {
          setTime(time =>  Date.now() - timeStart );
        }, 1000);
        return () =>  clearInterval(x);
  }, [timeStart]);



    const handleStop = () => {
     updateOrder(idDoc, {
       isDone: true,
       time:`${hours}h ${minutes}m ${seconds}s`
     })

    }


    return (
        <>
        <div className="stopwatch">
        <P>
            {hours} :  {minutes} : {seconds}
        </P>
      </div>
      <Button cName="btn-default send" text="Terminar" onClick={handleStop}></Button>
      </>
    )
}
