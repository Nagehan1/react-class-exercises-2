import { useEffect, useState } from "react"
import React from 'react'

function PokemonMoves(props) {
const[pokemonData,setpokemonData]=useState(null)

useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        setpokemonData(data)
    })
},[props.pokemonId])


  return (
    <div>
{pokemonData ?(
      <div>
        <p>{pokemonData.name}'s moves:</p>
        <ul>
          {pokemonData.moves.map((move, index) => {
            return <li key={index}>{move.move.name}</li>;
          
          })}
        </ul>
      </div>
    ):
    (
  
    null)
  }


    </div>
  )
}

export default PokemonMoves