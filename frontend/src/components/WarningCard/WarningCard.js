import React from 'react';
import {
    WarningCardContainer,
    WarningText,
    ButtonsContainer,
    CardButton,
    CardLink
} from './WarningCard.elements';
import { FaExclamationCircle } from 'react-icons/fa';

function WarningCard() {
    return (
        <WarningCardContainer>
            <FaExclamationCircle size={48}/>
            <WarningText>Please log in in order to save your favourite news.</WarningText>
            <WarningText>In case you don't have yet an account you can sign up for free.</WarningText>
            <ButtonsContainer>
                <CardButton>
                    <CardLink to="signin">Sign In</CardLink>
                </CardButton>
                <CardButton>
                    <CardLink to="signup">Sign Up</CardLink>
                </CardButton>
            </ButtonsContainer>
        </WarningCardContainer>
    )
};

export default WarningCard;
