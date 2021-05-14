import React, { useState } from 'react';
import {
    FormContainer,
    FormTitleContainer,
    FormTitle,
    Form,
    MinRankingInput,
    MaxRankingInput,
    CountrySelect,
    countries,
    CountryOption,
    TourSelect,
    TourOption,
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
                <MinRankingInput value={minRanking} onChange={e => setMinRanking(e.target.value)} />
                <MaxRankingInput value={maxRanking} onChange={e => setMaxRanking(e.target.value)} />
                <CountrySelect onClick={e => setCountry(e.target.value)}>
                    {countries.map(country => {
                        return <CountryOption key={country} value={country}>
                            {country}
                        </CountryOption>
                    })}
                </CountrySelect>
                <TourSelect onClick={e => setTour(e.target.value)}>
                    <TourOption value={'ATP'}>ATP</TourOption>
                    <TourOption value={'WTA'}>WTA</TourOption>
                </TourSelect>
                <FormSubmit onClick={e => filterPlayers(e)}>Filter Players</FormSubmit>
            </Form>
        </FormContainer>
    )
};

export default RankingForm;