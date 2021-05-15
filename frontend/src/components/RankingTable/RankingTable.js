import React, { useState, useEffect } from 'react';
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
    const [windowWidth, setWindowWidth] = useState()
    const [width, setWidth] = useState();

    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

    useEffect(() => {
        const smallerThan380 = windowWidth < 380;
        const smallerThan395 = windowWidth < 395;
        const smallerThan960 = windowWidth < 960;

        setWidth(windowWidth - 170);
        if(smallerThan960) setWidth(windowWidth - 135);
        if(smallerThan395) setWidth(windowWidth - 120);
        if(smallerThan380) setWidth(265)
    }, [windowWidth]);

    return (
        <Table width={width}>
            <TableHead>
                <TableRow>
                    <TableHeader>Ranking</TableHeader>
                    <TableHeader>Player</TableHeader>
                    <TableHeader>Country</TableHeader>
                    <TableHeader>Points</TableHeader>
                    <TableHeader>Mov</TableHeader>
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
