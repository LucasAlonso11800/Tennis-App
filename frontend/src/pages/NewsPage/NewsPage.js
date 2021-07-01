import React, { useState } from 'react';
import axios from 'axios';

import { BackgroundContainer } from '../../globalStyles';
import Background from '../../assets/backgrounds/Clay.jpg';

import { SearchTab, Articles, LoadingIcon } from '../../components/index';

function NewsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [news, setNews] = useState([]);
    const [query, setQuery] = useState('');

    async function searchNews(e) {
        setIsLoading(true)
        e.preventDefault();
        try {
            const data = await (await axios.post('https://tennis-world-app.herokuapp.com/news', { query })).data.articles
            setIsLoading(false);
            setNews(data.slice(0, 10));
        }
        catch (err) {
            console.log(err)
        }
    };

    return (
        <BackgroundContainer background={Background}>
            <SearchTab query={query} setQuery={setQuery} searchNews={searchNews} />
            {isLoading ? <LoadingIcon /> : <Articles news={news} isSaved={false} />}
        </BackgroundContainer>
    )
};

export default NewsPage;