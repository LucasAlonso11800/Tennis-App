import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
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

function App() {
    return (
        <Router>
            <Navbar />
            <Route path="/" exact component={LandingPage}/>
            <Route path="/ranking" component={RankingPage}/>
            <Route path="/race-to-london" component={RaceLondonPage}/>
            <Route path="/current-tournaments" component={CurrentTournamentsPage}/>
            <Route path="/season" component={SeasonCalendarPage}/>
            <Route path="/news" component={NewsPage}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
        </Router>
    );
}

export default App;
