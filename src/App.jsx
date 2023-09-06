import {useState, useRef} from 'react'
import './App.css'
import Button from './Button'

export default function App() {
  const [start, setStart] = useState(null)
  const [now, setNow] = useState(null)
  const intervalRef = useRef(null)

  function handleStart() {
    setStart(Date.now())
    setNow(Date.now())    
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setNow(Date.now())
    }, 100)
  }
  
  function handleStop() {
    clearInterval(intervalRef.current)
    console.log(now, start);
  }

  let seconds = (now&&start) ? (now-start)/1000 : 0

  return (
    <div className='timer'>
       <h1>Stop Watch</h1>
       <h1><span>{seconds.toFixed(2)}</span></h1>
       <Button onClick={handleStart} title='Start' />       
       <Button onClick={handleStop} title='Stop' />       
    </div>
  )
}
