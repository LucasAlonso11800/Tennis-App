import React from 'react';
import { sectionOne, sectionTwo, sectionThree, sectionFour, sectionFive, sectionSix } from './Data';
import { LandingSection } from '../../components/index';

function LandingPage() {
    return (
        <>
            <LandingSection {...sectionOne}/>
            <LandingSection {...sectionTwo}/>
            <LandingSection {...sectionThree}/>
            <LandingSection {...sectionFour}/>
            <LandingSection {...sectionFive}/>
            <LandingSection {...sectionSix}/>
        </>
    )
};

export default LandingPage;
