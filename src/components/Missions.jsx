import React from 'react';
import Title from './Title';
import Mission from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div
        data-testid="missions"
        className="max-w-11/12"
      >
        <Title headline="Missões" />
        <div className="flex flex-wrap mt-5 items-center justify-center">
          {Mission.map((element) => (
            <MissionCard
              className="mission-card"
              key={ element.name }
              name={ element.name }
              year={ element.year }
              country={ element.country }
              destination={ element.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
