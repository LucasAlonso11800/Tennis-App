import React from 'react';
import {
    UserFormContainer,
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

function UserForm({ title, subtitle, buttonText, authError, email, setEmail, password, setPassword, handleSubmit }) {
    return (
        <UserFormContainer>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            {authError ?
                <ErrorContainer>
                    <RiErrorWarningFill size={24}/>
                    <ErrorMessage>{authError}</ErrorMessage>
                    <RiErrorWarningFill size={24}/>
                </ErrorContainer>
                : <></>}
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
        </UserFormContainer>
    )
};

export default UserForm;
