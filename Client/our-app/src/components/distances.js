// distances.js

// Average distances from the Sun in millions of kilometers
export const planetDistancesFromSun = {
    Mercury: 57.9,
    Venus: 108.2,
    Earth: 149.6,
    Mars: 227.9,
    Jupiter: 778.3,
    Saturn: 1427,
    Uranus: 2871,
    Neptune: 4498,
  };
  
  export const calculateDistanceBetweenPlanets = (planetA, planetB) => {
    const distanceA = planetDistancesFromSun[planetA];
    const distanceB = planetDistancesFromSun[planetB];
    if (distanceA === undefined || distanceB === undefined) {
      console.error(`Invalid planet names: ${planetA}, ${planetB}`);
      return 0; // Or handle the error appropriately
    }
    return Math.abs(distanceA - distanceB); // in millions of kilometers
  };
  
  export const calculateTravelTime = (distance) => {
    if (isNaN(distance) || distance <= 0) {
      console.error('Invalid distance:', distance);
      return 0; // Or handle the error appropriately
    }
    const speedOfLight = 299792.458; // km/s
    const distanceInKm = distance * 1_000_000; // Convert million km to km
    const timeInSeconds = distanceInKm / speedOfLight;
    return timeInSeconds; // Time in seconds
  };
  