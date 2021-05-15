import styled from 'styled-components';
import { Colors } from '../../globalStyles';

export const Table = styled.table`
width: ${({ width }) => width ? `${width}px` : ''};
@media all and (max-width: 535px){
    display: block;
}
text-align: center;
`;

export const TableHead = styled.thead`
background-color: ${Colors.beige};
color: ${Colors.darkBlue};
@media all and (max-width: 535px){
    position: absolute;
    top: -9999px;
    left: -9999px;
    display: block;
}
`;

export const TableRow = styled.tr`
    @media all and (max-width: 535px){
    display: block;
}
`;
export const TableHeader = styled.th`
    @media all and (max-width: 535px){
    display: block;
}
`;
export const TableBody = styled.tbody`
    @media all and (max-width: 535px){
    display: block;
}
`;

export const Player = styled.tr`
background-color: rgba(245, 245, 220, 0.4);
color: ${Colors.darkBlue};
font-weight: bold;
@media all and (max-width: 535px){
    display: block;
}
&:hover{
    background-color: rgba(245, 245, 245, 0.7)
}
`;


export const PlayerRanking = styled.td`
@media all and (max-width: 535px){
    position: relative;
    padding-left: 50%;
    padding-top: 0.5em;
    border-top: 1px solid ${Colors.darkBlue};
    display: block;
    ::before{
        position: absolute;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
        content: 'Ranking'
    }
}`;

export const PlayerName = styled.td`
@media all and (max-width: 535px){
    position: relative;
    padding-left: 50%;
    display: block;
    font-weight: 500;
    ::before{
        font-weight: 500;
        position: absolute;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
        content: 'Name'
    }
}`;

export const PlayerCountry = styled.td`
@media all and (max-width: 535px){
    position: relative;
    padding-left: 50%;
    display: block;
    font-weight: 500;
    ::before{
        font-weight: 500;
        position: absolute;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        content: 'Country'
    }
}`;

export const PlayerPoints = styled.td`
@media all and (max-width: 535px){
    position: relative;
    padding-left: 50%;
    display: block;
    font-weight: 500;
    ::before{
        font-weight: 500;
        position: absolute;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
        content: 'Points'
    }
}`;

export const PlayerMovement = styled.td`
@media all and (max-width: 535px){
    position: relative;
    padding-left: 50%;
    display: block;
    padding-bottom: 0.5em;
    border-bottom: 1px solid ${Colors.darkBlue};
    font-weight: 500;
    ::before{
        font-weight: 500;
        position: absolute;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        content: 'Movement'
    }
}`;
