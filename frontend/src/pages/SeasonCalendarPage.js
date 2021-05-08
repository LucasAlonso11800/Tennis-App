import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tournament from '../components/Tournament';

function SeasonCalendarPage() {
    const [isLoading, setIsLoading] = useState(true)

    const [tournaments, setTournaments] = useState([]);
    const [tour, setTour] = useState('ATP')

    useEffect(() => {
        axios.post('https://tennis-world-app.herokuapp.com/season-calendar', {
            tour: tour
        })
            .then(res => {
                setIsLoading(false)
                setTournaments(res.data.results);
            })
            .catch(error => {
                console.log(error);
            })
    }, [tour])

    return (
        <div className="season-calendar-page-container">
            <div id="season-page">
                {isLoading
                    ? <div className="d-flex justify-content-center mt-4 mx-auto">
                        <h4 className="text-center text-white mt-4">Loading matches...</h4>
                    </div>
                    :
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
                }
            </div>
        </div>
    )
}

export default SeasonCalendarPage
