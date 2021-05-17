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

function LandingSection({ lightbg, imgStart, heading, title, text, link, linkText, img, alt }) {
    return (
        <LandingSectionContainer lightbg={lightbg}>
            <SectionRow imgStart={imgStart}>
                <SectionColumn>
                    <Heading lightbg={lightbg}>{heading}</Heading>
                    <SectionTitle lightbg={lightbg}>{title}</SectionTitle>
                    <SectionText lightbg={lightbg}>{text}</SectionText>
                    <SectionButton lightbg={lightbg}>
                        <SectionLink to={link} lightbg={lightbg}>{linkText}</SectionLink>
                    </SectionButton>
                </SectionColumn>
                <SectionColumn>
                    <SectionImg lightbg={lightbg} src={img} alt={alt} />
                </SectionColumn>
            </SectionRow>
        </LandingSectionContainer>
    )
};

export default LandingSection;
