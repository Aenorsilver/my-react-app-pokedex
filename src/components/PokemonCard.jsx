

function PokemonCard(props)  { 

  
  console.log(props); 
  
  
  if (props.pokemon.imgSrc!=null) {
     
    return (
        <div>
            <figure>
                 <img src={props.pokemon.imgSrc}/> 
               <figcaption>
                  <p> {props.pokemon.name} </p>
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
