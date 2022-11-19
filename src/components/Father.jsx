import React from 'react'
import Child from './Child';

function Father() {
    let name=['oguz','pakize','nage']
    let age=[13,12,11,18,15];
    const handleClick=()=>{
      return(alert("pist!"))
    }
  return (
    <div>
      <Child data={name} kata={age} click={handleClick}/> 

    </div>
  )
}

export default Father