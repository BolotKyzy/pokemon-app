import {connect} from "react-redux";
import React from 'react';
import './pokemon.css';
import { removeData, addData, fetchData, addedToFavoriteList} from '../../actions';

class PokemonList extends React.Component {

  componentDidMount() {
    this.props.fetchData();
    
  }

  render() {
    const { data, onDelete, addNewPokemon, onAddedToFavoriteList, favoritePokemons} = this.props;

    let newPokemonName = React.createRef();
    let newPokemonDescription = React.createRef();
    let newPokemonImageUrl = React.createRef();


    let createPokemon = () => {
        let newName = newPokemonName.current.value;
        let newDesc = newPokemonDescription.current.value;
        let newImgUrl = newPokemonImageUrl.current.value;
        addNewPokemon(newName, newDesc, newImgUrl);
        newPokemonName.current.value = '';
        newPokemonDescription.current.value = '';
        newPokemonImageUrl.current.value = '';
        
    }

    return (
        <>
        <div className = {"container"}>
        { data.map((item) => {
            const { id, name, imgUrl, description } = item;
            return (
                       <div className="bg-white rounded shadow border p-6 w-64" key = {id}>
                            <img src = {imgUrl} alt = {id}/>
                            <h5 className="text-3xl font-bold mb-4 mt-0" >{name}</h5>
                            <p className="text-gray-700 text-sm" >{description}</p>
                            <button onClick = { () => onAddedToFavoriteList(item)}><img src="https://image.flaticon.com/icons/png/512/263/263417.png" width="30px"/></button>
                            <button onClick = {() => onDelete(item)}><img src="https://image.flaticon.com/icons/png/512/3221/3221897.png" width="30px"/></button>
                        </div>
            )
        })}
        
    </div>
    <div>
  <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
          Pokemon name
        </label>
        <input ref = {newPokemonName} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name"/>
    </div>
    <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
          Pokemon description
        </label>
        <input ref = {newPokemonDescription} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3" id="pokeon desc" type="text" placeholder="Pokemon desc"/>
    </div>
     <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="url">
          Pokemon image URL
        </label>
        <input  ref = {newPokemonImageUrl} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="desc" type="text" placeholder="Pokemon desc"/>
    </div>
    <div className="flex items-center justify-between">
        <button onClick = {createPokemon} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">
          Add pokemon
        </button>
    </div>
  </form>
</div>
  
</div>

<h3>Favorite Pokemons</h3>
            { favoritePokemons.map((item) => {
                const { id, name, imgUrl, description } = item;
                return (
                           <div className="favorite-list" key = {id}>
                                <img  className = "favorite-img favorite-list-item" src = {imgUrl} alt = {id}/>
                                <h5 className="text-3xl font-bold mb-4 mt-0 favorite-list-item" >{name}</h5>
                                <p className="text-gray-700 text-sm " >{description}</p>
                            </div>
                )
        })}

</>
)
  }
}
const mapStateToProps = (state) => {

    return {
        data: state.pokemonData,
        favoritePokemons: state.favoritePokemons
    }
}
const mapDispatchToProps = {
    onDelete: removeData,
    addNewPokemon: addData,
    fetchData,
    onAddedToFavoriteList: addedToFavoriteList
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);