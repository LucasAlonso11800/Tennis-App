import styled from 'styled-components';

export const BackgroundContainer = styled.div`
background-image: ${({background}) =>  background ? `url(${background})` : ''};
background-size: cover;
background-attachment: fixed;
background-position: center;
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
position: relative;
`

export const Colors = {
    darkBlue: '#101522',
    beige: '#f5f5dc',
    beigeTransparent: 'rgba(240, 240, 225, 0.5)',
    beigeTransparentHover: 'rgba(240, 240, 225, 0.7)'
};

export const Shadow = `0 0 5px 1px ${Colors.darkBlue}`