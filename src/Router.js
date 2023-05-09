import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Page404 from './components/Page404';

import logo from './assets/images/logo.png';

function TheRouter() {
    return (
        <Router>
            <nav>
                <div className="logo">
                    <img src={logo} alt="Logo Kasa" />
                </div>
                <ul className="nav-items">
                    <li>
                        <NavLink to="/" activeClassName="active" end>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" activeClassName="active">
                            À propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </Router>
    );
}

export default TheRouter;
