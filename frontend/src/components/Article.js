import React from 'react'

function Article({ article }) {
    return (
        <div className="mt-4 col-5 article-container">
            <div className="card bg-transparent border-0">
                <div className="card-body">
                    <h4 className="text-center">{article.title}</h4>
                    <div className="row">
                        <div className="col-sm-12 col-md-4 article-img" style={{backgroundImage: `url(${article.urlToImage})`}}>
                            {/* <img src={article.urlToImage} /> */}
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <p>{article.description}</p>
                        </div>
                        <a href={article.url} className="btn btn-primary w-100 mt-4">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article
