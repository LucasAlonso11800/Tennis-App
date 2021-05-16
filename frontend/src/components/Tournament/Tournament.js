import React from 'react';
import { TournamentDataContainer, TournamentData } from './Tournament.elements';

function Tournament({ tournament }) {
    const { start_date, end_date, name, surface, city, country } = tournament;
    
    return (
        <TournamentDataContainer>
            <TournamentData>{start_date.substring(8, 10)} / {start_date.substring(5, 7)} </TournamentData>
            <TournamentData>{end_date.substring(8, 10)} / {end_date.substring(5, 7)} </TournamentData>
            <TournamentData>{name}</TournamentData>
            <TournamentData>{surface}</TournamentData>
            <TournamentData>{city}</TournamentData>
            <TournamentData>{country}</TournamentData>
        </TournamentDataContainer>
    )
};

export default Tournament;