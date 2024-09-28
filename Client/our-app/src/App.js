import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlanetSelection from './components/PlanetSelection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlanetSelection />} />
      </Routes>
    </Router>
  );
}

export default App;
