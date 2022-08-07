import User from "./User"

const Users = () => {
    const handleAddUser = ():void =>{

    }
  return (
    <div>
        <h2>My Users</h2>
        <User name="rohomot" age={55} addUser={handleAddUser}/>
    </div>
  )
}

export default Users