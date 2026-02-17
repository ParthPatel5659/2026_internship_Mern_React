import axios from 'axios';
import React, { useState } from 'react'

export const ApiDemo2 = () => {
    const [message,setmessage]=useState("");
    const [users,setusers]=useState([]);

    const getuser=async()=>{
        try{
            const response= await axios.get("https://node5.onrender.com/user/user/");
            setmessage(response.data.message)
            setusers(response.data.data)
        }
        catch(error
        ){
            console.log(error)
        }

    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>ApiDemo2 Table</h1>

         <button onClick={()=>getuser()} >GET</button>
        <h1>MESSAGE={message}</h1>
        

        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
                {
            users.map((user)=>{
              
                return <tr key={user._id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>{user.IsActive ? "true": "false"}</td>
                </tr>
            })
        }
            </tbody>
        </table>
    </div>
  )
}
