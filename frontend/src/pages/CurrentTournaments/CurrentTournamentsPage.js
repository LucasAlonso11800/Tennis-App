import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BackgroundContainer } from '../../globalStyles';
import Background from '../../assets/backgrounds/Wimbledon.jpeg'

import { PageTitle, Matches, LoadingIcon } from '../../components/index';

function CurrentTournamentsPage() {
    const [currentTournament, setCurrentTournament] = useState([]);
    const [currentMatches, setCurrentMatches] = useState([]);
    const [tour, setTour] = useState(1)

    useEffect(() => {
        setCurrentMatches([]);
        axios.post('https://tennis-world-app.herokuapp.com/current-tournaments', { season: '2021' })
            .then(res => {
                setCurrentMatches(res.data.results[tour].matches);
                setCurrentTournament(res.data.results[tour].tournament);
            })
            .catch(err => console.log(err));
    }, [tour])


    return (
        <BackgroundContainer background={Background}>
            <PageTitle
                title={currentTournament.name}
                subtitle={currentTournament.city}
                valueATP={1}
                valueWTA={0}
                setTour={setTour} />
            {currentMatches !== [] ?
                <Matches matches={currentMatches} />
                : <LoadingIcon />}
        </BackgroundContainer>
    )
};

export default CurrentTournamentsPage;