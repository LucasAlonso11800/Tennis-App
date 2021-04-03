import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState()

    function saveUser(e) {
        e.preventDefault()
        console.log('Doing something')
        axios.post('http://localhost:5000/users/add', {
            username: username,
            email: email,
            password: password
        })
            .then(res => {
                setUsername('');
                setEmail('');
                setPassword('');
                window.location = '/signin';
            })
            .catch(err => {
                if (err) {
                    setAuthError('Email already registered')
                }
            })
    };

    return (
        <div className="sign-up-container container-fluid">
            <div className="row mt-4 ml-2">
                <div className="col-sm-8 col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h4>Create account</h4>
                            <p>Sign up and save your favourite articles about your favourite players and tournaments</p>
                            {authError ?
                                <div className="alert alert-warning">{authError}</div>
                                : <></>
                            }
                            <form onSubmit={saveUser}>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                        placeholder='Enter your Username'
                                    ></input>
                                </div>
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
                                <button type="submit" className="btn btn-primary w-100">Create account</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
