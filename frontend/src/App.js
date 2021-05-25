import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { Navbar } from './components/index';
import { 
    LandingPage, 
    RankingPage, 
    CurrentTournamentsPage, 
    SeasonPage, 
    NewsPage,
    UserPage,
    SignInPage,
    SignUpPage
} from './pages/index';

import RankingBackground from './assets/backgrounds/Australia.jpg';
import LondonBackground from './assets/backgrounds/Roland-garros.jpg';

import { GlobalProvider } from './context/GlobalState';

function App() {
    return (
        <Router>
            <GlobalProvider>
                <Navbar />
                <Route path="/" exact component={LandingPage} />
                <Route path="/ranking">
                    <RankingPage endpoint={'ranking'} background={RankingBackground} rankingProperty={'ranking'}/>
                </Route>
                <Route path="/race-to-london">
                    <RankingPage endpoint={'race-to-london'} background={LondonBackground} rankingProperty={'race_ranking'}/>
                </Route>
                <Route path="/current-tournaments" component={CurrentTournamentsPage} />
                <Route path="/season" component={SeasonPage} />
                <Route path="/news" component={NewsPage} />
                <Route path="/user-articles" component={UserPage} />
                <Route path="/signin" component={SignInPage} />
                <Route path="/signup" component={SignUpPage} />
            </GlobalProvider>
        </Router>
    );
}

export default App;
