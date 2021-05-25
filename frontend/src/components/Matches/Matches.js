import React from 'react';
import { 
    MatchesContainer,
    NoMatchesAlert
} from './Matches.elements';
import { Match } from '../index';

function Matches({ matches }) {
    return (
        <MatchesContainer>
            {matches.length === 0 ?    
            <NoMatchesAlert>No matches being played today</NoMatchesAlert> :
            matches.map(match => { 
                return (
                    <Match key={match.id} match={match}></Match>
                )
            })}
        </MatchesContainer>
    )
}

export default Matches;
