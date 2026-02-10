import React from 'react'
import { EmployeesList } from './EmployeesList'

export const Employees = () => {
    var tittle = "EMPLOYEE App";

     var compnay = {
    name: "TCS",
    year: 2026,
   };

    var emp=[
        {id:1,name:"John",age:30,designation:"Developer"},
        {id:2,name:"Jane",age:25,designation:"Designer"},
        {id:3,name:"Bob",age:35,designation:"Manager"},
        {id:4,name:"Alice",age:28,designation:"Tester"}
    ]
  return (
    <div style={{textAlign:"center"}}>
            <h1>Employees</h1>
            <EmployeesList tittle={tittle} company={compnay} Employees={emp}/>
    </div>
  )
}
