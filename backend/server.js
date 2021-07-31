const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose')
const cors = require('cors');

require('dotenv').config();

const userRoute = require('./routes/users')
const newsRoute = require('./routes/news');

const app = express();

// DATABASE

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('Connected to Mongo'));

// SETTINGS

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

// API KEYS

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const TENNIS_API_KEY = process.env.TENNIS_API_KEY;

// NEWS API
app.post('/news', async (req, res) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${req.body.query}&en&apiKey=${NEWS_API_KEY}`)
        res.json(response.data)
    }
    catch (err) {
        throw new Error(err)
    }
});

// TENNIS API
app.post('/ranking', async (req, res) => {
    try {
        const response = await axios.get(`https://tennis-live-data.p.rapidapi.com/rankings/${req.body.tour}`, {
            headers: {
                'x-rapidapi-key': TENNIS_API_KEY,
                'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
            }
        });
        res.json(response.data)
    }
    catch (err) {
        throw new Error(err)
    }
});

app.post('/race-to-london', async (req, res) => {
    try {
        const response = await axios.get(`https://tennis-live-data.p.rapidapi.com/rankings/race/${req.body.tour}`, {
            headers: {
                'x-rapidapi-key': TENNIS_API_KEY,
                'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
            }
        });
        res.json(response.data)
    }
    catch (err) {
        throw new Error(err)
    }
});

app.post('/season', async (req, res) => {
    try {
        const response = await axios.get(`https://tennis-live-data.p.rapidapi.com/tournaments/${req.body.tour}/${new Date().getFullYear()}`, {
            headers: {
                'x-rapidapi-key': TENNIS_API_KEY,
                'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
            }
        });
        res.json(response.data)
    }
    catch (err) {
        throw new Error(err)
    }
});

app.post('/current-tournaments', async (req, res) => {
    const date = new Date().toISOString().substr(0, 10)
    try {
        const response = await axios.get(`https://tennis-live-data.p.rapidapi.com/matches-by-date/${date}`, {
            headers: {
                'x-rapidapi-key': TENNIS_API_KEY,
                'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
            }
        });
        res.json(response.data)
    }
    catch (err) {
        throw new Error(err)
    }
});

// ROUTES

app.use('/users', userRoute);
app.use('/news', newsRoute);

//LISTEN

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});