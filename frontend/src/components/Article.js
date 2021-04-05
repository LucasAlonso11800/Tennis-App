import React, { useState, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from '../context/GlobalState';

function Article({ article }) {
    const userId = useContext(GlobalContext);
    const [saved, setSaved] = useState(false);
    const [loggedIn, setLoggedIn] = useState(true)

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
            return
        }
        else {
            axios.post('http://localhost:5000/news/add', {
                title: article.title,
                urlToImage: article.urlToImage,
                description: article.description,
                url: article.url,
                userId: userId
            })
                .then(res => {
                    setSaved(!saved);
                })
                .catch(err => {
                    if (err) {
                        setLoggedIn(!loggedIn)
                    }
                })
        }
    }

    return (
        <div className="mt-4 col-sm-10 col-md-5 article-container">
            <div className="card bg-transparent border-0">
                <div className="card-body">
                    <h4 className="text-center">{article.title}</h4>
                    <div className="row">
                        <div className="col-sm-12 col-md-4 article-img mb-4" style={{ backgroundImage: `url(${article.urlToImage})` }}></div>
                        <div className="col-sm-12 col-md-8">
                            <p>{article.description}</p>
                        </div>
                        <div className="d-flex justify-content-around mt-4 w-100">
                            <a href={article.url} target="_BLANK" rel="noreferrer" className="btn btn-primary">Read More</a>
                            <div className="position-relative">
                                <button
                                    type="button"
                                    className={!loggedIn ? 'btn btn-warning' :
                                        saved ? 'btn btn-success w-100' : 'btn btn-primary w-100'}
                                    onClick={saveArticle}
                                >
                                    {!loggedIn ? 'Be sure to log in to save articles' :
                                        saved ? 'Article saved' : 'Save Article'
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article
