import { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const handleIncrease = ():void => {
        setCounter(counter + 1)
    }
    const handleDesc = ():void => {
        setCounter(counter - 1)
    }
  return (
    <div>
        <h1>Counter Option</h1>
        <h2>{counter}</h2>
        <button onClick={handleIncrease}>Increase</button> 
        <button onClick={handleDesc}>Desc</button> 
    </div>
  )
}

export default Counter