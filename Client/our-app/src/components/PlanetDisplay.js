import React from 'react';
import './styles/PlanetsDisplay.css';
import planets from '../data/planets';

function PlanetsDisplay({ selectedPlanet }) {
  return (
    <div className="planets-display">
      {planets.map((planet) => (
        <div
          key={planet.name}
          className={`planet-item ${
            selectedPlanet && selectedPlanet.name === planet.name ? 'selected' : ''
          }`}
        >
          <img src={planet.image} alt={planet.name} />
          <p>{planet.name}</p>
        </div>
      ))}
    </div>
  );
}

export default PlanetsDisplay;