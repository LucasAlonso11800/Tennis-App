import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors, Shadow } from '../../globalStyles';

export const LandingSectionContainer = styled.section`
background-color: ${({ lightbg }) => lightbg ? Colors.beige : Colors.darkBlue};
width: 100%;
`
export const SectionRow = styled.div`
width: 100%;
display: flex;
flex-direction: ${({ imgStart }) => imgStart ? 'row-reverse' : 'row'};
padding: 1em;
@media all and (max-width: 850px){
    padding: 2em 0.5em;
}
@media all and (max-width: 600px){
    flex-direction: ${({ imgStart }) => imgStart ? 'column-reverse' : 'column'};
}
`
export const SectionColumn = styled.div`
width: 100%;
padding: 1em 2em;
`
export const Heading = styled.p`
font-size: 0.75rem;
color: ${({ lightbg }) => lightbg ? Colors.darkBlue : '#aaa'};
margin-bottom: 1em;
`
export const SectionTitle = styled.h2`
font-size: 1.5rem;
color: ${({ lightbg }) => lightbg ? Colors.darkBlue : '#fff'};
`
export const SectionText = styled.p`
font-size: 1rem;
color: ${({ lightbg }) => lightbg ? Colors.darkBlue : '#fff'};
margin: 1em 0;
`
export const SectionButton = styled.button`
background-color: ${({ lightbg }) => lightbg ? Colors.darkBlue : Colors.beige};
padding: 0.5em 1em;
border: none;
border-radius: 5px;
`

export const SectionLink = styled(Link)`
font-size: 1rem;
color: ${({ lightbg }) => lightbg ? '#fff' : Colors.darkBlue};
font-weight: bold;
&:hover { 
    color: ${({ lightbg }) => lightbg ? '#fff' : Colors.darkBlue};
    text-decoration: none;
}
`

export const SectionImg = styled.img`
width: 100%;
max-width: 600px;
object-fit: cover;
border-radius: 5px;
box-shadow: ${({ lightbg }) => lightbg ? Shadow : `0 0 5px 1px ${Colors.beige}`};
`