import React from 'react'

function CurrentTournament({ matches }) {
    return (
        <div>
            {matches.map(match => {
                return <div className="card">
                    <h4>{match.title}</h4>
                    <p>Round: {match.round}</p>
                    <p>Court: {match.court}</p>
                    <h5>Result</h5>
                    <div className="d-flex">
                        <p>{match.result.home_set1} - {match.result.away_set1}</p>
                        <p>{match.result.home_set2} - {match.result.away_set2}</p>
                    </div>
                </div>
            })}
        </div>
    )
}

export default CurrentTournament
