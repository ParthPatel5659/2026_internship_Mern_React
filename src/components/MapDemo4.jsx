import React from 'react'

export const MapDemo4 = () => {
    var citys=[
        {id:1,name:"pune",state:"MH",country:"India"},
        {id:2,name:"mumbai",state:"MH",country:"India"},
        {id:3,name:"banglore",state:"KA",country:"India"},
        {id:4,name:"chennai",state:"TN",country:"India"},
    ]
  return (
    <div>
      <h3>Map Demo 4</h3>
      <table border='2' align='center' >
        <thead>
            <tr>
                <th>ID</th>
                <th>City Name</th>
                <th>State</th>
                <th>Country</th>
            </tr>
        </thead>
        <tbody>
            {
                citys.map((city)=>{
                    return <tr> 
                        <td>{city.id}</td>
                        <td>{city.name}</td>
                        <td>{city.state}</td>
                        <td>{city.country}</td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  )
}

 
