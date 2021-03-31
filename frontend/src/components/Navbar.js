import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div id="atp-logo" className="mr-4"></div>
            <Link to="/" className="navbar-brand">Tennis world</Link>
            <div className="collapse navbar-collapse">
                <div className="d-flex mr-auto">
                    <div className="dropdown">
                        <button className="btn text-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Rankings
                        </button>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to="/ranking" className="dropdown-item">Ranking ATP / WTA</Link>
                            <div className="dropdown-divider"></div>
                            <Link to="/race-to-london" className="dropdown-item">Race to London</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="btn text-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Tournaments
                        </button>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to="/current-tournaments" className="dropdown-item">Current Tournaments</Link>
                            <div className="dropdown-divider"></div>
                            <Link to="/season" className="dropdown-item">Season Calendar</Link>
                        </div>
                    </div>
                    <div className="nav-item">
                        <Link to="/news" className="nav-link text-white">News</Link>
                    </div>
                </div>
                <div className="ml-auto mr-4">
                    <div className="dropdown">
                        <button className="btn text-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Profile
                        </button>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link to="/" className="dropdown-item">Your saved Articles</Link>
                            <div className="dropdown-divider"></div>
                            <Link to="/signin" className="dropdown-item">Log in</Link>
                            <Link to="/signup" className="dropdown-item">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ml-auto" id="wta-logo"></div>
        </nav>
    )
}

export default Navbar
