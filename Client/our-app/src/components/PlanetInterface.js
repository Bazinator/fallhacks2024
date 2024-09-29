// PlanetInterface.js

import React, { useState, useEffect } from 'react';
import PlanetDisplay from './PlanetDisplay';
import ChatInterface from './ChatInterface';
import { calculateDistanceBetweenPlanets, calculateTravelTime } from './distances';
import './PlanetInterface.css';

const PlanetInterface = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [destinationPlanet, setDestinationPlanet] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [travelTime, setTravelTime] = useState(0);

  // Load selectedPlanet from localStorage when the component mounts
  useEffect(() => {
    const storedPlanet = localStorage.getItem('selectedPlanet');
    if (storedPlanet) {
      setSelectedPlanet(storedPlanet);
    }
  }, []);

  const handleSendMessage = (messageText) => {
    if (!selectedPlanet || !destinationPlanet) {
      alert('Please select both origin and destination planets.');
      return;
    }

    // Calculate distance and travel time
    const distance = calculateDistanceBetweenPlanets(selectedPlanet, destinationPlanet);
    const time = calculateTravelTime(distance); // in seconds
    setTravelTime(time);
    setIsSending(true);

    // Simulate message travel
    setTimeout(() => {
      setIsSending(false);
    }, time * 1000); // Convert seconds to milliseconds
  };

  return (
    <div className="planet-interface">
      <PlanetDisplay
        selectedPlanet={selectedPlanet}
        destinationPlanet={destinationPlanet}
        onSelectDestination={setDestinationPlanet}
        isSending={isSending}
        travelTime={travelTime}
      />
      <ChatInterface
        originPlanet={selectedPlanet}
        destinationPlanet={destinationPlanet}
        onSendMessage={handleSendMessage}
        isSending={isSending}
      />
    </div>
  );
};

export default PlanetInterface;
