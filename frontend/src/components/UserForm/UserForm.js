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
    SubmitButton,
    SuccessTitle,
    SuccessButtons,
    SuccessButton,
    SuccessLink
} from './UserForm.elements';
import { RiErrorWarningFill } from 'react-icons/ri';

function UserForm({ title, subtitle, buttonText, authError, authSuccess, email, setEmail, password, setPassword, handleSubmit }) {
    return (
        <Container>
            {authSuccess === '' ?
                <>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                    {authError ?
                        <ErrorContainer>
                            <RiErrorWarningFill size={24} />
                            <ErrorMessage>{authError}</ErrorMessage>
                            <RiErrorWarningFill size={24} />
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
                </>
                :
                <>
                    <SuccessTitle>{authSuccess}</SuccessTitle>
                    <SuccessButtons>
                        <SuccessButton>
                            <SuccessLink to='/news'>Search News</SuccessLink>
                        </SuccessButton>
                        <SuccessButton>
                            <SuccessLink to='/user-articles'>Your Articles</SuccessLink>
                        </SuccessButton>
                    </SuccessButtons>
                </>
            }
        </Container>
    )
};

export default UserForm;
