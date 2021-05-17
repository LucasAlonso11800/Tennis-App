import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { BackgroundContainer } from '../../globalStyles';
import Background from '../../assets/backgrounds/Us-Open.jpg';

import { PageTitle, SeasonTable, LoadingIcon } from '../../components/index';

function SeasonPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [tournaments, setTournaments] = useState([]);
    const [tour, setTour] = useState('ATP');

    useEffect(() => {
        setIsLoading(true)
        axios.post('https://tennis-world-app.herokuapp.com/season', { tour })
            .then(res => {
                setIsLoading(false);
                setTournaments(res.data.results)
            })
            .catch(err => console.log(err));
    }, [tour]);

    return (
        <BackgroundContainer background={Background}>
            <PageTitle
                title={'Season 2021'}
                subtitle={''}
                valueATP={'ATP'}
                valueWTA={'WTA'}
                setTour={setTour} />
            {isLoading ? <LoadingIcon /> : <SeasonTable tournaments={tournaments} />}
        </BackgroundContainer>
    )
};

export default SeasonPage;