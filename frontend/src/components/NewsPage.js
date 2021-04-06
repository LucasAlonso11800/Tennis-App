import React, { useState } from 'react';
import { Form } from 'react-bootstrap'
import Article from './Article'
import axios from 'axios';

function NewsPage() {
    const [news, setNews] = useState([])
    const [query, setQuery] = useState('')

    function searchNews() {
        axios.post('http://localhost:5000/news', {
            query: query
        })
            .then(res => {
                setNews(res.data.articles);
            })
            .catch(err => console.log(err))
    };

    return (
        <div className="news-page-container container-fluid">
            <div className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search News About your Favourite Players and Tournaments"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <button
                    type="button"
                    onClick={searchNews}
                    className="btn btn-success"
                >
                    Search
                </button>
            </div>
            <div className="row d-flex justify-content-around">
                {news.map(article => {
                    return <Article article={article} key={article.url}/>
                })}
            </div>
        </div>
    )
}

export default NewsPage
