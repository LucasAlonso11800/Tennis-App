import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div id="atp-logo"></div>
            <Link to="/" className="navbar-brand ml-4">Tennis world</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/ranking" className="nav-link">Ranking ATP / WTA</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/race-to-london" className="nav-link">Race to London</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/current-tournaments" className="nav-link">Current Tournaments</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/season" className="nav-link">Season Calendar</Link>
                    </li>
                </ul>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto mr-4">
                    <li className="nav-item">
                        <Link to="/log-in" className="nav-link">Log in</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sign-up" className="nav-link">Sign up</Link>
                    </li>
                </ul>
            </div>
            <div className="ml-auto" id="wta-logo"></div>
        </nav>
    )
}

export default Navbar
