import React from 'react'

export const MapDemo5 = () => {
    var students=[
        {id:1,name:"abc",age:23,marks:78,city:'pune',gender:'male'},
        {id:2,name:"def",age:22,marks:67,city:'mumbai',gender:'female'},
        {id:3,name:"ghi",age:21,marks:45,city:'nagpur',gender:'male'},
    ]
  return (
    <div>
      <h3>Map Demo5</h3>
      <table className='table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Marks</th>
                <th>City</th>
                <th>Gender</th>
            </tr>
        </thead>
        <tbody>
            {
                students.map((student)=>{
                    return <tr style={{backgroundColor:student.gender == 'female' && "pink"}}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td style={{color: student.age>22 ?"red":"black"}}>{student.age}</td>
                        <td style={{backgroundColor: student.marks>70 && "yellowgreen"}}>{student.marks}</td>
                        <td style={{color: student.city == "nagpur" && "purple"}}>{student.city}</td> 
                        <td>{student.gender}</td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  )
}

