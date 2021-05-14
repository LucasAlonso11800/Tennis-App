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
        axios.post('https://tennis-world-app.herokuapp.com/users/in', {
            email: email,
            password: password
        })
            .then(res => {
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
                                    <h4 className="text-center">{authSuccess}</h4>
                                    <div className="d-flex justify-content-center">
                                        <Link to="/" className="btn btn-primary my-2">Back to landing page</Link>
                                    </div>
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