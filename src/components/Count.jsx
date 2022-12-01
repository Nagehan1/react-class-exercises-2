import React, { useState } from 'react'

function Count() {
const [count,SetCount]=useState(5);
 const dicrement=()=>{
    SetCount(count/10)
 }
 const increment=()=>{
    SetCount(count*10)
 }
 const reset=()=>{
    SetCount(0)
 }

    return (
    <div>
        <h1>{count}</h1>
        <h1 onClick={increment} >+</h1> 
        <h1 onClick={dicrement}>-</h1>
        <h1 onClick={reset}>reset</h1>
    </div>
  )
}

export default Count