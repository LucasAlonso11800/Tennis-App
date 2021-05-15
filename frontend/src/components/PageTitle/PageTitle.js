import React from 'react';
import {
    PageTitleContainer,
    Title,
    SelectContainer,
    Label,
    Select,
    Option
} from './PageTitle.elements';

function PageTitle({ title, setTour }) {
    return (
        <PageTitleContainer>
            <Title>{title}</Title>
            <SelectContainer>
                <Label htmlFor='tour'>Select Tour</Label>
                <Select name='tour'>
                    <Option value="ATP" onClick={e => setTour(e.target.value)}>ATP</Option>
                    <Option value="WTA" onClick={e => setTour(e.target.value)}>WTA</Option>
                </Select>
            </SelectContainer>
        </PageTitleContainer>
    )
};

export default PageTitle;
