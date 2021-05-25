import React, { useState } from 'react';
import axios from 'axios';

import { BackgroundContainer } from '../../globalStyles';
import Background from '../../assets/backgrounds/Hard.jpg';

import { UserForm } from '../../components/index';

function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState('');
    const [authSuccess, setAuthSuccess] = useState('');

    function saveUser(e) {
        e.preventDefault()
        axios.post('https://tennis-world-app.herokuapp.com/users/add', { email, password })
            .then(() => {
                setAuthError('');
                setEmail('');
                setPassword('');
                window.location = '/signin';
            })
            .catch(err => err ? setAuthError('Email already registered') : '')
    };
    return (
        <BackgroundContainer background={Background}>
            <UserForm 
                title={'Create Account'}
                subtitle={'Sign up and save articles about your favourite players and tournaments'}
                buttonText={'Sign up'}
                authError={authError} 
                authSuccess={authSuccess}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSubmit={saveUser}
            />
        </BackgroundContainer>
    )
};

export default SignUpPage;