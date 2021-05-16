import React from 'react';
import { ArticlesContainer } from './Articles.elements';
import { Article } from '../index';

function Articles({ news }) {
    return (
        <ArticlesContainer>
            {news.map(article => { 
                return <Article key={article.url} article={article}/>
            })}
        </ArticlesContainer>
    )
};

export default Articles;