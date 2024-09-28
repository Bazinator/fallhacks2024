// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlanetSelection from './components/PlanetSelection';
import PlanetInterface from './components/PlanetInterface';
import ChatInterface from './components/ChatInterface';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlanetSelection />} />
        <Route path="/planet" element={<PlanetInterface />} />
        <Route path="/chat" element={<ChatInterface />} />
      </Routes>
    </Router>
  );
}

export default App;