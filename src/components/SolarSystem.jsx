import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div
        data-testid="solar-system"
        className="max-w-11/12"
      >
        <Title headline="Planetas" />
        <div className="flex flex-wrap mt-5 items-center justify-center">
          {Planets.map((element) => (
            <PlanetCard
              className="planet-card"
              key={ element.name }
              planetName={ element.name }
              planetImage={ element.image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
