import React, { useState } from 'react';
import PlanetDisplay from './PlanetDisplay';
import ChatInterface from './ChatInterface';
import './PlanetInterface.css'; 



const PlanetInterface = () => {
  return (
    <div className="planet-interface">
      <PlanetDisplay />
      <ChatInterface />
    </div>

  );

}

export default PlanetInterface;
