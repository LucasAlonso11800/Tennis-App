import React from 'react';
import { ArticlesContainer } from './Articles.elements';
import { Article } from '../index';

function Articles({ news, setNews, isSaved }) {
    return (
        <ArticlesContainer>
            {news.map(article => { 
                return <Article key={article.url} article={article} isSaved={isSaved} setNews={setNews}/>
            })}
        </ArticlesContainer>
    )
};

export default Articles;