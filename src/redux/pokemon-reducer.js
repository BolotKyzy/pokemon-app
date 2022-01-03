// import React, {useState} from 'react';
import firebase from '../utils/firebase';
require('firebase/database');
import { useState } from 'react';

let pokemonList = [];
const pokemonRef = firebase.database().ref("Pokemons");

const fetchData = () => {
    pokemonList = [];
    pokemonRef.on("value", (snapshot) => {
        const pokemons =  snapshot.val();
        for(let id in pokemons) {
            pokemonList.push( { id, ...pokemons[id] });
        }
    })
    return pokemonList;

}


const deletePokemon = (state, pokemon ) => {
    const pokemonRef = firebase.database().ref("Pokemons").child(pokemon.id );
    pokemonRef.remove();
    const favoriteIndex = state.favoritePokemons.findIndex(item => item.id === pokemon.id);

    if(favoriteIndex !== -1) {
        state.favoritePokemons = [
            ...state.favoritePokemons.slice(0, favoriteIndex),
            ...state.favoritePokemons.slice(favoriteIndex+1),
        ];

    }
    return fetchData();
}

const addPokemon = (state, name, desc, imgUrl) => {
    const pokemon = {
      name,
      description: desc,
      imgUrl
    }
    pokemonRef.push(pokemon);
    return fetchData();
}


const PokemonReducer = (state = fetchData(), action) => {

    switch (action.type) {
        case 'FETCH_DATA':
            return fetchData();
        case 'REMOVE_DATA':
            // console.log("reducer => ", action.payload);
            return deletePokemon(state, action.payload);
            case 'ADD_NEW_DATA':
                return addPokemon(state, action.payload[0], action.payload[1], action.payload[2]);
                   
        default:
            return fetchData();
    }
}
export default PokemonReducer;




