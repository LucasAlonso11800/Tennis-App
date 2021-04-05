import React, { useState, useEffect } from 'react'

function RaceLondonPosition({ ranking }) {
    const [movement, setMovement] = useState()
    useEffect(() => {
        if (ranking.movement > 0) {
            setMovement(<i class="fas fa-arrow-up"></i>)
        } else if (ranking.movement === '') {
            setMovement(<i className="fas fa-equals"></i>)
        } else {
            setMovement(<i class="fas fa-arrow-down"></i>)
        }
    }, [])

    return (
        <tr className="ranking-position">
            <td>{ranking.country}</td>
            <td className="player-name">{ranking.full_name}</td>
            <td>{ranking.race_points}</td>
            <td>{movement}</td>
            <td>{ranking.race_ranking}</td>
        </tr>
    )
}

export default RaceLondonPosition