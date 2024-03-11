import React, { useState } from 'react';

function Usestate() {

    const[data,setData]=useState(0);
   
  return (

    <div>
        <button onClick={()=>(setData(data+1))}>+</button>
        <h1>{data}</h1>
        <button onClick={()=>(data===0 ? setData(0):(setData(data-1)))}>-</button>
      
    </div>
  )
}

export default Usestate;
