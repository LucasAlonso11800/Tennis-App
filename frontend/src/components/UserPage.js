import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import SavedArticle from './SavedArticle';
import { GlobalContext } from '../context/GlobalState';

function UserPage() {
    const [isLoading, setIsLoading] = useState(true)

    const [userId, setUserdId] = useContext(GlobalContext);
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.post('https://tennis-world-app.herokuapp.com/news/get-news', {
            id: userId
        })
            .then(res => {
                setIsLoading(false)
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
                isLoading ?
                    <div className="d-flex justify-content-center mt-4 mx-auto">
                        <h4 className="text-center text-white mt-4">Loading news...</h4>
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
