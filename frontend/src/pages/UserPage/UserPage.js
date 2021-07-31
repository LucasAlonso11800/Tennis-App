import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from '../../context/GlobalState';
import { API_URL } from '../../url';
import { BackgroundContainer } from '../../globalStyles';
import Background from '../../assets/backgrounds/Balls.jpg';

import { Articles, WarningCard } from '../../components/index';

function UserPage() {
    const { userData } = useContext(GlobalContext);
    const [news, setNews] = useState([]);

    useEffect(() => {
        if(userData){
            (async () => {
                try {
                    const data = await (await axios.post(`${API_URL}/news/get-news`, { id: userData.userId })).data
                    setNews(data)
                }
                catch (err) {
                    console.log(err)
                }
            })()
        }
    }, [userData])

    return (
        <BackgroundContainer background={Background}>
            {userData ? <Articles news={news} isSaved={true} /> : <WarningCard />}
        </BackgroundContainer>
    )
};

export default UserPage;