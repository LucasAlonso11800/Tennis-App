import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';

import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage';
import RankingPage from './components/RankingPage';
import RaceLondonPage from './components/RaceLondonPage';
import CurrentTournamentsPage from './components/CurrentTournamentsPage';
import SeasonCalendarPage from './components/SeasonCalendarPage';
import NewsPage from './components/NewsPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import UserPage from './components/UserPage';

import { GlobalProvider } from './context/GlobalState';

function App() {
    return (
        <Router>
            <GlobalProvider>
                <Navbar />
                <Route path="/" exact component={LandingPage} />
                <Route path="/ranking" component={RankingPage} />
                <Route path="/race-to-london" component={RaceLondonPage} />
                <Route path="/current-tournaments" component={CurrentTournamentsPage} />
                <Route path="/season" component={SeasonCalendarPage} />
                <Route path="/news" component={NewsPage} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/user-articles" component={UserPage} />
            </GlobalProvider>
        </Router>
    );
}

export default App;
