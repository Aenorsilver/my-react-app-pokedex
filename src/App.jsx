import { useState } from "react"
import PokemonCard from "./components/PokemonCard"
import './App.css'
const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
function App() {
const [pokemonIndex, setpokemonIndex] = useState(0)

const previousButton = () => {
if (pokemonIndex > 0) {setpokemonIndex(pokemonIndex -1)}
}
const nextButton = () => {
if (pokemonIndex < pokemonList.length -1) {setpokemonIndex(pokemonIndex +1)}
}
let hidePreviousButton = null 
if (pokemonIndex > 0) {hidePreviousButton = <button onClick={previousButton}>Previous</button>} 
let hideNextButton = null 
if (pokemonIndex < pokemonList.length -1) {hideNextButton = <button onClick={nextButton}>Next</button>}


  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      {hidePreviousButton}
      {hideNextButton}
    </div>
  );
}
export default App
