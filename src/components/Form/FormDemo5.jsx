import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => { 
    const{register,handleSubmit,formState:{errors}}=useForm();

    const validationSchema={
        NameValidator:{
            required:{
                value:true,
                message:"Name is Required*"
            }
        },
        ContectValidator:{
            required:{
                value:true,
                message:"Contect number is required*"
            },
            minLength:{
                value:10,
                message:"min length should be 10*"
            },
            maxLength:{
                value:10,
                message:"max length should be 10*"
            }
        },
        EmailValidator:{
            required:{
                value:true, 
                message:"Email is required*"
            },
            pattern:{
                value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message:"invalid email address*"
            }
        }
    }

    const submithandler=(data)=>{
        alert(".....form submitted.....");
         console.log(data);
        }
  return (
    <div style={{textAlign:"center"}}>
      <h1>FormDemo5</h1>
      <form onSubmit={handleSubmit(submithandler)}>
        <div>
              <lable>NAME:</lable>
              <input type='text' placeholder='name' {...register("name",validationSchema.NameValidator)}></input>
              {errors.name?.message}
        </div>
        <div>
              <label>CONTECT NUMBER</label>
              <input type='number' placeholder='phone number' {...register("number",validationSchema.ContectValidator)}></input>
                {errors.number?.message}
        </div>
        <div>
            <label>EMAIL</label>
            <input type='text' placeholder='email' {...register("email",validationSchema.EmailValidator)}></input>
            {errors.email?.message}
        </div>
        <div>
            <input type='submit'></input>
        </div>
       </form>
    </div>
  )
}
     