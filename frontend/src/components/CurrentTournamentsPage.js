import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrentTournament from './CurrentTournament'

function CurrentTournamentsPage() {
    const [currentTournaments, setCurrentTournaments] = useState([])

    useEffect(() => {
        axios.post('http://localhost:5000/current-tournament', {
            season: '2021'
        })
            .then(res => {
                setCurrentTournaments(res.data.results);
            })
            .catch(error => {
                console.log(error);
            })
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
