import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState'

function SignIn() {
    const [userId, setUserId] = useContext(GlobalContext)
    const [username, setUsername] = useContext(GlobalContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState('');
    const [authSuccess, setAuthSuccess] = useState('');

    function enter(e) {
        e.preventDefault()
        axios.post('http://localhost:5000/users/in', {
            email: email,
            password: password
        })
            .then(res => {
                console.log(res.data)
                setUserId(res.data.userId);
                setUsername(res.data.username);
                setEmail('');
                setPassword('');
                setAuthSuccess('Welcome back');
                setAuthError('');
            })
            .catch(err => {
                if (err) {
                    setAuthSuccess('');
                    setAuthError('Email or password incorrect');
                }
            })
    };

    return (
        <div className="sign-in-container container-fluid">
            <div className="row ml-2">
                <div className="col-sm-8 col-md-4">
                    <div className="card mt-4">
                        <div className="card-body">
                            {authSuccess ?
                                <>
                                    <div className="alert alert-success"><h4 className="text-center">{authSuccess}</h4></div>
                                    <Link to="/ranking" className="btn btn-primary w-100 my-2">Ranking ATP / WTA</Link>
                                    <Link to="/race-to-london" className="btn btn-primary w-100 my-2">Season rankings</Link>
                                    <Link to="/current-tournaments" className="btn btn-primary w-100 my-2">Current tournaments</Link>
                                    <Link to="/season" className="btn btn-primary w-100 my-2">Season calendar</Link>
                                    <Link to="/user-articles" className="btn btn-primary w-100 my-2">Your articles</Link>
                                    <Link to="/news" className="btn btn-primary w-100 my-2">News</Link>
                                </>
                                : <>
                                    <h4>Sign in</h4>
                                    <p>Enter and visit your favourite articles about Tennis</p>
                                    {authError ?
                                        <div className="alert alert-warning">{authError}</div>
                                        : <></>
                                    }
                                    <form onSubmit={enter}>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                required
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                placeholder='Enter your Email'
                                            ></input>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                required
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                                placeholder='Enter your Password'
                                            ></input>
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100">Enter</button>
                                    </form>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
