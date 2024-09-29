// PlanetSelection.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Planetselection.css';

const planets = [
  { name: 'Mercury', icon: '☿️' },
  { name: 'Venus', icon: '♀️' },
  { name: 'Earth', icon: '🌍' },
  { name: 'Mars', icon: '♂️' },
  { name: 'Jupiter', icon: '♃' },
  { name: 'Saturn', icon: '♄' },
  { name: 'Uranus', icon: '♅' },
  { name: 'Neptune', icon: '♆' },
];

function PlanetSelection() {
  const navigate = useNavigate();

  const handlePlanetSelect = (planetName) => {
    // Store the selected planet in localStorage
    localStorage.setItem('selectedPlanet', planetName);

    // Navigate to the PlanetInterface
    navigate('/planet');
  };

  return (
    <div className="imagecontainer">
      <div className="planet-selection">
        <h1>The Intergalactic Transmitter!</h1>

        <div className="textbox">
          <p>
            Send your messages across the stars at the speed of light! We provide an intergalactic messaging service. Communicate with other societies, send war declarations, talk about your favorite morning routine, whatever! All for the small price of 600 space credits per message! Prices scale with the speed sent!
          </p>
        </div>
        <h2>Please select which planet you are from!</h2>
        <div className="planet-grid">
          {planets.map((planet) => (
            <div
              key={planet.name}
              className="planet-item"
              onClick={() => handlePlanetSelect(planet.name)}
            >
              <div className="planet-icon">{planet.icon}</div>
              <div className="planet-name">{planet.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlanetSelection;

