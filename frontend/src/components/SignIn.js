import React, { useState, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from '../context/GlobalState'

function SignIn() {
    const [userId, setUserId] = useContext(GlobalContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function enter(e) {
        e.preventDefault()
        axios.post('http://localhost:5000/users/in', {
            email: email,
            password: password
        })
            .then(res => {
                setUserId(res.data);
                setEmail('');
                setPassword('');
                window.location = '/'
            })
            .catch(err => console.log(err))
    };

    return (
        <div className="sign-in-container">
            <div className="row mt-4 ml-2">
                <div className="col-sm-8 col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h4>Sign in</h4>
                            <p>Enter and visit your favourite articles about Tennis</p>
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
                                <button type="submit" className="btn btn-primary w-100">Create account</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
