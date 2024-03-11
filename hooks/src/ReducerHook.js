import React, { useReducer, } from 'react';
const initialValue=0;

const reducer =(data,action)=>{
    // if(action.type==="INC"){
    //     return(state=state+1);
    // }
    // if(action.type==="DEC"){
    //     // return(state=state-1);
    //     let newNum=0;
    //     state>=1? (newNum=state-1):(newNum=0);
    //     return newNum;
    // }


    // return state;

    switch(action.type) {
        case "INC":
            return(data+1);
            case "DEC":
                let newNum=0;
                data>=1? (newNum=data-1):(newNum=0) ;
                return newNum;  
        default: 
            return data;
    
}
};

function ReducerHook() {

    // const[data,setData]=useState(0);
    const [data,dispatch]=useReducer(reducer,initialValue)
   
  return (
   

    <div>

         <button onClick={()=>dispatch({type:"INC"})}>+</button>
        <h1>{data}</h1>
        <button onClick={()=>dispatch({type:"DEC"})}>-</button>
      
        
        
        
    </div>
  )
}

export default ReducerHook;
