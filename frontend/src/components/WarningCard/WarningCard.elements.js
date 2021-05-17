import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors, Shadow } from '../../globalStyles';

export const WarningCardContainer = styled.div`
width: 40%;
margin-top: 2em;
margin-left: 2em;
background-color: ${Colors.beige};
color: ${Colors.darkBlue};
text-align: center;
padding: 1em;
box-shadow: ${Shadow};
border-radius: 5px;
@media all and (max-width: 500px){
    width: 60%
}
`;
export const WarningText = styled.p`
margin: 1em 0;
`;
export const ButtonsContainer = styled.div`
display: flex;
`;
export const CardButton = styled.button`
width: 50%;
padding: 0.5em 1em;
background-color: ${Colors.darkBlue};
border: none;
border-radius: 5px;
`;
export const CardLink = styled(Link)`
color: #fff;
`;