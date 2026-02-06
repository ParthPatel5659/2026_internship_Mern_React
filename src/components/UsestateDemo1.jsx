import React, { useState } from 'react'

export const UsestateDemo1 = () => {

    const[count,Setcount] =useState(0);

    const increasecount=()=>{
        Setcount(count+1);
         console.log('count after increse ',count)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>UsestateDemo1</h1>
        <h1>Count={count}</h1>
        <button onClick={increasecount}>Increase Count</button>
    </div>
  )
}
