import React from 'react';
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
    console.log(rankings)
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeader>Country</TableHeader>
                    <TableHeader>Player</TableHeader>
                    <TableHeader>Points</TableHeader>
                    <TableHeader>Movement</TableHeader>
                    <TableHeader>Ranking</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                {rankings.map(ranking => {
                    return (
                        <Player key={ranking.id}>
                            <PlayerCountry>{ranking.country}</PlayerCountry>
                            <PlayerName>{ranking.full_name}</PlayerName>
                            <PlayerPoints>{ranking.ranking_points}</PlayerPoints>
                            <PlayerMovement>
                                {ranking.movement > 0 ? <FaArrowCircleUp /> :
                                    ranking.movement === '' ? <FaEquals /> :
                                        <FaArrowCircleDown />
                                }
                            </PlayerMovement>
                            <PlayerRanking>{ranking.ranking}</PlayerRanking>
                        </Player>
                    )
                })}
            </TableBody>
        </Table>
    )
};

export default RankingTable;
