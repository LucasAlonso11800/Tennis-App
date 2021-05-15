import styled from 'styled-components';
import { Colors } from '../../globalStyles';

export const Table = styled.table`
width: 90%;
text-align: center;
`;

export const TableHead = styled.thead`
background-color: ${Colors.beige};
color: ${Colors.darkBlue};
`;

export const TableRow = styled.tr``;
export const TableHeader = styled.th``;
export const TableBody = styled.tbody``;

export const Player = styled.tr`
background-color: rgba(245, 245, 220, 0.3);
color: ${Colors.darkBlue};
&:hover{
    background-color: rgba(245, 245, 245, 0.6)
}
`;

export const PlayerCountry = styled.td`
border: none;`;
export const PlayerName = styled.td`
border: none;
font-weight: bold;
`;

export const PlayerPoints = styled.td`
border: none;`;
export const PlayerMovement = styled.td`
border: none;`;
export const PlayerRanking = styled.td`
border: none;`;