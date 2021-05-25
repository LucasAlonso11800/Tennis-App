import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { BackgroundContainer } from '../../globalStyles';

import { RankingForm, RankingTable, LoadingIcon } from '../../components/index';

function RankingPage({ endpoint, background, rankingProperty }) {
    const [isLoading, setIsLoading] = useState(true);
    const [rankings, setRankings] = useState([]);
    const [minRanking, setMinRanking] = useState(1);
    const [maxRanking, setMaxRanking] = useState(50);
    const [country, setCountry] = useState('');
    const [tour, setTour] = useState('ATP');

    function getAndFilterPlayers(e) {
        setIsLoading(true);
        if (e) e.preventDefault();
        axios.post(`https://tennis-world-app.herokuapp.com/${endpoint}`, { tour })
            .then(res => {
                setIsLoading(false);
                const data = res.data.results.rankings;
                
                setRankings(data
                    .filter(player => {
                        return player[rankingProperty] >= minRanking && player[rankingProperty] <= maxRanking
                    })
                    .filter(player => {
                        if (country === '') return player
                        return player.country === country
                    })
                    .filter(player => {
                        return player.full_name !== 'Kevin Krawietz'
                    }));
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        getAndFilterPlayers()
    }, []);

    return (
        <BackgroundContainer background={background}>
            {isLoading ? <LoadingIcon /> : <RankingTable rankings={rankings} endpoint={endpoint}/>}
            <RankingForm
                minRanking={minRanking}
                setMinRanking={setMinRanking}
                maxRanking={maxRanking}
                setMaxRanking={setMaxRanking}
                setCountry={setCountry}
                setTour={setTour}
                getAndFilterPlayers={getAndFilterPlayers}
            />
        </BackgroundContainer>
    )
};

export default RankingPage;
