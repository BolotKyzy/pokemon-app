import './App.css';
import store from './redux/redux-store';
import PokemonList from './components/pokemon-list/pokemon-list';
import store from './redux/redux-store';
// import firebase from "firebase/app"
// require('firebase/auth');

function App() {
  // var database = firebase.database();
  // console.log(database);

  return (
    <Provider store = {store}>
      <PokemonList/>
    </Provider>
  );
}

export default App;
