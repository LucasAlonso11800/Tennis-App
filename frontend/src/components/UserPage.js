import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import SavedArticle from './SavedArticle';
import { GlobalContext } from '../context/GlobalState';

function UserPage() {
    const userId = useContext(GlobalContext);
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:5000/news/get-news', {
            id: userId
        })
            .then(res => {
                setNews(res.data)
            })
            .catch(err => console.log(err))
    }, [userId])

    return (
        <div className="user-page-container container-fluid">
            {userId === '' ?
                <div className="row ml-2">
                    <div className="col-sm-8 col-md-4 ml-auto">
                        <div className="card  mt-4">
                            <div className="card-body">
                                <p>Please log in in order to save your favourite news.<br />
                                In case you don't have yet an account you can sign up for free.
                                </p>
                                <div className="d-flex justify-content-around">
                                    <a href="/signin" className="btn btn-primary">Log in</a>
                                    <a href="/signup" className="btn btn-primary">Sign up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="row d-flex justify-content-around">
                    {news.map(article => {
                        return <SavedArticle article={article} key={article.url} />
                    })}
                </div>
            }

        </div>
    )
}

export default UserPage
