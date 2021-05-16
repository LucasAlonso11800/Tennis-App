import React from 'react';
import {
    FormContainer,
    NewsInput,
    SearchButton
} from './SearchTab.elements';

function SearchTab({ query, setQuery, searchNews }) {
    return (
        <FormContainer>
            <NewsInput
                type='text'
                placeholder='Search News About Your Favourite Players and Tournaments'
                value={query}
                onChange={e => setQuery(e.target.value)} />
            <SearchButton onClick={() => searchNews}>Search News</SearchButton>
        </FormContainer>
    )
};

export default SearchTab;