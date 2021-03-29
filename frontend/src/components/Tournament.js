import React from 'react'

// <th>Start date</th>
//                                 <th>End date</th>
//                                 <th>Tournament</th>
//                                 <th>Surface</th>
//                                 <th>City</th>
//                                 <th>Country</th>

function Tournament({ tournament }) {
    return (
        <tr>
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
