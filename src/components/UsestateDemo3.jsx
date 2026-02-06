import React, { useState } from 'react'

export const UsestateDemo3 = () => {
    const [user,setuser]= useState(["Anil","Sunil","Kiran"]);

    const addUser=()=>{
        setuser([...user,"Ramesh"]);
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>UsestateDemo3</h1>
        {user.map((user)=>{
            return <li>{user}</li>
        })}

            <button onClick={addUser}>Add User</button>
    </div>
  )
}
