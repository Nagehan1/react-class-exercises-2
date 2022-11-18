import React from 'react'
import Child from './Child';

function Father() {
    let name=['oguz','pakize','nage']
    let age=[13,12,11,18,15];
  return (
    <div>
      <Child data={name} kata={age}/>  
    </div>
  )
}

export default Father