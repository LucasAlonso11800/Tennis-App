import React from 'react';
import axios from 'axios';

function Article({ article }) {
    function saveArticle() {
        axios.post('http://localhost:5000/news/add', {
            title: article.title,
            urlToImage: article.urlToImage,
            description: article.description,
            url: article.url,
            // userId: req.body.userId
        })
            .then(res => {
                console.log(res);
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
                            <button type="button" className="btn btn-primary" onClick={saveArticle}>Save Article</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article
