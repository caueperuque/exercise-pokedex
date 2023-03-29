import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    const { id, name, type, averageWeight, image } = pokemon;
    const { value, measurementUnit } = averageWeight;
    return (
      <li key={ id }>
        <p>{name}</p>
        <p>{type}</p>
        <p>
          {`${value} ${measurementUnit}`}
        </p>
        <img src={ image } alt={ name } />
      </li>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
