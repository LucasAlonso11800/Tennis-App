import React, { useState } from 'react';
import {
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    Player,
    PlayerCountry,
    PlayerName,
    PlayerPoints,
    PlayerMovement,
    PlayerRanking
} from './RankingTable.elements';

import { FaArrowCircleUp, FaArrowCircleDown, FaEquals } from 'react-icons/fa';

function RankingTable({ rankings }) {
    const [width, setWidth] = useState();
    window.addEventListener('resize', () => setWidth(window.innerWidth - 160));

    return (
        <Table width={width}>
            <TableHead>
                <TableRow>
                    <TableHeader>Ranking</TableHeader>
                    <TableHeader>Player</TableHeader>
                    <TableHeader>Country</TableHeader>
                    <TableHeader>Points</TableHeader>
                    <TableHeader>Movement</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                {rankings.map(ranking => {
                    return (
                        <Player key={ranking.id}>
                            <PlayerRanking>{ranking.ranking}</PlayerRanking>
                            <PlayerName>{ranking.full_name}</PlayerName>
                            <PlayerCountry>{ranking.country}</PlayerCountry>
                            <PlayerPoints>{ranking.ranking_points}</PlayerPoints>
                            <PlayerMovement>
                                {ranking.movement > 0 ? <FaArrowCircleUp /> :
                                    ranking.movement === '' ? <FaEquals /> :
                                        <FaArrowCircleDown />
                                }
                            </PlayerMovement>
                        </Player>
                    )
                })}
            </TableBody>
        </Table>
    )
};

export default RankingTable;
