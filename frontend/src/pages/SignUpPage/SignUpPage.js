import React, { useState } from 'react';
import axios from 'axios';

import { BackgroundContainer } from '../../globalStyles';
import Background from '../../assets/backgrounds/Ivanovic.jpg';

import { UserForm } from '../../components/index';

function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState('');

    function saveUser(e) {
        e.preventDefault()
        axios.post('https://tennis-world-app.herokuapp.com/users/add', { email, password })
            .then(() => {
                setAuthError('');
                setEmail('');
                setPassword('');
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