import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/Page404';
import Product from './pages/Product';

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
                        <NavLink to="/" activeclassname="active" end>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" activeclassname="active">
                            À propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Page404 />} />
                <Route path="/product/:id" element={<Product />} />
            </Routes>
        </Router>
    );
}

export default TheRouter;
