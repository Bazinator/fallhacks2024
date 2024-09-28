import React from 'react';
import './PlanetDisplay.css';

function PlanetDisplay({ selectedPlanet }) {
  return (
    <div className="planet-display">
      {selectedPlanet ? (
        <div>
          <h2>{selectedPlanet.name}</h2>
          <img src={selectedPlanet.image} alt={selectedPlanet.name} />
        </div>
      ) : (
        <h2>Please select a planet</h2>
      )}
    </div>
  );
}