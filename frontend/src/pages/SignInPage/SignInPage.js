import React, { useState, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from '../../context/GlobalState';
import { API_URL } from '../../url';
import { BackgroundContainer } from '../../globalStyles';
import Background from '../../assets/backgrounds/Finals.jpg';

import { UserForm } from '../../components/index';

function SignInPage() {
    const { userData, dispatch } = useContext(GlobalContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState('');
    const [loading, setLoading] = useState(false);

    if(userData !== null) window.location = "/";

    async function enter(e) {
        e.preventDefault()
        setLoading(true);
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
            setLoading(false)
            window.location = "/";
        }
        catch (err) {
            setAuthError('Email or password incorrect')
        }
    };

    return (
        <BackgroundContainer background={Background}>
            <UserForm
                title={'Sign In'}
                subtitle={'Enter and visit your favourite articles about Tennis'}
                buttonText={'Sign in'}
                loading={loading}
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