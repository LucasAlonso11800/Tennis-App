import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Article from './Article';
import { GlobalContext } from '../context/GlobalState';

function UserPage() {
    const [userId, setUserId] = useContext(GlobalContext);
    const [news, setNews] = useState([])
    
    useEffect(() => {
        axios.post('http://localhost:5000/news/get-news', {
            id: userId
        })
            .then(res => {
                setNews(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="user-page-container">
            <div className="row d-flex justify-content-around">
                {news.map(article => {
                    return <Article article={article} key={article.url}/>
                })}
            </div>
        </div>
    )
}

export default UserPage
