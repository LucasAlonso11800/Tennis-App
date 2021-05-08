import React, { useState } from 'react';
import { Form } from 'react-bootstrap'
import Article from '../components/Article'
import axios from 'axios';

function NewsPage() {
    const [isLoading, setIsLoading] = useState(false)

    const [news, setNews] = useState([])
    const [query, setQuery] = useState('')

    function searchNews() {
        setIsLoading(true)
        axios.post('https://tennis-world-app.herokuapp.com/news', {
            query: query
        })
            .then(res => {
                setIsLoading(false)
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
            {isLoading
                ? <div className="d-flex justify-content-center mt-4 mx-auto">
                    <h4 className="text-center text-white mt-4">Loading news...</h4>
                </div>
                :
                <div className="row d-flex justify-content-around">
                    {news.map(article => {
                        return <Article article={article} key={article.url} />
                    })}
                </div>
            }
        </div>
    )
}

export default NewsPage
