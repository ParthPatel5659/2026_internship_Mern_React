import React from 'react'

export const MapDemo6 = () => {
    var Product=[
        {id:1,name:"Pen",price:10,colour:'blue',item:'stationery'},
        {id:2,name:"Pencil",price:5,colour:'black',item:'stationery'},
        {id:3,name:"fan",price:30,colour:'white',item:'Home'},
        {id:4,name:"Sharpener",price:7,colour:'pink',item:'stationery'},
        {id:5,name:"Marker",price:15,colour:'green',item:'stationery'},
    ]
  return (
    <div>
        <h3>Map Demo6</h3>
  <table className='table'>
        <thead>
            <tr>
                <th>ID</th>     
                <th>Name</th>
                <th>Price</th>
                <th>Colour</th>
                <th>Item</th>
            </tr>
        </thead>
        <tbody> 
            {   
                Product.map((prod)=>{
                    return <tr style={{backgroundColor: prod.price>10 && "lightgrey"}}>
                        <td>{prod.id}</td>          
                        <td>{prod.name}</td>
                        <td style={{color: prod.price>10 ?"red":"black"}}>{prod.price}</td>
                        <td style={{backgroundColor: prod.colour}}>{prod.colour}</td>
                        <td >{prod.item}</td>
                    </tr>
                })
            }
        </tbody>
  </table>
    </div>
  
  )
}
