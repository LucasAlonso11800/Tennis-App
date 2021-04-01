import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
            <div id="atp-logo" className="mr-4"></div>
            <Link to="/" className="navbar-brand mr-auto">Tennis world</Link>
            <div className="ml-4 d-flex">
                <div className="mt-2 mr-4">
                    <Link to="/ranking" className="nav-item text-center d-block text-white mb-2">Ranking ATP / WTA</Link>
                    <Link to="/race-to-london" className="nav-item text-center d-block text-white mb-2">Race to London</Link>
                </div>
                <div className="mt-2 mr-4">
                    <Link to="/current-tournaments" className="nav-item text-center d-block text-white mb-2">Current Tournaments</Link>
                    <Link to="/season" className="nav-item text-center d-block text-white mb-2">Season Calendar</Link>
                </div>
                <div className="mt-2 mr-4">
                    <Link to="/news" className="nav-item text-center d-block text-white mb-2">News</Link>
                    <Link to="/user-articles" className="nav-item text-center d-block text-white mb-2">Your saved Articles</Link>
                </div>
            </div>
            <div className="mt-2 ml-auto">
                <Link to="/signin" className="nav-item text-center d-block text-white mb-2">Log in</Link>
                <Link to="/signup" className="nav-item text-center d-block text-white mb-2">Sign up</Link>
            </div>
            <div className="ml-4" id="wta-logo"></div>
        </nav>
    )
}

export default Navbar
