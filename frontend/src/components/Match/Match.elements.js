import styled from 'styled-components';
import { Colors } from '../../globalStyles';

export const MatchContainer = styled.div`
width: 35%;
display: flex;
flex-direction: column;
padding: 1em 0.5em;
margin-bottom: 1em;
background-color: ${Colors.beigeTransparent};
box-shadow: 0 0 5px 1px ${Colors.darkBlue};
@media all and (max-width:700px){
    width: 45%
}
@media all and (max-width:500px){
    width: 80%
}
&:hover{
    background-color: ${Colors.beigeTransparentHover};
}
`;

export const MatchTitle = styled.h3``;
export const MatchRound = styled.p``;
export const MatchCourt = styled.p``;
export const MatchHour = styled.p``;
export const Result = styled.p`
font-weight: bold;
`;
export const Space = styled.span`
margin-left: 0.25em;
`