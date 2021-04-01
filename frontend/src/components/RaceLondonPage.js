import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RaceLondonPosition from './RaceLondonPosition';

function RaceLondonPage() {
    const [rankings, setRankings] = useState([])

    const [minRanking, setMinRanking] = useState(1)
    const [maxRanking, setMaxRanking] = useState(50)
    const [country, setCountry] = useState()
    const [tour, setTour] = useState('ATP')

    function filterPlayers(e) {
        e.preventDefault()
        axios.post('http://localhost:5000/london-ranking', {
            tour: tour
        })
            .then(res => {
                const data = res.data.results.rankings
                setRankings(
                    data
                        .filter(player => {
                            return player.race_ranking >= minRanking && player.race_ranking <= maxRanking
                        })
                        .filter(player => {
                            if (!country === undefined) return player.country === country
                            return player
                        }));
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        axios.post('http://localhost:5000/london-ranking', {
            tour: tour
        })
            .then(res => {
                const data = res.data.results.rankings
                setRankings(
                    data
                        .filter(player => {
                            return player.race_ranking >= minRanking && player.race_ranking <= maxRanking
                        })
                        .filter(player => {
                            if (!country === undefined) return player.country === country
                            return player
                        }));
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="race-london-page-container container-fluid">
            <div className="row" id="race-london-page">
                <div className="col-sm-12 col-md-2 text-center bg-dark text-light" id="race-london-filter">
                    <div>
                        <h5 className="py-4">Filter players</h5>
                    </div>
                    <div>
                        <h6 className="h5 m-0">Filter by Ranking</h6>
                        <p className="mt-2 mb-0">Min ranking</p>
                        <input
                            className="mb-2"
                            type="number"
                            min="1"
                            max="249"
                            value={minRanking}
                            onChange={e => setMinRanking(e.target.value)}
                        />
                        <p className="mt-2 mb-0">Max Ranking</p>
                        <input
                            className="mb-2"
                            type="number"
                            min="2"
                            max="250"
                            value={maxRanking}
                            onChange={e => setMaxRanking(e.target.value)}
                        />
                        <p className="mt-2 mb-0">Country</p>
                        <input
                            className="mb-2"
                            type="text"
                            value={country}
                            onChange={e => setCountry(e.target.value)}
                        />
                        <p className="mt-2 mb-0">Tour</p>
                        <select
                            value={tour}
                            onChange={e => setTour(e.target.value)}
                        >
                            <option value="ATP">ATP</option>
                            <option value="WTA">WTA</option>
                        </select>
                        <button className="btn btn-primary my-2 w-100" type="button" onClick={filterPlayers}>Filter players</button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-10" id="race-london-table">
                    <table className="table text-center">
                        <thead className="thead-dark">
                            <tr>
                                <th>Country</th>
                                <th>Player</th>
                                <th>Points</th>
                                <th>Movement</th>
                                <th>Ranking</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rankings
                                .map(ranking => {
                                    return <RaceLondonPosition
                                        ranking={ranking}
                                        key={ranking.id}
                                    />
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default RaceLondonPage
