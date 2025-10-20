import React , {useState, useEffect}from 'react'

function ClockTimer() {
    const[time, setTime] = useState(0);  // managing the state we use useState

    useEffect(() => {    // for creating and clearing the interval we use useEffect
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1)
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [])
  return (
    <div>
          <h2>Time: {time}seconds</h2>
    </div>
  )
}

export default ClockTimer