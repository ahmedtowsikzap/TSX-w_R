import { ChangeEvent, FormEvent, useState } from 'react'
interface User {
  name?: string,
  job?: string
}

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [user, setUser] = useState<User | null > (null)

    const handleIncrease = ():void => {
        setCounter(counter + 1)
    }
    const handleDesc = ():void => {
        setCounter(counter - 1)
    }
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();

      const userData = {
        name: 'Admi',
        job: 'dd'
      }
      setUser(userData)
    }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
         
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