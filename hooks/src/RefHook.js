import React, { useEffect } from 'react'
import {useState,useRef}from "react";

function RefHook() {
    const [userInput ,setUserInput]=useState();
    const count=useRef(0);
    console.log(count);
    useEffect(()=>{
        // setUserInput(userInput+1);
        count.current = count.current+1;
    })
  return (
    <div>
        <input type='text' value={userInput} onChange={(e)=> setUserInput(e.target.value)}/>
      <h1>the number of times comp render:{count.current} </h1>
    </div>
  )
}

export default RefHook
