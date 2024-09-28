import React, { useState } from 'react';
import PlanetDisplay from './PlanetDisplay';
import './PlanetInterface.css';

function PlanetInterface() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  // For testing, you can set a default planet
  // Remove or modify this in your actual implementation
  React.useEffect(() => {
    setSelectedPlanet({
      name: 'Mars',
    });
  }, []);

  return (
    <div className="planet-interface">
      <PlanetDisplay selectedPlanet={selectedPlanet} />
    </div>
  );
}

export default PlanetInterface;