import React, {useState, useEffect} from 'react'
import Button from './button'

export default function Stopwatch() {
    const [time, setTime] = useState({minute: 0, second: 0});

    useEffect(()=>{
        setInterval(() => {
            setTime(time => {
              return {
                minute: time.second === 59 ? time.minute + 1 : time.minute,
                second: time.second === 59 ? 0 : time.second + 1
              };
            });
          }, 1000);
    }, []);

    const handleStop = () =>{
        clearInterval(time)
        console.log(time)
    }
    return (
        <>
        <div className="stopwatch">
        {time.minute < 10 ? "0" + time.minute : time.minute} :
        {time.second < 10 ? "0" + time.second : time.second}
      </div>
      <Button cName="btn-default send" text="Terminar" onClick={handleStop}></Button>
      </>
    )
}
