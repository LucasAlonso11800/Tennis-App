import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RankingPosition from './RankingPosition';

function RankingPage() {
    const [rankings, setRankings] = useState([])

    const [minRanking, setMinRanking] = useState(1)
    const [maxRanking, setMaxRanking] = useState(50)
    const [country, setCountry] = useState()
    const [tour, setTour] = useState('ATP')

    function filterPlayers(e) {
        e.preventDefault()
        axios.post('http://localhost:5000/ranking', {
            tour: tour
        })
            .then(res => {
                const data = res.data.results.rankings
                setRankings(
                    data
                        .filter(player => {
                            return player.ranking >= minRanking && player.ranking < maxRanking
                        })
                        .filter(player => {
                            if (country !== undefined) return player.country === country
                            return player
                        }));
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        axios.post('http://localhost:5000/ranking', {
            tour: tour
        })
            .then(res => {
                const data = res.data.results.rankings
                setRankings(
                    data
                        .filter(player => {
                            return player.ranking >= minRanking && player.ranking < maxRanking
                        })
                        .filter(player => {
                            if (country !== undefined) return player.country === country
                            return player
                        }));
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="ranking-page-container">
            <div className="row" id="ranking-page">
                <div className="col-sm-12 col-md-2 text-center" id="ranking-filter">
                    <table className="table text-center">
                        <thead className="thead-dark">
                            <th>Filter players</th>
                        </thead>
                        <tbody>
                            <tr className="filter-row"></tr>
                            <tr className="h5">Filter by Ranking</tr>
                            <tr className="filter-row"></tr>
                            <tr>Min Ranking:
                                <input
                                    className="ml-2"
                                    type="number"
                                    min="1"
                                    max="249"
                                    value={minRanking}
                                    onChange={e => setMinRanking(e.target.value)}
                                />
                            </tr>
                            <tr className="filter-row"></tr>
                            <tr>
                                Max Ranking:
                                <input
                                    className="ml-2"
                                    type="number"
                                    min="2"
                                    max="250"
                                    value={maxRanking}
                                    onChange={e => setMaxRanking(e.target.value)}
                                />
                            </tr>
                            <tr className="filter-row"></tr>
                            <tr>
                                Country:
                                <input
                                    className="ml-2"
                                    type="text"
                                    value={country}
                                    onChange={e => setCountry(e.target.value)}
                                />
                            </tr>
                            <tr className="filter-row"></tr>
                            <tr>
                                Tour:
                                <select
                                    value={tour}
                                    onChange={e => setTour(e.target.value)}
                                >
                                    <option value="ATP">ATP</option>
                                    <option value="WTA">WTA</option>
                                </select>
                            </tr>
                            <tr className="filter-row"></tr>
                            <tr>
                                <button className="btn btn-primary mb-2" type="button" onClick={filterPlayers}>Filter players</button>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-sm-12 col-md-10" id="ranking-table">
                    <table className="table text-center">
                        <thead className="thead-dark">
                            <tr className="mt-2">
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
                                    return <RankingPosition
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

export default RankingPage
