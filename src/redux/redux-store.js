import { createStore } from "redux";
import PokemonReducer from "./pokemon-reducer";
import favoritePokemonsReducer from "./favorite-pokemons-reducer";

const reducer = (state , action) => {
    return {
        pokemonData: PokemonReducer(state, action),
        favoritePokemons: favoritePokemonsReducer(state, action)
    }

};

let store = createStore(reducer);

export default store;