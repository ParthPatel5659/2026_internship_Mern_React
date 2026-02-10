import React from 'react'
import { SubEmployeesList } from './SubEmployeesList'


export const EmployeesList = (props) => {
     console.log("emplist ",props)
  return (
    <div style={{textAlign:"center"}}>
           <h1> Employees List</h1>
           {props.tittle}
           <h1>{props.company.name}</h1>
           <h1>{props.company.year}</h1>
              <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Designation</th>
                    </tr>
                </thead>
                <tbody>
                    {props.Employees.map((emp)=>{
                        return <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                            <td>{emp.designation}</td>
                        </tr>
                    })}
                </tbody>
              </table>

                <SubEmployeesList Employees={props.Employees}/>
    </div>
  )
}
   
