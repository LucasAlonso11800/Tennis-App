import React, { useState, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from '../../context/GlobalState';
import { API_URL } from '../../url';
import { BackgroundContainer } from '../../globalStyles';
import Background from '../../assets/backgrounds/Hard.jpg';
import { UserForm } from '../../components/index';

function SignUpPage() {
    const { userData, dispatch } = useContext(GlobalContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState('');
    const [loading, setLoading] = useState(false);

    if(userData !== null) window.location = "/";

    async function saveUser(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const data = await (await axios.post(`${API_URL}/users/add`, { email, password })).data

            dispatch({
                type: 'LOGIN',
                payload: { 
                    userId: data.userId,
                    token: data.token,
                }
            });
            setAuthError('');
            setEmail('');
            setPassword('');
            setLoading(false);
            window.location = '/';
        }
        catch (err) {
            setLoading(false);
            setAuthError('Email already registered')
        }
    };
    
    return (
        <BackgroundContainer background={Background}>
            <UserForm
                title={'Create Account'}
                subtitle={'Sign up and save articles about your favourite players and tournaments'}
                buttonText={'Sign up'}
                loading={loading}
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