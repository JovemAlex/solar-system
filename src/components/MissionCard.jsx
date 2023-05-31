import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div
        data-testid="mission-card"
        className="flex flex-col border rounded items-start justify-center w-60 h-40 p-4
        m-5"
      >
        <p
          data-testid="mission-name"
          className="
          text-lg
          font-normal
          "
        >
          <i className="mr-3 fi fi-sr-star" />
          {name}
        </p>
        <p
          data-testid="mission-country"
          className="
          font-extralight
          "
        >
          <i className="mr-3 fi fi-sr-flag" />
          {country}
        </p>
        <p
          data-testid="mission-year"
          className="
          font-extralight
          "
        >
          <i className="mr-3 fi fi-sr-calendar" />
          {year}
        </p>
        <p
          data-testid="mission-destination"
          className="
          font-light
          "
        >
          <i className="mr-3 fi fi-sr-rocket-lunch" />
          {destination}
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
