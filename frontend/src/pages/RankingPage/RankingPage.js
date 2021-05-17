import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { BackgroundContainer } from '../../globalStyles';
import Background from '../../assets/backgrounds/Australia.jpg';

import { RankingForm, RankingTable, LoadingIcon } from '../../components/index';

function RankingPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [rankings, setRankings] = useState([]);
    const [minRanking, setMinRanking] = useState(1);
    const [maxRanking, setMaxRanking] = useState(50);
    const [country, setCountry] = useState('');
    const [tour, setTour] = useState('ATP');

    function getAndFilterPlayers(e) {
        setIsLoading(true);
        if (e) e.preventDefault();
        axios.post('https://tennis-world-app.herokuapp.com/ranking', { tour })
            .then(res => {
                setIsLoading(false);
                const data = res.data.results.rankings
                setRankings(
                    data
                        .filter(player => {
                            return player.ranking >= minRanking && player.ranking <= maxRanking
                        })
                        .filter(player => {
                            if (country === '') return player
                            return player.country === country
                        }));
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        getAndFilterPlayers()
    }, []);

    return (
        <BackgroundContainer background={Background}>
            {isLoading ? <LoadingIcon /> : <RankingTable rankings={rankings} />}
            <RankingForm
                minRanking={minRanking}
                setMinRanking={setMinRanking}
                maxRanking={maxRanking}
                setMaxRanking={setMaxRanking}
                setCountry={setCountry}
                setTour={setTour}
                filterPlayers={getAndFilterPlayers}
            />
        </BackgroundContainer>
    )
};

export default RankingPage;
