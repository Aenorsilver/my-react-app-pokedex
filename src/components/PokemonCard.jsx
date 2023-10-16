
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];
function PokemonCard()  { 
    
  const pokemon = pokemonList[1]
  
  if (pokemon.imgSrc!=null) {
     
    return (
        <div>
            <figure>
                 <img src={pokemon.imgSrc}/> 
               <figcaption>
                  <p> {pokemon.name} </p>
               </figcaption>
             </figure>
           
        </div>
    );
}
    return (
    <div>
     <p>
      ???
    </p>
    </div>  
)
}
export default PokemonCard;
