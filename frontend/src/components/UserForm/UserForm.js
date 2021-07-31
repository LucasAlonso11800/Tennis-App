import React from 'react';
import {
    Container,
    Title,
    Subtitle,
    ErrorContainer,
    ErrorMessage,
    Form,
    Label,
    Input,
    SubmitButton
} from './UserForm.elements';
import { RiErrorWarningFill } from 'react-icons/ri';
import LoadingIcon from '../LoadingIcon/LoadingIcon';

function UserForm({ title, subtitle, buttonText, loading, authError, email, setEmail, password, setPassword, handleSubmit }) {
    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            {authError &&
                <ErrorContainer>
                    <RiErrorWarningFill size={24} />
                    <ErrorMessage>{authError}</ErrorMessage>
                    <RiErrorWarningFill size={24} />
                </ErrorContainer>
            }
            {loading ? <LoadingIcon /> :
                <Form>
                    <Label>Email</Label>
                    <Input
                        type='email'
                        placeholder='Insert your Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <Label>Password</Label>
                    <Input
                        type='password'
                        placeholder='Insert your Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                    <SubmitButton
                        onClick={handleSubmit}
                         type='submit'>
                        {buttonText}
                    </SubmitButton>
                </Form>
            }
        </Container>
    )
};

export default UserForm;
