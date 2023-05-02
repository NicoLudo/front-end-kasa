import './style.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="main-container">
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/About">À propos</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
