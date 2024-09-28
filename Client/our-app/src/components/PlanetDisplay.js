import React, { useState, useEffect } from 'react';
import './PlanetDisplay.css';
import planets from '../data/planets';

function PlanetDisplay() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  useEffect(() => {
    const storedPlanet = localStorage.getItem('selectedPlanet');
    console.log('Stored Planet:', storedPlanet);

    if (storedPlanet) {
      setSelectedPlanet(storedPlanet);
    }
  }, []);

  useEffect(() => {
    console.log('Selected Planet State Updated:', selectedPlanet);
  }, [selectedPlanet]);

  const centerX = 400;
  const centerY = 300;

  // Exclude the selected planet
  const otherPlanets = planets.filter(
    (planet) => planet.name !== selectedPlanet
  );

  // Calculate positions for other planets
  const otherPlanetsPositions = otherPlanets.map((planet, index) => {
    const angle =
      (index / otherPlanets.length) * 2 * Math.PI - Math.PI / 2;
    const radius = 200;
    return {
      name: planet.name,
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  });

  // Include the selected planet
  const planetPositions = [
    { name: selectedPlanet, x: centerX, y: centerY },
    ...otherPlanetsPositions,
  ];

  return (
    <div className="planet-display">
      {/* SVG for lines */}
      <svg
        className="planet-lines"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
      >
        {otherPlanetsPositions.map((pos) => (
          <line
            key={pos.name}
            x1={centerX}
            y1={centerY}
            x2={pos.x}
            y2={pos.y}
            className="planet-line"
          />
        ))}
      </svg>

      {planetPositions.map((pos) => (
        <div
          key={pos.name}
          className={`planet-item1 ${
            selectedPlanet === pos.name ? 'selected' : ''
          }`}
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
          }}
        >
          <div className="planet-dot"></div>
          <p>{pos.name}</p>
        </div>
      ))}
    </div>
  );
}

export default PlanetDisplay;
