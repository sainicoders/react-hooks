import React, { useEffect, useState } from 'react'

function CleanUp() {
    const[widthCount, setWidthCount]=useState(window.screen.width);
    const currentScreenwid =()=>{
    
    setWidthCount(()=> window.innerwidth);

    };
    useEffect(()=>{
        window.addEventListener('resize', currentScreenwid);
        return()=>{
            window.removeEventListener('resize',currentScreenwid);
        }
    });
  return (
    <div>
      <h1>this size of window is <span>{widthCount}</span></h1>
    </div>
  )
}

export default CleanUp
