import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RankingForm, RankingTable } from '../../components/index';
import { BackgroundContainer } from '../../globalStyles';
import Background from '../../assets/backgrounds/Wimbledon.jpg';

function RankingPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [rankings, setRankings] = useState([]);
    const [minRanking, setMinRanking] = useState(1);
    const [maxRanking, setMaxRanking] = useState(50);
    const [country, setCountry] = useState('');
    const [tour, setTour] = useState('ATP');

    function filterPlayers(e) {
        e.preventDefault();
        axios.post('https://tennis-world-app.herokuapp.com/ranking', {
            tour: tour
        })
            .then(res => {
                setIsLoading(false)
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

    // useEffect(() => {
    //     console.log('here')
    //     axios.post('https://tennis-world-app.herokuapp.com/ranking', {
    //         tour: tour
    //     })
    //         .then(res => {
    //             console.log('And here wasting calls')
    //             setIsLoading(false)
    //             const data = res.data.results.rankings
    //             console.log(data)
    //             setRankings(
    //                 data
    //                     .filter(player => {
    //                         return player.ranking >= minRanking && player.ranking <= maxRanking
    //                     })
    //                     .filter(player => {
    //                         if (country === '') return player
    //                         return player.country === country
    //                     }));
    //         })
    //         .catch(err => console.log(err));
    // }, []);

    return (
        <BackgroundContainer background={Background}>
            <RankingTable rankings={rankings} />
            <RankingForm
                minRanking={minRanking}
                setMinRanking={setMinRanking}
                maxRanking={maxRanking}
                setMaxRanking={setMaxRanking}
                setCountry={setCountry}
                setTour={setTour} 
                filterPlayers={filterPlayers}
            />
        </BackgroundContainer>
    )
};

export default RankingPage;
