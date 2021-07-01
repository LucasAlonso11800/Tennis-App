import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BackgroundContainer } from '../../globalStyles';
import Background from '../../assets/backgrounds/Wimbledon.jpeg'

import { PageTitle, Matches, LoadingIcon } from '../../components/index';

function CurrentTournamentsPage() {
    const [currentTournament, setCurrentTournament] = useState([]);
    const [currentMatches, setCurrentMatches] = useState([]);
    const [tour, setTour] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        setCurrentMatches([]);

        (async () => {
            try {
                const data = await (await axios.post('https://tennis-world-app.herokuapp.com/current-tournaments', { season: '2021' })).data.results[tour]

                setIsLoading(false);
                setCurrentMatches(data.matches);
                setCurrentTournament(data.tournament);
            }
            catch (err) {
                console.log(err)
            }
        })();
    }, [tour]);

    return (
        <BackgroundContainer background={Background}>
            <PageTitle
                title={currentTournament.name}
                subtitle={currentTournament.city}
                valueATP={1}
                valueWTA={0}
                setTour={setTour} />
            {isLoading ?
                <LoadingIcon /> :
                <Matches matches={currentMatches} />}
        </BackgroundContainer>
    )
};

export default CurrentTournamentsPage;