import React, { useState, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from '../../context/GlobalState';
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

    const [userId, setUserId] = useContext(GlobalContext);
    const [saved, setSaved] = useState(isSaved);
    const [loggedIn, setLoggedIn] = useState(true);

    function saveArticle() {
        if (saved) {
            axios.post('https://tennis-world-app.herokuapp.com/news/delete', { url, userId })
                .then(() => setSaved(!saved))
                .catch(err => console.log(err))
        }
        else {
            axios.post('https://tennis-world-app.herokuapp.com/news/add', { title, urlToImage, description, url, userId })
                .then(() => setSaved(!saved))   
                .catch(err => err ? setLoggedIn(!loggedIn) : '')
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
                <ArticleButton type="button" onClick={saveArticle} br={true}>
                    {!loggedIn ? 'Be sure to log in to save articles' :
                        saved ? 'Article saved' : 'Save Article'}
                </ArticleButton>
            </ArticleButtons>
        </ArticleContainer>
    )
};

export default Article;