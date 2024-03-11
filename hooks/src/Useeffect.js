import React, { useEffect, useState } from 'react';


function Useeffect() {

  const[data,setData]=useState(0);
 
 useEffect(()=>{
  document.title=data;
 },[data])

  return (
//     <>
//     <h1 class="text-3xl font-bold underline">
//     Hello world!
//   </h1>
//   <div class="backdrop-brightness-50 bg-white/30 ...">
//   <h1>yfgiuij</h1>
// </div>
// <div class="backdrop-brightness-125 bg-white/30 ...">
//   <h1>guipojk</h1>
// </div>
// <div class="backdrop-brightness-200 bg-white/30 ...">
  
// </div>

// <button type="button" class="cursor-pointer ...">
//   Submit
// </button>
// <button type="button" class="cursor-progress ...">
//   Saving...
// </button>
// <button type="button" disabled class="cursor-not-allowed ...">
//   Confirm
// </button>
// <textarea class="resize-y rounded-md"></textarea>

// <p class="font-sans ...">The quick brown fox ...</p>
// <p class="font-serif ...">The quick brown fox ...</p>
// <p class="font-mono ...">The quick brown fox ...</p>
//     </>
    <div>
              <button onClick={()=>(setData(data+1))}>+</button>
        <h1>{data}</h1>
        <button onClick={()=>(data===0 ? setData(0):(setData(data-1)))}>-</button>
    </div>
  )
}

export default Useeffect
