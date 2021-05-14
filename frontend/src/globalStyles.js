import styled from 'styled-components';

export const BackgroundContainer = styled.div`
background-image: ${({background}) =>  background ? `url(${background})` : ''};
background-size: cover;
background-attachment: fixed;
width: 100%;
min-height: 100vh;
`