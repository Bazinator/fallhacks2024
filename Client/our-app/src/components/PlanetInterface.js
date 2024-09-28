import React, { useState } from 'react';
import PlanetDisplay from './PlanetDisplay';
import MessageTerminal from './MessageTerminal';
import './PlanetInterface.css';

function PlanetInterface() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  // For testing, you can set a default planet
  // Remove or modify this in your actual implementation
  React.useEffect(() => {
    setSelectedPlanet({
      name: 'Mars',
      image: require('../assets/planets/mars.png'),
    });
  }, []);

  return (
    <div className="planet-interface">
      <PlanetDisplay selectedPlanet={selectedPlanet} />
      <MessageTerminal />
    </div>
  );
}

export default PlanetInterface;