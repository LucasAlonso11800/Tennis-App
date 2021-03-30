import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tournament from './Tournament';

function SeasonCalendarPage() {
    const [tournaments, setTournaments] = useState([]);
    const [tour, setTour] = useState('ATP')

    useEffect(() => {
        axios.post('http://localhost:5000/season-calendar', {
            tour: tour
        })
            .then(res => {
                setTournaments(res.data.results);
            })
            .catch(error => {
                console.log(error);
            })
    }, [tour])

    return (
        <div className="season-calendar-page-container">
            <div id="season-page">
                <table className="table text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th>Start date</th>
                            <th>End date</th>
                            <th>Tournament</th>
                            <th>Surface</th>
                            <th>City</th>
                            <th>Country</th>
                            <th>Tour
                                <select className="ml-4" value={tour} onChange={e => setTour(e.target.value)}>
                                    <option value="ATP">ATP</option>
                                    <option value="WTA">WTA</option>
                                </select>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tournaments
                            .map(tournament => {
                                return <Tournament
                                    tournament={tournament}
                                    key={tournament.id}
                                />
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SeasonCalendarPage
