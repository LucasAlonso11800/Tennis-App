import React, { useState, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from '../context/GlobalState';

function Article({ article }) {
    const [userId, setUserId] = useContext(GlobalContext);
    const [saved, setSaved] = useState(false)

    function saveArticle() {
        if (saved) {
            axios.post('http://localhost:5000/news/delete', {
                url: article.url,
                userId: userId
            })
                .then(res => {
                    console.log(res.data);
                    setSaved(!saved);
                })
                .catch(err => console.log(err))
        };

        axios.post('http://localhost:5000/news/add', {
            title: article.title,
            urlToImage: article.urlToImage,
            description: article.description,
            url: article.url,
            userId: userId
        })
            .then(res => {
                console.log(res.data);
                setSaved(!saved);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="mt-4 col-5 article-container">
            <div className="card bg-transparent border-0">
                <div className="card-body">
                    <h4 className="text-center">{article.title}</h4>
                    <div className="row">
                        <div className="col-sm-12 col-md-4 article-img" style={{ backgroundImage: `url(${article.urlToImage})` }}></div>
                        <div className="col-sm-12 col-md-8">
                            <p>{article.description}</p>
                        </div>
                        <div className="d-flex justify-content-around mt-4 w-100">
                            <a href={article.url} className="btn btn-primary">Read More</a>
                            <button
                                type="button"
                                className={saved ? 'btn btn-success' : 'btn btn-primary'}
                                onClick={saveArticle}>
                                {saved ? 'Article saved' : 'Save Article'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article
