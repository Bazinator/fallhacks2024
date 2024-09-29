import React from 'react';
import PlanetDisplay from './PlanetDisplay';
import ChatInterface from './ChatInterface';

const App = () => {
  return (
    <div>
      {/* Render both components on the same screen */}
      <div className='planet-interface'>
        <PlanetDisplay />
        <ChatInterface />
      </div>
    </div>
  );
};

export default App;
