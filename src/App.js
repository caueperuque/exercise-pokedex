import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import pokemonList from './data';

class App extends React.Component {
  render() {
    return (
      <Pokedex pokemonList={ pokemonList } />
    );
  }
}

export default App;
