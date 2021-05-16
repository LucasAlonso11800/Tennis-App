import React, { useState } from 'react';
import axios from 'axios';

import { BackgroundContainer } from '../../globalStyles';
import Background from '../../assets/backgrounds/Nadal.jpg';

import { SearchTab, Articles } from '../../components/index';

function NewsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [news, setNews] = useState([]);
    const [query, setQuery] = useState('');

    function searchNews() {
        setIsLoading(true)
        axios.post('https://tennis-world-app.herokuapp.com/news', { query })
            .then(res => {
                setIsLoading(false)
                setNews(res.data.articles);
            })
            .catch(err => console.log(err))
    };

    return (
        <BackgroundContainer background={Background}>
            <SearchTab query={query} setQuery={setQuery} searchNews={searchNews} />
            <Articles news={news} />
        </BackgroundContainer>
    )
};

export default NewsPage;