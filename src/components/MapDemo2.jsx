import React from 'react'

 export const MapDemo2 = () => {
    var users=[
        {id:1,firstName:"John", lastName:"Doe", age:46},
        {id:2,firstName:"Jane", lastName:"Doe", age:34},
        {id:3,firstName:"Mary", lastName:"Smith", age:23},
        {id:4,firstName:"James", lastName:"Johnson", age:18}
    ]
  return (
    <div>
      <h3>Map Demo2</h3>
      {
        users.map((user)=>{
            return <li>{user.id}-{user.firstName}-{user.lastName}-{user.age}</li>
        })
      }
    </div>
  )
}


