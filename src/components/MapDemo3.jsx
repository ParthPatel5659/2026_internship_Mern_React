import React from 'react'

const MapDemo3 = () => {
    var students=[
        {id:1,name:"abc",age:23,marks:78,city:'pune',gender:'male'},
        {id:2,name:"def",age:22,marks:67,city:'mumbai',gender:'female'},
        {id:3,name:"ghi",age:21,marks:45,city:'nagpur',gender:'male'},
    ]
  return (
    <div>
      <h3>Map Demo3</h3>
        <table className='table table-bordered'>
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
            <tbody>{
                students.map((student)=>{
                    return <tr>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.marks}</td>
                        <td>{student.city}</td>
                        <td>{student.gender}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default MapDemo3
