import React, { useState, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from '../../context/GlobalState';
import { API_URL } from '../../url';
import {
    ArticleContainer,
    ArticleTitle,
    ArticleImg,
    ArticleDescription,
    ArticleButtons,
    ArticleButton,
    ArticleLink
} from './Article.elements';

function Article({ article, isSaved }) {
    const { url, title, urlToImage, description } = article;

    const { userData } = useContext(GlobalContext);
    const [saved, setSaved] = useState(isSaved);

    async function saveArticle() {
        if (saved) {
            try {
                await axios.post(`${API_URL}/news/delete`, { url, userId: userData.userId, token: userData.token })
                setSaved(!saved);
            }
            catch (err) { console.log(err) }
        }
        else {
            try {
                await axios.post(`${API_URL}/news/add`, { title, urlToImage, description, url, userId: userData.userId, token: userData.token })
                setSaved(!saved);
            }
            catch (err) { console.log(err) }
        }
    };

    return (
        <ArticleContainer>
            <ArticleTitle>{title}</ArticleTitle>
            <ArticleImg src={urlToImage} />
            <ArticleDescription>{description}</ArticleDescription>
            <ArticleButtons>
                <ArticleButton type="button">
                    <ArticleLink target='_BLANK' href={url}>Read More</ArticleLink>
                </ArticleButton>
                <ArticleButton type="button" onClick={() => saveArticle()} br={true}>
                    {!userData ? 'Be sure to log in to save articles' :
                        saved ? 'Article saved' : 'Save Article'}
                </ArticleButton>
            </ArticleButtons>
        </ArticleContainer>
    )
};

export default Article;