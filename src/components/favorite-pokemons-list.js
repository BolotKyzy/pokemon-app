import React from 'react';
import './pokemon-list/pokemon.css';


const FavoritePokemonList = ({favoritePokemons}) => {
    return (
        <div>
            <h3>Favorite Pokemons</h3>
            { favoritePokemons.map((item) => {
                const { id, name, imgUrl, description } = item;
                return (
                           <div className="bg-white rounded shadow border p-6 w-64" key = {id}>
                                <img src = {imgUrl} alt = {id}/>
                                <h5 className="text-3xl font-bold mb-4 mt-0" >{name}</h5>
                                <p className="text-gray-700 text-sm desc" >{description}</p>
                            </div>
                )
        })}
        </div>
    )
}


  
  
  export default FavoritePokemonList;