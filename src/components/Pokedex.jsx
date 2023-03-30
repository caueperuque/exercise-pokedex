import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

export default class Pokedex extends Component {
  render() {
    const { pokemonList } = this.props;
    return (
      <main>
        <h1> Pokédex </h1>
        <ul className="pokedex">
          {
            pokemonList
              .map((pokemon) => <Pokemon key={ pokemon.id } pokemon={ pokemon } />)
          }
        </ul>
      </main>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    avarageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  })),
};
