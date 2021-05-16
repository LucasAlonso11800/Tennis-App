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
background-color: ${Colors.beigeTransparent};
color: ${Colors.darkBlue};
font-weight: bold;
@media all and (max-width: 535px){
    display: block;
}
&:hover{
    background-color: ${Colors.beigeTransparentHover}
}
`;

export const PlayerData = styled.td`
@media all and (max-width: 535px){
    position: relative;
    padding-left: 50%;
    padding-top: 0.5em;
    display: block;
    border-top: ${({borderTop}) => borderTop ? `1px solid ${Colors.darkBlue}` : ''};
    border-bottom: ${({borderBottom}) => borderBottom ? `1px solid ${Colors.darkBlue}` : ''};
    ::before{
        position: absolute;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
        content: ${({content}) => content ? content : ''};
    };
}
`