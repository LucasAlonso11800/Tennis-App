import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BackgroundContainer } from '../../globalStyles';
import Background from '../../assets/backgrounds/Sharapova.jpg'

import { CurrentTournament } from '../../components/index';

function CurrentTournamentsPage() {
    const [isLoading, setIsLoading] = useState(true)

    const [currentTournament, setCurrentTournament] = useState([]);
    const [currentMatches, setCurrentMatches] = useState([]);
    const [tour, setTour] = useState(1)

    // useEffect(() => {
    //     axios.post('https://tennis-world-app.herokuapp.com/current-tournament', {
    //         season: '2021'
    //     })
    //         .then(res => {
    //             setIsLoading(false)
    //             setCurrentMatches(res.data.results[tour].matches);
    //             setCurrentTournament(res.data.results[tour].tournament);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }, [tour])


    return (
        <BackgroundContainer background={Background}>

        </BackgroundContainer>
    )
}

export default CurrentTournamentsPage;