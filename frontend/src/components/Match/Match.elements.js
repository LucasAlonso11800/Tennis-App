import styled from 'styled-components';
import { Colors, Shadow } from '../../globalStyles';

export const MatchContainer = styled.div`
width: 40%;
display: flex;
flex-direction: column;
padding: 1em;
margin-bottom: 1em;
background-color: ${Colors.beigeTransparent};
box-shadow: ${Shadow};
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

export const MatchTitle = styled.h3`
font-size: 1.375rem;
`;
export const MatchDataContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: 1em 0;
`;
export const MatchData = styled.p`
width: 50%;
`;
export const Result = styled.p`
font-weight: bold;
`;
export const Space = styled.span`
margin-left: 0.25em;
`