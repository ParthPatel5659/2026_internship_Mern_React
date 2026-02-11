import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {

    const {register,handleSubmit}=useForm("");
    const [userData,setUserData]= useState("");
    const [issubmited,setissubmited]= useState(false);

    const submithandler=(data)=>{
        console.log(data);
        setUserData(data);
        setissubmited(true);
    }
  return (
    <div>
        <h1>FormDemo1</h1>
        <form onSubmit={handleSubmit(submithandler)}>
          <div>
            <label>NAME</label>
            <input type='text' placeholder='enter name' {...register("firstName")}></input>
          </div>
          <div>
            <lable>Age</lable>
            <input type='number' placeholder='enter age' {...register("age")}></input>
          </div>
          <div>
            <lable>Gender</lable>
            male:<input type='radio' value='male' {...register("gender")}></input>
            female:<input   type='radio' value='female' {...register("gender")}></input>
          </div>
          <div>
            <lable>Hobbies</lable>
            reading:<input type='checkbox' value='reading' {...register("hobbies")}></input>
            travelling:<input type='checkbox' value='travelling' {...register("hobbies")}></input>
            coding:<input type='checkbox' value='coding' {...register("hobbies")}></input>  
          </div>
          <div>
            <input type='submit' value='submit'></input>    
          </div>
        </form>
        {
            issubmited==true && <div>
                <h2>First Name:{userData.firstName}</h2>
                <h2>Age:{userData.age}</h2>
                </div>
        }
    </div>
  )
}
