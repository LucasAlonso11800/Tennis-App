import React from 'react';
import {
    MatchContainer,
    MatchTitle,
    MatchRound,
    MatchCourt,
    MatchHour,
    Result,
    Space
} from './Match.elements';

function Match({ match }) {
    const { result } = match;

    const tiebreaks = {
        firstSet: result.home_tb1 !== undefined,
        secondSet: result.home_tb2 !== undefined,
        thirdSet: result.home_tb3 !== undefined,
        fourthSet: result.home_tb4 !== undefined,
        fifthSet: result.home_tb5 !== undefined
    };

    const isThereThirdSet = result.home_set3 !== undefined;
    const isThereFourthSet = result.home_set4 !== undefined;
    const isThereFifthSet = result.home_set5 !== undefined;

    return (
        <MatchContainer>
            <MatchTitle>{match.title}</MatchTitle>
            <MatchRound>{match.round}</MatchRound>
            <MatchCourt>{match.court}</MatchCourt>
            <MatchHour>{match.date.substring(11, 16)} GMT</MatchHour>
            <Result>{result.home_set1} - {result.away_set1}<Space />
                {tiebreaks.firstSet ? `(${result.home_tb1} - ${result.away_tb1})` : ''}<Space />
                {result.home_set2} - {result.away_set2}<Space />
                {tiebreaks.secondSet ? `(${result.home_tb2} - ${result.away_tb2})` : ''}<Space />
                {isThereThirdSet ? `${result.home_set3} - ${result.away_set3}` : ''}<Space />
                {tiebreaks.thirdSet ? `(${result.home_tb3} - ${result.away_tb3})` : ''}<Space />
                {isThereFourthSet ? `${result.home_set4} - ${result.away_set4}` : ''}<Space />
                {tiebreaks.fourthSet ? `(${result.home_tb4} - ${result.away_tb4})` : ''}<Space />
                {isThereFifthSet ? `${result.home_set5} - ${result.away_set5}` : ''}<Space />
                {tiebreaks.fifthSet ? `(${result.home_tb5} - ${result.away_tb5})` : ''}<Space />
            </Result>
        </MatchContainer>
    )
};

export default Match;
