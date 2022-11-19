import React from "react";
import './App.css';

import BestPokemon from './components/pokedex/BestPokemon';
import CaughtPokemon from './components/pokedex/CaughtPokemon';
import Logo from './components/pokedex/Logo'

const appName = "CYF's";
const abilities = ["Anticipation", "Adaptability", "Run-Away"];
const date = new Date().toLocaleDateString();

function App() {
const logWhenClicked =()=>{
  console.log("hello")
}
  return (
    <div>
     <Logo click={logWhenClicked} appName={appName} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
     
      {/* <Count/> */}
    </div>
  );
}

export default App;
