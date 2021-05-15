import React, { useState } from 'react';
import {
    FormContainer,
    FormTitleContainer,
    FormTitle,
    Form,
    Label,
    RankingInput,
    Select,
    countries,
    Option,
    FormSubmit
} from './RankingForm.elements';

import { FaAngleDoubleLeft, FaTimes } from 'react-icons/fa';

function RankingForm({ minRanking, setMinRanking, maxRanking, setMaxRanking, setCountry, setTour, filterPlayers }) {
    const [isDisplayed, setIsDisplayed] = useState(false);

    return (
        <FormContainer display={isDisplayed}>
            <FormTitleContainer display={isDisplayed}>
                <FormTitle>Filter<br /> Players</FormTitle>
                {isDisplayed ? <FaTimes onClick={() => setIsDisplayed(false)} />
                    : <FaAngleDoubleLeft onClick={() => setIsDisplayed(true)} />}
            </FormTitleContainer>
            <Form>
                <Label htmlFor='min-ranking'>Higher ranking</Label>
                <RankingInput
                    value={minRanking}
                    onChange={e => setMinRanking(e.target.value)}
                    name='min-ranking'
                    type='number'
                    min='1'
                    max='249'
                />
                <Label htmlFor='max-ranking'>Lower ranking</Label>
                <RankingInput
                    value={maxRanking}
                    onChange={e => setMaxRanking(e.target.value)}
                    name='max-ranking'
                    type='number'
                    min="2"
                    max="250"
                />
                <Label htmlFor='country'>Country</Label>
                <Select onClick={e => setCountry(e.target.value)} name='country'>
                    <Option value=''>All</Option>
                    {countries.map(country => {
                        return <Option key={country} value={country}>
                            {country}
                        </Option>
                    })}
                </Select>
                <Label htmlFor='tour'>Tour</Label>
                <Select onClick={e => setTour(e.target.value)} name='tour'>
                    <Option value={'ATP'}>ATP</Option>
                    <Option value={'WTA'}>WTA</Option>
                </Select>
                <FormSubmit onClick={e => filterPlayers(e)}>Filter Players</FormSubmit>
            </Form>
        </FormContainer>
    )
};

export default RankingForm;