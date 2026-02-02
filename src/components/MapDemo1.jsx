import React from 'react'

export const MapDemo1 = () => {
    let cars = ['BMW', 'Volvo', 'Saab', 'Ford', 'Fiat', 'Audi'];
  return (
    <div>
      <h3>Map demo1</h3>
      {
        cars.map((car)=>{
            return <h3>{car}</h3>
        })
      }
    </div>
  )
}

 
