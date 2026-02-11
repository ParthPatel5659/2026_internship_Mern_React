import React, { useState } from 'react'

export const InputDemo2 = () => {
  const [name,setName] = useState("");
  const[gender,setgender]=useState("");
  const [country,setCountry]=useState("");

  const namehandler=(e)=>{
    setName(e.target.value);
  }
  const genderhandler=(e)=>{
    setgender(e.target.value);
  }
  return (
    <div style={{textAlign:"cente r"}}>
        <h1>InputDemo2</h1>
        <div>
          <lable>NAME:</lable>
          <input type="text" onChange={(event)=>{namehandler(event)}}></input>
          {name}
        </div>
        <div>
          <input type="radio" name="gender" value="male" onChange={(event)=>{genderhandler(event)}}></input>
          <lable>MALE</lable>
          <input type="radio" name="gender" value="female " onChange={(event)=>{genderhandler(event)}}></input>
          <lable>FEMALE</lable>
          <h1>{gender}</h1>
        </div>
        <div>
          <select onChange={(event)=>{setCountry(event.target.value)}}>
            <option value="">SELECT COUNTRY</option>
            <option value="INDIA">INDIA</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          <h1>{country}</h1>  
      
        </div>
    </div>
  )
}
