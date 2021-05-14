import React from 'react';
import {
    LandingSectionContainer,
    SectionRow,
    SectionColumn,
    Heading,
    SectionTitle,
    SectionText,
    SectionButton,
    SectionLink,
    SectionImg
} from './LandingSection.elements';

function LandingSection({ lightBg, imgStart, heading, title, text, link, linkText, img, alt }) {
    return (
        <LandingSectionContainer lightBg={lightBg}>
            <SectionRow imgStart={imgStart}>
                <SectionColumn>
                    <Heading lightBg={lightBg}>{heading}</Heading>
                    <SectionTitle lightBg={lightBg}>{title}</SectionTitle>
                    <SectionText lightBg={lightBg}>{text}</SectionText>
                    <SectionButton lightBg={lightBg}>
                        <SectionLink to={link} lightBg={lightBg}>{linkText}</SectionLink>
                    </SectionButton>
                </SectionColumn>
                <SectionColumn>
                    <SectionImg lightBg={lightBg} src={img} alt={alt} />
                </SectionColumn>
            </SectionRow>
        </LandingSectionContainer>
    )
};

export default LandingSection;
