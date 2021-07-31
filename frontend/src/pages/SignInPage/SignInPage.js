import React, { useState, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from '../../context/GlobalState';
import { API_URL } from '../../url';
import { BackgroundContainer } from '../../globalStyles';
import Background from '../../assets/backgrounds/Finals.jpg';

import { UserForm } from '../../components/index';

function SignInPage() {
    const { dispatch } = useContext(GlobalContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState('');
    const [authSuccess, setAuthSuccess] = useState('');

    async function enter(e) {
        e.preventDefault()
        try {
            const data = await (await axios.post(`${API_URL}/users/in`, { email, password })).data;
            dispatch({
                type: 'LOGIN',
                payload: { 
                    userId: data.userId,
                    token: data.token,
                }
            });
            setEmail('');
            setPassword('');
            setAuthError('');
            setAuthSuccess("You've succesfully logged in!");
            window.location = "/";
        }
        catch (err) {
            console.log(err)
            setAuthError('Email or password incorrect')
        }
    };

    return (
        <BackgroundContainer background={Background}>
            <UserForm
                title={'Sign In'}
                subtitle={'Enter and visit your favourite articles about Tennis'}
                buttonText={'Sign in'}
                authError={authError}
                authSuccess={authSuccess}
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