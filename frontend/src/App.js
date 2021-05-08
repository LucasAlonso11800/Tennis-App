import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage';
import RankingPage from './pages/RankingPage';
import RaceLondonPage from './pages/RaceLondonPage';
import CurrentTournamentsPage from './pages/CurrentTournamentsPage';
import SeasonCalendarPage from './pages/SeasonCalendarPage';
import NewsPage from './pages/NewsPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UserPage from './pages/UserPage';

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
