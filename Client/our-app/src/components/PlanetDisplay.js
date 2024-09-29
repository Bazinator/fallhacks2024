// PlanetDisplay.js

import React, { useState, useEffect, useRef } from 'react';
import './PlanetDisplay.css';
import planets from '../data/planets';

function PlanetDisplay({
  selectedPlanet,
  destinationPlanet,
  onSelectDestination,
  isSending,
  travelTime,
}) {
  const [planetPositions, setPlanetPositions] = useState([]);
  const messageRef = useRef();

  useEffect(() => {
    if (selectedPlanet) {
      const centerX = 400;
      const centerY = 300;

      const otherPlanets = planets.filter(
        (planet) => planet.name !== selectedPlanet
      );

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

      // Include the selected planet at the center
      const positions = [
        { name: selectedPlanet, x: centerX, y: centerY },
        ...otherPlanetsPositions,
      ];

      setPlanetPositions(positions);
    }
  }, [selectedPlanet]);

  useEffect(() => {
    if (isSending && destinationPlanet && messageRef.current) {
      const origin = planetPositions.find(
        (planet) => planet.name === selectedPlanet
      );
      const destination = planetPositions.find(
        (planet) => planet.name === destinationPlanet
      );

      if (origin && destination) {
        const duration = travelTime * 1000; // Convert seconds to milliseconds

        if (isNaN(duration) || duration <= 0) {
          console.error('Invalid duration for animation:', duration);
          return; // Do not proceed with animation
        }

        // Animate the message icon from origin to destination
        const animation = messageRef.current.animate(
          [
            { transform: `translate(${origin.x}px, ${origin.y}px)` },
            { transform: `translate(${destination.x}px, ${destination.y}px)` },
          ],
          {
            duration: duration,
            fill: 'forwards',
            easing: 'linear',
          }
        );

        return () => animation.cancel();
      }
    }
  }, [isSending, destinationPlanet, travelTime, planetPositions, selectedPlanet]);

  const handlePlanetClick = (planetName) => {
    if (planetName !== selectedPlanet) {
      onSelectDestination(planetName);
    }
  };

  return (
    <div className="planet-display">
      {/* SVG for lines */}
      <svg
        className="planet-lines"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
      >
        {/* Draw lines from selected planet to other planets */}
        {planetPositions.map((pos) => {
          if (pos.name !== selectedPlanet) {
            return (
              <line
                key={pos.name}
                x1={planetPositions[0].x}
                y1={planetPositions[0].y}
                x2={pos.x}
                y2={pos.y}
                className="planet-line"
              />
            );
          } else {
            return null;
          }
        })}

        {/* Message Icon */}
        {isSending && (
          <circle
            ref={messageRef}
            cx={planetPositions[0].x}
            cy={planetPositions[0].y}
            r="5"
            fill="gold"
          />
        )}
      </svg>

      {/* Display planets */}
      {planetPositions.map((pos) => (
        <div
          key={pos.name}
          className={`planet-item1 ${
            selectedPlanet === pos.name
              ? 'selected'
              : destinationPlanet === pos.name
              ? 'destination'
              : ''
          }`}
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
          }}
          onClick={() => handlePlanetClick(pos.name)}
        >
          <div className="planet-dot"></div>
          <p>{pos.name}</p>
        </div>
      ))}

      {/* Display travel time */}
      {travelTime > 0 && (
        <div className="travel-time">
          Travel time to {destinationPlanet}: {travelTime.toFixed(2)} seconds
        </div>
      )}
    </div>
  );
}

export default PlanetDisplay;
