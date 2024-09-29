// ProtectedRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component }) => {
  const selectedPlanet = localStorage.getItem('selectedPlanet');

  if (!selectedPlanet) {
    // If no planet is selected, redirect to the selection page
    return <Navigate to="/" />;
  }

  return <Component />;
};

export default ProtectedRoute;
