import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { FaTimes, FaBars } from 'react-icons/fa';
import {
    Header,
    Nav,
    NavIcon,
    NavLogo,
    NavMenuContainer,
    NavMenu,
    NavMenuTitle,
    NavItem,
    NavLink,
    MobileIcon
} from './Navbar.elements';
import ATPLogo from '../../assets/logos/ATP.png';
import WTALogo from '../../assets/logos/WTA.svg';

function Navbar() {
    const { userData, dispatch } = useContext(GlobalContext);

    const [display, setDisplay] = useState({});
    const [displayLateralNavbar, setDisplayLateralNavbar] = useState(false)

    function handleClick(item) {
        switch (item) {
            case 'ranking': display.ranking ? setDisplay({}) : setDisplay({ ranking: true });
                break;
            case 'tournaments': display.tournaments ? setDisplay({}) : setDisplay({ tournaments: true });
                break
            case 'news': display.news ? setDisplay({}) : setDisplay({ news: true, account: false });
                break
            case 'account': display.account ? setDisplay({}) : setDisplay({ account: true });
                break
            default: return
        }
    };

    return (
        <Header>
            <Nav>
                <NavIcon src={ATPLogo} alt='ATP Logo' />
                <NavLogo to="/" >Tennis World</NavLogo>
                <MobileIcon onClick={() => setDisplayLateralNavbar(!displayLateralNavbar)}>
                    {displayLateralNavbar ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenuContainer isDisplayed={displayLateralNavbar}>
                    <NavMenu>
                        <NavMenuTitle onClick={() => handleClick('ranking')}>Rankings</NavMenuTitle>
                        <NavItem isDisplayed={display.ranking}>
                            <NavLink to="/ranking">Ranking ATP / WTA</NavLink>
                            <NavLink to="/race-to-london">Race To London</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavMenu>
                        <NavMenuTitle onClick={() => handleClick('tournaments')}>Tournaments</NavMenuTitle>
                        <NavItem isDisplayed={display.tournaments}>
                            <NavLink to="/current-tournaments">Current Tournaments</NavLink>
                            <NavLink to="/season">Season Calendar</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavMenu>
                        <NavMenuTitle onClick={() => handleClick('news')}>News</NavMenuTitle>
                        <NavItem isDisplayed={display.news}>
                            <NavLink to="/news">News</NavLink>
                            <NavLink to="/user-articles">Your Saved Articles</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavMenu>
                        <NavMenuTitle onClick={() => handleClick('account')}>Your Account</NavMenuTitle>
                        <NavItem isDisplayed={display.account}>
                            {userData ? <NavLink to="/" onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</NavLink> :
                                <>
                                    <NavLink to="/signin">Sign in</NavLink>
                                    <NavLink to="/signup">Sign up</NavLink>
                                </>
                            }
                        </NavItem>
                    </NavMenu>
                </NavMenuContainer>
                <NavIcon src={WTALogo} alt='WTA Logo' />
            </Nav>
        </Header>
    )
}

export default Navbar
