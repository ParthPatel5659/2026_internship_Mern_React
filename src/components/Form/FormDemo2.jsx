import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export const FormDemo2 = () => {
    const {register,handleSubmit}=useForm("");
     const [userData,setUserData]=useState("");
    const [issubmited,setissubmited]= useState(false);

    const submithandler=(data)=>{
        console.log(data);
        setUserData(data);
        setissubmited(true);
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo2</h1>
        <form onSubmit={handleSubmit(submithandler)}>
            <div>
                <lable>FIRST NAME</lable>
                <input type='text' placeholder='enter first name' {...register("firstName")}></input>
            </div>
            <div>
                <lable>LAST NAME</lable>
                <input type='text' placeholder='enter last name' {...register("lastName")}></input>
            </div>
            <div>
                <lable>AGE</lable>
                <input type='number' placeholder='enter age' {...register("age")}></input>
            </div>
            <div>
                <lable>COURSE</lable>
                <select type='options' {...register("course")}>
                    <option value="">SELECT COURSE</option>
                    <option value='MERN'>MERN</option>
                    <option value='python'>PYTHON</option>
                    <option value='java'>JAVA</option>
                </select>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
        {
             issubmited==true && <div>
                <h2>First Name:{userData.firstName}</h2>
                <h2>Last Name:{userData.lastName}</h2>
                <h2>Age:{userData.age}</h2>
                <h2>Course:{userData.course}</h2>
                </div>  
        }
    </div>
  )
}
