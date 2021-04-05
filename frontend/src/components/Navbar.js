import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { GlobalContext } from '../context/GlobalState';

function Navbar() {
    const [username, setUsername] = useContext(GlobalContext);
    const setUserId = useContext(GlobalContext)

    function logout() {
        axios.post('http://localhost:5000/users/out', {
            out: 'Log me out'
        })
            .then(res => {
                if (res.data === 'Logged out') {
                    setUsername('')
                    setUserId('')
                }
            })
            .catch(err => console.log(err));
    }

    function changeText() {
        const welcomeText = document.getElementById('welcome-text');
        welcomeText.textContent = 'Click to Logout'
    };

    function backText() {
        const welcomeText = document.getElementById('welcome-text');
        welcomeText.textContent = `Welcome ${username}`
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
            <div id="atp-logo" className="mr-4"></div>
            <Link to="/" className="navbar-brand">Tennis world</Link>
            <div className="ml-4 d-flex">
                <div className="mt-2 mr-4">
                    <Link to="/ranking" className="nav-item text-center d-block text-white mb-2">Ranking ATP / WTA</Link>
                    <Link to="/race-to-london" className="nav-item text-center d-block text-white mb-2">Race to London</Link>
                </div>
                <div className="mt-2 mr-4">
                    <Link to="/current-tournaments" className="nav-item text-center d-block text-white mb-2">Current Tournaments</Link>
                    <Link to="/season" className="nav-item text-center d-block text-white mb-2">Season Calendar</Link>
                </div>
                <div className="mt-2 mr-4">
                    <Link to="/user-articles" className="nav-item text-center d-block text-white mb-2">Your saved Articles</Link>
                    <Link to="/news" className="nav-item text-center d-block text-white mb-2">News</Link>
                </div>
            </div>
            <div className="mt-2 ml-auto" id="user-pages">
                {username ?
                    <p className="nav-item text-center d-block text-white mb-2"
                        id="welcome-text"
                        onClick={logout}
                        onMouseEnter={changeText}
                        onMouseOut={backText}
                    >
                        Welcome {username}
                    </p> :
                    <>
                        <Link to="/signin" className="user-item nav-item text-center d-block text-white mb-2">Log in</Link>
                        <Link to="/signup" className="user-item nav-item text-center d-block text-white mb-2">Sign up</Link>
                    </>
                }
            </div>
            <div className="ml-4" id="wta-logo"></div>
        </nav>
    )
}

export default Navbar
