import React from "react";
import { useForm } from "react-hook-form";

export const FormWatch = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({mode:"onChange"});

  const submithandler = (data) => {
    console.log(data);
  };

   const password = watch("password", "");

  const validationSchema = {
    passwordValidation: {
      required: {
        value: true,
        message: "Password is required",
      },
    },
    ConfoirmPasswordValidation:{
        required:{
            value:true,
            message:"Confirm Password is required"
        },
        validate:(value)=>{
            return value === password  ||"Password not match"
        }
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>FormWatch</h1>
      <form onChange={handleSubmit(submithandler)}>
        <div>
          <label>Password</label>
          <input
            type="text"
            {...register("password", validationSchema.passwordValidation)}
          ></input>
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>

        <div>
            <p style={{ color: /[A-Z]/.test(password) ? "green" : "black" }} >1 Capital Latter</p>
            <p style={{ color:/[a-z]/.test(password) ? "green" : "black"}}>1 Small Latter</p>
            <p style={{color:/[0-9]/.test(password) ?"green" : "black"}}>1 Digit</p>
            <p style={{color:/[^A-Za-z0-9]/.test(password) ?"green":"black"}}>1 Special Latter</p>
            <p style={{ color: password.length >= 8 ? "green" : "black" }}>Minimum 8 Characters </p>
        </div>

        <div>
            <lable>Confirm Password</lable>
            <input type="text" {...register("confirmpassword",validationSchema.ConfoirmPasswordValidation)}></input>
            <p style={{ color: "red" }}>{errors.ConfoirmPasswordValidation?.message}</p>
        </div>
        <div>
            <input type="submit" />
        </div>

      </form>
    </div>
  );
};
