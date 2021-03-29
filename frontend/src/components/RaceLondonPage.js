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
        const options = {
            method: 'GET',
            url: `https://tennis-live-data.p.rapidapi.com/rankings/race/${tour}`,
            headers: {
                'x-rapidapi-key': '8ff4695492msh7824ef7f847cd23p1fa72fjsn19e73c524f9c',
                'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
            }
        };

        axios.request(options)
            .then(res => {
                const data = res.data.results.rankings
                setRankings(
                    data
                        .filter(player => {
                            return player.race_ranking >= minRanking && player.race_ranking <= maxRanking
                        })
                        .filter(player => {
                            if (!country == undefined) return player.country === country
                            return player
                        }));
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://tennis-live-data.p.rapidapi.com/rankings/race/${tour}`,
            headers: {
                'x-rapidapi-key': '11d1c1bd99msh3d507f96f5ac859p12b5f9jsn6971ded6d164',
                'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
            }
        };

        axios.request(options)
            .then(res => {
                const data = res.data.results.rankings
                setRankings(
                    data
                        .filter(player => {
                            return player.race_ranking >= minRanking && player.race_ranking < maxRanking
                        })
                        .filter(player => {
                            if (country !== undefined) return player.country === country
                            return player
                        }));
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="race-london-page-container">
            <div className="row" id="race-london-page">
                <div className="col-sm-12 col-md-2 text-center" id="race-london-filter">
                    <h4>Filter players</h4>
                    <form onSubmit={filterPlayers}>
                        <h5>Filter by Ranking</h5>
                        <div className="form-group">
                            <label>Min Ranking</label>
                            <input
                                type="number"
                                min="1"
                                max="249"
                                value={minRanking}
                                onChange={e => setMinRanking(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Max Ranking</label>
                            <input
                                type="number"
                                min="2"
                                max="250"
                                value={maxRanking}
                                onChange={e => setMaxRanking(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Country</label>
                            <input
                                type="text"
                                value={country}
                                onChange={e => setCountry(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Tour</label>
                            <select
                                value={tour}
                                onChange={e => setTour(e.target.value)}
                            >
                                <option value="ATP">ATP</option>
                                <option value="WTA">WTA</option>
                            </select>
                        </div>
                        <button className="btn btn-primary" type="submit">Filter players</button>
                    </form>
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
