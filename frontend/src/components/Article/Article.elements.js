import styled from 'styled-components';
import { Colors, Shadow } from '../../globalStyles';

export const ArticleContainer = styled.div`
width: 40%;
padding: 1.5em;
margin-bottom: 1em;
box-shadow: ${Shadow};
background-color: ${Colors.beigeTransparent};
&:hover{
    background-color: ${Colors.beigeTransparentHover}
}
@media all and (max-width: 800px){
    width: 45%
}
@media all and (max-width: 700px){
    width: 80%
}
`
export const ArticleTitle = styled.h4`
text-align: center;
margin-bottom: 1em;
`
export const ArticleImg = styled.img`
width: 100%;
box-shadow: ${Shadow};
` 
export const ArticleDescription = styled.p`
margin: 1em 0;
`
export const ArticleButtons = styled.div`
display: flex;
`
export const ArticleButton = styled.button`
padding: 0.5em 1em;
background-color: ${Colors.beige};
color: ${Colors.darkBlue};
width: 100%;
`
export const ArticleLink = styled.a`
text-decoration: none;
color: ${Colors.darkBlue};
`