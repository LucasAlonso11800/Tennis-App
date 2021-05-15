import React from 'react';
import {
    PageTitleContainer,
    Title,
    TitleContainer,
    Subtitle,
    SelectContainer,
    Label,
    Select,
    Option
} from './PageTitle.elements';

function PageTitle({ title, subtitle, valueATP, valueWTA, setTour }) {
    return (
        <PageTitleContainer>
            <TitleContainer>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </TitleContainer>
            <SelectContainer>
                <Label htmlFor='tour'>Select Tour</Label>
                <Select name='tour'>
                    <Option value={valueATP} onClick={e => setTour(e.target.value)}>ATP</Option>
                    <Option value={valueWTA} onClick={e => setTour(e.target.value)}>WTA</Option>
                </Select>
            </SelectContainer>
        </PageTitleContainer>
    )
};

export default PageTitle;
