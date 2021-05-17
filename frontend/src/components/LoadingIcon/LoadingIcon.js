import React from 'react';
import {
    IconContainer,
    Icon
} from './LoadingIcon.elements';
import { VscLoading } from 'react-icons/vsc';

function LoadingIcon() {
    return (
        <IconContainer>
            <Icon>
                <VscLoading size={64} color={'#fff'}/>
            </Icon>
        </IconContainer>
    )
};

export default LoadingIcon;