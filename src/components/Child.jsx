import { Button } from 'bootstrap'
import React from 'react'

function Child(props) {
  return (
    <div>
{/* <ul>
  {props.data.map((nam)=>{
    return(    <li>{nam}</li>)
  })}  

</ul>
<ul>
    {props.kata.map((kat)=>{
        return(
            <li>{kat}</li>
        )
    })}
</ul> */}

<Button onClick={props.click} > click me</Button>
    </div>
  )
}

export default Child