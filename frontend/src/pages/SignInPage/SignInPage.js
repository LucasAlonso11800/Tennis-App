import React, { useState, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from '../../context/GlobalState';

import { BackgroundContainer } from '../../globalStyles';
import Background from '../../assets/backgrounds/Delpo.jpg';

import { UserForm } from '../../components/index';

function SignInPage() {
    const [userId, setUserId] = useContext(GlobalContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState('');

    function enter(e) {
        e.preventDefault()
        axios.post('https://tennis-world-app.herokuapp.com/users/in', { email, password })
            .then(res => {
                setUserId(res.data.userId);
                setEmail('');
                setPassword('');
                setAuthError('');
            })
            .catch(err => err ? setAuthError('Email or password incorrect') : '');
    };

    return (
        <BackgroundContainer background={Background}>
            <UserForm
                title={'Sign In'}
                subtitle={'Enter and visit your favourite articles about Tennis'}
                buttonText={'Sign in'}
                authError={authError} 
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSubmit={enter}
                />
        </BackgroundContainer>
    )
};

export default SignInPage;