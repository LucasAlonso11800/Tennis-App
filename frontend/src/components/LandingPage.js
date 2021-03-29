import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="landing-page-container">
            <div className="row d-flex justify-content-around">
                <div className="mt-4 mb-3 col-sm-10 col-md-5 col-lg-4 d-flex justify-content-center align-items-center" id="australia">
                    <Link className="text-white text-center h5" to="/ranking">Ranking ATP / WTA</Link>
                </div>
                <div className="mt-4 mb-3 col-sm-10 col-md-5 col-lg-4 d-flex justify-content-center align-items-center" id="roland-garros">
                    <Link className="text-white text-center h5" to="/race-to-london">Race To London</Link>
                </div>
            </div>
            <div className="row d-flex justify-content-around">
                <div className="mt-3 mb-4 col-sm-10 col-md-5 col-lg-4 d-flex justify-content-center align-items-center" id="wimbledon">
                    <Link className="text-white text-center h5" to="/current-tournaments" >Current Tournaments</Link>
                </div>
                <div className="mt-3 mb-4 col-sm-10 col-md-5 col-lg-4 d-flex justify-content-center align-items-center" id="us-open">
                    <Link className="text-white text-center h5" to="/season">Season Calendar</Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
