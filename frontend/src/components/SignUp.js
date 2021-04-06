import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authSuccess, setAuthSuccess] = useState('')
    const [authError, setAuthError] = useState('');

    function saveUser(e) {
        e.preventDefault()
        axios.post('https://tennis-world-app.herokuapp.com/users/add', {
            username: username,
            email: email,
            password: password
        })
            .then(res => {
                setAuthSuccess("You've succesfully registered")
                setAuthError('')
                setUsername('');
                setEmail('');
                setPassword('');
            })
            .catch(err => {
                if (err) {
                    setAuthSuccess('')
                    setAuthError('Email already registered')
                }
            })
    };

    return (
        <div className="sign-up-container container-fluid">
            <div className="row ml-2">
                <div className="col-sm-8 col-md-4">
                    <div className="card mt-4">
                        <div className="card-body">
                            {authSuccess ?
                                <>
                                    <h4 className="text-center">{authSuccess}</h4>
                                    <div className="d-flex justify-content-center">
                                        <Link to="/signin" className="btn btn-primary my-2">Sign in</Link>
                                    </div>
                                </>
                                :
                                <>
                                    <h4>Create account</h4>
                                    <p>Sign up and save your favourite articles about your favourite players and tournaments</p>
                                    {authError ?
                                        <div className="alert alert-warning">{authError}</div>
                                        :
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
                                                    minLength='6'
                                                ></input>
                                            </div>
                                            <button type="submit" className="btn btn-primary w-100">Create account</button>
                                        </form>
                                    }
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
