import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../url';
import { BackgroundContainer } from '../../globalStyles';
import Background from '../../assets/backgrounds/Us-Open.jpg';

import { PageTitle, SeasonTable, LoadingIcon } from '../../components/index';

function SeasonPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [tournaments, setTournaments] = useState([]);
    const [tour, setTour] = useState('ATP');

    useEffect(() => {
        setIsLoading(true);
            (async () => {
                try {
                    const data = await (await axios.post(`${API_URL}/season`, { tour })).data.results
                    setIsLoading(false);
                    setTournaments(data);
                }
                catch (err) {
                    console.log(err)
                }
            })();
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