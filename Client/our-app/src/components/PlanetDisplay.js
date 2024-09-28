import React, { useState, useEffect } from 'react';
import './PlanetDisplay.css';
import planets from '../data/planets';

function PlanetDisplay() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  useEffect(() => {
    const storedPlanet = localStorage.getItem('selectedPlanet');
    console.log(storedPlanet)
    if (storedPlanet) {
      setSelectedPlanet(JSON.parse(storedPlanet));
    }
  }, []);

  // Determine the center position
  const centerX = 400; // Half of the width (assuming 800px width)
  const centerY = 300; // Half of the height (assuming 600px height)

  // Calculate positions for planets
  const planetPositions = planets.map((planet, index) => {
    if (selectedPlanet && selectedPlanet.name === planet.name) {
      // Position the selected planet at the center
      return { x: centerX, y: centerY };
    } else {
      // Distribute other planets around the selected planet
      const angle = ((index / (planets.length - 1)) * 2 * Math.PI) - Math.PI / 2; // Start from top
      const radius = 200; // Distance from center
      return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      };
    }
  });

  return (
    <div className="planet-display">
      {planets.map((planet, index) => {
        const position = planetPositions[index];
        return (
          <div
            key={planet.name}
            className={`planet-item1 ${
              selectedPlanet && selectedPlanet.name === planet.name ? 'selected' : ''
            }`}
            style={{
              left: `${position.x - 10}px`, // Adjust for dot radius
              top: `${position.y - 10}px`,
            }}
          >
            <div className="planet-dot"></div>
            <p>{planet.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PlanetDisplay;
