import { useEffect, useState } from 'react'

function App() {

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
    <div className='w-full min-h-screen flex flex-col items-center justify-center py-12 bg-radial from-rose-200 to-indigo-300'>
      {/* <h1 className='text-6xl font-bold pb-12'>Stopwatch</h1> */}
      <div className='text-8xl pb-10'>
          <span>{("0" + Math.floor((time/60000)) % 60).slice(-2)}:</span>
          <span>{("0" + Math.floor((time/1000)) % 60).slice(-2)}:</span>
          <span>{("0" + Math.floor((time/10)) % 100).slice(-2)}</span>
        </div>
        <div>
          {running ? <button onClick={() => {setRunning(false)}} className='bg-red-300'>Stop</button> : <button onClick={() => {setRunning(true)}} className='bg-green-300'>Start</button>}
          
          <button onClick={() => {setTime(0)}} className='bg-blue-200'>Reset</button>
          
        </div>
      </div>
    </>
    
  )
  
}


export default App
