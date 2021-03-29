import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tournament from './Tournament';

function SeasonCalendarPage() {
    const [tournaments, setTournaments] = useState([]);
    const [tour, setTour] = useState('ATP')

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://tennis-live-data.p.rapidapi.com/tournaments/${tour}/2021`,
            headers: {
                'x-rapidapi-key': '11d1c1bd99msh3d507f96f5ac859p12b5f9jsn6971ded6d164',
                'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
            }
        };

        axios.request(options)
            .then(res => {
                setTournaments(res.data.results);
            })
            .catch(error => {
                console.log(error);
            });
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
