import React, { FC } from 'react'
interface Props{
    name: String, 
    age: number,
    addUser: () => void
}

const User: FC<Props> = ({name, age, addUser}) => {

  return (
    <div>
        <h2>hellloooooo {name} with experiance </h2>
        <h2>age is:  {age}  </h2>
        <button onClick={addUser}>add me bro!</button>
    </div>
  )
}

export default User