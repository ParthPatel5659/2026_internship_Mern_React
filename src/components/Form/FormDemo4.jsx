import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {
    const{register,handleSubmit,formState:{errors}}=useForm();


    const validationSchema={
        ageValidator:{
            required:{
                value:true,
                message:"Age is Required*"
            },
            min:{
                value:18,
                message:"min age should be 18*"
            },
            max:{
                value:60,
                message:"max age should be 60*"
            }
        },
        addValidator:{
          required:{
            value:true,
            message:"Address is required"
          },
          minlegth:{
            value:10,
            message:"min length should be 10*"
          },
          maxLength:{
            value:100, 
            message:"max length should be 100*"
          }
        }

}
    const submithandler=(data)=>{
      alert(".....form submitted.....")
      console.log(data);}
    

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo4</h1>
       <form onSubmit={handleSubmit(submithandler)}>
        <div>
            <lable>NAME:</lable>
            <input type='text' placeholder='name' {...register("name",{required:{value:true, message:"name is required"}})}></input>
        </div>
        <div>
             <label>AGE</label>
                <input type='number' {...register("age",validationSchema.ageValidator)}></input>
                {errors.age && errors.age.message}
        </div>
        <div>
            <label>ADD:</label>
            <input type='text' placeholder='add' {...register("add",validationSchema.addValidator)}></input>
            {errors.add?.message}
            
        </div>
        <div>
            <input type='submit'></input>
        </div>
       </form>
    </div>
  )
}

