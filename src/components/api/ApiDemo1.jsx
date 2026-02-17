import axios from 'axios';
import React, { useState } from 'react'
import { get } from 'react-hook-form';

export const ApiDemo1 = () => {
    const [message,setmessage]=useState("");
    const [users,setusers]=useState([]);

    const getuser= async()=>{
        const response= await axios.get("https://node5.onrender.com/user/user/");
        console.log(response);
        console.log(response.data);
        console.log(response.data.message);
        setmessage(response.data.message);
        console.log(response.data.data);
        setusers(response.data.data);
        get();
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>ApiDemo1</h1>
        <button onClick={()=>getuser()} >GET</button>
        <h1>MESSAGE={message}</h1>
                {
            users.map((user)=>{
                return <li>{user.name}</li>
               
            })
        }
            
    </div>
  )
}
