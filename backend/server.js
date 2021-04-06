const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose')
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const MongoStore = require('connect-mongo');

require('dotenv').config();
require('./config/passport');

const userRoute = require('./routes/users')
const newsRoute = require('./routes/news');

const app = express()

// DATABASE

const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('Connected to Mongo'))

// SETTINGS

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    credentials: true
}));

// SESSION

const sessionStore = new MongoStore({
    mongoUrl: MONGO_URI,
    collectionName: 'sessions',
});

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));

app.use(passport.initialize());
app.use(passport.session());

// API KEYS

const NEWS_API_KEY = process.env.NEWS_API_KEY
const TENNIS_API_KEY = process.env.TENNIS_API_KEY

// NEWS API
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

// TENNIS API
app.post('/ranking', (req, res) => {
    const tour = req.body.tour;

    const options = {
        method: 'GET',
        url: `https://tennis-live-data.p.rapidapi.com/rankings/${tour}`,
        headers: {
            'x-rapidapi-key': TENNIS_API_KEY,
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
            'x-rapidapi-key': TENNIS_API_KEY,
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
            'x-rapidapi-key': TENNIS_API_KEY,
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
            'x-rapidapi-key': TENNIS_API_KEY,
            'x-rapidapi-host': 'tennis-live-data.p.rapidapi.com'
        }
    };
    axios.request(options)
        .then(data => {
            res.json(data.data);
        })
        .catch(err => console.log(err))

});

app.use('/users', userRoute);
app.use('/news', newsRoute);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});