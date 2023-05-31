import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div
        data-testid="planet-card"
        className="flex flex-col border rounded items-center w-60 p-2
        m-5"
      >
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className="w-60 m-5"
        />
        <hr className="w-48" />
        <p
          data-testid="planet-name"
          className="p-1 border rounded m-5"
        >
          {planetName}
        </p>
      </div>

    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
