import React, {useState, useEffect} from 'react'
import{ P } from './Styling'
import Button from './button'

export default function Stopwatch({timeStart}) {
    const [time, setTime] = useState(0);
    var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time % (1000 * 60)) / 1000);

    useEffect(()=>{
        let x = setInterval(() => {
            setTime(time =>  Date.now() - timeStart );
          }, 1000);
          return () =>  clearInterval(x);
    }, [timeStart]);

    const handleStop = () => {
    
        console.log(hours, minutes, seconds)
        //console.time(time)
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
