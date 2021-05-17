import React from 'react';
import {
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
} from './SeasonTable.elements';
import { Tournament } from '../index';

function SeasonTable({ tournaments }) {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeader>Start Date</TableHeader>
                    <TableHeader>End Date</TableHeader>
                    <TableHeader>Tournament</TableHeader>
                    <TableHeader>Surface</TableHeader>
                    <TableHeader>City</TableHeader>
                    <TableHeader>Country</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                {tournaments.map(tournament => { 
                    return <Tournament tournament={tournament} key={tournament.id} />
                })}
            </TableBody>
        </Table>
    )
};

export default SeasonTable;
