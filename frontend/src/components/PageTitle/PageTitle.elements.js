import styled from 'styled-components';
import { Colors } from '../../globalStyles';

export const PageTitleContainer = styled.div`
width: 100%;
padding: 1em;
background-color: ${Colors.beige};
color: ${Colors.darkBlue};
display: flex;
justify-content: space-between;
align-items: center;
`;

export const Title = styled.h2`
margin-right: 1em;
`;

export const SelectContainer = styled.div`
display: flex;
align-items: center;
`;
export const Label = styled.label`
font-size: 1.25rem;
margin-right: 1em;
`;
export const Select = styled.select`
padding: 0.5em;
`;
export const Option = styled.option``;