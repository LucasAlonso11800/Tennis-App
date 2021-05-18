import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from '../../context/GlobalState';

import { BackgroundContainer } from '../../globalStyles';
import Background from '../../assets/backgrounds/Balls.jpg';

import { Articles, WarningCard } from '../../components/index';

function UserPage() {
    const [userId, setUserdId] = useContext(GlobalContext);
    const [news, setNews] = useState([]);

    const isLoggedIn = userId !== '';

    useEffect(() => {
        axios.post('https://tennis-world-app.herokuapp.com/news/get-news', { id: userId })
            .then(res => setNews(res.data))
            .catch(err => console.log(err))
    }, [userId])

    return (
        <BackgroundContainer background={Background}>
            {isLoggedIn ? <Articles news={news} isSaved={true} /> : <WarningCard />}
        </BackgroundContainer>
    )
};

export default UserPage;