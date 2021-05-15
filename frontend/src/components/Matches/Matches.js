import React from 'react';
import { 
    MatchesContainer
} from './Matches.elements';
import { Match } from '../index';

function Matches({ matches }) {
    return (
        <MatchesContainer>
            {matches.map(match => { 
                return (
                    <Match key={match.id} match={match}></Match>
                )
            })}
        </MatchesContainer>
    )
}

export default Matches;
