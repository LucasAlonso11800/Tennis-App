import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors } from '../../globalStyles';

export const Header = styled.header`
width: 100%;
background-color: ${Colors.darkBlue};
@media all and (max-width: 960px){
    padding: 1em 0;
}
`
export const Nav = styled.nav`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
`

export const NavIcon = styled.img`
margin: 0 1em;
height: 2.5em;
width: 2.5em;
`

export const NavLogo = styled(Link)`
font-size: 1.75rem;
margin: 0 1em;
color: #fff;

&:hover{
text-decoration: none;
color: #fff;
}
`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width:960px){
        display: block;
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenuContainer = styled.div`
display: flex;
flex-grow: 1;
@media all and (max-width: 960px){
    display: flex;
    width: 100%;
    position: absolute;
    top: 70px;
    left: ${({ isDisplayed }) => (isDisplayed ? 0 : '-105%')};
    transition: all 0.5s ease-in-out;
    background-color: ${Colors.darkBlue};
    z-index: 10;
}
@media all and (max-width: 600px){
    flex-direction: column;
}
@media all and (max-width: 429px){
    top: 101px;
}
`;


export const NavMenu = styled.ul`
list-style-type: none;
width: 25%;
@media all and (max-width: 600px){
    width: 40%
}
position: relative;
`

export const NavMenuTitle = styled.li`
padding: 1em;
text-align: center;
color: #fff;
&:hover{
    background-color: #000
};
`
export const NavItem = styled.li`
display: ${({ isDisplayed }) => isDisplayed ? 'flex' : 'none'};
flex-direction: column;
position: absolute;
top: ${({ isDisplayed }) => isDisplayed ? 1 : '-10%'};
transition: all 0.5s ease-in-out;
z-index: 10;
background-color: ${Colors.darkBlue};
width: 100%;
@media all and (max-width: 600px){
    top: 0;
    transform: translateX(${({ isDisplayed }) => isDisplayed ? '100%' : '-100%'});
}
`

export const NavLink = styled(Link)`
text-align: center;
color: #fff;
padding: 1em;
&:hover{
    background-color: #000;
    text-decoration: none;
    color: #fff;
}
`