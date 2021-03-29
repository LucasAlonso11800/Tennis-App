import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrentTournament from './CurrentTournament'

function CurrentTournamentsPage() {
    const [currentTournaments, setCurrentTournaments] = useState([])

    useEffect(() => {
        const date = new Date
        const options = {
            method: 'GET',
            url: `https://tennis-live-data.p.rapidapi.com/matches-by-date/${date.toISOString().substr(0, 10)}`,
            headers: {
                'x-rapidapi-key': '11d1c1bd99msh3d507f96f5ac859p12b5f9jsn6971ded6d164',
                'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
            }
        };

        axios.request(options)
            .then(res => {
                setCurrentTournaments(res.data.results);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    return (
        <div className="current-tournaments-page-container">
            <div className="row" id="current-tournaments-page">
                {currentTournaments.map(tournament => {
                    return <div className="col-sm-12 col-md-6">
                        <h3>{tournament.tournament.name} - {tournament.tournament.city}</h3>
                        <CurrentTournament matches={tournament.matches} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default CurrentTournamentsPage
