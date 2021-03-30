const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

const NEWS_API_KEY = process.env.NEWS_API_KEY
const RANKING_TENNIS_KEY = process.env.RANKING_TENNIS_KEY
const SEASON_TENNIS_KEY = process.env_SEASON_TENNIS_KEY

app.post('/news', (req, res) => {
    const query = req.body.query
    const url = `https://newsapi.org/v2/everything?q=${query}&en&apiKey=${NEWS_API_KEY}`;

    axios({
        method: 'GET',
        url: url,
        responseType: 'application/json'
    })
        .then(data => {
            res.json(data.data);
        })
        .catch(err => console.log(err))
})

app.post('/ranking', (req, res) => {
    const tour = req.body.tour;

    const options = {
        method: 'GET',
        url: `https://tennis-live-data.p.rapidapi.com/rankings/${tour}`,
        headers: {
            'x-rapidapi-key': RANKING_TENNIS_KEY,
            'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
        }
    };
    axios.request(options)
        .then(data => {
            res.json(data.data);
        })
        .catch(err => console.log(err))
});

app.post('/london-ranking', (req, res) => {
    const tour = req.body.tour;

    const options = {
        method: 'GET',
        url: `https://tennis-live-data.p.rapidapi.com/rankings/race/${tour}`,
        headers: {
            'x-rapidapi-key': RANKING_TENNIS_KEY,
            'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
        }
    };
    axios.request(options)
        .then(data => {
            res.json(data.data);
        })
        .catch(err => console.log(err))
});

app.post('/season-calendar', (req, res) => {
    const tour = req.body.tour
    const options = {
        method: 'GET',
        url: `https://tennis-live-data.p.rapidapi.com/tournaments/${tour}/2021`,
        headers: {
            'x-rapidapi-key': SEASON_TENNIS_KEY,
            'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
        }
    };
    axios.request(options)
        .then(data => {
            res.json(data.data);
        })
        .catch(err => console.log(err))
});

app.post('/current-tournament', (req, res) => {
    const date = new Date
    const options = {
        method: 'GET',
        url: `https://tennis-live-data.p.rapidapi.com/matches-by-date/${date.toISOString().substr(0, 10)}`,
        headers: {
            'x-rapidapi-key': SEASON_TENNIS_KEY,
            'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
        }
    };
    axios.request(options)
        .then(data => {
            res.json(data.data);
        })
        .catch(err => console.log(err))

});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});