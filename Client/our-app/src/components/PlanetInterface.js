import React from 'react';
import PlanetDisplay from './PlanetDisplay';
import MessageTerminal from './MessageTerminal';
import './PlanetInterface.css'; // For styling

function PlanetInterface() {
  return (
    <div className="planet-interface">
      <PlanetDisplay />
      <MessageTerminal />
    </div>
  );
}

export default PlanetInterface;