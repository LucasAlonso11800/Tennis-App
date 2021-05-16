import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { Navbar } from './components/index';
import { LandingPage, RankingPage, RaceToLondonPage, CurrentTournamentsPage, SeasonPage, NewsPage } from './pages/index';
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
                <Route path="/race-to-london" component={RaceToLondonPage} />
                <Route path="/current-tournaments" component={CurrentTournamentsPage} />
                <Route path="/season" component={SeasonPage} />
                <Route path="/news" component={NewsPage} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/user-articles" component={UserPage} />
            </GlobalProvider>
        </Router>
    );
}

export default App;
