import React, { useState, useEffect } from 'react'

function RankingPosition({ ranking }) {
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
            <td>{ranking.full_name}</td>
            <td>{ranking.ranking_points}</td>
            <td>{movement}</td>
            <td>{ranking.ranking}</td>
        </tr>
    )
}

export default RankingPosition
