"use client";
import { useState } from "react";


 export default function Counter(){
     const [count,setCount] = useState(0);

    return (
      <div className="p-6">
        <h1 className="text-3xl mb-4">
            Count : {count}
        </h1>
        <button onClick = {()=>{
            setCount(count+1)
        }} className="text-white bg-blue-400 px-4 py-2 rounded"> Increase</button>
        <button onClick={()=>{setCount(count-1)}}
        className="text-white bg-red-400 px-4 py-2 rounded">Decreases</button>
      </div>
       


    )

    
}