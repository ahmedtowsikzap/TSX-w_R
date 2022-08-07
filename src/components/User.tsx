import React, { FC } from 'react'
import UserModel from '../types/models'
// interface Props{
//     name: String, 
//     age: number,
//     addUser: () => void
// }
interface Props{
    user: UserModel,
    addUser: (user: UserModel) => void

}

const User: FC<Props> = ({user, addUser}) => {

  return (
    <div>
        <h2>hellloooooo {user.name} with experiance </h2>
        <h2>age is:  {user.email}  </h2>
        <button onClick={()=> addUser(user)}>add me bro!</button>
    </div>
  )
}

export default User