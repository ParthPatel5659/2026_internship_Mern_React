import React from 'react'

export const FunctionDemo1 = () => {
    const test =()=>{
        alert("Button Clicked");
    }

    const text2=(x)=>{
        alert("value of x"+x);
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>FunctionDemo1</h1>

        <button onClick={test}>CLIK</button>

        <button onClick={()=>text2(100)}>CLIK2</button>
    </div>
  )
}
