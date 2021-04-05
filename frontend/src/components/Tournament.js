import React from 'react'

function Tournament({ tournament }) {
    return (
        <tr className="tournament">
            <td>{tournament.start_date}</td>
            <td>{tournament.end_date}</td>
            <td colSpan="2">{tournament.name}</td>
            <td>{tournament.surface}</td>
            <td>{tournament.city}</td>
            <td>{tournament.country}</td>
            <td>{tournament.code}</td>
        </tr>
    )
}

export default Tournament
