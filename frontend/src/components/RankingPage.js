import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RankingPosition from './RankingPosition';

function RankingPage() {
    const [isLoading, setIsLoading] = useState(true)

    const [rankings, setRankings] = useState([])

    const [minRanking, setMinRanking] = useState(1)
    const [maxRanking, setMaxRanking] = useState(50)
    const [country, setCountry] = useState('')
    const [tour, setTour] = useState('ATP')

    function filterPlayers(e) {
        e.preventDefault()
        setIsLoading(true)
        axios.post('https://tennis-world-app.herokuapp.com/ranking', {
            tour: tour
        })
            .then(res => {
                setIsLoading(false)
                const data = res.data.results.rankings
                setRankings(
                    data
                        .filter(player => {
                            return player.ranking >= minRanking && player.ranking <= maxRanking
                        })
                        .filter(player => {
                            if (country === '') return player
                            return player.country === country
                        }));
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        axios.post('https://tennis-world-app.herokuapp.com/ranking', {
            tour: tour
        })
            .then(res => {
                setIsLoading(false)
                const data = res.data.results.rankings
                setRankings(
                    data
                        .filter(player => {
                            return player.ranking >= minRanking && player.ranking < maxRanking
                        })
                )
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="ranking-page-container container-fluid">
            <div className="row ranking-page">
                <div className="col-sm-12 col-md-2 text-center bg-dark text-light ranking-filter px-0">
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
                            className="mb-2 country-input"
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
                        <button className="btn btn-primary my-2 mx-auto d-block" type="button" onClick={filterPlayers}>Filter players</button>
                    </div>
                </div>
                {isLoading
                    ? <div className="d-flex justify-content-center mt-4 mx-auto">
                        <h4 className="text-center text-white mt-4">Loading ranking...</h4>
                    </div>
                    :
                    <div className="col-sm-12 col-md-10 ranking-table px-0">
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
                }
            </div>
        </div>
    )
}

export default RankingPage
