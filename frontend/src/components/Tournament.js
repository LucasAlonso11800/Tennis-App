import React from 'react'

function Tournament({ tournament }) {
    return (
        <tr className="tournament">
            <td>{tournament.start_date.substring(8, 10)} / {tournament.start_date.substring(5, 7)}</td>
            <td>{tournament.end_date.substring(8, 10)} / {tournament.end_date.substring(5, 7)}</td>
            <td className="tournament-name">{tournament.name}</td>
            <td>{tournament.surface}</td>
            <td className="tournament-city">{tournament.city}</td>
            <td>{tournament.country}</td>
            <td>{tournament.code}</td>
        </tr>
    )
}

export default Tournament
