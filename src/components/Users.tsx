import { useEffect, useState } from "react"
import UserModel from "../types/models"
import User from "./User"

const Users = () => {
    const [users, setusers] = useState<UserModel[]>([]);
    const [team, setTeam] = useState<UserModel[]>([])
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setusers(data))

    },[])


    const handleAddUser = (user: UserModel):void =>{
        const newTeam = {...team, user}
        setTeam(newTeam )
    }
  return (
    <div>
        <h2>My Users</h2>
        <h3>Team size: {team.length}</h3>
        {/* <User name="rohomot" age={55} addUser={handleAddUser}/> */}
        {
            users.map(user => <User user={user} addUser={handleAddUser}></User>)
        }
    </div>
  )
}

export default Users